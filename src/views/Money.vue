<template>
  <Layout class-prefix="layout">
<!--    {{ recordList}}-->
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types m="money" @update:value="onUpdateType"/>
<!--    {{tagList}}-->
    <Notes @update:value="onUpdateNotes" fieldName="备注" placeholder="请输入备注"/>
    <Tags />
<!--    {{ record }}-->
  </Layout>
</template>

<script>
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
import store from "@/store/index";


export default {
  name: 'Money',
  data() {
    return {
      record: {tags: [], notes: '', type: '-', amount: 0}
    }
  },
  beforeCreate() {
    this.$store.commit('fetchTags');
  },
  computed: {
    tagList () {
      return this.$store.state.tagList
    },
    recordList() {
      return this.$store.state.recordList;
    }
  },
  methods: {
    // onUpdateTags(value) {
    //   this.record.tags = value
    // },
    onUpdateNotes(value) {
      this.record.notes = value;
    },
    onUpdateType(value) {
      this.record.type = value
    },
    onUpdateAmount(value) {
      this.record.amount = parseFloat(value)
    },
    saveRecord() {
      this.$store.commit('createRecord', this.record);
    }
  },
  // watch: {
  //   // 如果 `question` 发生改变，这个函数就会运行
  //   recordList: function () {
  //     console.log(typeof this.recordList)
  //     console.log(this.recordList)
  //     // window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
  //     recordListModel.save()
  //   }
  // },
  components: {Tags, Notes, Types, NumberPad},

};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

