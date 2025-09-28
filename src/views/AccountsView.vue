<template>
    <div class="p-6">
        <!-- Header con boton -->
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold">Accounts</h1>
            <button
                @click="addAccount"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                + Add Account
            </button>
        </div>

        <!-- Grid de cuentas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AccountCard v-for="account in accounts" />
            <div
                v-for="account in accounts"
                :key="account.id"
                class="bg-white shadow-md rounded-xl p-4 border border-gray-200"
            >
                <h2 class="text-lg font-semibold mb-3">{{ account.name }}</h2>

                <!-- Balances -->
                <ul>
                    <li
                        v-for="balance in account.balances"
                        :key="balance.currency"
                        class="flex justify-between py-1 text-gray-700"
                    >
                        <span>{{ balance.currency }}</span>
                        <span class="font-medium">{{ balance.amount.toLocaleString() }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AccountCard from '@/components/account/AccountCard.vue'
import { AccountInformation } from '@/components/account/AccountCard.vue'
import { ref } from 'vue'

type Balance = {
    currency: string
    amount: number
}

type Account = {
    id: number
    name: string
    balances: Balance[]
}

const accounts = ref<Account[]>([
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

const addAccount = () => {
    accounts.value.push({
        id: Date.now(),
        name: 'Nueva cuenta',
        balances: [],
    })
}
</script>
