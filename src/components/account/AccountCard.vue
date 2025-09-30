<script setup lang="ts">
import type { AccountInformation } from '@/types'

const { account } = defineProps<{ account: AccountInformation }>()
</script>

<template>
    <div
        class="bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-2xl p-6 border border-gray-700 hover:scale-105 transition-transform duration-300"
    >
        <h2 class="text-xl font-bold text-purple-400 mb-4">{{ account.name }}</h2>

        <ul>
            <li
                v-for="balance in account.balances"
                :key="balance.currency"
                class="flex justify-between py-2 px-3 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
                <span class="text-gray-300 font-medium">{{ balance.currency }}</span>
                <span class="text-white font-semibold">
                    {{ balance.amount.toLocaleString() }}
                </span>
            </li>
        </ul>
    </div>
</template>
