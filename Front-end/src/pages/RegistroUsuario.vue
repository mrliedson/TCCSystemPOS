<template>
  <div class="container-registro-usuario">
    <!-- Botão de voltar -->
    <UiButton class="voltar" label="<" @click="router.back()" />

    <h1 class="title">REGISTRO DE USUÁRIO</h1>

    <!-- Email -->
    <div class="email">
      <label for="email" class="input-label">Email:*</label>
      <input
        type="email"
        v-model="form.email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        class="text-input"
        onfocus="this.style.borderColor='#0056b3'"
        onblur="this.style.borderColor='#007bff'"
      />
    </div>

    <!-- Nome de usuário -->
    <div class="text-input-container">
      <label for="nome" class="input-label">Nome de usuário:*</label>
      <input
        type="text"
        v-model="form.userlogin"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
        class="text-input"
        onfocus="this.style.borderColor='#0056b3'"
        onblur="this.style.borderColor='#007bff'"
      />
    </div>

    <!-- Senhas -->
    <div class="passwd">
      <div class="senha">
        <label for="senha" class="input-label">Senha:*</label>
        <input
          type="password"
          v-model="form.senha"
          id="senha"
          name="senha"
          placeholder="Digite sua senha"
          class="text-input"
          onfocus="this.style.borderColor='#0056b3'"
          onblur="this.style.borderColor='#007bff'"
        />
      </div>
      <div class="senhadnv">
        <label for="confirmarSenha" class="input-label">Senha Novamente:*</label>
        <input
          type="password"
          v-model="form.confirmarSenha"
          id="confirmarSenha"
          name="confirmarSenha"
          placeholder="Digite sua senha novamente"
          class="text-input"
          onfocus="this.style.borderColor='#0056b3'"
          onblur="this.style.borderColor='#007bff'"
        />
      </div>
    </div>

    <div class="passwd">
      <!-- Tipo -->
      <div class="tipo">
        <label for="tipo" class="input-label">Tipo:</label>
        <UiSelect v-model="form.tipo" :options="customOptions" />
      </div>

      <!-- Codigo do dono -->
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

    <!-- Botão Vue -->
    <UiButton class="next" label="Próximo" @click="handleNext()" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { cadastroFuncionario } from '../stores/registroFuncionario.js'
import { UiButton, UiSelect } from '../components/index.js'

const router = useRouter()
const customOptions = ref(['dono', 'gerente', 'caixa', 'estoque', 'admin'])

const form = ref({
  email: '',
  userlogin: '',
  senha: '',
  confirmarSenha: '',
  tipo: '',
})

function handleNext() {
  if (
    !form.value.email ||
    !form.value.userlogin ||
    !form.value.senha ||
    !form.value.confirmarSenha
  ) {
    alert('Preencha todos os campos!')
    return
  }

  if (form.value.senha !== form.value.confirmarSenha) {
    alert('As senhas não coincidem!')
    return
  }

  // Salvar os dados na store
  cadastroFuncionario.value.dadosLogin = {
    email: form.value.email,
    nomeUsuario: form.value.userlogin,
    senha: form.value.senha,
    tipo: form.value.tipo,
  }

  if (form.value.tipo === 'dono') {
    router.push('/registerProp')
  } else {
    router.push('/CadastroFuncionario')
  }
}
</script>

<style>
.container-registro-usuario {
  margin: 0 auto;
  width: 75%;
  max-width: 900px;
}

.title {
  text-align: center;
  font-size: 50px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
}

.input-label {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 5px;
  display: block;
}

.text-input {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 24px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
}

.passwd {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.passwd > div {
  flex: 1;
}

.next {
  display: block;
  width: 60%;
  max-width: 300px;
  height: 60px;
  margin: 40px auto 0 auto;
  background-color: #ff7f26;
  cursor: pointer;
  border-radius: 24px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: none;
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
