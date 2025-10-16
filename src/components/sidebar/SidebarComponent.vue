<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import type { SidebarMenu as SidebarMenuType } from '@/types/Sidebar'
import {
    Menu,
    Home,
    SettingsIcon,
    FolderOpen,
    BarChart3,
    Wallet,
    CreditCard,
} from 'lucide-vue-next'

const menuItemsTop: SidebarMenuType = {
    items: [
        { icon: Home, title: 'Home', link: '/' },
        { icon: FolderOpen, title: 'Reports', link: '/reports' },
        { icon: BarChart3, title: 'Analytics', link: '/analytics' },
        { icon: Wallet, title: 'Budget', link: '/budget' },
        { icon: CreditCard, title: 'Accounts', link: '/accounts' },
    ],
}

const menuItemsBottom: SidebarMenuType = {
    items: [{ icon: SettingsIcon, title: 'Settings', link: '/settings' }],
}
</script>

<template>
    <aside class="flex flex-col justify-center">
        <div class="h-full p-3 bg-zinc-950 flex flex-col rounded-xl shadow-xl/30">
            <div class="h-1/5">
                <div
                    class="flex items-center p-3 rounded-md hover:bg-zinc-900 hover:shadow-lg cursor-pointer transition-all duration-300"
                >
                    <Menu class="w-5 h-5 text-zinc-400" />
                </div>
            </div>
            <div class="h-4/5 flex flex-col justify-between">
                <SidebarMenu :menu="menuItemsTop" />

                <SidebarMenu :menu="menuItemsBottom" />
            </div>
        </div>
    </aside>
</template>
