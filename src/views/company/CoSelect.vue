/*
 * @Author: huangzibin
 * @Date: 2020-03-15 22:12:25
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-03-15 22:12:28
 */

<template>
  <div class="info">
   
    <nav-bar class="home-nav">
      <div slot="left" @click="cancelClick">
         <span class="cancel">取消</span>
      </div>
      <div slot="center">
          广州市金稻食品有限公司
      </div>
      <div slot="right">
          <span class="true">确定</span>
      </div>
    </nav-bar>
   
    <van-search
      v-model="value"
      shape="round"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      background="#fff"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    
    <scroll class="content">
      <van-cell v-for="(item,index) in coInfo" :key="index">
        <div>
        <span class="title">企业名称:</span>
        <span class="text">{{item.coname}}</span>
        </div>
        <div>
        <span class="title">企业账号:</span>
        <span class="text">{{item.coid}}</span>
        </div>
        <div>
        <span class="title">所属辖区:</span>
        <span class="text">{{item.coarea}}</span>
        </div>
      </van-cell>
    </scroll>

  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem, Search, Cell, CellGroup, Area } from "vant";
import areaData from "common/area.js"
import coInfoData from "network/coinfo.js"
import Scroll from "components/common/scroll/Scroll";
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "CoInfo",
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Area.name]: Area,
    [Button.name]: Button,
    Scroll,
    NavBar
  },
  data() {
    return {
      value: "",
      areaList: areaData,
      coInfo: coInfoData.coinfo
    };
  },
  methods: {
    onSearch() {
      console.log("11");
    },
    cancelClick() {
      this.$router.back()
    }
  }
};
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
.top .van-cell {
  text-align: center;
  font-size: 20px;
  height: 63px;
}
.top .van-cell i {
  font-size: 22px;
  text-align: right;
  margin-left: 40px;
  margin-right: -45px;
  /* padding-right: 0px;
  padding-left: 20px; */
}

.content {
  z-index: 99;
  margin-top: 55px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 63px;
  left: 0;
  right: 0;
  bottom: 0;
}
.content .text {
  margin-left: 10px;
}

.van-search {
   margin-top: 5px;
}

.home-nav .cancel {
  line-height: 54px;
  color: rgb(255, 59, 59);
  font-size: 14px;
}
.home-nav .true {
  line-height: 54px;
  color: #1989FA;
  font-size: 14px;
}
.home-nav {
  height: 50px;
}
</style>
