<template>
  <!--um botão de login sem nada escrito usando props-->
  <button class="btn" @click="props.click">{{ label }}</button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Login',
  },
  click: {
    type: Function,
    default: () => {},
  },
})
</script>

<style>
.btn {
  width: 250px;
  height: 70px;
  font-size: 35px;
  border-radius: 10px;
  font-size: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #0069d9;
}

.btn:active {
  background-color: #0059b3;
}
</style>
