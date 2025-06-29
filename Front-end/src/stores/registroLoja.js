// src/stores/registerData.js
import { ref } from 'vue'

export const cadastroLoja = ref({
  dadosLoja: {
    razaoSocial: '',
    nomeFantasia: '',
    telefone: '',
    whatsapp: false,
    cnpj:'',
    codDono:''
  },
  enderecoLoja: {
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    logradouro: '',
    numero: '',
    complemento: ''
  }
})
