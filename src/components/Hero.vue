<script setup>

</script>

<template>
    <div class="hero-container">
        <div class="logo">
            <h1>Logo</h1>
        </div>
        <img src="../../public/images/hero.jpg" alt="barangay">
    </div>
</template>

<style scoped>
 .hero-container{
    max-width: 1200px;
    height: 100%;
    padding-right: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
 }
 img{
    width: 500px;
    margin-top: 55px;
    mix-blend-mode: darken;
 }
 .logo{
    position: absolute;
    top: 5%;
    left: 6%;
 }
</style>