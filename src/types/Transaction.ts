interface Transaction {
    id: number
    type: 'income' | 'expense'
    amount: number
    date: string
    category: string
    accountId: number
    description?: string
}

interface Category {
    id: number
    name: string
    type: 'income' | 'expense'
}
