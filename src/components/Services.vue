<script setup>
import { services } from '../utils'
</script>
<template>
  <div v-for="service in services" :key="service.title">
    <div class="services-wrapper">
      <div id="icon-title-wrapper">
        <i :class="service.icon"></i>
        <span>{{ service.title }}</span>
      </div>
      <p>{{ service.content }}</p>
    </div>
  </div>
</template>

<style scoped>
.icon-title-wrapper {
  display: flex;
  align-items: center;
}

.service_wrapper {
  max-width: 400px;
}

span {
  text-align: center;
  font-size: 26px;
  margin-left: 10px;
  font-weight: 600;
  color: #0e79b2;
}

p {
  font-size: 17px;
  margin-top: 15px;
  text-indent: 40px;
  text-align: justify;
}

i {
  color: #0e79b2;
  font-size: 35px;
}
</style>