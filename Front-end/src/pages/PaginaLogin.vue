<template>
  <div class="container">
    <div class="uilogo">
      <img src="../assets/user.png" alt="User Logo" />
    </div>

    <div class="form">
      <!-- Email -->
      <div class="login">
        <label class="input-label">Email:</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="Digite seu email"
          class="input-field"
          autocomplete="username"
        />
      </div>

      <!-- Senha -->
      <div class="senha">
        <label class="input-label">Senha:</label>
        <input
          type="password"
          v-model="form.senha"
          placeholder="Digite sua senha"
          class="input-field"
          autocomplete="current-password"
        />
      </div>

      <router-link to="/redefinirSenha" class="forgot-password">Esqueci senha</router-link>


      <div class="btn-container">
        <UiButton
          :label="isLoading ? 'Entrando...' : 'Entrar'"
          :disabled="isLoading"
          class="btn"
          @click="login"
        />
      </div>
    </div>

    <!-- Mensagem de erro/alerta -->
    <div v-if="mensagem" class="mensagem-alerta">
      <p>{{ mensagem }}</p>
      <button @click="mensagem = ''" class="botao-fechar">Fechar</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { UiButton } from '../components/index.js'

const router = useRouter()

const form = ref({
  email: '',
  senha: '',
})

const isLoading = ref(false)
const mensagem = ref('')

const login = async () => {
  if (isLoading.value) return

  const email = form.value.email.trim()
  const senha = form.value.senha.trim()

  if (!email || !senha) {
    mensagem.value = 'Preencha todos os campos!'
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    mensagem.value = 'Digite um email válido!'
    return
  }

  if (senha.length < 6) {
    mensagem.value = 'A senha deve ter pelo menos 6 caracteres!'
    return
  }

  isLoading.value = true

  try {
    const response = await axios.get(`http://localhost:3333/user/${email}`)
    const usuario = response.data.message?.[0]

    if (!usuario || !usuario.senha_hash) {
      mensagem.value = 'Usuário não encontrado ou erro ao buscar os dados!'
      return
    }

    if (senha !== usuario.senha_hash) {
      mensagem.value = 'Senha incorreta. Tente novamente!'
      return
    }

    router.push('/home')
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    mensagem.value = 'Erro ao conectar com o servidor!'
  } finally {
    isLoading.value = false
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  min-height: 100vh; /* Garante que o body tenha pelo menos a altura da tela */
  background-image: url('../assets/fundoTCClogin.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.uilogo img {
  width: 150px;
  height: auto;
  margin-bottom: 20px;
}

.form {
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.input-label {
  font-size: 18px;
  color: #ffffff;
  margin-bottom: 5px;
  display: block;
}

.input-field {
  width: 100%;
  height: 50px;
  font-size: 16px;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 24px;
  cursor: text; /* cursor de texto para input */
  transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
  border-color: #e7d04d;
  outline: none;
}

.forgot-password {
  text-align: left;
  font-size: 0.9rem;
  color: #e7d04d;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.btn-container {
  display: flex;
  justify-content: center;
}

.btn {
  background-color: #ff7f26;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #b14a01;
}

.btn:active {
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

.botao-fechar {
  background: white;
  color: #e64219;
  border: none;
  padding: 5px 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.botao-fechar:hover {
  background: #eee;
}

@media (max-width: 480px) {
  .uilogo img {
    width: 80px;
  }

  .form {
    padding: 15px;
    gap: 10px;
  }

  .btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}
</style>
