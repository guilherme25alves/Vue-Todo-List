<template>
    <!-- Componente criado para a lista ficar em um componente separado do resto da página -->     
          <div class="tile" :class="{ checked: todo.checked}">
              <!--:class="{ checked: todo.checked}" 
            - Quando utilizamos o : podemos usar o javascript na tag
            - No caso de :class estamos dizendo pra ele atribuir uma classe
            - É passado o objeto todo.checked (Desse formato se for true o atributo checked ele atribui a classe)
               -->
            <div class="tile-icon">              
                <i class="icon icon-2x" :class="todo.checked ? 'icon-check' : 'icon-time'"></i>              
            </div>
            <dir class="tile-content">
              <p class="tile-subtitle">{{ todo.description }}</p>   
              <div>
                  <!-- @click é semelhante ao onclick do javascript-->
                  <!-- $emit o componente envia o evento 'toggle' para o pai(App.vue)
                  Componentes que instanciarem esse componente e envia o todo como parâmetro para o pai -->
                  <button @click="$emit('toggle', todo)" class="btn btn-link">
                    <!-- v-if, v-else diretivas do vue, autoexplicativas kk if e else
                        if validando se todo.checked igual a TRUE mostra o desmarcar, se não o concluída(Text do button)
                    -->
                      <span v-if="todo.checked">Desmarcar</span>              
                      <span v-else>Concluída</span>
                  </button>              
                  <button @click="$emit('remove', todo)" class="btn btn-link">
                    <span class="text-error">Remover</span>
                  </button>
                </div>           
            </dir>             
          </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
    .checked{
        text-decoration: line-through;
        color: lightgray;
    }
    .tile{
        margin-top: 1rem;
        padding: 1rem;
        box-shadow: 0 0.25rem 1rem rgba(48, 55, 66, 0.15);
    }
</style>