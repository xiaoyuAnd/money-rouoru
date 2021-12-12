<template>
  <div>
    <Layout>
      11
    </Layout>
  </div>
</template>

<script>
import {tagListModel} from "@/models/tagListModel";

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
  }
}
</script>

<style scoped>

</style>