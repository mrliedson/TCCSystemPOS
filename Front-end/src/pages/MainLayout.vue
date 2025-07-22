<template>
  <div class="container-main">
    <div v-if="isLoading" class="spinner-overlay">
      <SpinnerLoading :isLoading="isLoading" message="Processando login..." />
    </div>

    <img class="logo" src="../assets/logo.png" alt="Logo SystemPOS">

    <div class="btn-container">
      <UiButton
        label="Entrar"
        class="btn"
        @click="processar"
        :disabled="isLoading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UiButton } from '../components/index.js'
import SpinnerLoading from '../components/ui/SpinnerLoading.vue'

const isLoading = ref(false)
const router = useRouter()

const processar = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/loginPage')
  }, 1000)
}
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  font-family: 'Poppins', sans-serif;
  background-image: url('../assets/fundoTCClogin.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.container-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 20px;
  position: relative;
  
}

.uilogo-main {
  
  width: 150px;
  height: auto;
  
}
.logo{
  width: 40%;
  height: 40%;
  object-fit: cover;
}

.btn-container {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 300px;
}

.btn {
  background-color: #ff7f26;
  color: white;
  padding: 12px 30px;
  font-size: 1.1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.btn:hover {
  background-color: #b14a01;
}

.btn:active {
  background-color: #ff7f26;
}

.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
