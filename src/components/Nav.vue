<template>
  <div>
    <div class="nav">
      <router-link to="/">记账</router-link>
      |
      <router-link to="/Labels">标签</router-link>
      |
      <router-link to="/Statistics">统计</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav'

}
</script>

<style lang="scss" scoped>
.nav{
  border: 1px solid red;
}

</style>