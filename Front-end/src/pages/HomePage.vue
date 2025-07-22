<template>
  <div class="pai">
    <!-- Botão de Logout -->
    <button class="botao-voltar" @click="logout" aria-label="Voltar">
      <svg viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <!-- Mensagem de boas-vindas -->
    <div class="bemvindo">Bem Vindo {{ usuario }}!</div>

    <!-- Botões principais -->
    <div class="buttons">
      <UiButton class="addUsuario" label="Adicionar usuário" @click="addUsuario" />
      <UiButton class="addEmpresa" label="Adicionar empresa" @click="addEmpresa"/>
      <UiButton class="addPromocao" label="Adicionar Promoção" />
      <UiButton class="vencimento" label="Prestes a vencer" />
      <UiButton class="addprodutos" label="Adicionar produto" @click="CadastroProdutos" />
      <UiButton class="reporestoque" label="Repor Estoque" />
      <UiButton class="historico" label="Históricos" />
      <UiButton class="expediente" label="Iniciar Expediente" @click="CaixaLivre" />
      
    </div>
  </div>
</template>

<script setup>
import { UiButton } from '../components/index.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  console.log("Usuário deslogado!");
  router.push('/loginPage'); // Redireciona para a tela de login
};
const CadastroProdutos = () => {
  router.push('/cadastroProduto'); // Redireciona para a rota desejada
};
const addUsuario = () => {
  router.push('/register'); // Redireciona para a rota desejada
};
const addEmpresa = () => {
  router.push('/dataStore'); // Redireciona para a rota desejada
};
const CaixaLivre = () => {
  router.push('/CaixaLivre'); // Redireciona para a rota desejada
};
</script>

<style scoped>
.pai {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.bemvindo {
  color: white;
  font-weight: bold;
  font-size: 60px;
  text-align: center;
  position: absolute;
  top: 50px;
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  gap: 30px;
  justify-content: center;
  margin-top: 100px;
}

.addUsuario,
.addPromocao,
.vencimento,
.addprodutos,
.reporestoque,
.historico,
.expediente,
.addEmpresa {
  background-color: white;
  color: black;
  font-weight: bold;
  width: 400px;
  height: 80px;
  text-align: center;
  font-size: 24px;
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
