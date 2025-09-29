
<template>
    <div class="p-6">
        <!-- Selector de mes -->
        <div class="flex items-center mb-6 gap-4">
            <label for="month" class="font-semibold">Selecciona el mes:</label>
            <select v-model="selectedMonth" id="month" class="border rounded px-3 py-2">
                <option v-for="(month, idx) in monthNames" :key="month" :value="idx">
                    {{ month }}
                </option>
            </select>
            <span class="ml-2 font-semibold">{{ currentYear }}</span>
            <button @click="downloadCSV" class="ml-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Descargar tabla
            </button>
        </div>

        <!-- Tabla de gastos -->
        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-200">
            <h2 class="text-lg font-semibold mb-4">Gastos de {{ monthNames[selectedMonth] }} {{ currentYear }}</h2>
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
                    <tr v-for="expense in filteredExpenses" :key="expense.id" class="border-b hover:bg-gray-50">
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
import type { Expense } from '@/types'
import { ref, computed } from 'vue'

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]
const now = new Date()
const currentYear = now.getFullYear()
const selectedMonth = ref(now.getMonth())

// Mock data para gastos
const expenses: Expense[] = [
    { id: 'e1', amount: 50.25, type: 'Alimentación', description: 'Supermercado', account: 'Cuenta Principal', date: '2025-10-02' },
    { id: 'e2', amount: 120.00, type: 'Transporte', description: 'Gasolina', account: 'Cuenta Principal', date: '2025-10-05' },
    { id: 'e3', amount: 30.00, type: 'Entretenimiento', description: 'Cine', account: 'Cuenta Ahorros', date: '2025-09-10' },
    { id: 'e4', amount: 80.00, type: 'Salud', description: 'Farmacia', account: 'Cuenta Principal', date: '2025-10-12' }
]

const filteredExpenses = computed(() => {
    return expenses.filter(e => {
        const d = new Date(e.date)
        return d.getMonth() === selectedMonth.value && d.getFullYear() === currentYear
    })
})

function downloadCSV() {
    const rows = [
        ['Fecha', 'Descripción', 'Tipo', 'Cuenta', 'Monto'],
        ...filteredExpenses.value.map(e => [e.date, e.description, e.type, e.account, e.amount.toFixed(2)])
    ]
    const csvContent = rows.map(r => r.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `gastos_${monthNames[selectedMonth.value]}_${currentYear}.csv`
    a.click()
    URL.revokeObjectURL(url)
}
</script>
