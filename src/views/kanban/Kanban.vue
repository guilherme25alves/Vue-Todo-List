<template>
    <div class="container-board">
        <div class="columns">
            <div class="column col-5 ">           
                <div class="panel">                
                    <div class="panel-header">
                        <div class="panel-title">Todo</div>
                    </div>
                    <div class="panel-body">
                        <todo 
                            v-for="todo in uncheckeds"
                            :todo="todo" 
                            @remove="removeTodo" 
                            @toggle="toggleTodo" 
                            :key="todo.id" 
                        />
                    </div>
                    <div class="panel-footer">
                        <button 
                            @click="checkAll" 
                            class="btn btn-link float-right"
                            v-if="uncheckeds.length > 0"
                    >Concluir tudo</button>
                    </div>               
                </div>
            </div>    
            <div class="column col-5">
                <div class="panel">                
                    <div class="panel-header">
                        <div class="panel-title">Done</div>
                    </div>
                    <div class="panel-body">
                        <todo 
                            v-for="todo in checkeds" 
                            :todo="todo" 
                            @remove="removeTodo" 
                            @toggle="toggleTodo" 
                            :key="todo.id" 
                        />
                    </div>
                    <div class="panel-footer">
                        <button 
                            @click="uncheckAll" 
                            class="btn btn-link float-right"
                            v-if="checkeds.length > 0"
                        >Desmarcar tudo</button>
                        <button 
                            @click="removeAllCheckeds" 
                            class="btn btn-link float-right text-error"
                            v-if="checkeds.length > 0"
                        >Remover tudo</button>
                        
                    </div>               
                </div>
            </div>    
        </div>
    </div>
</template>

<script>

import Todo from '@/components/Todo'
import { mapGetters, mapActions } from 'vuex' // Mesma funcionalidade do mapActions e mapState, porém para os getters

// O computed serve como uma funcão que vai retornar alguma propriedade para ser acessada pela View 
export default {
  components: { Todo },
  computed: {
      ...mapGetters(['uncheckeds', 'checkeds'])
  },
  methods: {
      ...mapActions([
          'removeTodo', 
          'toggleTodo',     
          'checkAll', 
          'uncheckAll', 
          'removeAllCheckeds'
    ])
  }
  
  /*
    computed:{
        // Podemos retornar tanto uma função como um obejto 
        //count(){
        //    return this.$store.state.count
        //}
        count:{
            set(value){
                this.$store.commit('setCount', value); // método commit serve para chamar a mutation no primeiro 
                // parâmetro e o valor para ser usado pela mutation no seguno 
             },
            get(){
                return this.$store.state.count;
            }
        }
    },
    methods: {
        increment(){
            this.count = this.count + 1;
        },
        decrement(){
            this.count = this.count - 1;
        }
    } */
}

</script>

<style scoped>
    .container-board{
        height: calc(100vh - 100px);
        padding: 10px;
    }
    .columns{
        height: 100%;
    }
    .columns .column .panel{
        height: 100%;
        border: 0;
        box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
    }

</style>