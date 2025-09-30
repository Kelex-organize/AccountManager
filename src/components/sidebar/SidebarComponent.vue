<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import type { SidebarMenu as SidebarMenuType } from '@/types'
import {
    Menu,
    Home,
    SettingsIcon,
    FolderOpen,
    BarChart3,
    Wallet,
    CreditCard,
} from 'lucide-vue-next'
import { ref } from 'vue'

const menuItemsTop: SidebarMenuType = {
    items: [
        { icon: Home, text: 'Home', link: '/' },
        { icon: FolderOpen, text: 'Reports', link: '/reports' },
        { icon: BarChart3, text: 'Analytics', link: '/analytics' },
        { icon: Wallet, text: 'Budget', link: '/budget' },
        { icon: CreditCard, text: 'Accounts', link: '/accounts' },
    ],
}

const menuItemsBottom: SidebarMenuType = {
    items: [{ icon: SettingsIcon, text: 'Settings', link: '/settings' }],
}

const isCollapsed = ref(false)

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value
}
</script>

<template>
    <aside
        :class="[
            'flex flex-col overflow-hidden transition-all duration-300 p-2',
            isCollapsed ? 'w-16' : 'w-[250px]',
        ]"
    >
        <div class="h-1/5 flex">
            <div
                class="h-fit p-3 rounded-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
                @click="toggleSidebar"
            >
                <Menu class="w-4 h-4 text-zinc-400 transition-colors duration-300" />
            </div>
        </div>
        <div class="h-4/5 flex flex-col justify-between">
            <SidebarMenu
                :menu="menuItemsTop"
                :collapsed="isCollapsed"
                class="flex flex-col gap-2"
            />

            <SidebarMenu
                :menu="menuItemsBottom"
                :collapsed="isCollapsed"
                class="flex flex-col gap-2"
            />
        </div>
    </aside>
</template>
