
<template>
    <div class="p-6">
        <h1 class="text-2xl font-bold mb-6">Análisis de cuentas y gastos</h1>

        <!-- Gráfico de evolución de saldo de cuenta principal -->
        <div class="mb-10">
            <h2 class="text-lg font-semibold mb-4">Evolución de saldo (Cuenta Principal)</h2>
            <LineChart :data="balanceData" :options="balanceOptions" />
        </div>

        <!-- Gráfico de distribución de gastos por tipo -->
        <div class="mb-10">
            <h2 class="text-lg font-semibold mb-4">Distribución de gastos por tipo</h2>
            <PieChart :data="expenseTypeData" :options="pieOptions" />
        </div>
    </div>
</template>

<script setup lang="ts">
// ...existing code...
import { Line, Pie } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    ArcElement
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, ArcElement)

// Mock data de saldos mensuales de la cuenta principal
const balanceData = {
    labels: ['Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'],
    datasets: [
        {
            label: 'Saldo USD',
            data: [1200, 1100, 1300, 1250, 1400, 1350, 1200],
            borderColor: '#2563eb',
            backgroundColor: 'rgba(37,99,235,0.1)',
            fill: true,
            tension: 0.3
        }
    ]
}
const balanceOptions = {
    responsive: true,
    plugins: {
        legend: { display: true },
        title: { display: false }
    }
}

// Mock data de gastos por tipo
const expenseTypeData = {
    labels: ['Alimentación', 'Transporte', 'Entretenimiento', 'Salud'],
    datasets: [
        {
            label: 'Gastos',
            data: [320, 180, 90, 120],
            backgroundColor: [
                '#f59e42',
                '#38bdf8',
                '#a78bfa',
                '#f87171'
            ]
        }
    ]
}
const pieOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'bottom' as const },
        title: { display: false }
    }
}

// Componentes chart
const LineChart = Line
const PieChart = Pie
</script>
