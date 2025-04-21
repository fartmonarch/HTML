import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'

// 创建应用实例
const app = createApp(App)

// 全局配置
app.config.errorHandler = (err) => {
  console.error('全局错误:', err)
}

// 挂载应用
createApp(App).mount('#app')
