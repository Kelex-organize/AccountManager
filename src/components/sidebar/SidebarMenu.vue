<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import type { SidebarMenu } from '@/types'

const props = defineProps<{ menu: SidebarMenu; collapsed: boolean }>()
</script>

<template>
    <nav>
        <ul class="space-y-5">
            <SidebarItem
                v-for="item in props.menu.items"
                :key="item.link"
                :item="item"
                :collapsed="props.collapsed"
            />
        </ul>
    </nav>
</template>
