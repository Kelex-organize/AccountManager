<script setup lang="ts">
import { ref } from 'vue'
import AccountCard from '@/components/account/AccountCard.vue'
import type { AccountInformation } from '@/types'

const accounts = ref<AccountInformation[]>([
    {
        id: 1,
        name: 'Itaú Débito',
        balances: [
            { currency: 'UYU', amount: 15000 },
            { currency: 'USD', amount: 200 },
        ],
    },
    {
        id: 2,
        name: 'Prex',
        balances: [
            { currency: 'UYU', amount: 5000 },
            { currency: 'USD', amount: 50 },
        ],
    },
])

const newAccount: AccountInformation = {
    id: 7,
    name: 'Nueva Cuenta',
    balances: [
        { currency: 'UYU', amount: 5000 },
        { currency: 'USD', amount: 50 },
    ],
}

const addAccount = (account: AccountInformation) => {
    accounts.value.push(account)
}
</script>

<template>
    <div class="flex flex-col h-full">
        <div class="flex justify-between items-center mb-8">
            <h1 class="text-3xl font-bold text-gray-800">Accounts</h1>
            <button
                @click="addAccount(newAccount)"
                class="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
                + Add Account
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AccountCard
                v-for="account in accounts"
                :key="account.id"
                :account="account"
                class="transform transition duration-500 hover:scale-105"
            />
        </div>
    </div>
</template>
