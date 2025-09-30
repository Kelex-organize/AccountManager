<script setup lang="ts">
import AccountCard from '@/components/account/AccountCard.vue'
import type { Account as AccountType } from '@/types/account'

const account: AccountType = {
    id: 1,
    name: 'Itau Debito',
    balances: [
        { currency: 'UYU', amount: 44600 },
        { currency: 'USD', amount: 6500 },
    ],
    color: 'orange',
}
</script>

<template>
    <AccountCard :account="account" />
</template>
