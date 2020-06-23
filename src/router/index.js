// ## ARQUIVO DE ROTAS

// Importamos primeiramente o Vue e o Vue-Router 
import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Kanban from '@/views/kanban/Kanban'

// Utilizamos esse comando para poder fazer uso do Vue-router
    // Registro do Router no Vue
Vue.use(Router)

// Criamos um Array que vai contér as propriedades de cada rota do Vue, pois na criação da instância do Vue Router
//  ele recebe esse array com as rotas como parâmetro
const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        meta: {} 
    },
    {
        name: 'kanban',
        path: '/kanban',
        component: Kanban
    }
]

// Criamos uma instância do objeto Router, passando o array de rotas para esse objeto
const router = new Router({ routes })

// Exportamos o router para que ele possa ser usado e acessado em outras partes do projeto
export default router