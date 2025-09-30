<script setup lang="ts">
import type { Account } from '@/types'

const { account } = defineProps<{ account: Account }>()

const gradients: Record<string, string> = {
    amber: 'from-amber-400 to-amber-200',
    orange: 'from-orange-400 to-orange-200',
    purple: 'from-purple-400 to-purple-200',
    blue: 'from-blue-400 to-blue-200',
    emerald: 'from-emerald-400 to-emerald-200',
    violet: 'from-violet-400 to-violet-200',
}
</script>

<template>
    <div
        class="rounded-2xl p-6 max-w-sm text-white backdrop-blur-sm shadow-inner"
        :class="[`bg-gradient-to-br ${gradients[account.color]}`]"
    >
        <h2 class="text-xl font-bold text-white drop-shadow-md mb-6">
            {{ account.name }}
        </h2>

        <ul class="space-y-3">
            <li
                v-for="balance in account.balances"
                :key="balance.currency"
                class="flex items-center justify-between bg-white/20 rounded-xl py-3 px-4 hover:bg-white/30 transition-colors"
            >
                <span class="text-white/70 font-medium">{{ balance.currency }}</span>
                <span class="text-white font-semibold text-lg drop-shadow-sm">
                    {{ balance.amount.toLocaleString() }}
                </span>
            </li>
        </ul>
    </div>
</template>
