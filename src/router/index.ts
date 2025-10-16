import { createRouter, createWebHistory } from 'vue-router'
import { HomeView, ReportsView, AnalyticsView, BudgetView, AccountsView } from '@/views'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
        },
        {
            path: '/reports',
            name: 'Reports',
            component: ReportsView,
        },
        {
            path: '/analytics',
            name: 'Analytics',
            component: AnalyticsView,
        },
        {
            path: '/budget',
            name: 'Budget',
            component: BudgetView,
        },
        {
            path: '/accounts',
            name: 'Accounts',
            component: AccountsView,
        },
    ],
})

export default router
