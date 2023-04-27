import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Jose from '../src/components/Jose.vue'
import Carlos from '../src/components/Carlos.vue'

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {path: '/Jose', component: Jose},
        {path: '/Carlos', component: Carlos}
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
