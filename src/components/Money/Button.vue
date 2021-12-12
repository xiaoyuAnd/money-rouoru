<template>
  <button class="createTag" @click="$emit('click',$event)">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style lang="scss" scoped>
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>