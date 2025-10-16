<script setup lang="ts">
import type { SidebarMenu as SidebarMenuType } from '@/types/Sidebar'
import SidebarItem from './SidebarItem.vue'

const { menu } = defineProps<{ menu: SidebarMenuType }>()
</script>

<template>
    <nav class="flex flex-col gap-6">
        <SidebarItem v-for="(item, index) in menu.items" :key="index" :item="item" />
    </nav>
</template>
