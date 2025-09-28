import DashboardView from '@/views/DashboardView.vue'
import ReportsView from '@/views/ReportsView.vue'
import AnalyticsView from '@/views/AnalyticsView.vue'
import BudgetView from '@/views/BudgetView.vue'
import AccountsView from '@/views/AccountsView.vue'
import SettingView from '@/views/SettingsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: DashboardView,
        },
        {
            path: '/reports',
            name: 'reports',
            component: ReportsView,
        },
        {
            path: '/analytics',
            name: 'analytics',
            component: AnalyticsView,
        },
        {
            path: '/budget',
            name: 'budget',
            component: BudgetView,
        },
        {
            path: '/accounts',
            name: 'accounts',
            component: AccountsView,
        },
        {
            path: '/settings',
            name: 'settings',
            component: SettingView,
        },
    ],
})

export default router
