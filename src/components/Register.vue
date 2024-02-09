<script setup>
 import Hero from '../components/Hero.vue'
 import { TextField, Select } from './fields'
 import { Button } from './controls'
 import { barangays } from '../utils'

 const onSubmit = e =>{
  e.preventDefault();
 }

 const onChange = evt => {
    const { id, value } = evt
    console.log(id, value);
 }

</script>
  
<template>
  <div class="login-container">
    <Hero/>
     <div class="form-group">
        <h1>Sign Up</h1>
        <form>
           <div class="form-inputs">
                <TextField autoComplete="off" @onChange="onChange" id="firstname" placeholder="Enter your first name" autoFocus label="First Name" type="text"/>
                <TextField autoComplete="off" @onChange="onChange" id="middlename" placeholder="Enter your middle name"  label="Middle Name" type="text"/>
                <TextField autoComplete="off" @onChange="onChange" id="lastname" placeholder="Enter your last name"  label="Last Name" type="text"/>
                <Select @onChange="onChange" label="Barangay" :options="barangays" id="barangay"/>
                <TextField autoComplete="off" @onChange="onChange" id="email" placeholder="Enter your email"  label="Username" type="email"/>
                <TextField autoComplete="off" @onChange="onChange" id="password" placeholder="Enter your password" label="Password" type="password"/>
           </div>
          <div class="action-buttons">
            <Button label="Submit" className="btn-submit" @onClick="onSubmit"/>
          </div>
        </form>
        <div class="signup-container">
          <span>Already have an account? <router-link to="/sign-in" id="signin-link">Sign In</router-link></span>
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
}
.form-inputs{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.btn-submit{
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
  margin-top: 20px;
}
.btn-submit:hover, .btn-submit:focus{
   background-color: #191923;
}
.action-buttons{
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  font-size: 14px;
}
.signup-container{
  margin-top: 45px;
  text-align: center;
  font-size: 14px;
}
#signin-link{
  margin-left: 2px;
  color: #0e79b2;
  font-weight: 600;
  text-decoration: none;
}
#signin-link:hover{
  text-decoration: underline;
  text-underline-offset: 3px ;
}
</style>