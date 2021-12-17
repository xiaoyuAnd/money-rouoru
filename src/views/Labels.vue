<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link class="tag" v-for="tag in tagList" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icon name="right"/>
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="createTag"
                @click="createTag">
          新建标签
        </Button>
      </div>
    </Layout>
  </div>
</template>

<script>
import Vue from 'vue';
import {tagListModel} from '@/models/tagListModel';
import Button from "@/components/Money/Button";
import store from "@/store/index";


// tagListModel.fetch();
// store.tagList()


export default {
  name: 'Labels',
  components: {Button},
  data() {
    return {
      // tags: store.tagList,
    }
  },
  computed: {
    tagList () {
      return this.$store.state.tagList
    }
  },
  beforeCreate() {
    this.$store.commit('fetchTags');
  },
  methods: {
    createTag() {
      const name = window.prompt('请输入标签名');
      if (!name) { return window.alert('标签名不能为空'); }
      console.log(name)
      this.$store.commit('createTag', name);
    }
  }

}

</script>


<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      width: 18px;
      height: 18px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}

</style>

