/*
 * @Author: huangzibin
 * @Date: 2020-03-15 22:12:07
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-03-15 22:12:57
 */

<template>

  <div class="info">
    <van-cell class="co-name" center icon="hotel-o"  title="广州市金稻食品有限公司"/>
    <van-cell class="co-all">
      <div class="line-top"></div>
      <scroll class="content">
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div><div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
          <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
        <div>
          <span class="title">企业名称:</span>
          <span class="text">广州市金稻食品有限公司</span>
        </div>
        <div>
          <span class="title">企业账号:</span>
          <span class="text">B10258845</span>
        </div>
        <div>
          <span class="title">所属辖区:</span>
          <span class="text">广州市白云区</span>
        </div>
      </scroll>
      <div class="line-bottom"></div>

    </van-cell>
  </div>

</template>

<script>
import { Button, Icon, Grid, GridItem, Search, Cell, CellGroup, Area } from "vant";
import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "CoInfo",
    components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Cell.name]: Cell,
    Scroll
   
  },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
.info {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  z-index: 99;
}
.info .co-name {
  margin: 0 auto;
  text-align: center;
  font-size: 20px;
  color: #42485A;
  height: 64px;
  border-bottom: rgba(187, 187, 187, 0.301) solid 1px;
}
.info .co-name i {
  font-size: 24px;
  text-align: right;
  margin-left: 40px;
  margin-right: -45px;
  color: #000;
}

.content {
  z-index: 99;
  /* background-color: bisque; */
  margin-top: 0px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  bottom: 8px;
}
.content .text {
  margin-left: 20px;
}
.co-all {
  border-radius: 8px;
  border: #f8f8f8 solid 1px;
  box-shadow: 0 0 8px 1px rgba(223, 223, 223, 0.685);
  margin: 10px auto;
  width: 350px;
  padding: 20px 20px 20px 20px;
  /* height: 700px; */
   position: absolute;
  top: 74px;
  left: 0;
  right: 0;
  bottom: 10px;
}

.line-top {
  z-index: 99;
  border-bottom: #4ea0f7 dashed 2px;
}
.line-bottom {
  position: absolute;
  bottom: 1px;
  z-index: 99;
  width: 100%;
  border-top: #4ea0f7 dashed 2px;
}
</style>
