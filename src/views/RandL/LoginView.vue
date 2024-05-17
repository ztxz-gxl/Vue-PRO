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
          <input type="button" value="登录" @click="login">
          <router-link to="/RESView">没有账户？点击注册</router-link>
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
    login(){
      let userName = document.getElementById("name").value;
      let pwd = document.getElementById("pwd").value;
      axios.post(`/api/user/login`,{"userName":userName,"pwd":pwd}).then(res=>{
        if (res.status === 200){
          alert("登录成功")
          console.log(res.data)

          let headers = {
            Authorization:res.data
          }

          localStorage.setItem('headers', JSON.stringify(headers));


          this.$router.push('/MainView');
        }else{
          alert("登录失败")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
