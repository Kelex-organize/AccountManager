<script setup lang="ts">
import type { SidebarItem as SidebarItemType } from '@/types/Sidebar'

const { item } = defineProps<{ item: SidebarItemType }>()
</script>

<template>
    <RouterLink
        :to="item.link"
        class="flex items-center gap-4 p-3 rounded-md hover:bg-zinc-800 hover:shadow-lg cursor-pointer transition-all duration-300"
    >
        <component :is="item.icon" class="w-5 h-5 text-zinc-400" />
    </RouterLink>
</template>
