<template>
  <div class="container-adress">
    <!-- Botão de voltar -->
    <UiButton class="voltar" label="<" @click="router.back()" />
    <h1 class="title">ENDEREÇO DA LOJA</h1>

    <div class="form-row">
      <div class="form-group">
        <label class="input-label">CEP*:</label>
        <input type="text" v-model="form.cep" placeholder="Digite o CEP" class="text-input" />
      </div>

      <div class="form-group">
        <label class="input-label">Logradouro*:</label>
        <input
          type="text"
          v-model="form.logradouro"
          placeholder="Digite o endereço"
          class="text-input"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="input-label">Estado*:</label>
        <input type="text" v-model="form.estado" placeholder="Digite o estado" class="text-input" />
      </div>

      <div class="form-group">
        <label class="input-label">Número:</label>
        <input type="text" v-model="form.numero" placeholder="Digite o número" class="text-input" />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label class="input-label">Cidade*:</label>
        <input type="text" v-model="form.cidade" placeholder="Digite a cidade" class="text-input" />
      </div>

      <div class="form-group">
        <label class="input-label">Complemento:</label>
        <input
          type="text"
          v-model="form.complemento"
          placeholder="Digite o complemento"
          class="text-input"
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group full-width">
        <label class="input-label">Bairro*:</label>
        <input type="text" v-model="form.bairro" placeholder="Digite o bairro" class="text-input" />
      </div>
    </div>

    <UiButton class="next" label="Criar" @click="handleSubmit" />
  </div>
</template>

<script setup>
import { UiButton } from '../components/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'
import { cadastroLoja } from '../stores/registroLoja.js'

const router = useRouter()

const form = ref({
  cep: '',
  estado: '',
  cidade: '',
  bairro: '',
  logradouro: '',
  numero: '',
  complemento: '',
})

async function handleSubmit() {
  cadastroLoja.value.enderecoLoja.cep = form.value.cep
  cadastroLoja.value.enderecoLoja.estado = form.value.estado
  cadastroLoja.value.enderecoLoja.cidade = form.value.cidade
  cadastroLoja.value.enderecoLoja.bairro = form.value.bairro
  cadastroLoja.value.enderecoLoja.logradouro = form.value.logradouro
  cadastroLoja.value.enderecoLoja.numero = form.value.numero
  cadastroLoja.value.enderecoLoja.complemento = form.value.complemento

  console.log('Enviando cadastro completo:', cadastroLoja.value)

  try {
    await axios.post('http://localhost:3333/empresa', {
      endereco_cep: cadastroLoja.value.enderecoLoja.cep,
      endereco_estado: cadastroLoja.value.enderecoLoja.estado,
      endereco_cidade: cadastroLoja.value.enderecoLoja.cidade,
      endereco_bairro: cadastroLoja.value.enderecoLoja.bairro,
      endereco_logradouro: cadastroLoja.value.enderecoLoja.logradouro,
      endereco_numero: cadastroLoja.value.enderecoLoja.numero,
      endereco_complemento: cadastroLoja.value.enderecoLoja.complemento,
      razao_social: cadastroLoja.value.dadosLoja.razaoSocial,
      nome_fantasia: cadastroLoja.value.dadosLoja.nomeFantasia,
      telefone: cadastroLoja.value.dadosLoja.telefone,
      whatsapp: cadastroLoja.value.dadosLoja.whatsapp,
      cnpj: cadastroLoja.value.dadosLoja.cnpj,
      dono_id: cadastroLoja.value.dadosLoja.codDono,
    })
    alert('Cadastro concluído com sucesso!')
    router.push('/home')
  } catch (error) {
    console.error('Erro no envio:', error)
    alert('Erro ao enviar o cadastro. Tente novamente.')
  }
}
</script>

<style>
.container-adress {
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
