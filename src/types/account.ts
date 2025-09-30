export type Balance = {
    currency: string
    amount: number
}

export interface Account {
    id: number
    name: string
    balances: Balance[]
    color: string
}
