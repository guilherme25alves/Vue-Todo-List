<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->      
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanban" class="btn btn-link">Kanban</router-link>
        </section>
        <section class="navbar-center">
          <img class="img-responsive img-logo" src="@/assets/img/task_img.jpg" alt="Logo do projeto">
        </section>
        <section class="navbar-section">
          <a href="https://www.linkedin.com/in/guilherme-alves-971208118/" class="btn btn-link">Linkedin</a>
          <a href="https://github.com/guilherme25alves" class="btn btn-link">Github</a>
        </section>
      </header>
      <router-view class="pt-2" />
    </div>      
  </div>
</template>

<style scoped>
  .img-logo {
    max-width: 90px;
    margin: 0 auto;
  }
</style>

<!-- router-link é diretiva do Vue-router como se fosse um a href do html para direcionar para alguma rota-->

<!-- router-view é uma diretiva do Vue-router para mostrar uma view que foi criada e importada para o componente pai -->

