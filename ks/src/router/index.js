import { createRouter,createWebHashHistory } from "vue-router";

const Layout=()=>import('../view/Layout.vue');
const Home=()=>import('../view/home/index.vue');
const Login=()=>import('../view/login/index.vue');


const routes=[
    {
        path:'/',
        component:Layout,
        children: [
            {path:'/home',component:Home},
            {path:'/',component:Login}
        ]
    }
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;