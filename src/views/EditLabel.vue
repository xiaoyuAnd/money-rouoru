<template>
  <div>
    <Layout>
      <Notes  fieldName="标签名" placeholder="请输入标签名"/>
    </Layout>
  </div>
</template>

<script>
import Notes from '@/components/Money/Notes.vue';
import {tagListModel} from "@/models/tagListModel";
import Tags from "@/components/Money/Tags";
import Types from "@/components/Money/Types";
import NumberPad from "@/components/Money/NumberPad";

export default {
  name: "EditLabel",
  created() {
    console.log(this.$route.params)
    const id = this.$route.params.id
    tagListModel.fetch()
    const tags = tagListModel.data;
    const tag = tags.filter(t => t.id === id)[0]
    if(tag){
      console.log(tag)
    }else{
      this.$router.replace('/404')
    }
  },
  components: {Notes},

}
</script>

<style scoped>

</style>