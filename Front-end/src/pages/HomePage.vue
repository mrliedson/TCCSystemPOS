<template>
  <div class="pai">
    <!-- Botão de Logout -->
    <UiButton class="logout" label="Sair" @click="logout" />

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
</style>
