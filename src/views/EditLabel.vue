<template>
  <div>
    <Layout>
      <div class="navBar">
        <Icon class="leftIcon" name="left" @click="goBack"/>
        <span class="title">编辑标签</span>
        <span class="rightIcon"></span>
      </div>
      <div class="form-wrapper">
        <Notes @update:value="update" :value="currentTag.name" field-name="标签名" placeholder="请输入标签名"/>
      </div>
      <div class="button-wrapper">
        <Button @click="remove">删除标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script>
import Notes from '@/components/Money/Notes.vue';
// import {tagListModel} from "@/models/tagListModel";
import Button from "@/components/Money/Button";
import store from "@/store/index";

export default {
  name: "EditLabel",
  computed: {
    currentTag () {
      return this.$store.state.currentTag;
    }
  },

  created() {
    const id = this.$route.params.id;
    this.$store.commit('fetchTags');
    this.$store.commit('setCurrentTag', id);
    if (!this.currentTag) {
      this.$router.replace('/404');
    }
  },
  methods:{
    update(name) {
      if (this.currentTag) {
        this.$store.commit('updateTag', {
          id: this.currentTag.id, name
        });
      }
    },
    remove() {
      if (this.currentTag) {
        this.$store.commit('removeTag', this.currentTag.id);
      }
    },
    goBack() {
      this.$router.back();
    }
  },

  components: {Button, Notes},

}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > .title {
  }
  > .leftIcon {
    width: 24px;
    height: 24px;
  }
  > .rightIcon {
    width: 24px;
    height: 24px;
  }
}
.form-wrapper{
  background: white;
  margin-top: 8px;
}
.button-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}
</style>