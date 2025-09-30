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

<template>
    <div class="p-6 bg-gray-900 text-gray-200">
        <!-- Encabezado con mes y año -->
        <h1 class="text-3xl font-bold mb-8 text-purple-400">{{ currentMonthYear }}</h1>

        <!-- Grid de cuentas -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <AccountCard
                v-for="account in accounts"
                :key="account.id"
                :account="account"
                class="transform transition duration-500 hover:scale-105"
            />
        </div>

        <!-- Tabla de gastos -->
        <div class="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
            <h2 class="text-xl font-semibold mb-4 text-cyan-400">Gastos del mes</h2>
            <table class="w-full text-left table-auto">
                <thead>
                    <tr class="border-b border-gray-600">
                        <th class="py-3 px-4 text-gray-300">Fecha</th>
                        <th class="py-3 px-4 text-gray-300">Descripción</th>
                        <th class="py-3 px-4 text-gray-300">Tipo</th>
                        <th class="py-3 px-4 text-gray-300">Cuenta</th>
                        <th class="py-3 px-4 text-gray-300">Monto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="expense in expenses"
                        :key="expense.id"
                        class="border-b border-gray-700 hover:bg-gray-700/50 transition-colors duration-300"
                    >
                        <td class="py-2 px-4">{{ expense.date }}</td>
                        <td class="py-2 px-4">{{ expense.description }}</td>
                        <td class="py-2 px-4">{{ expense.type }}</td>
                        <td class="py-2 px-4">{{ expense.account }}</td>
                        <td class="py-2 px-4 font-medium text-green-400">
                            ${{ expense.amount.toFixed(2) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
