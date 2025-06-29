<template>
  <div class="container-registro-prop">
    <!-- Botão de voltar -->
    <UiButton class="voltar" label="<" @click="router.back()" />

    <h1 class="title">DADOS DO PROPRIETÁRIO</h1>

    <div class="form-row">
      <!-- Nome -->
      <div class="form-group">
        <label class="input-label">Nome Completo:</label>
        <input type="text" v-model="form.nome" placeholder="Digite seu nome" class="text-input" />
      </div>

      <!-- Telefone -->
      <div class="form-group">
        <label class="input-label">Telefone:</label>
        <input
          type="text"
          v-model="form.telefone"
          placeholder="Digite seu telefone"
          class="text-input"
        />
      </div>
    </div>

    <div class="form-row">
      <!-- CPF -->
      <div class="form-group">
        <label class="input-label">CPF:</label>
        <input type="text" v-model="form.cpf" placeholder="Digite seu CPF" class="text-input" />
      </div>

      <!-- WhatsApp -->
      <div class="form-group">
        <label class="input-label">WhatsApp:</label>
        <input type="checkbox" v-model="form.whatsapp" class="checkbox-input" />
      </div>
    </div>

    <div class="form-row">
      <!-- Data de Nascimento -->
      <div class="form-group">
        <label class="input-label">Data de Nascimento:</label>
        <input
          type="text"
          v-model="form.dataNascimento"
          placeholder="Digite sua data de nascimento"
          class="text-input"
        />
      </div>

      <!-- Gênero -->
      <div class="form-group">
        <label class="input-label">Gênero:</label>
        <UiSelect v-model="form.genero" :options="customOptions" />
      </div>
    </div>

    <div class="form-row">
      <!-- Endereço -->
      <div class="form-group">
        <label class="input-label">Endereço:</label>
        <input
          type="text"
          v-model="form.endereco"
          placeholder="Digite seu endereço completo"
          class="text-input"
        />
      </div>
      <div class="form-group">
        <label class="input-label">Código do dono:</label>
        <input
          type="text"
          v-model="form.codDono"
          placeholder="Digite o código do dono"
          class="text-input"
        />
      </div>
    </div>

    <!-- Botão Próximo -->
    <UiButton class="next" label="Próximo" @click="handleNext" />
  </div>
</template>

<script setup>
import { UiButton, UiSelect } from '../components/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { cadastroFuncionario } from '../stores/registroFuncionario.js'
import { cadastroDono } from '../stores/registroDono.js'

const router = useRouter()
const customOptions = ref(['Masculino', 'Feminino'])

const form = ref({
  nome: '',
  telefone: '',
  whatsapp: false,
  genero: '',

  cpf: '',
  dataNascimento: '',
  endereco: '',
  codDono: '',
})

async function handleNext() {
  cadastroFuncionario.value.dadosFuncionario.nome = form.value.nome
  cadastroFuncionario.value.dadosFuncionario.telefone = form.value.telefone
  cadastroFuncionario.value.dadosFuncionario.whatsapp = form.value.whatsapp
  cadastroFuncionario.value.dadosFuncionario.genero = form.value.genero

  cadastroDono.value.dadosDono.cpf = form.value.cpf
  cadastroDono.value.dadosDono.dataNascimento = form.value.dataNascimento
  cadastroDono.value.dadosDono.endereco = form.value.endereco
  cadastroDono.value.dadosDono.codDono = form.value.codDono

  try {
    await axios.post('http://localhost:3333/dono', {
      cpf: cadastroDono.value.dadosDono.cpf,
      data_nascimento: cadastroDono.value.dadosDono.dataNascimento,
      endereco_particular: cadastroDono.value.dadosDono.endereco,
      codDono: cadastroDono.value.dadosDono.codDono,
    })

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
  } catch {
    alert('Erro ao enviar o cadastro. Tente novamente.')
  }

  console.log('Dados do proprietário:', form.value)
  router.push('/dataStore')
}
</script>

<style>
.container-registro-prop {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  color: white;
}

.title {
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
}

.form-row {
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.form-group {
  flex: 1 1 400px;
  min-width: 350px;
  display: flex;
  flex-direction: column;
}

.full-width {
  flex-basis: 100%;
  min-width: 0;
}

.input-label {
  font-size: 18px;
  margin-bottom: 8px;
}

.text-input {
  height: 55px;
  font-size: 16px;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  box-sizing: border-box;
  width: 100%;
}

.checkbox-input {
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
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  text-align: center;
  color: white;
}

.next:hover {
  background-color: #b14a01;
}

.next:active {
  background-color: #ff7f26;
}

@media (max-width: 800px) {
  .form-row {
    flex-direction: column;
  }

  .form-group {
    min-width: 100% !important;
  }
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
