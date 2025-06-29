<template>
  <div class="container-main">
    <div v-if="isLoading" class="spinner-overlay">
      <SpinnerLoading :isLoading="isLoading" message="Processando login..." />
    </div>

    <Uilogo class="uilogo-main" />

    <UiButton
      label="ENTRAR"
      class="entrar-main"
      @click="processar"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UiButton, Uilogo } from '../components/index.js'
import SpinnerLoading from '../components/ui/SpinnerLoading.vue'

const isLoading = ref(false)
const router = useRouter()

const processar = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    console.log('Processamento concluído!')
    router.push('/loginPage')
  }, 1000)
}
</script>

<style>
html, body {
  overflow: hidden;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.container-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.uilogo-main {
  width: 150px; /* Ajuste conforme o tamanho da sua logo */
  height: auto;
  margin-bottom: 30px;
}

.entrar-main {
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

/* Quando o loading estiver ativo */
.spinner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.466);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
