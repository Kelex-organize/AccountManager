<script setup lang="ts">
import type { AccountInformation } from '@/types'

const account = defineProps<AccountInformation>()
</script>

<template>
    <div :key="account.id" class="bg-white shadow-md rounded-xl p-4 border border-gray-200">
        <h2 class="text-lg font-semibold mb-3">{{ account.name }}</h2>

        <ul>
            <li
                v-for="balance in account.balances"
                :key="balance.currency"
                class="flex justify-between py-1 text-gray-700"
            >
                <span>{{ balance.currency }}</span>
                <span class="font-medium">
                    {{ balance.amount.toLocaleString() }}
                </span>
            </li>
        </ul>
    </div>
</template>
