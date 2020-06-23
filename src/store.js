import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Estado 
const state = {
    todos: [],
    loading: false
}

// Action (Quando quisermos recuperar os dados de uma API por exemplo)
const actions = {
    addTodo({commit}, todo){
        commit('setLoading', true)
        return new Promise(resolve =>{ // Usando o promise e o resolve é uma forma boa para lidar com requisições assincronas
            setTimeout(() =>{
                todo.id = Date.now()
                commit('addTodo', todo)
                commit('setLoading', false)
                resolve(todo)
            }, 450)
        })
    },

    toggleTodo({commit}, todo){        
        commit('toggleTodo', todo);        
    },

    removeTodo({commit}, todo){
        commit('removeTodo', todo);        
    },

    checkAll({commit, state}){
        const uncheckedsIds = state.todos.filter(item => !item.checked).map(item => item.id)
        commit('toggleList', uncheckedsIds);
    },

    uncheckAll({commit, state}){
        const checkedsIds = state.todos.filter(item => item.checked).map(item => item.id)
        commit('toggleList', checkedsIds);
    },

    removeAllCheckeds({commit, state}){
        const checkedsIds = state.todos.filter(item => item.checked).map(item => item.id)
        commit('removeList', checkedsIds);
    }
}

// GETTERS : não alteram os valores, apenas as mutations, mas podem retornar uma nova lista, com filtros por exemplo
const getters = {
    uncheckeds(state){
        return state.todos.filter(todo => todo.checked === false);
    },

    checkeds(state){
        return state.todos.filter(todo => todo.checked);
    }
}

const mutations = {
    addTodo(state, payload){
        state.todos.push(payload)
    },
    
    setLoading(state, payload){
        state.loading = payload
    },

    toggleTodo(state, payload){
        const index = state.todos.findIndex(item => item.id === payload.id);
        if( index > -1){
            const checked = !state.todos[index].checked;
            // Metodo $set é nativo do vue para alterar o valor de alguma propriedade de um array ou objeto // $set(array ou objeto, index para alterar, valor novo)
            Vue.set(state.todos, index, {...state.todos[index], checked})
            //  {...this.todos[index], checked} <= Esse formato vem do ES6, ele atribui todas as propriedades do objeto,
            // porém altera o valor do checked apenas, por exemplo
            // >>    var fruta = {nome : "jamelao", estado: "verde"};
            // >>   var fruta2 = { ...fruta, estado: "maduro"}; // Você pega tudo de fruta e mantem, porem o estado fica com o valor novo definido
                // Valores de fruta2 (nome: "Jamelao", estado: "maduro")
        }
    },

    removeTodo(state, payload){
        // Outra forma de remover do Array utilizando o filter do Javascript
        state.todos = state.todos.filter(item => item.id !== payload.id)
        
        //const index = state.todos.findIndex(item => item.id === payload.id);
        //if( index > -1){
        //Vue.delete(state.todos, index);
        //$delete => Função nativa do Vue, passamos o array e o index do elemento, obejto que queremos remover  
         //}
    },

    toggleList(state, todosIds){
        const todos = state.todos.map(item => {
            return todosIds.includes(item.id) ? { ...item, checked: !item.checked } : item
        })
        state.todos = todos;
    },

    removeList(state, todosIds){
        const todos = state.todos.filter(item => !todosIds.includes(item.id));
        state.todos = todos;
    }
    
}

// Criando uma store de exemplo
const store = new Vuex.Store({ state, actions, mutations, getters })

   /* Antigo code da const Store
    state: {
        count: 0
    },
    mutations: {
        setCount(state, payload){
            //console.log('Chamou o setCount', payload);
            state.count = payload
        }
    } */

export default store

// No State podemos adicionar propriedades e definir valore iniciais para ela

// Mutations são métodos simples ,as quais precisam ser passados 2 parâmetros, o state e o payload
    // - No caso o state é obrigatório, o payload nem sempre 
    // o state atual é sempre passado para os métodos, o payload seria o valor alterado que 
    // foi modificado e será retornado com essa novas modificações
