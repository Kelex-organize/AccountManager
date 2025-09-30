<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { SidebarItem } from '@/types'

const { item } = defineProps<{ item: SidebarItem; collapsed: boolean }>()
</script>

<template>
    <li class="relative group">
        <RouterLink
            :to="item.link"
            class="h-12 flex items-center px-4 py-2 rounded-md transition-all duration-300 hover:bg-zinc-800 hover:shadow-lg"
            active-class="bg-zinc-800 shadow-lg"
            :class="collapsed ? 'gap-0' : 'gap-3'"
        >
            <component
                :is="item.icon"
                class="w-4 h-4 text-zinc-400 transition-colors duration-300"
            />
            <span
                class="text-zinc-400 transition-all duration-300 overflow-hidden"
                :class="collapsed ? 'opacity-0 w-0' : 'opacity-100 w-20'"
            >
                {{ item.text }}
            </span>
        </RouterLink>
    </li>
</template>
