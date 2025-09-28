<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import type { SidebarMenu } from '@/types'

const props = defineProps<{ menu: SidebarMenu }>()
</script>

<template>
    <nav>
        <ul class="space-y-2">
            <SidebarItem v-for="item in props.menu.items" :key="item.link" v-bind="item" />
        </ul>
    </nav>
</template>
