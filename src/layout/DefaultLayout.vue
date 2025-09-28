<template>
    <div class="flex h-screen w-screen">
        <SidebarComponent />

        <main class="flex-1 p-6 overflow-y-auto bg-gray-100">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>
