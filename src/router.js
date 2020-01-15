import Vue from 'vue'
import Router from 'vue-router'
import Slider from '@jeremyhamm/vue-slider'



import multiguard from 'vue-router-multiguard';
import { auth, guest, APIAdmin } from "./guards"

import Zona from "./views/Zona"
import Login from "./views/Login"
import Settings from "./views/Settings"
import Dashboard from "./views/Dashboard"
import Parametros from "./views/Parametros"

Vue.use(Slider)
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login,
            beforeEnter: multiguard([guest])
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            beforeEnter: multiguard([guest]),
            //beforeEnter: multiguard([auth]),
        },
        {
            path: '/zona/:id',
            name: 'zona',
            component: Zona,
            beforeEnter: multiguard([guest])
            //beforeEnter: multiguard([auth]),
        },
        {
            path: '/parametros/:id',
            name: 'parametros',
            component: Parametros,
            beforeEnter: multiguard([guest])
            //beforeEnter: multiguard([auth]),
        },
        {
            path: '/ajustes',
            name: 'ajustes',
            component: Settings,
            beforeEnter: multiguard([guest])
            //beforeEnter: multiguard([auth, APIAdmin]),
        }
        // {
        //   path: '/page/:sectionSlug',
        //   name: 'dynamicContent',
        //   // route level code-splitting
        //   // this generates a separate chunk (dynamicContent.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "dynamicContent" */ 'Menu/DynamicContent.vue')
        // }

    ]
})
