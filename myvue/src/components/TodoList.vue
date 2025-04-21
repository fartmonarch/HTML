<template>
    <div class="todo-list">
        <h2>待办事项</h2>

        <!-- 条件渲染 -->
        <div v-if="todos.length === 0">
            <p>没有待办事项</p>
        </div>

        <!-- 列表渲染 -->
        <ul v-else>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="removeTodo(index)">删除</button>
            </li>
        </ul>

        <!-- 表单绑定 -->
        <div class="add-todo">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新事项">
            <button @click="addTodo">添加</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: ['学习Vue', '写代码', '阅读文档'],
            newTodo: ''
        }
    },

    methods: {
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push(this.newTodo)
                this.newTodo = ''
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1)
        }
    }
}
</script>

<style scoped>
.todo-list {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
}

.add-todo {
    margin-top: 20px;
}
</style>