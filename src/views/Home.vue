<template>
  <div>
    <h1 class="mb-4">Home page</h1>
    <div class="jumbotron">
      <h1 class="display-4">TodoList with Vue.js!</h1>
      <p class="lead">This is a simple todo manager</p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate exercitationem amet dolor expedita!</p>
      <p class="lead">
        <router-link to="/todolist" class="btn btn-primary btn-lg">Start now</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
