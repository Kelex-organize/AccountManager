<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { SidebarItem } from '@/types'

const props = defineProps<SidebarItem>()
</script>

<template>
    <li>
        <RouterLink
            :to="props.link"
            class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors"
            active-class="bg-gray-700 font-semibold"
        >
            <component :is="props.icon" class="w-5 h-5" />
            <span>{{ props.text }}</span>
        </RouterLink>
    </li>
</template>
