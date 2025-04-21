<template>
  <div class="app-container">
    <h1>Vue.js 学习案例</h1>

    <!-- 展示组件通信 -->
    <Counter :initial-count="5" @count-changed="handleCountChange" />

    <!-- 展示条件渲染和列表渲染 -->
    <TodoList />

    <!-- 展示计算属性 -->
    <div class="stats">
      <p>总字数: {{ totalChars }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import Counter from "./components/Counter.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { Counter, TodoList },

  data() {
    return {
      todos: ["学习Vue", "写代码", "阅读文档"],
    };
  },

  computed: {
    totalChars() {
      return this.todos.join("").length;
    },
  },

  methods: {
    handleCountChange(newCount) {
      console.log("计数变化:", newCount);
    },
  },

  // 生命周期钩子
  mounted() {
    console.log("App组件已挂载");
  },
};
</script>

<style scoped>
.app-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
