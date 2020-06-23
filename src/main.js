import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// Precisamos aqui importar o arquivo de index.js de Router (Não precisamos do caminho até a index porque ele
// vai subentender até a pasta router)
import store from '@/store'
// Precisamos também importar o store para o nosso arquivo principal

import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

Vue.config.productionTip = false

// Com esse comando, temos acesso as funções nativas e ao Vue no console do nosso navegador
window.vue = Vue

new Vue({
  render: h => h(App),
  router, // Passamos o router como parâmetro para a instância principal do Vue no main.js
  store
}).$mount('#app')
