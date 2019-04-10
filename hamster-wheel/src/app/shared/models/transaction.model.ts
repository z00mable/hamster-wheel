export interface TransactionModel {
    id: number;
    exchange: string;
    date: Date;
    buyCurrency: string;
    buyAmount: number;
    sellCurrency: string;
    sellAmount: number;
    exchangeRate: number;
    historicExchangeRate: number;
    sellAmountInUsd: number;
    exchangeRateInUsd: number;
}
