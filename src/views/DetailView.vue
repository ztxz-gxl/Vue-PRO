<template>
<div>
  <!-- 头部栏 -->
  <!-- 头部栏 -->
  <header class="clearfix">
    <!-- 头部文字 -->
    <div class="header">
      <div class="container">
        <p>您好，欢迎来到疯游精旅游网！
        </p>
        <ul>
          <li>
            <a href="javascript:void(0);" @click="out">退出登录</a>
          </li>
          <!--            <li>-->
          <!--              <a href="#">我的疯游</a>-->
          <!--            </li>-->
          <li>
            <a href="http://localhost:9090">客户服务</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 头部栏下半部 -->
    <div class="header-down container">
      <img src="img/header-img_03.gif"/>
      <div class="phone">
        <img src="img/phone_06.gif"/>
        <p>客户服务热线</p><br/>
        <i><span>0571-</span>87166902</i>
      </div>

    </div>
  </header>
  <!-- 导航模块大图 -->
  <div  >
    <div class="nav">
      <div class="container">
        <ul style="margin-left: 390px;">
          <li>
            <router-link :to="{name:'MainView'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{name:'ArandView'}">酒店</router-link>
          </li>
          <li>
            <router-link :to="{name:'LandView'}">选择2</router-link>
          </li>
          <li>
            <router-link :to="{name:'WeaView'}">天气</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="banner" >
      <div class="container">
        <div class="banner-form">
          <p style="font-size: 4em;font-family: cursive;color: #056850;">来一场说走就走的旅行吧</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 主体区域 -->
  <div class="main" style="font-size: 13px">
    <div class="w">
      <!-- 产品介绍模块 -->
      <div class="product-intro clearfix">
        <div class="preview-wrap fl">
          <!-- 放大镜图片模块 -->
          <div class="preview-img">
            <img src="/img/jd.jpg" alt="" style="height: 398px;">
            <!-- mask黄色遮罩层 -->
            <div class="mask"></div>
            <div class="big">
              <img src="" alt="">
            </div>
          </div>

        </div>
        <div class="itemInfo-wrap fr">
          <!-- 头部的标题 -->
          <div class="sku-name"> {{ list[0].name }}</div>
          <div class="news">{{ list[0].introduce }}</div>
          <!-- 摘要是一个大盒子包含里面的 -->
          <div class="summary">
            <!-- 价格区 -->
            <div class="summary-price clearfix">
              <div class="dt">价&nbsp;&nbsp;&nbsp;&nbsp;格</div>
              <div class="dd">
                <em>¥{{ min }} - {{ max }}</em>   <i>降价通知</i>
              </div>
              <div class="remark">累计评价612188</div>
            </div>

            <div class="summary-support clearfix">
              <div class="dt">提&nbsp;&nbsp;&nbsp;&nbsp;供</div>
              <div class="dd">
                酒店自选早餐，免费客房服务，免费高网速WiFi
              </div>
            </div>

            <div class="choose">
              <div class="choose-item clearfix">
                <div class="dt item-color">选择房间</div>
                <div class="dd">
                  <template v-for="(i,index) in list[1]" :key="index">
                    <a href="#" :class="[clickNum === i.id ? 'choose-color current' : 'choose-color']" @click="choose(i.id)">{{ i.name }}</a>
                  </template>
                </div>
              </div>
              <div class="choose-item clearfix">
                <div class="dt item-color">入住时间</div>
                <div class="dd" style="margin-top: 10px;">
                  <input type="date" name="startTime" id="startTime"> - <input type="date" name="endTime" id="endTime">
                </div>
              </div>
              <div class="choose-item clearfix">
                <div class="dt item-color">入住信息</div>
                <div class="dd" style="margin-top: 10px;">
                  入住人数:<input type="text" name="numP" id="numP">
                  电话:<input type="tel" name="phone" id="phone">
                </div>
              </div>
              <!-- 按钮选择 -->
              <div class="choose-btns">
<!--                <div class="choose-amount">-->
<!--                  <input class="choose-number" type="text" value="1">-->
<!--                  <a href="javascript:void(0);" class="add">+</a>-->
<!--                  <a href="javascript:void(0);" class="reduce disabled">-</a>-->
<!--                </div>-->
                <a href="javascript:void(0);" @click="DG" class="addshopcar">订购</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- 整个底部盒子start -->
  <!--合作商家-->
  <div class="template container cooperative">
    <div class="template-head cooperative-head">
      <p>合作商家</p>
      <span>为您提供更多旅途服务</span>
      <div>
        <a href="#">更多商家 > </a>
      </div>
    </div>
    <div class="template-body cooperative-body">
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </div>
  </div>

  <!-- 底部栏 -->
  <footer>
    <div class="foot-top">
      <div class="container" style="width: 1450px;">
        <div>
          <dl>
            <dt>如何付款和发票</dt>
            <dd>
              <a href="#">支付宝网银支付</a>
            </dd>
            <dd>
              <a href="#">信用卡电话支付</a>
            </dd>
            <dd>
              <a href="#">门店支付或银行汇款</a>
            </dd>
            <dd>
              <a href="#">货币抵用和发票</a>
            </dd>
          </dl>
        </div>
        <hr class="hr"/>
        <div>
          <dl>
            <dt>出境游和港澳游常识</dt>
            <dd>
              <a href="#">如何办理护照</a>
            </dd>
            <dd>
              <a href="#">如何办理旅游签证</a>
            </dd>
            <dd>
              <a href="#">如何办理港澳通行证</a>
            </dd>
            <dd>
              <a href="#">如何办理台湾旅游签证</a>
            </dd>
          </dl>
        </div>
        <hr class="hr"/>
        <div>
          <dl>
            <dt>预定旅游产品的问题</dt>
            <dd>
              <a href="#">旅游产品名词解释</a>
            </dd>
            <dd>
              <a href="#">如何看懂旅游产品价格</a>
            </dd>
            <dd>
              <a href="#">如何购买旅游意外保险</a>
            </dd>
          </dl>
        </div>
        <hr class="hr"/>
        <div>
          <dl>
            <dt>如何签订旅游合同</dt>
            <dd>
              <a href="#">传真/邮件签署合同</a>
            </dd>
          </dl>
        </div>
        <hr class="hr"/>
        <div>
          <dl>
            <dt>会员注册登录方式</dt>
            <dd>
              <a href="#">如何使用游币</a>
            </dd>
            <dd>
              <a href="#">疯游网会刊</a>
            </dd>
            <dd>
              <a href="#">会员优惠</a>
            </dd>
          </dl>
        </div>
        <hr class="hr"/>
        <div>
          <dl>
            <dt>如何付款和发票</dt>
            <dd>
              <a href="#"></a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="foot-bottom container" style="width: 1450px; ">
      <p>Copyright © 2015 www.fengyoujing.net 杭州欢游旅行社有限公司 浙ICP备14032025号-1 浙ICP证B2-20140054
        旅游许可证：L-ZJ02458</p>
      <div class="clearfix">
        <ul>
          <li>
            <a href="#"></a>上海旅游协会在线分会
          </li>
          <li>
            <a href="#"></a>网站备案
          </li>
          <li>
            <a href="#"></a>网络110
          </li>
          <li>
            <a href="#"></a>支付宝特约商家
          </li>
          <li>
            <a href="#"></a>AAA级信用企业
          </li>
          <li>
            <a href="#"></a>上海工商
          </li>
          <li>
            <a href="#"></a>可信网站
          </li>
          <li>
            <a href="#"></a>诚信认证
          </li>
          <li>
            <a href="#"></a>网络社会征信网
          </li>
          <li>
            <a href="#"></a>360网站安全检测
          </li>
        </ul>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import {DCSS} from "@/map";
import axios from "axios";

export default {
  mounted() {
    let parse = JSON.parse(localStorage.getItem('headers'));
    if (parse === undefined || parse === null){
      alert("未登录")
      this.$router.push('/LoginView');
    }
    for (const i of DCSS) {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = i;
      document.body.appendChild(css)
    }
    axios.get("/api/hc/roomID/"+this.id).then(res => {
      this.list[0] = res.data.data[0]
      this.list[1] = res.data.data[1]
      for (let i of this.list[1]) {
        if (i.price > this.max){
          this.max = i.price
        }
        if (this.min > i.price ){
          this.min = i.price
        }
      }
    })

  },
  data(){
    console.log(this.$route.query.id)
    return{
      clickNum:999,
      FID:0,
      id : this.$route.query.id,
      list:[{},[]],
      max:0,
      min:9999999,
    }
  },
  methods:{
    choose(e){
      this.FID = e;
      this.clickNum = e;
    },
    DG(){
      let startTime = document.getElementById("startTime").value;
      let endTime = document.getElementById("endTime").value;
      let num = document.getElementById("numP").value;
      let phone = document.getElementById("phone").value;

      axios.post("/api/hc/addRoom/",{"startTime":startTime,"endTime":endTime,"num":num,"phone":phone,"roomID":this.clickNum}).then(res => {
        if (res.status === 200){
          alert("预定成功")
          this.$router.push('/ArandView');
        }else {
          alert("预定失败")
        }
      })
    },
    out(){
      localStorage.removeItem('headers');
      this.$router.push('/LoginView');
    }
  }
}
</script>

<style scoped>

</style>
