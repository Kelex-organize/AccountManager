<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-6">Presupuesto mensual</h1>

        <!-- Resumen total -->
        <div class="mb-8 flex gap-8">
            <div class="bg-blue-50 rounded-xl p-4 border border-blue-200 w-1/2">
                <div class="text-lg font-semibold mb-2">Total presupuestado</div>
                <div class="text-2xl font-bold text-blue-700">${{ totalBudget.toFixed(2) }}</div>
            </div>
            <div class="bg-green-50 rounded-xl p-4 border border-green-200 w-1/2">
                <div class="text-lg font-semibold mb-2">Total gastado</div>
                <div class="text-2xl font-bold text-green-700">${{ totalSpent.toFixed(2) }}</div>
            </div>
        </div>

        <!-- Presupuestos por categoría -->
        <div class="bg-white rounded-xl shadow-md p-4 border border-gray-200">
            <h2 class="text-lg font-semibold mb-4">Categorías</h2>
            <div v-for="cat in categories" :key="cat.name" class="mb-6">
                <div class="flex justify-between mb-1">
                    <span class="font-medium">{{ cat.name }}</span>
                    <span>
                        ${{ cat.spent.toFixed(2) }} / ${{ cat.budget.toFixed(2) }}
                        <span v-if="cat.spent > cat.budget" class="text-red-600 ml-2"
                            >¡Excedido!</span
                        >
                    </span>
                </div>
                <div class="w-full h-4 bg-gray-100 rounded">
                    <div
                        class="h-4 rounded"
                        :class="cat.spent > cat.budget ? 'bg-red-400' : 'bg-blue-500'"
                        :style="{ width: Math.min(100, (cat.spent / cat.budget) * 100) + '%' }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Mock data de presupuestos y gastos
const categories = [
    { name: 'Alimentación', budget: 400, spent: 320 },
    { name: 'Transporte', budget: 200, spent: 180 },
    { name: 'Entretenimiento', budget: 100, spent: 90 },
    { name: 'Salud', budget: 150, spent: 120 },
]

const totalBudget = categories.reduce((acc, cat) => acc + cat.budget, 0)
const totalSpent = categories.reduce((acc, cat) => acc + cat.spent, 0)
</script>
