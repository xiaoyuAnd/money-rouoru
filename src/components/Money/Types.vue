<template>
  <div>
    <ul class="types">
      <li
          :class ="{selected:type === '-', [classPrefix + '-item'] : classPrefix}"
          @click="selectType('-')">支出</li>
      <li
          :class ="{selected:type === '+', [classPrefix + '-item'] : classPrefix}"
          @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop, Watch} from 'vue-property-decorator'

@Component
export default class Types extends Vue {
  type='-';
  @Prop(String) classPrefix? :string
  selectType(type:string){
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
     this.type = type
     this.$emit('updateType',this.type)
  }
  @Watch('type', { immediate: true, deep: true })
  onTypeChanged(){
    this.$emit('update:value',this.type)
  }


}
// export default {
//   name: 'Types',
//   data(){
//     return{
//       type:'-'
//     }
//   },
//   methods:{
//     selectType(e){
//       this.type = e
//     }
//   }

//};
</script>

<style lang="scss" scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}

</style>