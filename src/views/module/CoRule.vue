<template>
  <div class="rule">
    <van-cell title="食品安全管理架构" is-link icon="cluster-o"/>
    <van-cell title="体系认证证书" is-link icon="notes-o"/>
    <van-cell title="食品安全管理机构" is-link icon="wap-home-o"/>
    <van-collapse v-model="activeNames" >
      <van-collapse-item title="食品安全管理制度" class="step" name="1" icon="wap-home-o">
        <van-cell title="食品安全管理机构" />
        <van-cell title="食品安全自查制度" />
        <van-cell title="食品安全管理机构" />
      </van-collapse-item>
     
    </van-collapse>
  </div>
</template>

<script>
import { Button, Icon, Grid, GridItem, Cell, CellGroup, Collapse, CollapseItem} from "vant";
  export default {
    name: "CoRule",
    components: {
      [Cell.name]: Cell,
      [CellGroup.name]: CellGroup,
      [Icon.name]: Icon,
      [Collapse.name]: Collapse,
      [CollapseItem.name]: CollapseItem,
    },
    data() {
      return {
         activeNames: ['1']
      }
    },
  }
</script>

<style scoped>
.rule {
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.rule .van-cell {
  margin-bottom: 8px;
  height: 44px;
}
.rule .van-cell i {
  color: #4EA0F7;
  font-size: 20px;
  margin-right: 15px;
  /* line-height: 44px; */
}
.rule .van-cell .van-icon-arrow{
  color: #BBBBBB;
}
.step .van-cell {
  height: 40px;
  padding: 0px;
  height: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 30px;
  /* line-height: 44px; */
}
</style>
