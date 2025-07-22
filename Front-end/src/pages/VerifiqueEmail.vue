<template>
  <div class="container">
    <button class="botao-voltar" @click="router.back()" aria-label="Voltar">
      <svg viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>
    
    <div class="uilogo">
      <img src="../assets/cadeadoB.png" alt="User Logo" />
    </div>

    <h1>Verifique seu email</h1>

    <div class="form">
      <label for="senhaAcesso" class="input-label">Digite a senha de acesso:</label>
      <input
        type="password"
        id="senhaAcesso"
        v-model="senhaAcesso"
        placeholder="Digite sua senha de acesso"
        class="input-field"
        autocomplete="current-password"
      />
      <div class="btn-container">
        <UiButton label="Verificar" class="btn" @click="verificarSenha" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UiButton } from '../components/index.js'

const router = useRouter()
const senhaAcesso = ref('')

const verificarSenha = () => {
//   if (!senhaAcesso.value.trim()) {
//     alert('Por favor, preencha a senha de acesso')
//     return
//   }
  router.push('/redefinirSenhaNova')
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-image: url('../assets/fundoTCClogin.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 600px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: white;
}

.uilogo img {
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.2rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input-label {
  font-size: 18px;
  margin-bottom: 6px;
}

.input-field {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px 15px;
  border-radius: 24px;
  border: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;
  outline: none;
  cursor: text;
}

.input-field:focus {
  border-color: #e7d04d;
}

.botao-voltar {
  width: 80px;
  height: 80px;
  background-color: #333;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  padding: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
}

.botao-voltar:hover {
  background-color: #444;
}

.botao-voltar svg {
  width: 36px;
  height: 36px;
  stroke: white;
  stroke-width: 5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
