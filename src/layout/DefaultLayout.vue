<script setup lang="ts">
import SidebarComponent from '@/components/sidebar/SidebarComponent.vue'
</script>

<template>
    <div class="flex flex-row gap-6 h-screen w-screen bg-zinc-900 p-3">
        <SidebarComponent />

        <main class="flex-1 p-6 bg-stone-100 rounded-xl overflow-y-auto no-scrollbar shadow-lg">
            <router-view />
        </main>
    </div>
</template>

<style>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
