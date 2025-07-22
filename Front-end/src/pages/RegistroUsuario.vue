<template>
  <div class="container-registro-usuario">
    <!-- Botão de voltar -->
    <button class="botao-voltar" @click="router.back()" aria-label="Voltar">
      <svg viewBox="0 0 24 24">
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </button>

    <h1 class="title">CADASTRO</h1>

    <!-- Email -->
    <div class="email">
      <label for="email" class="input-label">Email: <text style="color: red;">*</text></label>
      <input
        type="email"
        v-model="form.email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        class="text-input"
      />
    </div>

    <!-- Nome de usuário -->
    <div class="text-input-container">
      <label for="nome" class="input-label">Nome de usuário: <text style="color: red;">*</text></label>
      <input
        type="text"
        v-model="form.userlogin"
        id="nome"
        name="nome"
        placeholder="Digite seu nome"
        class="text-input"
      />
    </div>

    <!-- Senhas -->
    <div class="passwd">
      <div class="senha">
        <label for="senha" class="input-label">Senha: <text style="color: red;">*</text></label>
        <input
          type="password"
          v-model="form.senha"
          id="senha"
          name="senha"
          placeholder="Digite sua senha"
          class="text-input"
        />
      </div>
      <div class="senhadnv">
        <label for="confirmarSenha" class="input-label">Senha Novamente: <text style="color: red;">*</text></label>
        <input
          type="password"
          v-model="form.confirmarSenha"
          id="confirmarSenha"
          name="confirmarSenha"
          placeholder="Digite sua senha novamente"
          class="text-input"
        />
      </div>
    </div>

    <div class="passwd">
      <!-- Tipo -->
      <div class="tipo">
        <label for="tipo" class="input-label">Tipo: <text style="color: red;">*</text></label>
        <UiSelect v-model="form.tipo" :options="customOptions" />
      </div>
    </div>

    <!-- Botão -->
    <UiButton class="next" label="Próximo" @click="handleNext()" />

    <!-- ✅ Mensagem de alerta personalizada -->
    <div v-if="mensagem" class="mensagem-alerta">
      <p>{{ mensagem }}</p>
      <button @click="mensagem = ''" class="botao-fechar">Fechar</button>
    </div>
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
  tipo: ''
})

const mensagem = ref('')

function handleNext() {
  if (
    !form.value.email ||
    !form.value.userlogin ||
    !form.value.senha ||
    !form.value.confirmarSenha || 
    !form.value.tipo
  ) {
    mensagem.value = 'Preencha todos os campos!'
    return
  }

  if (form.value.senha !== form.value.confirmarSenha) {
    mensagem.value = 'As senhas não coincidem!'
    return
  }
    
  // Salvar dados na store
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
  cursor: text;
  transition: border-color 0.3s ease-in-out;
}

.text-input:focus {
  border-color: #ff7f26; /* amarelo/laranja */
  outline: none;
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

/* Mensagem de alerta */
.mensagem-alerta {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #e64219;
  color: white;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 9999;
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
