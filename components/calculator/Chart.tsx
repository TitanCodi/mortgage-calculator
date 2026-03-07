"use client"

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
} from "chart.js"

import { Line, Pie } from "react-chartjs-2"
import { PaymentRow } from "@/lib/mortgageMath"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
)

interface ChartProps {
  schedule: PaymentRow[]
}

export default function Chart({ schedule }: ChartProps) {

  const labels = schedule.map(p => p.paymentNumber)

  const balanceData = {
    labels,
    datasets: [
      {
        label: "Remaining Balance",
        data: schedule.map(p => p.balance),
        borderColor: "#2563eb",
        backgroundColor: "#93c5fd",
        tension: 0.2
      }
    ]
  }

  const totalPrincipal = schedule.reduce((sum,p)=>sum+p.principal,0)
  const totalInterest = schedule.reduce((sum,p)=>sum+p.interest,0)

  const pieData = {
    labels:["Principal","Interest"],
    datasets:[
      {
        data:[totalPrincipal,totalInterest],
        backgroundColor:["#22c55e","#ef4444"]
      }
    ]
  }

  return (
  <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    marginTop: "30px"
  }}
>
  {/* Line Chart Container */}
  <div
    style={{
      background: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "350px" // match pie chart height
    }}
  >
    <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Loan Balance Over Time</h3>
    <div style={{ width: "100%", height: "100%" }}>
      <Line data={balanceData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  </div>

  {/* Pie Chart Container */}
  <div
    style={{
      background: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "350px" // match line chart height
    }}
  >
    <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Principal vs Interest</h3>
    <div style={{ width: "100%", maxWidth: "350px", height: "100%" }}>
      <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: true }} />
    </div>
  </div>
</div>
)
}