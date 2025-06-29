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
        />
      </div>

      <a href="#" class="forgot-password">Esqueci senha</a>

      <div class="btn-container">
        <UiButton
          :label="isLoading ? 'Entrando...' : 'Entrar'"
          :disabled="isLoading"
          class="btn"
          @click="login"
        />
      </div>
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

const login = async () => {
  if (isLoading.value) return

  const email = form.value.email.trim()
  const senha = form.value.senha.trim()

  if (!email || !senha) {
    alert('Preencha todos os campos!')
    return
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert('Digite um email válido!')
    return
  }

  if (senha.length < 6) {
    alert('A senha deve ter pelo menos 6 caracteres!')
    return
  }

  isLoading.value = true

  try {
    const response = await axios.get(`http://localhost:3333/user/${email}`)
    const usuario = response.data.message?.[0]

    if (!usuario || !usuario.senha_hash) {
      alert('Usuário não encontrado ou erro ao buscar os dados!')
      return
    }

    if (senha !== usuario.senha_hash) {
      alert('Senha incorreta. Tente novamente!')
      return
    }

    router.push('/home')
  } catch (error) {
    console.error('Erro ao fazer login:', error)
    alert('Erro ao conectar com o servidor!')
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
  background-size: cover; /* Cobrir toda a área disponível */
  background-position: center center; /* Centraliza a imagem */
  background-attachment: fixed; /* Opcional: fixa o fundo ao rolar (evita cortes) */
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
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
  border-color: #007bff;
  outline: none;
}

.forgot-password {
  text-align: left;
  font-size: 0.9rem;
  color: #007bff;
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
