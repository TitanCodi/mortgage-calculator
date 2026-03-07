"use client"

import { useState } from "react"
import Script from "next/script"

import InputField from "@/components/calculator/InputField"
import Chart from "@/components/calculator/Chart"
import ScheduleTable from "@/components/calculator/ScheduleTable"

import { calculateMortgage } from "@/lib/mortgageMath"
import { formatCurrency } from "@/utils/formatCurrency"

export default function CalculatorPage() {

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

  return (

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

      {/* Google AdSense Loader */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />

      {/* Header */}
      <header
        style={{
          textAlign:"center",
          marginBottom:"25px",
          borderBottom:"1px solid #eee",
          paddingBottom:"10px"
        }}
      >
        <h1>Mortgage Calculator</h1>
      </header>

      {/* Hero Section */}

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

<p style={{fontSize:"17px", color:"#555", maxWidth:"700px", margin:"0 auto"}}>
Estimate your monthly mortgage payment, total interest,
loan payoff date, and see how extra payments can reduce
your mortgage faster.
</p>

<div
  style={{
    marginTop:"20px",
    display:"flex",
    justifyContent:"center",
    gap:"25px",
    flexWrap:"wrap",
    fontSize:"14px",
    color:"#444"
  }}
>

<span>✔ Extra Payment Calculator</span>
<span>✔ Amortization Schedule</span>
<span>✔ Bi-Weekly Payments</span>
<span>✔ Early Payoff Analysis</span>

</div>

</section>

      {/* Ad Block #1 */}
      <div style={{margin:"30px 0", textAlign:"center"}}>
        <ins
          className="adsbygoogle"
          style={{display:"block"}}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot="1111111111"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>

        <Script id="ads-init-1">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

{/* Calculator Card */}

<section
  style={{
    background:"#ffffff",
    padding:"25px",
    borderRadius:"12px",
    boxShadow:"0 3px 12px rgba(0,0,0,0.05)",
    marginTop:"20px"
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
marginTop:"15px",
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

{/* Results */}

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

{/* Ad Block #2 */}
<div style={{margin:"40px 0", textAlign:"center"}}>
<ins
className="adsbygoogle"
style={{display:"block"}}
data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
data-ad-slot="2222222222"
data-ad-format="auto"
data-full-width-responsive="true"
/>

<Script id="ads-init-2">
{`(adsbygoogle = window.adsbygoogle || []).push({});`}
</Script>
</div>

<Chart schedule={result.schedule} />

<ScheduleTable schedule={result.schedule} />

{/* Ad Block #3 */}
<div style={{margin:"40px 0", textAlign:"center"}}>
<ins
className="adsbygoogle"
style={{display:"block"}}
data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
data-ad-slot="3333333333"
data-ad-format="auto"
data-full-width-responsive="true"
/>

<Script id="ads-init-3">
{`(adsbygoogle = window.adsbygoogle || []).push({});`}
</Script>
</div>

</>

)}

{/* Related Calculators */}

<section
  style={{
    marginTop:"60px",
    padding:"25px",
    background:"#f8fafc",
    borderRadius:"12px"
  }}
>

<h2 style={{marginBottom:"15px"}}>
Related Financial Calculators
</h2>

<p style={{marginBottom:"20px"}}>
Explore other useful financial calculators to help plan your
home financing and loan repayment strategies.
</p>

<div
  style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"15px"
  }}
>

<a href="#" style={{padding:"15px",background:"#fff",borderRadius:"8px",textDecoration:"none"}}>
Refinance Calculator
</a>

<a href="#" style={{padding:"15px",background:"#fff",borderRadius:"8px",textDecoration:"none"}}>
Loan Payoff Calculator
</a>

<a href="#" style={{padding:"15px",background:"#fff",borderRadius:"8px",textDecoration:"none"}}>
Interest Savings Calculator
</a>

<a href="#" style={{padding:"15px",background:"#fff",borderRadius:"8px",textDecoration:"none"}}>
Bi-Weekly Payment Calculator
</a>

</div>

</section>

{/* Financial Disclaimer */}

<p style={{marginTop:"30px",fontSize:"13px",color:"#666",textAlign:"center"}}>
This calculator provides estimates for educational purposes only and
should not be considered financial advice.
</p>

{/* Footer */}

<footer
style={{
marginTop:"60px",
padding:"20px",
textAlign:"center",
borderTop:"1px solid #eee",
fontSize:"14px"
}}
>
<p>© {new Date().getFullYear()} Mortgage Calculator</p>

<p>
<a href="/privacy">Privacy Policy</a> |{" "}
<a href="/terms">Terms of Use</a> |{" "}
<a href="/contact">Contact</a>
</p>
</footer>

</main>
)
}