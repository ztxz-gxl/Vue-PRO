<template>
  <div>
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
    <div >
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


    <div>
      <div style="width: 1515px;text-align: center;margin-top: 40px;">
        <form action="#" method="get" >
          <input type="text" style="height: 35px;" id="s" placeholder="城市搜索">
          <button type="button" @click="search" class="pagelink" style="height: 39px;margin-left: 15px;width: 70px;background-color: rgb(28 159 42);border: 0;">搜索</button>
        </form>
      </div>
    </div>

    <div class="weather-forecast" role="main" style="text-align: center;margin-top: 50px">
      <div class="location">{{ city }}</div>
      <div class="date">{{ new Date().toLocaleDateString()}}</div>
      <div class="desc">Overcast</div>
      <div class="current">
        <div class="visual">
          <el-icon>
            <Sunny/>
          </el-icon>

          <div class="temp">58</div>
          <div class="scale">&deg;F</div>
        </div>
        <div class="description">
          <div class="precip">100%</div>
          <div class="humidity">97%</div>
          <div class="wind">4 mph SW</div>
          <div class="pollen">36</div>
        </div>
      </div>
      <div class="seven-day">
        <div class="seven-day-fc" v-for="(i,index) in list" :key="index">
          <div class="date">星期{{ i.week }}</div>
          <el-icon style="width: 53px">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" v-html="getIcon(i.weather)"></svg>
          </el-icon>
          <div class="seven-day-temp">
            <div class="temp-high">{{ i.fahrenheit }}&deg;</div>
            <div class="temp-low">{{ i.centigrade }}&deg;</div>
          </div>
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
import {WEACSS} from "@/map";
import axios from "axios";
import {Sunny} from "@element-plus/icons-vue";

export default {
  components: {Sunny},
  mounted() {
    let parse = JSON.parse(localStorage.getItem('headers'));
    if (parse === undefined || parse === null){
      alert("未登录")
      this.$router.push('/LoginView');
    }
    for (const i of WEACSS) {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      // css.media = '(max-width:600px)';
      css.href = i;
      document.body.appendChild(css)
    }
    axios.get(`/api/wc/getAll`).then((res) => {
      this.list = res.data.data;
    });
  },
  data() {
    return {
      list: [],
      city:"长沙",
    }
  },
  methods: {
    getIcon(e) {
      if (e === 'Sunrise') {
        return '<path fill="currentColor" ' +
            'd="M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 ' +
            '0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 ' +
            '0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 ' +
            '1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 ' +
            '32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"></path>'
      } else if (e === 'MostlyCloudy') {
        return '<path fill="currentColor" ' +
            'd="M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 ' +
            '8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 ' +
            '208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 ' +
            '0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"></path>'
      } else if (e === 'Drizzling') {
        return '<path fill="currentColor" ' +
            'd="m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 ' +
            '7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 ' +
            '480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 ' +
            '0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 ' +
            '96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"></path>'
      } else if (e === 'Pouring') {
        return '<path fill="currentColor" ' +
            'd="m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 ' +
            '176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 ' +
            '256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 ' +
            '487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 ' +
            '1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 ' +
            '32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"></path>'
      } else if (e === 'Cloudy') {
        return '<path fill="currentColor" ' +
            'd="M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 ' +
            '288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"></path>'
      } else if (e === 'Lightning') {
        return '<path fill="currentColor" ' +
            'd="M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 ' +
            '0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 ' +
            '192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 ' +
            '91.968 70.464 167.36 160.256 175.232z"></path>' +
            '<path fill="currentColor" d="M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 ' +
            '55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"></path>'
      }
      return '<path fill="currentColor" ' +
          'd="M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 ' +
          '0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"></path><path fill="currentColor" ' +
          'd="M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 ' +
          '460.48a6003.84 6003.84 0 0 0-49.28 41.408z"></path>'
    },
    search(){
      this.city = document.getElementById("s").value;
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
