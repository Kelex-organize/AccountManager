<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { Component } from 'vue'

export interface SidebarItemProps {
    icon: Component
    text: string
    link: string
}

const props = defineProps<SidebarItemProps>()
</script>

<template>
    <li>
        <RouterLink
            :to="props.link"
            class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700"
            active-class="bg-gray-700 font-semibold"
        >
            <component :is="props.icon" class="w-5 h-5" />
            <span>{{ props.text }}</span>
        </RouterLink>
    </li>
</template>
