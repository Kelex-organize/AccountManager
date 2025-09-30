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

<template>
    <div class="p-6 bg-gray-900 min-h-screen text-gray-200">
        <h1 class="text-2xl font-bold mb-6 text-cyan-400">Presupuesto mensual</h1>

        <!-- Resumen total -->
        <div class="mb-8 flex flex-col md:flex-row gap-6">
            <div
                class="bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-2xl p-6 w-full md:w-1/2 shadow-lg"
            >
                <div class="text-lg font-semibold mb-2">Total presupuestado</div>
                <div class="text-3xl font-bold">${{ totalBudget.toFixed(2) }}</div>
            </div>
            <div
                class="bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-2xl p-6 w-full md:w-1/2 shadow-lg"
            >
                <div class="text-lg font-semibold mb-2">Total gastado</div>
                <div class="text-3xl font-bold">${{ totalSpent.toFixed(2) }}</div>
            </div>
        </div>

        <!-- Presupuestos por categoría -->
        <div class="bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-700">
            <h2 class="text-xl font-semibold mb-6 text-purple-400">Categorías</h2>
            <div v-for="cat in categories" :key="cat.name" class="mb-6">
                <div class="flex justify-between mb-2">
                    <span class="font-medium">{{ cat.name }}</span>
                    <span class="flex items-center gap-2">
                        ${{ cat.spent.toFixed(2) }} / ${{ cat.budget.toFixed(2) }}
                        <span v-if="cat.spent > cat.budget" class="text-red-500 font-bold"
                            >¡Excedido!</span
                        >
                    </span>
                </div>
                <div class="w-full h-4 bg-gray-700 rounded-lg overflow-hidden">
                    <div
                        class="h-4 rounded-lg transition-all duration-500"
                        :class="cat.spent > cat.budget ? 'bg-red-500' : 'bg-cyan-400'"
                        :style="{ width: Math.min(100, (cat.spent / cat.budget) * 100) + '%' }"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
