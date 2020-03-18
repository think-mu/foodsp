/*
 * @Author: huangzibin
 * @Date: 2020-03-15 22:11:57
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-03-16 10:48:40
 */

<template>
  <div class="base">
    <van-cell center title="广州市金稻食品有限公司" 
      class="info"
      label="SC12444011102477" 
      icon="hotel-o" 
      title-class="info-title"/>
     <div class="detail">
       <div class="detail-top">
           <div class="line"></div>
           <span>企业基本信息</span>
       </div>
       <div class="detail-content">
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
              <span class="text">广州市荔湾区</span>
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
              <span class="text">广州市越秀区</span>
            </div>
          </scroll>
       </div>  
     </div> 
     <div class="table">
       <div class="table-top">
           <div class="line"></div>
           <span>历史监管信息</span>
       </div>
     </div>
  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem, Cell, CellGroup} from "vant"; //由main.js 引入注册
import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "BaseInfo",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      Scroll
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
.base {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.info {
  width: 100vw;
  margin: 0px auto;
  margin-top: 12px;
  border-radius: 8px;
  border:1px solid #BBBBBB;
}
.info i {
  color: #4EA0F7;
  font-size: 22px;
}
.info-title {
  color: #000;
  font-weight: 600;
  font-size: 16px;
  margin-left: 5px;
}
/* 企业信息 */
.detail {
  position: relative;
  margin: 12px 6px 0px 6px;
  height: 500px;
  border-radius: 8px;
  border:1px solid #BBBBBB;
  background-color: #ffffff;
}
.detail-top {
  height: 44px;
  border-bottom: 1px solid #BBBBBB;
  line-height: 44px;
  display: flex;
  align-items: center;
}

.line {
  margin-left: 10px;
  padding-left: 10px;
  z-index: 999;
  height: 25px;
  border-left: 2px solid #4EA0F7;
}

.content {
  z-index: 99;
  font-size: 14px;
  /* background-color: bisque; */
  margin-top: 44px;
  padding-left: 20px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  bottom: 8px;
  line-height: 20px;
}
.content .text {
  margin-left: 20px;
}
.content .title {
  color: #969595;
}

/* 表格信息 */
.table {
  position: relative;
  margin: 12px 6px;
  height: 400px;
  border-radius: 8px;
  border:1px solid #BBBBBB;
  background-color: #ffffff;
  
}
.table-top {
  height: 44px;
  border-bottom: 1px solid #BBBBBB;
  line-height: 44px;
  display: flex;
  align-items: center;
}

</style>
