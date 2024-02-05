<script setup>
import NavBar from './Navbar.vue'
import Services from './Services.vue';
const menu = [{
  id: 'login',
  label: "Log in",
  path: '/login'
}, {
  id: 'sign-up',
  label: "Sign up",
  path: '/sign-up'
}]



</script>

<template>
  <div id="main-container">
    <section id="home">
      <NavBar :menu="menu" />
      <div id="hero">
        <div class="text">
          <h1>Barangay Information Management System</h1>
          <p>
            A Barangay Information Management System (BIMS) is a computer-based system designed to organize, manage, and
            streamline information related to a barangay, which is the smallest administrative division in the
            Philippines. The term "barangay" is roughly equivalent to a neighborhood or village in other countries.The Barangay Information Management System typically includes various modules or features to facilitate the efficient management of barangay-related data. The Barangay Information Management System typically includes various modules or features to facilitate the efficient management of barangay-related data. </p>
          <a href="#services">Services</a>
        </div>
        <div class="img-container">
          <img src="../../public/images/barangay.png" alt="barangay">
          <h3>MUNICIPALITY OF TOMAS OPPUS</h3>
          <span>Developed by: Richard Felicilda</span>
        </div>
      </div>
    </section>
    <section id="services">
      <div class="services-container">
        <Services />
      </div>
    </section>
  </div>
</template>

<style scoped>
#main-container {
  width: 100%;
  overflow-y: auto;
  overflow: hidden;
}

#services {
  padding: 80px 60px;
}

.services-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

h3 {
  margin-top: 10px;
  margin-left: 25px;
  font-size: 2rem;
  color: #fbfef9;
}

#hero {
  display: flex;
  padding: 75px 60px;
  gap: 25px;
}

.text {
  max-width: 900px;
}

h1 {
  font-size: 4.2rem;
  letter-spacing: 1px;
}

.img-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 900px;
  height: 600px;
  border-top-left-radius: 20%;
  background-color: #0e79b2;
  border-bottom-right-radius: 45%;
}

img {
  border-top-left-radius: 20%;
  width: 900px;
}

p {
  margin-top: 25px;
  max-width: 850px;
  margin-bottom: 25px;
  text-align: justify;
}

span {
  font-size: 20px;
  text-transform: uppercase;
  margin-left: 25px;
  color: #fbfef9;
}

a {
  text-decoration: none;
  font-size: 18px;
  color: #fbfef9;
  background-color: #0e79b2;
  padding: 8px 15px;
  border-radius: 3px;
  transition: .2s ease;
}

a:hover {
  text-decoration: underline;
}</style>