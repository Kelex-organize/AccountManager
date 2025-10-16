<script setup lang="ts">
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
</script>

<template>
    <Table class="w-full">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead class="w-[100px]">Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Account</TableHead>
                <TableHead class="text-right">Amount</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell class="font-medium">2023-03-15</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>Fiesta con amigos</TableCell>
                <TableCell>Itau debito</TableCell>
                <TableCell class="text-right">+ $250.00</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
