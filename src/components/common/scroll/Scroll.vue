/*
 * @Author: huangzibin
 * @Date: 2020-02-27 22:44:55
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-02-27 22:47:14
 */

<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        
      })
    }
  }
</script>

<style scoped>

</style>
