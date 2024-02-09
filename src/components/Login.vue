<script setup>
 import Hero from '../components/Hero.vue'
 import { TextField } from './fields'
 import { Button } from './controls'
 const props = defineProps({

 })

 const onClick = e =>{
  e.preventDefault();
 }

</script>
  
<template>
  <div class="login-container">
    <Hero/>
     <div class="form-group">
        <h1>Sign in</h1>
        <span class="login-text">Login to continue</span>
        <form>
          <TextField placeholder="Enter your email" autoFocus label="Username" type="email"/>
          <TextField placeholder="Enter your password" label="Password" type="password"/>
          <div class="action-buttons">
            <Button label="Login" className="btn-login" @onClick="onClick"/>
            <router-link to="/forgot-password" id="forgot-link">Forgot Password</router-link>
          </div>
        </form>
        <div class="signup-container">
          <span>Don't have an account? <router-link to="/sign-up" id="signup-link">Sign Up</router-link></span>
        </div>
      </div>
  </div>
</template>

<style scoped>
.login-container{
  width: 100%;
  gap: 25px;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #191923;
  position: relative;
}
.login-text{
  color: #0e79b2;
  font-size: 13px;
}
h1{
  font-size: 1.4rem;
  font-weight: 600;
}
.form-group{
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 50px 60px 50px 50px;
  max-width: 550px;
  width: 100%;
}
form{
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.btn-login{
  background-color: #0e79b2;
  outline: none;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  color:#fbfef9;
  width: 100%;
  padding: 8px;
  text-transform: uppercase;
  transition: .2s ease-in;
}
.btn-login:hover{
   background-color: #191923;
}
.action-buttons{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
}
a#forgot-link{
  width: 100%;
  text-decoration: none;
  text-transform: uppercase;
  color: #0e79b2;
  padding: 8px;
}
a#forgot-link:hover{
  font-weight: 600;
  color: #191923;
  text-decoration: underline;
}
.signup-container{
  margin-top: 45px;
  text-align: center;
  font-size: 14px;
}
#signup-link{
  margin-left: 2px;
  color: #0e79b2;
  font-weight: 600;
  text-decoration: none;
}
#signup-link:hover{
  text-decoration: underline;
  text-underline-offset: 3px ;
}
</style>