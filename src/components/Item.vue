<template>
    <div class="row my-2">
        <div class="col-7 d-flex align-items-baseline text-left" v-bind:class="{ done: todo.completed }">
            <input @change="todo.completed = !todo.completed" type="checkbox" class="mr-2" v-bind:checked="todo.completed">
            <h5 @click="todo.completed = !todo.completed" v-if="!editing">{{ todo.title | upperCase }}</h5>
            <input v-else v-model="title" type="text" class="form-control" ref="update" @keyup.enter="updateTodo(todo.id)">
        </div>
        <div class="col-5 text-right text-nowrap">
            <button @click="updateTodo(todo.id)" v-bind:class="{ 'text-success': editing }" class="btn btn-sm btn-light border mr-2"><font-awesome-icon v-bind:icon="editing ? 'check' : 'pen'" /></button>
            <button @click="DELETE_TODO(todo.id)" class="btn btn-sm btn-light text-danger border"><font-awesome-icon icon="trash" /></button>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            title: '',
            editing: false
        }
    },
    updated() {
        if (this.editing) this.$refs.update.focus();
    },
    methods: {
        ...mapMutations(['EDIT_TODO', 'DELETE_TODO']),
        updateTodo(id) {
            this.editing = !this.editing

            if (!this.editing && this.title.trim()) {
                this.EDIT_TODO({
                    id,
                    title: this.title
                });

                this.title = ''
            }
        }
    },
    filters: {
        upperCase: (str) => str[0].toUpperCase() + str.slice(1)
    }
}
</script>

<style scoped>
h5, input {
    cursor: pointer;
}

.done {
    text-decoration: line-through;
}
</style>