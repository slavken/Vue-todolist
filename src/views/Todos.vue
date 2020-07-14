<template>
  <div>
    <h1 class="mb-4">Todo List</h1>
    <Add />
    <div class="clearfix mt-3">
      <div class="float-left">
          <select class="form-control form-control-sm" v-model="filter">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not completed</option>
          </select>
      </div>
      <button @click="CLEAR_ALL(filter)" class="btn btn-sm btn-light border float-right">Clear all</button>
    </div>
    <hr>
    <Loader v-if="loading" />
    <div v-else-if="filteredTodos.length" v-for="todo in filteredTodos" v-bind:key="todo.id">
      <Item v-bind:todo="todo" />
    </div>
    <p v-else>No tasks</p>
    <div v-if="filteredTodos.length">
      qty:
      {{ filteredTodos.length }}
    </div>
  </div>
</template>

<script>
import Add from '@/components/Add.vue'
import Item from '@/components/Item.vue'
import Loader from '../components/Loader.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Todos',
  components: {
    Add,
    Item,
    Loader
  },
  data() {
    return {
      filter: 'all',
      loading: true
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(res => {
        this.FETCH_TODOS(res)
        this.loading = false
      });
  },
  methods: mapActions(['FETCH_TODOS', 'CLEAR_ALL']),
  computed: {
    ...mapGetters(['TODOS', 'COMPLETED_TODOS', 'NOT_COMPLETED_TODOS']),
    filteredTodos() {
      if (this.filter === 'completed')
        return this.COMPLETED_TODOS
      else if (this.filter === 'not-completed')
        return this.NOT_COMPLETED_TODOS
      else
        return this.TODOS
    }
  }
}
</script>