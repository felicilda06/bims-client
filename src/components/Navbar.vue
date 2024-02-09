<script setup>

const props = defineProps({
  menu: Array
})

</script>

<template>
  <nav>
    <h1>Logo</h1>
    <ul>
      <li v-for="item, index in props.menu" :key="item.id" :class="index ? '': 'active'">
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
  padding: 5px 10px;
  list-style-type: none;
  border-radius: 20px;
  transition: .2s ease-in;
  cursor: pointer;
}

li.active{
  background-color: #0e79b2;
}
li:hover > a{
  color: #0e79b2;
}
li.active:hover, li.active:hover > a{
  color:#fbfef9;
  opacity: 85%;
}
a{
  text-decoration: none;
  color:#fbfef9;
  font-size: 14px;
}
</style>