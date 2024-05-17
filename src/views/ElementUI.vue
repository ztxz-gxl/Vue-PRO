<template>
  <div class="common-layout">
    <el-container>
      <el-header >
        <!-- 头部文字 -->
        <div class="clearfix">
        <div class="header">
          <div class="container">
            <p>您好，欢迎来到疯游精旅游网！
              <!--            <a href="#">登录</a>-->
              <router-link :to="{name:'LoginView'}">登录</router-link>
              <a href="#">注册</a>
            </p>
            <ul>
              <li>
                <a href="#">我的疯游</a>
              </li>
              <li>
                <a href="#">微信</a>
              </li>
              <li>
                <a href="#">客户服务</a>
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
          <div class="search">
            <form action="#">
              <select>
                <option value="0">所有产品</option>
                <option value="1">DIVCSS5</option>
              </select>
              <input class="search-text" type="text" value="目的地、主题、签证、或景区名称">
              <div class="header-button">
                <input type="submit" value="搜索">
              </div>
            </form>
          </div>
        </div>
        </div>
      </el-header>
      <el-main style="margin-top: 90px;overflow: hidden;">
        <div class="navigation-module">
          <div class="nav">
            <div class="container">
              <ul>
                <li>
                  <router-link :to="{name:'MainView'}">首页</router-link>
                </li>
                <li>
                  <router-link :to="{name:'ArandView'}">选择1</router-link>
                </li>
                <li>
                  <router-link :to="{name:'LandView'}">选择2</router-link>
                </li>
                <li>
                  <router-link :to="{name:'WeaView'}">天气</router-link>
                </li>
                <li>
                  <a href="#">机票</a>
                </li>
                <li>
                  <a href="#">客栈酒店</a>
                </li>
                <li>
                  <a href="#">景点门票</a>
                </li>
                <li>
                  <a href="#">游记攻略</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="banner">
            <div class="container">
              <div class="banner-form">
                <ul>
                  <li>
                    <h5>1</h5>
                    <a href="#">机票</a>
                  </li>
                  <li>
                    <h5>2</h5>
                    <a href="#">门票</a>
                  </li>
                  <li>
                    <h5>3</h5>
                    <a href="#">酒店</a>
                  </li>
                  <li>
                    <h5>4</h5>
                    <a href="#">旅游</a>
                  </li>
                  <li>
                    <h5>5</h5>
                    <a href="#">签证</a>
                  </li>
                </ul>
                <div class="banner-form-body">
                  <div class="banner-form-body-top">
                    <p>
                      <a href="#">国内机票</a>
                      <a href="#">国际机票</a>
                    </p>
                    <form action="" method="">
                      <div class="form-radio">
                        航程类型
                        <label><input type="radio" name="radio" checked> 单程</label>
                        <label><input type="radio" name="radio"> 往返</label>
                      </div>
                      <div class="form-city">
                        往返城市
                        <input type="text" value="北京">
                        <img src="img/图层%2027.png">
                        <input type="text" value="上海">
                      </div>
                      <div class="form-date">
                        出发时间
                        <input type="text" value="2019-03-21">
                        <span>返程</span>
                        <input type="text" value="yyyy-mm-dd">
                      </div>
                      <button type="button" class="search-btn">搜 索</button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 中间内容部分 -->
        <!-- 热门推荐模块 -->
        <div class="popular-recom container">
          <div class="popular-recom-head">
            <p>热门推荐<span>爱生活，游世界</span></p>
          </div>
          <div class="popular-recom-body">
            <div class="big-part">
              <img src="img/popular-recom_03.gif">
              <div>
                <p>踏青之旅 游玩购物两不误</p>
                <i>￥298.00<b>起</b></i>
              </div>

            </div>
            <div class="big-part">
              <img src="img/popular-recom_05.gif">
              <div>
                <p>踏青之旅 游玩购物两不误</p>
                <i>￥298.00<b>起</b></i>
              </div>

            </div>
            <div class="small-part">
              <img src="img/popular-recom_07.gif">
              <div>
                <p>扬州瘦西湖</p>
                <i>￥168.00<b>起</b></i>
              </div>

            </div>
            <div class="small-part">
              <img src="img/popular-recom_11.gif">
              <div>
                <p>扬州瘦西湖</p>
                <i>￥168.00<b>起</b></i>
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
      </el-main>
      <el-footer>
        <div class="foot-top">
          <div class="container">
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
        <div class="foot-bottom container">
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
          <span>
					<i>友情链接：
						<a href="#">网易旅游</a>
						<a href="#">凤凰网旅游</a>
						<a href="#">中国经济网</a>
						<a href="#">雅虎旅游</a>
						<a href="#">百度旅游</a>
						<a href="#">人民网旅游</a>
						<a href="#">中国制造网</a>
						<a href="#">51766旅游网</a>
						<a href="#">欣欣旅游网</a>
						<a href="#">驴妈妈旅游</a>
						<a href="#">网奇艺旅游</a>
						<a href="#">去哪儿</a>
						<a href="#">拉拉勾旅游</a>
						<a href="#">米胖旅游网</a>
						<a href="#">新华网旅游</a>
					</i>
					<i>
						<a href="#">佰程旅行网</a>
						<a href="#">神舟国旅</a>
						<a href="#">新疆旅游</a>
						<a href="#">旅游攻略</a>
						<a href="#">酷讯旅游</a>
						<a href="#">360旅游</a>
						<a href="#">格林豪泰酒店</a>
						<a href="#">wed114结婚网</a>
						<a href="#">新通留学网</a>
						<a href="#">签证资讯网</a>
					</i>
				</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import {MainCss} from "@/map";

export default {
  mounted() {
    for (const i of MainCss) {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = i;
      document.body.appendChild(css)
    }
  },
}
</script>
