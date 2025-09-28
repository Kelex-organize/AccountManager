<script setup lang="ts">
import SidebarMenu from './SidebarMenu.vue'
import { Menu, Home, SettingsIcon, FileText, BarChart3, Wallet, CreditCard } from 'lucide-vue-next'
import type { Component } from 'vue'

interface MenuItem {
    icon: Component
    text: string
    link: string
}

const menuItemsTop: MenuItem[] = [
    { icon: Home, text: 'Vista principal', link: '/' },
    { icon: FileText, text: 'Reporte', link: '/reports' },
    { icon: BarChart3, text: 'Análisis', link: '/analytics' },
    { icon: Wallet, text: 'Presupuesto', link: '/budget' },
    { icon: CreditCard, text: 'Cuentas', link: '/accounts' },
]

const menuItemsBottom: MenuItem[] = [{ icon: SettingsIcon, text: 'Settings', link: '/settings' }]
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
