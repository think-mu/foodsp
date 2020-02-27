/*
 * @Author: huangzibin
 * @Date: 2020-02-26 17:58:14
 * @Last Modified by: huangzibin
 * @Last Modified time: 2020-02-27 20:51:23
 */
<template>
  <div id="home">
    <div class="top">
      <nav-bar class="home-nav">
         <div slot="right">
           <van-icon name="contact" size="28"/>
         </div>
      </nav-bar>
      <div class="company-top">
        <span>广州市金稻食品有限公司</span>
      </div>
      <div class="company-mid">
        <van-button color="#4EA0F7" icon="search" class="btn-selete" style="border-right:1.5px solid #fff;">企业选择</van-button>
        <van-button color="#4EA0F7" icon="description" >企业信息</van-button>
      </div>
      <div class="company-bottom">
        <span>企业档案</span>
      </div>
    </div> 
    <div class="content">
      <div class="test">
        <ul>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
      </div>
    </div> 
  </div>
</template>

<script>
import { Button, Icon} from "vant"; //由main.js 引入注册
import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "Home",
    components: {
      [Button.name]: Button,
      [Icon.name]: Icon,
      NavBar
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped>
#home {
  position: relative;
  height: 100%;
}
.top {
  position: relative;
  width: 100%;
  background-color: #4EA0F7;
  height: 168px;
  display: flex;
  flex-direction:column;
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
  letter-spacing:1px;
}
.company-mid {
  display: flex;
  flex-direction:row;
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
  text-align: center;
  color: #42485A;
  font-weight: bold;
  font-size: 18px;
  line-height: 43px;
  align-self: center;
  background: #fff;
  border-radius: 8px;
  width: 345px;
  height: 43px;
  letter-spacing:8px;
  margin-top: 8px;
  box-shadow: 0 0 5px 1px rgba(223, 223, 223, 0.685);
}
/* 内容样式 */
.test {
  height: 529px;
}
.content {
  height: 499px;
  overflow: hidden;
  overflow-y: scroll;
  position: absolute;
  top: 168px;
  left: 0;
  right: 0;
  bottom: 0;
  
}
</style>
