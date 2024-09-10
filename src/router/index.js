import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Jobs from "@/views/JobsView.vue"
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
            path: '/jobs/:id',
            name: 'job-view',
            component: JobView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found-view',
            component: NotFoundView
        }
    ]
});

export default router;