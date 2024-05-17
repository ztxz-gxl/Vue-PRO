<template>
  <div>
    <div id="headline" style="height: 718px;">
      <div class="container">
        <h1 style="color: #5a5353;">来一场说走就走的旅行吧</h1>
        <form  id="register" style="margin-top: 65px;margin-bottom: 40px;">
          <h2>登录你的账户</h2>
          <label for="name">用户名</label>
          <input type="text" name="name" id="name"
                 placeholder="用户名" required/>
          <label for="pwd">密码</label>
          <input type="password" name="pwd" id="pwd"
                 placeholder="密码" required/>
          <label for="tel">电话</label>
          <input type="tel" name="tel" id="tel"
                 placeholder="电话" required/>
          <label for="email">邮箱</label>
          <input type="email" name="email" id="email"
                 placeholder="邮箱" required/>
          <input type="button" value="注册" @click="res">
          <router-link to="/LoginView">已有账户？点击登录</router-link>
        </form>
        <br>
      </div>
    </div>
  </div>
</template>

<script>
import {LoginCSS} from "@/map";
import axios from "axios";

export default {
  mounted() {
    for (const i of LoginCSS) {
      let css = document.createElement('link');
      css.rel = 'stylesheet';
      css.href = i;
      document.body.appendChild(css)
    }
  },
  methods:{
    res(){
      let userName = document.getElementById("name").value;
      let pwd = document.getElementById("pwd").value;
      let email = document.getElementById("email").value
      let phone = document.getElementById("tel").value
      axios.post(`/api/user/register`,{"userName":userName,"pwd":pwd,"phone":phone,"email":email}).then(res=>{
        if (res.status === 200){
          alert("注册成功")
          this.$router.push('/LoginView');
        }else{
          alert("注册失败")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
