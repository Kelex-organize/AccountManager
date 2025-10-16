import { createI18n } from 'vue-i18n'

// Mensajes de ejemplo
const messages = {
    en: {
        category: 'Category',
        amount: 'Amount',
        date: 'Date',
        description: 'Description',
        type: 'Type',
        income: 'Income',
        expense: 'Expense',
        account: 'Account',
        actions: 'Actions',
        addTransaction: 'Add Transaction',
        editTransaction: 'Edit Transaction',
        deleteTransaction: 'Delete Transaction',
        confirmDelete: 'Are you sure you want to delete this transaction?',
        cancel: 'Cancel',
        save: 'Save',
        settings: 'Settings',
    },
    es: {
        category: 'Categoría',
        amount: 'Monto',
        date: 'Fecha',
        description: 'Descripción',
        type: 'Tipo',
        income: 'Ingreso',
        expense: 'Gasto',
        account: 'Cuenta',
        actions: 'Acciones',
        addTransaction: 'Agregar Transacción',
        editTransaction: 'Editar Transacción',
        deleteTransaction: 'Eliminar Transacción',
        confirmDelete: '¿Estás seguro de que deseas eliminar esta transacción?',
        cancel: 'Cancelar',
        save: 'Guardar',
        settings: 'Configuración',
    },
}

export const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'en',
    messages,
})
