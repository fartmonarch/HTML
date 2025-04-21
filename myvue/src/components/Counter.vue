<template>
  <div class="counter">
    <h2>计数器组件</h2>
    <p>当前计数: {{ count }}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <button @click="reset">重置</button>
  </div>
</template>

<script>
export default {
  props: {
    initialCount: {
      type: Number,
      default: 0
    }
  },
  
  data() {
    return {
      count: this.initialCount
    }
  },
  
  methods: {
    increment() {
      this.count++
      this.emitCountChange()
    },
    decrement() {
      this.count--
      this.emitCountChange()
    },
    reset() {
      this.count = this.initialCount
      this.emitCountChange()
    },
    emitCountChange() {
      this.$emit('count-changed', this.count)
    }
  },
  
  // 侦听器示例
  watch: {
    count(newVal, oldVal) {
      console.log(`计数从 ${oldVal} 变为 ${newVal}`)
    }
  }
}
</script>

<style scoped>
.counter {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
}
button {
  margin: 0 5px;
}
</style>