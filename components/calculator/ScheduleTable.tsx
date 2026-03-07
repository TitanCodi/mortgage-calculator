"use client"

import { PaymentRow } from "@/lib/mortgageMath"
import { formatCurrency } from "@/utils/formatCurrency"

interface Props {
  schedule: PaymentRow[]
}

export default function ScheduleTable({ schedule }: Props) {

  return (

  <div style={{
  marginTop: "30px",
  overflowX: "auto",
  background: "white",
  padding: "10px",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
}}>
  <table style={{
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "600px",
    textAlign: "center" // center all cells
  }}>
    <thead style={{ background: "#f3f4f6", textAlign: "center" }}>
      <tr>
        <th style={{ padding: "8px" }}>#</th>
        <th style={{ padding: "8px" }}>Date</th>
        <th style={{ padding: "8px" }}>Principal</th>
        <th style={{ padding: "8px" }}>Interest</th>
        <th style={{ padding: "8px" }}>Extra</th>
        <th style={{ padding: "8px" }}>Balance</th>
      </tr>
    </thead>
    <tbody>
      {schedule.map((p, i) => (
        <tr key={p.paymentNumber} style={{
          background: i % 2 === 0 ? "#fefefe" : "#f9fafb"
        }}>
          <td style={{ padding: "6px" }}>{p.paymentNumber}</td>
          <td style={{ padding: "6px" }}>{p.date.toLocaleDateString()}</td>
          <td style={{ padding: "6px" }}>{formatCurrency(p.principal)}</td>
          <td style={{ padding: "6px" }}>{formatCurrency(p.interest)}</td>
          <td style={{ padding: "6px" }}>{formatCurrency(p.extra)}</td>
          <td style={{ padding: "6px" }}>{formatCurrency(p.balance)}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}