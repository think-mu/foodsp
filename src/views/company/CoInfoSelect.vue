/*
 * @Author: huangzibin
 * @Date: 2020-03-15 22:12:13
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-03-15 22:12:18
 */
 
<template>
  <div class="info">
    <van-cell-group class="top">
      <van-cell title="广州市金稻食品有限公司" center icon="hotel-o"/>
    </van-cell-group>
    <van-search
      v-model="sValue"
      shape="round"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      background="#fff">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-cell-group>
      <van-cell
        title="地点选择"
        @click="openArea"
        icon="location-o"
        is-link
        v-model="value"
        title-class="location_title"
        style="text-align: left;"
        class="local"
      />
    </van-cell-group>
    <scroll class="content">
      <van-cell is-link  v-for="(item, index) in coInfo" :key="index">
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
    <van-popup v-model="show" position="bottom" :close-on-click-overlay="false">
      <van-area :area-list="areaList" value="440103" visible-item-count="5" item-height="42" @cancel="closePopup" @confirm="chooseArea" /> 
    </van-popup>
  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem, Search, Cell, CellGroup, Area, Popup } from "vant";
import areaData from "common/area.js"
import coInfoData from "network/coinfo.js"
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CoInfo",
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Area.name]: Area,
    [Popup.name]: Popup,
    Scroll,
  },
  data() {
    return {
      value: "",
      areaList: areaData,
      show: false,
      sValue:"",
      coInfo:coInfoData.coinfo
    };
  },
  created() {
    console.log(this.coInfo);
  },
  methods: {
    onSearch() {
      console.log("11");
    },
    openArea() {
      this.show = true
    },
    closePopup() {
      this.show = false
    },
    chooseArea(data) {
      this.show = false
      this.value = data[1].name + data[2].name;
      console.log(data)
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
  margin-top: 6px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 162px;
  left: 0;
  right: 0;
  bottom: 0;
}
.content .text {
  margin-left: 10px;
}
.content i {
  margin: auto 0;
}

.local {
  color: #969595;
}
</style>
