<template>
  <div class="container-registro-produto">
    <!-- Botão de voltar -->
    <!-- Botão de voltar personalizado -->
<button class="botao-voltar" @click="voltar" aria-label="Voltar">
  <svg viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </svg>
</button>


    <h1 class="title">CADASTRO DE PRODUTOS</h1>
    <div class="form-grid">
      <div class="form-group">
        <label for="nome" class="input-label">Nome do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.nome"
          id="nome"
          name="nome"
          placeholder="Digite o nome do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="tipo" class="input-label">Tipo do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.tipo"
          id="tipo"
          name="tipo"
          placeholder="Digite o tipo do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="marca" class="input-label">Marca do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.marca"
          id="marca"
          name="marca"
          placeholder="Digite a marca do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="modelo" class="input-label">Modelo do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.modelo"
          id="modelo"
          name="modelo"
          placeholder="Digite o modelo do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="codBarras" class="input-label">Código de barras do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.codBarras"
          id="codBarras"
          name="codBarras"
          placeholder="Digite o código de barras do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="categoria" class="input-label">Categoria do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.categoria"
          id="categoria"
          name="categoria"
          placeholder="Digite a categoria do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="codProduto" class="input-label">Código do produto: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.codProduto"
          id="codProduto"
          name="codProduto"
          placeholder="Digite o código do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="dataValidade" class="input-label">Data de validade: <text style="color: red;">*</text></label>
        <input
          type="date"
          v-model="form.dataValidade"
          id="dataValidade"
          name="dataValidade"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="fornecedor" class="input-label">Fornecedor: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.fornecedor"
          id="fornecedor"
          name="fornecedor"
          placeholder="Digite o fornecedor do produto"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="preco" class="input-label">Preço(R$): <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.preco"
          id="preco"
          name="preco"
          placeholder="Digite o preço do produto"
          class="text-input"
        />
      </div>

      















      <div class="form-group">
        <label for="codBarras" class="input-label">Quantidade: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.quantidade"
          id="quantidade"
          name="quantidade"
          placeholder="Digite a quantidade"
          class="text-input"
        />
      </div>
      <div class="form-group">
        <label for="codBarras" class="input-label">Estoque mínimo: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.estMin"
          id="estMin"
          name="estMin" 
          placeholder="Digite o estoque mínimo" 
          class="text-input"
        />
      </div>
      <div class="form-group">
        <label for="codBarras" class="input-label">Estoque máximo: <text style="color: red;">*</text></label>
        <input
          type="text"
          v-model="form.estMax"
          id="estMax"
          name="estMax"
          placeholder="Digite o destoque máximo"
          class="text-input"
        />
      </div>

      <div class="form-group">
        <label for="codBarras" class="input-label">Imagem: <text style="color: red;">*</text></label>
        <input
          type="file"
          id="img"
          name="img"
          placeholder="Insira a imagem do produto"
          class="text-input"
        />
      </div>














      
    </div>

    <div class="botao-container">
      <UiButton class="next" label="Próximo" @click="handleNext" />
    </div>
  </div>
</template>

<script setup>
import { UiButton } from '../components/index.js'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import axios from 'axios'

const router = useRouter()

const form = ref({
  nome: '',
  tipo: '',
  marca: '',
  modelo: '',
  codBarras: '',
  categoria: '',
  codProduto: '',
  dataValidade: '',
  fornecedor: '',
  preco: '',
  quantidade: '',
  estMin: '',
  estMax: '',
  img: ''
})

const voltar = () => {
  router.push('/home'); // Redireciona para a rota desejada
};
function handleNext() {
  console.log('Dados enviados:', form.value)

  if (
    !form.value.nome ||
    !form.value.tipo ||
    !form.value.marca ||
    !form.value.modelo ||
    !form.value.codBarras ||
    !form.value.categoria ||
    !form.value.dataValidade ||
    !form.value.fornecedor ||
    !form.value.preco ||
    !form.value.quantidade ||
    !form.value.estMin ||
    !form.value.estMax ||
    !form.value.img
  ) {
    alert('Preencha todos os campos!')
    return
  }

  axios
    .post('http://localhost:3333/produto', {
      nome: form.value.nome, //"nome" deve ser a variavel q ta no backend
      tipo: form.value.tipo,
      marca: form.value.marca,
      modelo: form.value.modelo,
      codBarras: form.value.codBarras,
      codProduto: form.value.codProduto,
      categoria: form.value.categoria,
      dataValidade: form.value.dataValidade,
      fornecedor: form.value.fornecedor,
      preco: form.value.preco,
      quantidade: form.value.quantidade,
      estMin: form.value.estMin,
      estMax: form.value.estMax,
      img: form.value.img,
    })

    .then((response) => {
      if (response.status === 201) {
        router.push('/ProdutoSucesso')
      }
    })
    .catch((error) => {
      // Se o erro for por conflito (exemplo: produto já existe)
      if (error.response && error.response.status === 409) {
        router.push('/ProdutoNaoSucesso')
      } else {
        // Qualquer outro erro
        console.error('Erro ao registrar produto:', error)
        alert('Erro inesperado, tente novamente.')
      }
    })
}
</script>

<style>
html,
body {
  overflow: hidden; /* Impede o scroll na tela */
  height: 100vh; /* Garante que o conteúdo ocupe toda a altura da tela */
}
.container-registro-produto {
  margin: 0 auto;
  width: 75%;
  margin-top: 50px; /* Ajuste esse valor para descer toda a seção */
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

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px; /* Ajuste para descer mais a seção */
}

.form-group {
  display: flex;
  flex-direction: column;
}

.botao-container {
  display: flex;
  justify-content: center;
}

.next {
  width: 250px;
  height: 72px;
  background-color: #ff7f26;
  margin-top: 10%;
  margin-left: 15%;
}

.next :hover {
  background-color: #b14a01;
}

.next :active {
  background-color: #ff7f26;
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