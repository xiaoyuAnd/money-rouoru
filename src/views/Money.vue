<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount"/>
    <Types m="money" @update:value="onUpdateType"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :dataSource.sync="tags" @update:value="onUpdateTags"/>
    {{record}}
  </Layout>
</template>

<script >
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';

export default {
  name: 'Money',
  data(){
    return{
      tags:['衣','食','住','行'],
      record:{
        tags:[],
        notes:'',
        type:'-',
        amount:0
      }
    }
  },
  methods:{
    onUpdateTags(value){
      this.record.tags = value
    },
    onUpdateNotes(value){
      this.record.notes = value
    },
    onUpdateType(value){
      this.record.type = value
    },
    onUpdateAmount(value){
      this.record.amount = parseFloat(value)
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

