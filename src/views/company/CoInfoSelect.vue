<template>
  <div class="info">
    <van-cell-group class="top">
      <van-cell title="广州市金稻食品有限公司" center icon="hotel-o"/>
    </van-cell-group>
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
    <van-area :area-list="areaList" value="110101" visible-item-count="3" item-height="30"/>
    <scroll class="content">
      <van-cell is-link>
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
      </van-cell>

      <van-cell is-link>
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
      </van-cell>

      <van-cell is-link>
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
      </van-cell>
       <van-cell is-link>
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
      </van-cell> 
       <van-cell is-link>
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
      </van-cell> 
    </scroll>

  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem, Search, Cell, CellGroup, Area } from "vant";
import areaData from "common/area.js"
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "CoInfo",
  components: {
    [Search.name]: Search,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Area.name]: Area,
    Scroll,
  },
  data() {
    return {
      value: "",
      areaList: areaData
    };
  },
  methods: {
    onSearch() {
      console.log("11");
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
  margin-top: 108px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 168px;
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
</style>
