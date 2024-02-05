<script setup>
const props = defineProps({
  label: String,
  className: String
})
</script>

<template>
  <button :class="props.className">{{ props.label }}</button>
</template>