"use client"

import { useState } from "react"

import InputField from "@/components/calculator/InputField"
import Chart from "@/components/calculator/Chart"
import ScheduleTable from "@/components/calculator/ScheduleTable"

import { calculateMortgage } from "@/lib/mortgageMath"
import { formatCurrency } from "@/utils/formatCurrency"

export default function MainCalculator() {

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

return(

<>

{/* HERO SECTION */}

<section
style={{
textAlign:"center",
marginBottom:"20px",
padding:"25px",
background:"#f8fafc",
borderRadius:"12px",
border:"1px solid #e5e7eb",
maxWidth:"900px",
marginLeft:"auto",
marginRight:"auto"
}}
>

<h1
style={{
fontSize:"32px",
marginBottom:"10px",
fontWeight:700,
letterSpacing:"-0.5px"
}}
>
Mortgage Calculator With Extra Payments
</h1>

<p
style={{
fontSize:"17px",
color:"#555",
maxWidth:"650px",
margin:"0 auto",
lineHeight:"1.6"
}}
>
Calculate how extra mortgage payments reduce loan term and interest.
</p>

</section>


{/* CALCULATOR CARD */}

<section
style={{
background:"#ffffff",
padding:"25px",
borderRadius:"12px",
boxShadow:"0 3px 12px rgba(0,0,0,0.05)",
marginTop:"20px",
maxWidth:"900px",
marginLeft:"auto",
marginRight:"auto"
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
border:"1px solid #ccc",
fontSize:"15px"
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
cursor:"pointer",
boxShadow:"0 4px 8px rgba(0,0,0,0.1)"
}}
>
Calculate Mortgage
</button>

</div>

</section>


{/* RESULTS */}

{result && (

<>

<section
style={{
marginTop:"35px",
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:"20px"
}}
>

<div style={{background:"#f8fafc",padding:"20px",borderRadius:"10px"}}>
<p>Monthly Payment</p>
<h3>{formatCurrency(result.regularPayment)}</h3>
</div>

<div style={{background:"#f8fafc",padding:"20px",borderRadius:"10px"}}>
<p>Total Interest</p>
<h3>{formatCurrency(result.totalInterest)}</h3>
</div>

<div style={{background:"#f8fafc",padding:"20px",borderRadius:"10px"}}>
<p>Payoff Time</p>
<h3>{result.payoffYears.toFixed(1)} yrs</h3>
</div>

<div style={{background:"#f8fafc",padding:"20px",borderRadius:"10px"}}>
<p>Interest Saved</p>
<h3>{formatCurrency(result.interestSaved)}</h3>
</div>

</section>

<Chart schedule={result.schedule} />

<ScheduleTable schedule={result.schedule} />

</>

)}

</>

)

}