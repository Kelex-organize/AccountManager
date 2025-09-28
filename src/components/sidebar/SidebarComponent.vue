<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import { Menu, HomeIcon, SettingsIcon, ChartLine } from 'lucide-vue-next'
import type { Component } from 'vue'

interface MenuItem {
    icon: Component
    text: string
    link: string
}

const menuItemsTop: MenuItem[] = [
    { icon: HomeIcon, text: 'Dashboard', link: '/' },
    { icon: ChartLine, text: 'Analysis', link: '/analysis' },
]

const menuItemsBottom: MenuItem[] = [
    { icon: SettingsIcon, text: 'Configuración', link: '/configuracion' },
]
</script>

<template>
    <aside class="m-6 rounded-2xl w-64 bg-gray-800 text-white flex flex-col justify-between p-4">
        <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <div class="px-3 py-2 rounded hover:bg-gray-700"><Menu /></div>
                <span>CountDown</span>
            </div>
            <SidebarMenu :items="menuItemsTop" />
        </div>
        <SidebarMenu :items="menuItemsBottom" />
    </aside>
</template>
