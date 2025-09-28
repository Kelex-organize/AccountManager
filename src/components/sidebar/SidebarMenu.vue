<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import type { SidebarItemProps } from './SidebarItem.vue'

interface SidebarMenuProps {
    items: SidebarItemProps[]
}

const props = defineProps<SidebarMenuProps>()
</script>

<template>
    <nav>
        <ul class="space-y-2">
            <SidebarItem v-for="item in props.items" :key="item.link" v-bind="item" />
        </ul>
    </nav>
</template>
