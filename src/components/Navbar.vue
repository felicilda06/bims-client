<script setup>


const props = defineProps({
  menu: Array
})

</script>

<template>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li v-for="item in props.menu" :key="item.id">
        <router-link :to="item.path">{{ item.label }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  align-items: center;
  background-color: #191923;
  display: flex;
  justify-content: space-between;
  color: #fbfef9;
}

h1 {
  margin-left: 50px;
}

ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 65px;
  gap: 20px;
  padding-right: 40px;
}

li {
  list-style-type: none;
}
</style>