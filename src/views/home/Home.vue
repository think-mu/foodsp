/*
 * @Author: huangzibin
 * @Date: 2020-02-26 17:58:14
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-02-28 17:28:24
 */
<template>
  <div id="home">
    <div class="top">
      <nav-bar class="home-nav">
        <div slot="right">
          <van-icon name="contact" size="28" />
        </div>
      </nav-bar>
      <div class="company-top">
        <span>广州市金稻食品有限公司</span>
      </div>
      <div class="company-mid">
        <van-button
          color="#4EA0F7"
          icon="search"
          class="btn-selete"
          style="border-right:1.5px solid #fff;"
        >企业选择</van-button>
        <van-button color="#4EA0F7" icon="description">企业信息</van-button>
      </div>
    </div>

    <div class="company-bottom">
      <span>企业档案</span>
    </div>
    <scroll class="content">
      <van-grid square :clickable="true" :border="false" >
        <van-grid-item
          v-for="(item,index) in procData"
          :key="index"
          :icon="item.procIcon"
          :text="item.procName"
          url="https://www.baidu.com"
          class="process"
         
        />
      </van-grid>
    </scroll>
  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem } from "vant"; //由main.js 引入注册
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "Home",
  components: {
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    NavBar,
    Scroll,
    
  },
  data() {
    return {
      procData:[
        {
          "procName": "企业基本信息",
          "procIcon": "photo-o",
        },{
          "procName": "企业制度",
          "procIcon": "photo-o",
        },{
          "procName": "许可产品信息",
          "procIcon": "photo-o",
        },{
          "procName": "产品信息",
          "procIcon": "photo-o",
        },{
          "procName": "物料清单",
          "procIcon": "photo-o",
        },{
          "procName": "供应商信息",
          "procIcon": "photo-o",
        },{
          "procName": "供应物料信息",
          "procIcon": "photo-o",
        },{
          "procName": "原料入库信息",
          "procIcon": "photo-o",
        },{
          "procName": "原料出库信息",
          "procIcon": "photo-o",
        },{
          "procName": "生产任务信息",
          "procIcon": "photo-o",
        },{
          "procName": "检验报告",
          "procIcon": "photo-o",
        },{
          "procName": "产品流向信息",
          "procIcon": "photo-o",
        },{
          "procName": "产品留样信息",
          "procIcon": "photo-o",
        },{
          "procName": "退换货信息表",
          "procIcon": "photo-o",
        },{
          "procName": "抽样检验记录",
          "procIcon": "photo-o",
        },{
          "procName": "监督检查记录",
          "procIcon": "photo-o",
        },{
          "procName": "行政处罚记录",
          "procIcon": "photo-o",
        },{
          "procName": "投诉举报",
          "procIcon": "photo-o",
        },{
          "procName": "企业风险评级",
          "procIcon": "photo-o",
        },{
          "procName": "安全管理员",
          "procIcon": "photo-o",
        },{
          "procName": "从业管理员",
          "procIcon": "photo-o",
        }
      ]
    };
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.top {
  position: relative;
  width: 100%;
  background-color: #4ea0f7;
  height: 168px;
  display: flex;
  flex-direction: column;
}
.home-nav {
  color: #fff;
}
.company-top {
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 43px;
  align-self: center;
  background: rgba(180, 214, 247, 0.6);
  border-radius: 5px;
  width: 345px;
  height: 43px;
  letter-spacing: 1px;
}
.company-mid {
  display: flex;
  flex-direction: row;
  width: 345px;
  align-self: center;
}
.company-mid .van-button {
  margin: 0 auto;
  text-align: center;
  flex: 1;
  margin-top: 8px;
  height: 40px;
  font-size: 16px;
}

.company-bottom {
  z-index: 9;
  text-align: center;
  color: #42485a;
  font-weight: bold;
  font-size: 18px;
  line-height: 43px;
  align-self: center;
  background: #fff;
  border-radius: 8px;
  width: 345px;
  height: 43px;
  letter-spacing: 8px;
  margin-top: -20px;
  box-shadow: 0 0 5px 1px rgba(223, 223, 223, 0.685);
}
/* 内容样式 */

.content {
  margin-top: 24px;
  /* height: 499px; */
  overflow: hidden;
  position: absolute;
  top: 168px;
  left: 0;
  right: 0;
  bottom: 0;
}
.process .van-grid-item__text{
  color: #4ea0f7;
  font-size: 10px;
}

</style>
