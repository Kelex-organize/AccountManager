<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
    <div class="flex flex-row gap-4 h-screen w-screen p-4">
        <SidebarComponent />

        <main class="w-full p-9">
            <router-view />
        </main>
    </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
