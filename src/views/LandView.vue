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
    <div  style="margin-bottom: 45px;">
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
              <router-link :to="{name:'LandView'}">攻略</router-link>
            </li>
            <li>
              <router-link :to="{name:'WeaView'}">天气</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <div class="container">
          <div class="banner-form">
            <p style="font-size: 4em;font-family: cursive;color: #056850;">来一场说走就走的旅行吧</p>
          </div>
        </div>
      </div>
    </div>
  <!-- 景点门票 -->
    <!--主体部分-->
    <div id="mainsection">
      <div id="siderbarsection">
        <!--搜索框-->
        <div style="width: 1140px;text-align: center;">
          <form action="#" method="get" >
            <input type="text" style="height: 35px;" id="s" placeholder="标题搜索">
            <button type="button" @click="search" class="pagelink" style="height: 39px;margin-left: 15px;width: 70px;background-color: #0093d5;border: 0;">搜索</button>
          </form>
        </div>
      </div>
      <div id="articlesection">
        <div class="article"   v-for="(i,index) in list" :key="index">
          <div class="tagbox">
            <div class="datetag">{{ i.strategy.id }}</div>
            <div class="contenttag">{{ i.strategy.title }}</div>
          </div>
          <h2>{{ i.strategy.title }}</h2>
          <p>{{ i.strategy.introduction }}</p>
          <p class="timestamp">{{ i.userName }} 发表于 {{ i.strategy.time }}</p>
        </div>
        <div id="pagenumberbox">
          <ol id="pagenumber">
            <li><a href="javascript:void(0);" class="pagelink" @click="PageClick(1)">第一页</a></li>
            <li><a href="javascript:void(0);" class="pagelink" @click="PageClick('-')">前一页</a></li>
            <li><a href="javascript:void(0);" class="pagelink" @click="PageClick('+')">下一页</a></li>
            <li id="lastpage"><a href="javascript:void(0);" class="pagelink" @click="PageClick(9)">最后一页</a></li>
          </ol>
        </div>
      </div>


    </div>

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
// import axios from "axios";
import {MainCss} from "@/map";
import axios from "axios";

export default {
  mounted() {
    let parse = JSON.parse(localStorage.getItem('headers'));
    if (parse === undefined || parse === null){
      alert("未登录")
      this.$router.push('/LoginView');
    }
    for (const i of MainCss) {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = i;
      document.body.appendChild(css)
    }
    axios.get(`/api/sc/page/1`).then((res) => {
      this.list = res.data.data.data;
      this.pageNum = res.data.data.pageNum;
      this.pageAll = res.data.data.pageAll;
      this.total = res.data.data.total;
    });

  },
  data(){
    return{
      list:[],
      pageNum:0,
      pageAll:0,
      total:0,
    }
  },
  methods:{
    PageClick(e){
      if (e === 1){
        axios.get(`/api/sc/page/1`).then((res) => {
          this.list = res.data.data.data;
          this.pageNum = res.data.data.pageNum;
          this.pageAll = res.data.data.pageAll;
          this.total = res.data.data.total;
        });
      }else if (e === '-') {
        if (this.pageNum - 1 === 0){
          location.reload()
        }else {
          axios.get(`/api/sc/page/`+ (this.pageNum - 1)).then((res) => {
            this.list = res.data.data.data;
            this.pageNum = res.data.data.pageNum;
            this.pageAll = res.data.data.pageAll;
            this.total = res.data.data.total;
          });
        }
      }else if (e === '+') {
        if (this.pageNum === this.pageAll){
          location.reload()
        }else {
          axios.get(`/api/sc/page/`+ (this.pageNum + 1)).then((res) => {
            this.list = res.data.data.data;
            this.pageNum = res.data.data.pageNum;
            this.pageAll = res.data.data.pageAll;
            this.total = res.data.data.total;
          });
        }
      }else if (e === 9){
        axios.get(`/api/sc/page/`+ this.pageAll).then((res) => {
          this.list = res.data.data.data;
          this.pageNum = res.data.data.pageNum;
          this.pageAll = res.data.data.pageAll;
          this.total = res.data.data.total;
        });
      }
    },
    search(){
      let elementById = document.getElementById("s").value;
      axios.get(`/api/sc/getByT/`+ elementById).then((res) => {
        console.log(res)
        this.list = res.data.data;
      });
      document.getElementById("pagenumberbox").style.display = "none"
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
