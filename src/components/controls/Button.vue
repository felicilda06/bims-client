<script setup>
const props = defineProps({
  label: String,
  className: String
})

 const emit = defineEmits(['onClick'])

 const handleClick = evt =>{
   emit('onClick', evt)
 }

</script>

<template>
  <button :class="props.className" @click="handleClick">{{ props.label }}</button>
</template>