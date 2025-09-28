export type Balance = {
    currency: string
    amount: number
}

export interface AccountInformation {
    id: number
    name: string
    balances: Balance[]
}
