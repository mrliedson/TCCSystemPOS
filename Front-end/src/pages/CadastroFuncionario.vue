<template>
  <div class="container-registro-usuario">
    <!-- Botão de voltar -->
    <UiButton class="voltar" label="<" @click="router.back()" />

    <h1 class="title">DADOS DO USUÁRIO</h1>

    <!-- Nome -->
    <div class="text-input-container">
      <label for="nome" class="input-label">Nome completo:*</label>
      <input
        type="text"
        v-model="form.nome"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
        class="text-input"
      />
    </div>

    <!-- Telefone -->
    <div class="text-input-container">
      <label for="telefone" class="input-label">Telefone:*</label>
      <input
        type="text"
        v-model="form.telefone"
        id="telefone"
        name="telefone"
        placeholder="Digite seu telefone"
        class="text-input"
      />
    </div>

    <!-- WhatsApp -->
    <div class="checkbox-container">
      <label for="whatsapp" class="input-label checkbox-label">
        <input type="checkbox" id="whatsapp" v-model="form.whatsapp" />
        WhatsApp
      </label>
    </div>

    <!-- Gênero -->
    <div class="text-input-container">
      <label for="genero" class="input-label">Gênero:</label>
      <UiSelect v-model="form.gener" :options="customOptions" />
    </div>

    <!-- Botão de Enviar -->
    <UiButton class="next" label="Criar Cadastro" @click="handleSubmit()" />
  </div>
</template>

<script setup>
import { UiButton, UiSelect } from '../components/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { cadastroFuncionario } from '../stores/registroFuncionario.js'

const router = useRouter()
const customOptions = ref(['Masculino', 'Feminino'])

const form = ref({
  nome: '',
  telefone: '',
  whatsapp: false,
  genero: '',
})

async function handleSubmit() {
  cadastroFuncionario.value.dadosFuncionario.nome = form.value.nome
  cadastroFuncionario.value.dadosFuncionario.telefone = form.value.telefone
  cadastroFuncionario.value.dadosFuncionario.whatsapp = form.value.whatsapp
  cadastroFuncionario.value.dadosFuncionario.genero = form.value.genero

  alert(cadastroFuncionario.value.dadosFuncionario.nome)
  alert(cadastroFuncionario.value.dadosLogin.email)
  try {
    await axios.post('http://localhost:3333/user', {
      nome: cadastroFuncionario.value.dadosFuncionario.nome,
      telefone: cadastroFuncionario.value.dadosFuncionario.telefone,
      whatsapp: cadastroFuncionario.value.dadosFuncionario.whatsapp,
      genero: cadastroFuncionario.value.dadosFuncionario.genero,
      email: cadastroFuncionario.value.dadosLogin.email,
      nomeUsuario: cadastroFuncionario.value.dadosLogin.nomeUsuario,
      senha: cadastroFuncionario.value.dadosLogin.senha,
      tipo: cadastroFuncionario.value.dadosLogin.tipo,
    })
    alert('Cadastro concluído com sucesso!')
    router.push('/')
  } catch {
    alert('Erro ao enviar o cadastro. Tente novamente.')
  }
}
</script>

<style>
.container-registro-usuario {
  margin: 0 auto;
  max-width: 600px;
  width: 90%;
  padding: 20px;
  box-sizing: border-box;
}

.title {
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
}

.text-input-container {
  margin-bottom: 20px;
}

.input-label {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 8px;
  display: block;
}

.text-input,
.UiSelect {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  box-sizing: border-box;
}

.checkbox-container {
  margin-bottom: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
}

.checkbox-label input[type='checkbox'] {
  width: 24px;
  height: 24px;
  accent-color: #ff7f26;
  cursor: pointer;
}

.next {
  display: block;
  width: 60%;
  max-width: 300px;
  height: 60px;
  margin: 30px auto 0 auto;
  background-color: #ff7f26;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
}

.next:hover {
  background-color: #b14a01;
}

.next:active {
  background-color: #ff7f26;
}
.voltar {
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: #ff7f26;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 35px;
  width: 80px;
  font-size: 32px;
}
.voltar:hover {
  background-color: #b14a01;
}

.voltar:active {
  background-color: #ff7f26;
}
</style>
