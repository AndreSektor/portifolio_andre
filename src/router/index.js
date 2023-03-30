import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/habilidades',
        name: 'HabilidadesView',
        component: () => import('../views/Habilidades.vue')
    },
    {
        path: '/experiencias',
        name: 'ExperienciasView',
        component: () => import('../views/Experiencias.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router