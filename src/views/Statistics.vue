<template>
  <div>
    <Layout>
      <Types classPrefix='xxx' v-on:updateType="change"/>
<!--      <Tabs :dataSource="array" classPrefix='interval'/>-->
      <ol v-if="groupedList.length > 0">
        <li v-for="(group, index) in groupedList" :key="index">
          <h3 class="title">{{ beautify(group.title) }} <span>￥{{ group.total }}</span></h3>
          <ol>
            <li v-for="item in group.items" :key="item.id"
                class="record"
            >
              <span>{{ tagString(item.tags) }}</span>
              <span class="notes">{{ item.notes }}</span>
              <span>￥{{ item.amount }} </span>
            </li>
          </ol>
        </li>
      </ol>
      <div v-else class="nono">
        目前没有相关记录

      </div>
    </Layout>
  </div>
</template>

<script>
import Types from "@/components/Money/Types";
import Tabs from "@/components/Tabs";
import dayjs from "dayjs";

function clone(data) {
  return JSON.parse(JSON.stringify(data));

}

export default {
  name: 'labels',
  data() {
    return {
      type: '-',
      array: [
        {text: '按天', value: 'day'},
        {text: '按周', value: 'week'},
        {text: '按月', value: 'mouth'},
      ]
    }
  },
  components: { Types},
  computed: {
    recordList() {
      return (this.$store.state).recordList;
    },
    groupedList() {
      const {recordList} = this;
      if (recordList.length === 0) {
        return [];
      }
      const a = clone(recordList)
      // console.log(a[1]);
      // console.log(a[1].createdAt)
      const newList = clone(recordList)
          .filter(r => r.type === this.type)
          .sort((a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
      const result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
      for (let i = 1; i < newList.length; i++) {
        const current = newList[i];
        const last = result[result.length - 1];
        if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
          last.items.push(current);
        } else {
          result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
        }
      }
      result.map(group => {
        group.total = group.items.reduce((sum, item) => {
          // console.log(sum);
          // console.log(item);
          return sum + item.amount;
        }, 0);
      });
      return result;
    },

  },
  methods:{
    change:function (e){
      this.type = e
    },
    tagString(tags) {
      // console.log(tags[0].name)
      // console.log(tags.length)
      return tags.length === 0 ? '无' : tags.map(t=>t.name).join(',');
    },
    beautify(string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        console.log('hi');
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      } else if (day.isSame(now, 'year')) {
        return day.format('M月D日');
      } else {
        return day.format('YYYY年M月D日');
      }
    }
  },

  beforeCreate() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style lang="scss" scoped>
.nono{
  padding: 16px 0;
  text-align: center;
}

::v-deep .xxx-item {
  background-color: #c4c4c4;

  &.selected {
    background-color: #fff;


    &::after {
      display: none;
    }
  }
}

::v-deep .interval-item {
  height: 48px !important;
}
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title {
  @extend %item;
}
.record {
  background: white;
  @extend %item;
}
.notes {
  margin-right: auto;
  margin-left: 16px;
  color: #999;
}
</style>