<template>
    <div class="input-group">
        <input @keyup.enter="add" v-model="title" type="text" class="form-control">
        <span class="input-group-append">
            <button @click="add" type="submit" class="btn btn-primary">Add</button>
        </span>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapMutations(['ADD_TODO']),
        add() {
            this.ADD_TODO({
                id: Date.now(),
                title: this.title.trim(),
                completed: false
            })

            this.title = ''
        }
    }
}
</script>