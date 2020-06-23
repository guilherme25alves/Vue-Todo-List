<template>
    <div class="container grid-xs py-2">
      <form @submit.prevent="add(todo)"> 
          <!-- @submit.prevnent (Forma de se atribuir um method do Vue para o form
        . O prevent é usado para evitar o reload da tela quando o form é submetido)
        Referenciar o elemento todo no método (o parâmetro que definimos no script, dento do method)-->
        <div class="input-group">
          <input type="text" v-model="todo.description" class="form-input" placeholder="Novo todo">
          <button class="btn btn-primary input-group-btn" :class="{loading}">Adicionar</button>
        </div>
      </form>
        <!-- Forma de printar um dado pelo Vue.js 
        {{ todos }}
        -->
        <div class="todo-list">
          <!-- v-for (foreach nos elementos) 0 :key é o identificador unico para o vue não se perder no laço -->
          <!-- Essa tag todo faz referência ao contéudo do componente Todo que vai ser renderizado-->
          <todo v-for="task in todos" :key="task.id" @toggle="toggleTodo" @remove="removeTodo" :todo="task"></todo>
          <!-- @toggle é o evento que foi emitido pelo Componente filho (Todo.vue) ao clicar no botão concluído 
          @<nome-do-evento> : É a forma de se recuperar os eventos emitidos pelo $emit do Componente filho
            Recuperamos esse evento emitido e atribuimos algum método pra ele pra gerar alguma ação -->
        </div>
    </div>
</template>

<script>
// Importando o componente da lista, que inicialmente ficava nessa mesma View
// Temos que referenciar ele também dentro do components no export default do Script 
import Todo from '@/components/Todo'
// Usamos o @ para ele pegar o endereço do arquivo a partir da pasta SRC

// Com o mapActions podemos mapear melhor nossos states/ mutations
// mapActions mapeamos as ações os métodos para add, remover, toggle, entre outros
// mapState mapeamos os estados, as propriedades que guardam valores e podem ser alterados seus comportamentos e valores
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  data(){
    //Utilizando o Vuex
    return {  todo: { checked: false} }; 

  },
  computed:{
    
    ...mapState(['todos', 'loading'])

    //--> Já mapeado no mapState
    //todos(){
    //  return this.$store.state.todos;
    //},
    //--> Já mapeado no mapState
    //loading(){
    //  return this.$store.state.loading;
    //}
  },
  methods: {

    ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),

    async add(todo){
          // Como a action addTodo tá mapeada trocamos o codigo abaixo pelo descomentado
          //await this.$store.dispatch('addTodo', todo) 
          await this.addTodo(todo);
          this.todo = { checked: false };         
    },
    
    //--> Já mapeada agora com o mapActions
    //toggleTodo(todo){
    //     this.$store.dispatch('toggleTodo', todo);   
    //},
    //--> Já mapeada também com o mapActions
    //removeTodo(todo){
    // this.$store.dispatch('removeTodo', todo);
    //},
  },
  components: {
     Todo
  }
}
</script>

<style scoped>
  /* Tag scoped adicionada quer dizer que esse style é aplicado somente para este componente */
  .todo-list{
    padding-top: 2rem;
  }
</style>
