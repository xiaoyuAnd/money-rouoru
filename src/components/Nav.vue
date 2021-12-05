<template>
  <div>
    <div class="nav">
      <Icon name = 'm'/>
      <router-link to="/">记账</router-link>
      |
      <Icon name = 'l'/>
      <router-link to="/Labels">标签</router-link>
      <Icon name = 's'/>
      |
      <router-link to="/Statistics">统计</router-link>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'nav'

}
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.nav .router-link-active {
  display: flex;
  align-items: center;
}

</style>