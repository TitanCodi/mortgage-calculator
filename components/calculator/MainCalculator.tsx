"use client"

import { useState } from "react"
import Script from "next/script"

import InputField from "@/components/calculator/InputField"
import Chart from "@/components/calculator/Chart"
import ScheduleTable from "@/components/calculator/ScheduleTable"

import { calculateMortgage } from "@/lib/mortgageMath"
import { formatCurrency } from "@/utils/formatCurrency"

export default function MainCalculator(){

const [principal,setPrincipal] = useState(350000)
const [rate,setRate] = useState(6.5)
const [years,setYears] = useState(30)
const [extra,setExtra] = useState(0)
const [lump,setLump] = useState(0)

const [frequency,setFrequency] =
useState<"monthly"|"bi-weekly">("monthly")

const [result,setResult] = useState<any>(null)

function runCalculation(){

const res = calculateMortgage({
principal,
annualRate:rate,
years,
paymentFrequency:frequency,
extraMonthly:extra,
lumpSum:lump
})

setResult(res)

}

function exportCSV(){

if(!result) return

const rows = result.schedule.map((p:any)=>[
p.paymentNumber,
p.date.toLocaleDateString(),
p.principal,
p.interest,
p.extra,
p.balance
])

const header = [
"Payment #",
"Date",
"Principal",
"Interest",
"Extra",
"Balance"
]

const csv =
[header,...rows]
.map(r=>r.join(","))
.join("\n")

const blob =
new Blob([csv],{type:"text/csv"})

const url =
window.URL.createObjectURL(blob)

const link =
document.createElement("a")

link.href = url
link.download = "amortization.csv"
link.click()

}

return(

<main
style={{
maxWidth:"1100px",
margin:"40px auto",
padding:"30px",
fontFamily:"Arial, sans-serif",
background:"#ffffff",
borderRadius:"12px",
boxShadow:"0 4px 20px rgba(0,0,0,0.06)"
}}
>

{/* Hero */}

<section
style={{
textAlign:"center",
marginBottom:"40px",
padding:"30px",
background:"#f8fafc",
borderRadius:"12px"
}}
>

<h2 style={{fontSize:"32px", marginBottom:"10px"}}>
Mortgage Calculator With Extra Payments
</h2>

<p style={{fontSize:"17px", color:"#555"}}>
Estimate monthly payments, interest, and payoff timeline.
</p>

</section>

{/* Calculator */}

<section
style={{
background:"#ffffff",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 3px 12px rgba(0,0,0,0.05)"
}}
>

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
gap:"20px",
marginBottom:"20px"
}}
>

<InputField label="Loan Amount" value={principal} onChange={setPrincipal}/>
<InputField label="Interest Rate (%)" value={rate} step={0.1} onChange={setRate}/>
<InputField label="Loan Term (years)" value={years} onChange={setYears}/>
<InputField label="Extra Monthly Payment" value={extra} onChange={setExtra}/>
<InputField label="Lump Sum Payment" value={lump} onChange={setLump}/>

<div>

<label style={{fontWeight:600,display:"block",marginBottom:"6px"}}>
Payment Frequency
</label>

<select
value={frequency}
onChange={(e)=>setFrequency(e.target.value as any)}
style={{
width:"100%",
padding:"10px",
borderRadius:"8px",
border:"1px solid #ccc"
}}
>

<option value="monthly">Monthly</option>
<option value="bi-weekly">Bi-Weekly</option>

</select>

</div>

</div>

<div style={{textAlign:"center"}}>

<button
onClick={runCalculation}
style={{
padding:"12px 28px",
background:"#2563eb",
color:"white",
border:"none",
borderRadius:"10px",
fontWeight:600,
fontSize:"16px",
cursor:"pointer"
}}
>

Calculate Mortgage

</button>

</div>

</section>

{/* Results */}

{result && (

<>

<Chart schedule={result.schedule} />

<ScheduleTable schedule={result.schedule} />

</>

)}

</main>

)

}