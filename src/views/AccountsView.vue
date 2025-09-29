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
    <div class="p-6">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Accounts</h1>
            <button
                @click="addAccount(newAccount)"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                + Add Account
            </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AccountCard v-for="account in accounts" :key="account.id" :account="account" />
        </div>
    </div>
</template>
