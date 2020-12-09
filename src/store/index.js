import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    INIT_TODOS: (state, todos) => state.todos = todos,
    ADD_TODO: (state, todo) => state.todos.unshift(todo),
    EDIT_TODO: (state, todo) => state.todos.find(t => t.id == todo.id).title = todo.title,
    DELETE_TODO: (state, id) => state.todos = state.todos.filter(todo => todo.id != id),
    DELETE_TODOS: (state) => state.todos = [],
    DELETE_COMPLETED_TODOS: (state) => state.todos = state.todos.filter(todo => !todo.completed),
    DELETE_NOT_COMPLETED_TODOS: (state) => state.todos = state.todos.filter(todo => todo.completed)
  },
  actions: {
    fetchTodos: ({commit}, payload) => commit('INIT_TODOS', payload),
    clearAll: ({commit}, payload) => {
      if (payload === 'all')
        commit('DELETE_TODOS')
      else if (payload === 'completed')
        commit('DELETE_COMPLETED_TODOS')
      else if (payload === 'not-completed')
        commit('DELETE_NOT_COMPLETED_TODOS')
    }
  },
  getters: {
    todos: (state) => state.todos.filter(todo => todo.title).sort((a, b) => a.completed - b.completed),
    completedTodos: (state, getters) => getters.todos.filter(todo => todo.completed),
    notCompletedTodos: (state, getters) => getters.todos.filter(todo => !todo.completed)
  }
})
