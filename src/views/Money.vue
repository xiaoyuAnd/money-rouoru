<template>
  <Layout class-prefix="layout">
<!--    {{ recordList}}-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types m="money" @update:value="onUpdateType"/>
    <Notes @update:value="onUpdateNotes" fieldName="备注" placeholder="请输入备注"/>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
<!--    {{ record }}-->
  </Layout>
</template>

<script>
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import {recordListModel} from '@/models/recordListModel'

// const recordList11 = JSON.parse(window.localStorage.getItem('recordList'))
const recordList11 = recordListModel.fetch()

export default {
  name: 'Money',
  data() {
    return {
      tags: ['衣', '食', '住', '行'],
      record: {
        tags: [],
        notes: '',
        type: '-',
        amount: 0,
        createAt:new Date()
      },
      recordList:recordList11
    }
  },

  methods: {
    onUpdateTags(value) {
      this.record.tags = value
    },
    onUpdateNotes(value) {
      this.record.notes = value
    },
    onUpdateType(value) {
      this.record.type = value
    },
    onUpdateAmount(value) {
      this.record.amount = parseFloat(value)
    },
    saveRecord() {
      // const record2 = JSON.parse(JSON.stringify(this.record));
      const record2 = recordListModel.clone(this.record)
      this.recordList.push(record2);
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    recordList: function () {
      console.log(typeof this.recordList)
      console.log(this.recordList)
      // window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
      recordListModel.save(this.recordList)
    }
  },
  components: {Tags, Notes, Types, NumberPad},

};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

