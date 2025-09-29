<template>
    <div class="p-6">
        <!-- Encabezado con mes y año -->
        <h1 class="text-2xl font-bold mb-6">{{ currentMonthYear }}</h1>

        <!-- Grid de cuentas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <AccountCard v-for="account in accounts" :key="account.id" :account="account" />
        </div>

        <!-- Tabla de gastos -->
        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-200">
            <h2 class="text-lg font-semibold mb-4">Gastos del mes</h2>
            <table class="w-full text-left">
                <thead>
                    <tr class="border-b">
                        <th class="py-2 px-3">Fecha</th>
                        <th class="py-2 px-3">Descripción</th>
                        <th class="py-2 px-3">Tipo</th>
                        <th class="py-2 px-3">Cuenta</th>
                        <th class="py-2 px-3">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="expense in expenses"
                        :key="expense.id"
                        class="border-b hover:bg-gray-50"
                    >
                        <td class="py-2 px-3">{{ expense.date }}</td>
                        <td class="py-2 px-3">{{ expense.description }}</td>
                        <td class="py-2 px-3">{{ expense.type }}</td>
                        <td class="py-2 px-3">{{ expense.account }}</td>
                        <td class="py-2 px-3 font-medium">${{ expense.amount.toFixed(2) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import AccountCard from '@/components/account/AccountCard.vue'
import type { AccountInformation, Expense } from '@/types'

// Mock data para cuentas
const accounts: AccountInformation[] = [
    {
        id: 1,
        name: 'Cuenta Principal',
        balances: [
            { currency: 'USD', amount: 1200 },
            { currency: 'EUR', amount: 500 },
        ],
    },
    {
        id: 2,
        name: 'Cuenta Ahorros',
        balances: [{ currency: 'USD', amount: 3000 }],
    },
    {
        id: 3,
        name: 'Cuenta Tarjeta',
        balances: [{ currency: 'USD', amount: 200 }],
    },
]

// Mock data para gastos
const expenses: Expense[] = [
    {
        id: 'e1',
        amount: 50.25,
        type: 'Alimentación',
        description: 'Supermercado',
        account: 'Cuenta Principal',
        date: '2025-10-02',
    },
    {
        id: 'e2',
        amount: 120.0,
        type: 'Transporte',
        description: 'Gasolina',
        account: 'Cuenta Principal',
        date: '2025-10-05',
    },
    {
        id: 'e3',
        amount: 30.0,
        type: 'Entretenimiento',
        description: 'Cine',
        account: 'Cuenta Ahorros',
        date: '2025-10-10',
    },
]

// Obtener mes y año actual
const now = new Date()
const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]
const currentMonthYear = `${monthNames[now.getMonth()]} ${now.getFullYear()}`
</script>
