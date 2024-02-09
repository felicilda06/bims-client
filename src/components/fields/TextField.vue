<script setup>
import { ref, onMounted } from 'vue';

  const props = defineProps({
    id: String,
    label: String,
    value: String,
    icon: String,
    placeholder: String,
    autoFocus: Boolean,
    name: String,
    autoComplete: 'off' | 'on',
    type: 'email' | 'text' | 'password'
  })

  const inputRef = ref('')
  const focusRef = ref(false)
  const emit = defineEmits(['onChange'])

  onMounted(()=> {
     inputRef.value = props.value
  }, props.value)

  const onInput = evt => {
    const value = {
        id: evt.target.id,
        value: inputRef.value
    }
    emit('onChange', value)
  }
  const onFocus = ()=> {
    focusRef.value = true;
  }
  const onBlur = ()=> {
    if(inputRef.value) return
    focusRef.value = false;
  }

</script>

<template>
    <div class="input-container" :class="focusRef ? 'focused': ''">
        <label :class="focusRef ? 'focused': ''">{{ props.label }}</label>
        <input :autocomplete="props.autoComplete" :name="props.name" :placeholder="focusRef ? props.placeholder: ''" :autofocus="props.autoFocus"  :id="props.id" :type="props.type" v-model="inputRef" @input="onInput" @focus="onFocus" @blur="onBlur"> 
    </div>
</template>
<style scoped>
.input-container{
    position: relative;
    border: 1px solid #585858;
    transition: .2s ease-in-out;
    width: 100%;
}
.input-container.focused{
   border-color: #0e79b2;
}
input{
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    color:#191923 ;
}
label{
    position: absolute;
    pointer-events: none;
    font-size: 14px;
    top: 19%;
    left: 4%;
    transition: .2s ease-in-out;
    padding: 3px 4px;
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