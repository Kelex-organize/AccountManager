<script setup lang="ts">
import type { Expense } from '@/types'
import { ref, computed } from 'vue'

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
const now = new Date()
const currentYear = now.getFullYear()
const selectedMonth = ref(now.getMonth())

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
        date: '2025-09-10',
    },
    {
        id: 'e4',
        amount: 80.0,
        type: 'Salud',
        description: 'Farmacia',
        account: 'Cuenta Principal',
        date: '2025-10-12',
    },
]

const filteredExpenses = computed(() => {
    return expenses.filter((e) => {
        const d = new Date(e.date)
        return d.getMonth() === selectedMonth.value && d.getFullYear() === currentYear
    })
})

function downloadCSV() {
    const rows = [
        ['Fecha', 'Descripción', 'Tipo', 'Cuenta', 'Monto'],
        ...filteredExpenses.value.map((e) => [
            e.date,
            e.description,
            e.type,
            e.account,
            e.amount.toFixed(2),
        ]),
    ]
    const csvContent = rows.map((r) => r.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gastos_${monthNames[selectedMonth.value]}_${currentYear}.csv`
    a.click()
    URL.revokeObjectURL(url)
}
</script>

<template>
    <div class="p-6 bg-gray-900 text-gray-200">
        <!-- Selector de mes -->
        <div class="flex items-center mb-6 gap-4">
            <label for="month" class="font-semibold text-purple-400">Selecciona el mes:</label>
            <select
                v-model="selectedMonth"
                id="month"
                class="bg-gray-800 border border-gray-700 text-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
                <option v-for="(month, idx) in monthNames" :key="month" :value="idx">
                    {{ month }}
                </option>
            </select>
            <span class="ml-2 font-semibold text-gray-300">{{ currentYear }}</span>
            <button
                @click="downloadCSV"
                class="ml-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
                Descargar tabla
            </button>
        </div>

        <!-- Tabla de gastos -->
        <div class="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
            <h2 class="text-xl font-semibold mb-4 text-cyan-400">
                Gastos de {{ monthNames[selectedMonth] }} {{ currentYear }}
            </h2>
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
                        v-for="expense in filteredExpenses"
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
