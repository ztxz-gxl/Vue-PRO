import { createRouter, createWebHistory } from 'vue-router';
export default createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes:[
        {
            path: '/',
            redirect:'/LoginView'
        },
        {
            path: '/MainView',
            name: 'MainView',
            component: () => import('@/views/MainView'),
            meta: {
                index: 1
            }
        },
        {
            path: '/ArandView',
            name: 'ArandView',
            component: () => import('@/views/ArandView'),
            meta: {
                index: 1
            }
        },
        {
            path: '/LandView',
            name: 'LandView',
            component: () => import('@/views/LandView'),
            meta: {
                index: 1
            }
        },
        {
            path: '/WeaView',
            name: 'WeaView',
            component: () => import('@/views/WeaView'),
            meta: {
                index: 1
            }
        },
        {
            path: '/LoginView',
            name: 'LoginView',
            component: () => import('@/views/RandL/LoginView'),
            meta: {
                index: 1
            }
        },

        {
            path: '/RESView',
            name: 'RESView',
            component: () => import('@/views/RandL/RESView'),
            meta: {
                index: 1
            }
        },

        {
            path: '/ElementUI',
            name: 'ElementUI',
            component: () => import('@/views/ElementUI'),
            meta: {
                index: 1
            }
        },
        {
            path: '/DetailView',
            name: 'DetailView',
            component: () => import('@/views/DetailView'),
            meta: {
                index: 1
            }
        },
        ]
})
