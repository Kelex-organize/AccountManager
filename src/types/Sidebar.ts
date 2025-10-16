import type { Component } from 'vue'

export interface SidebarMenu {
    items: SidebarItem[]
}

export interface SidebarItem {
    icon: Component
    title: string
    link: string
}
