const routes = [
  {
    path: '/',
    component: () => import('src/pages/HomePage.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/home',
    component: () => import('src/pages/HomePage.vue'),
  },
  {
    path: '/login',
    component: () => import('src/pages/LoginorRegister.vue'),
  },
  {
    path: '/register',
    component: () => import('src/pages/RegistroUsuario.vue'),
  },
  {
    path: '/registerProp',
    component: () => import('src/pages/RegistroProp.vue'),
  },
  {
    path: '/loginPage',
    component: () => import('src/pages/PaginaLogin.vue'),
  },
  {
    path: '/dataStore',
    component: () => import('src/pages/DadosLoja.vue'),
  },
  {
    path: '/adressStore',
    component: () => import('src/pages/EnderecoLoja.vue'),
  },
  {
    path: '/cadastroProduto',
    component: () => import('src/pages/cadastroProduto.vue'),
  },
  {
    path: '/ProdutoSucesso',
    component: () => import('src/pages/ProdutoSucesso.vue'),
  },
  {
    path: '/ProdutoNaoSucesso',
    component: () => import('src/pages/ProdutoNaoSucesso.vue'),
  },
  {
    path: '/cadastroFuncionario',
    component: () => import('src/pages/CadastroFuncionario.vue'),
  },
  {
    path: '/TelaVenda',
    component: () => import('src/pages/TelaVenda.vue'),
  },
  {
    path: '/FecharCaixa',
    component: () => import('src/pages/CaixaFechado.vue'),
  },
  {
    path: '/CaixaLivre',
    component: () => import('src/pages/CaixaLivre.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {
    path: '',
  },
]

export default routes
