import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'components/home.vue'
import Dragger from 'components/Dragger.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/dragger',
            component: Dragger
        }
    ]
});

export default router;