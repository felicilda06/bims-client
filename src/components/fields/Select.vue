<script setup>
   import { ref } from 'vue'
   const props = defineProps({
    id: String,
    options: Array,
    label: String,
    value: Object
   })

   const focusRef = ref(false)
   const selectRef = ref('')

   const emit = defineEmits(['onChange'])

   const onFocus = ()=> {
    focusRef.value = true;
  }
  const onBlur = ()=> {
    if(selectRef.value) return
    focusRef.value = false;
  }

  const onSelect = e=> {
    const value = {
        id: e.target.id,
        value: selectRef.value
    }
    emit('onChange', value)
  }


</script>

<template>
    <div class="select-container" :class="focusRef ? 'focused': ''">
      <label :class="focusRef ? 'focused': ''">{{ props.label }}</label>
      <select :id="props.id" @focus="onFocus" @blur="onBlur" v-model="selectRef" @change="onSelect">
        <option v-for="option, i in props.options" :key="i" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
</template>

<style scoped>
.select-container{
    position: relative;
    border: 1px solid #585858;
    transition: .2s ease-in-out;
    width: 100%;
}
.select-container.focused{
   border-color: #0e79b2;
}

select{
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    color:#191923 ;
    background-color: transparent;
}
label{
    position: absolute;
    pointer-events: none;
    font-size: 14px;
    top: 19%;
    left: 4%;
    transition: .2s ease-in-out;
    padding: 3px 4px;
    background-color: #fbfef9;
}
label.focused{
    font-size: 12px;
    top: -35%;
    left: 3%;
    background-color: #fbfef9;
    color: #0e79b2;
    font-weight: 600;
}
</style>