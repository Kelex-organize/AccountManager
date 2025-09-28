import type { Component } from 'vue'

export interface SidebarItem {
    icon: Component
    text: string
    link: string
}

export interface SidebarMenu {
    items: SidebarItem[]
}
