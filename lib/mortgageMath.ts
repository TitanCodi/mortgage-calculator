export type PaymentFrequency = "monthly" | "bi-weekly"

export interface MortgageInputs {
  principal: number
  annualRate: number
  years: number
  paymentFrequency: PaymentFrequency
  extraMonthly?: number
  lumpSum?: number
}

export interface PaymentRow {
  paymentNumber: number
  date: Date
  principal: number
  interest: number
  extra: number
  balance: number
}

export interface MortgageResult {
  regularPayment: number
  totalInterest: number
  totalPaid: number
  payoffDate: Date
  payoffYears: number
  schedule: PaymentRow[]
}

function round(value: number) {
  return Math.round(value * 100) / 100
}

"use strict"

export type PaymentFrequency = "monthly" | "bi-weekly"

export interface MortgageInputs {
  principal: number
  annualRate: number
  years: number
  paymentFrequency: PaymentFrequency
  extraMonthly?: number
  lumpSum?: number
}

export interface PaymentRow {
  paymentNumber: number
  date: Date
  principal: number
  interest: number
  extra: number
  balance: number
}

export interface MortgageResult {
  regularPayment: number
  totalInterest: number
  totalPaid: number
  payoffDate: Date
  payoffYears: number
  interestSaved: number
  schedule: PaymentRow[]
}



export function calculateMortgage(inputs: MortgageInputs): MortgageResult {

  const {
    principal,
    annualRate,
    years,
    paymentFrequency,
    extraMonthly = 0,
    lumpSum = 0
  } = inputs

  const periodsPerYear = paymentFrequency === "monthly" ? 12 : 26
  const ratePerPeriod = annualRate / 100 / periodsPerYear
  const totalPayments = years * periodsPerYear

  const regularPayment = (principal * ratePerPeriod) / (1 - Math.pow(1 + ratePerPeriod, -totalPayments))

  let balance = principal
  let totalInterest = 0
  const schedule: PaymentRow[] = []
  const currentDate = new Date()

  for (let i = 1; i <= totalPayments; i++) {

    const interest = round(balance * ratePerPeriod)
    let principalPayment = round(regularPayment - interest)
    let extraPayment = extraMonthly

    if (i === 1 && lumpSum > 0) {
      extraPayment += lumpSum
    }

    if (principalPayment + extraPayment > balance) {
      principalPayment = balance
      extraPayment = 0
    }

    balance = round(balance - principalPayment - extraPayment)
    totalInterest += interest

    schedule.push({
      paymentNumber: i,
      date: new Date(currentDate),
      principal: principalPayment,
      interest,
      extra: extraPayment,
      balance: balance < 0 ? 0 : balance
    })

    if (paymentFrequency === "monthly") {
      currentDate.setMonth(currentDate.getMonth() + 1)
    } else {
      currentDate.setDate(currentDate.getDate() + 14)
    }

    if (balance <= 0) break
  }

  // Calculate interest for standard mortgage (no extra payments)
  let standardBalance = principal
  let standardInterest = 0
  for (let i = 1; i <= totalPayments; i++) {
    const interest = round(standardBalance * ratePerPeriod)
    const principalPayment = round(regularPayment - interest)
    standardBalance = round(standardBalance - principalPayment)
    standardInterest += interest
    if (standardBalance <= 0) break
  }

  const payoffDate = schedule[schedule.length - 1].date
  const payoffYears = schedule.length / periodsPerYear
  const interestSaved = round(standardInterest - totalInterest)

  return {
    regularPayment: round(regularPayment),
    totalInterest: round(totalInterest),
    totalPaid: round(principal + totalInterest),
    payoffDate,
    payoffYears,
    interestSaved,
    schedule
  }
}