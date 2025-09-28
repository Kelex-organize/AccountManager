<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import type { SidebarMenu as SidebarMenuType } from '@/types'
import { Menu, Home, SettingsIcon, FileText, BarChart3, Wallet, CreditCard } from 'lucide-vue-next'

const menuItemsTop: SidebarMenuType = {
    items: [
        { icon: Home, text: 'Dashboard', link: '/' },
        { icon: FileText, text: 'Reports', link: '/reports' },
        { icon: BarChart3, text: 'Analytics', link: '/analytics' },
        { icon: Wallet, text: 'Budget', link: '/budget' },
        { icon: CreditCard, text: 'Accounts', link: '/accounts' },
    ],
}

const menuItemsBottom: SidebarMenuType = {
    items: [{ icon: SettingsIcon, text: 'Settings', link: '/settings' }],
}
</script>

<template>
    <aside class="m-6 rounded-2xl w-64 bg-gray-800 text-white flex flex-col justify-between p-4">
        <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <div class="px-3 py-2 rounded hover:bg-gray-700">
                    <Menu />
                </div>
                <span class="text-lg font-semibold">CountManager</span>
            </div>

            <SidebarMenu :menu="menuItemsTop" />
        </div>

        <SidebarMenu :menu="menuItemsBottom" />
    </aside>
</template>
