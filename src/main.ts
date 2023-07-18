import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/config/permission'
import pinia from './stores'
import { createI18n } from 'vue-i18n'

// 国际化语言包
const i18n = createI18n({
  locale: 'ch'
})

const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(i18n)
app.mount('#app')
