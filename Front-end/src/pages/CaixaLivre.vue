<template>
  <div class="container">
    <UiButton class="logout" label="Sair" @click="router.back()" />
    <h1 class="title">Caixa livre</h1>
    
  </div>

  <div class="botoes">
    <UiButton
      label="Fechar caixa"
      class="btn"
      @click="fecharCaixa"
    />
    <UiButton
      label="Nova compra"
      class="btn"
      @click="novaCompra"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { UiButton } from '../components/index.js'

const router = useRouter()

function novaCompra() {
  router.push('/TelaVenda')
}

function fecharCaixa() {
  router.push('/FecharCaixa')
}
</script>

<style>
html, body {
  overflow: hidden;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #000;
}
.logout {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  width: 80px;
}

.logout:hover {
  background-color: darkred;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding-top: 80px;
}

.title {
  color: white;
  font-size: 120px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 50px;
}

.uilogo-main {
  width: 500px;
  height: auto;
  margin-top: 50px; /* Faz a logo descer */
}

.botoes {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  width: 180px;
  height: 60px;
  background-color: #ff7f26;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover {
  background-color: #b14a01;
}

.btn:active {
  background-color: #ff7f26;
}
</style>
