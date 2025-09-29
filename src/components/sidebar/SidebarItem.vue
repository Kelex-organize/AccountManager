<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { SidebarItem } from '@/types'

const { item } = defineProps<{ item: SidebarItem }>()
</script>

<template>
    <li>
        <RouterLink
            :to="item.link"
            class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            active-class="bg-gray-700 font-semibold"
        >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.text }}</span>
        </RouterLink>
    </li>
</template>
