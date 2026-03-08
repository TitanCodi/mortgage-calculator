import MainCalculator from "@/components/calculator/MainCalculator"
import { calculatorSEO } from "@/lib/calculatorSeo"
import Script from "next/script"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const data = calculatorSEO.find((c) => c.slug === slug)

  if (!data) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Calculator Not Found</h1>
        <p>Slug received: {slug}</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: "1100px", margin: "40px auto", padding:"20px" }}>

      <h1>{data.title}</h1>

      <p style={{marginBottom:"30px"}}>
        {data.description}
      </p>

      {/* TOP AD */}

      <div style={{ margin:"30px 0", textAlign:"center" }}>
        <ins
          className="adsbygoogle"
          style={{display:"block"}}
          data-ad-client="ca-pub-2548921396153742"
          data-ad-slot="1111111111"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="ads-top">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      <MainCalculator />

      {/* MIDDLE AD */}

      <div style={{ margin:"40px 0", textAlign:"center" }}>
        <ins
          className="adsbygoogle"
          style={{display:"block"}}
          data-ad-client="ca-pub-2548921396153742"
          data-ad-slot="2222222222"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="ads-middle">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      {/* About Section */}

      <section style={{ marginTop: "50px" }}>
        <h2>About This Calculator</h2>

        <p>
          This financial calculator helps estimate loan payments,
          interest costs, and repayment timelines so borrowers
          can better understand the impact of loan terms and
          extra payments.
        </p>
      </section>

      {/* FAQ SECTION */}

<section
  style={{
    marginTop: "60px",
    background: "#f8fafc",
    padding: "30px",
    borderRadius: "12px"
  }}
>

<h2 style={{marginBottom:"20px"}}>
Mortgage Calculator FAQs
</h2>

<div style={{marginBottom:"18px"}}>
<h3 style={{fontSize:"18px"}}>
How is a mortgage payment calculated?
</h3>
<p style={{color:"#555"}}>
Mortgage payments are calculated using the loan amount,
interest rate, and loan term. The formula determines the
monthly payment required to fully repay the loan.
</p>
</div>

<div style={{marginBottom:"18px"}}>
<h3 style={{fontSize:"18px"}}>
Do extra payments reduce interest?
</h3>
<p style={{color:"#555"}}>
Yes. Extra payments reduce the remaining loan balance,
which lowers total interest paid and shortens the
payoff timeline.
</p>
</div>

<div>
<h3 style={{fontSize:"18px"}}>
What is a bi-weekly mortgage payment?
</h3>
<p style={{color:"#555"}}>
Bi-weekly payments split your monthly payment into
half payments made every two weeks. This results in
one extra payment per year and reduces the loan term.
</p>
</div>

</section>

 {/* RELATED MORTGAGE CALCULATORS */}

<section style={{ marginTop: "60px" }}>

<h2 style={{marginBottom:"20px"}}>
Related Mortgage Calculators
</h2>

<div
  style={{
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
    gap:"15px"
  }}
>

<a
href="/calculators/mortgage-calculator-extra-payments"
style={{
padding:"18px",
background:"#f8fafc",
borderRadius:"10px",
textDecoration:"none",
color:"#111",
fontWeight:500,
border:"1px solid #e5e7eb"
}}
>
Mortgage Calculator With Extra Payments
</a>

<a
href="/calculators/mortgage-payoff-calculator"
style={{
padding:"18px",
background:"#f8fafc",
borderRadius:"10px",
textDecoration:"none",
color:"#111",
fontWeight:500,
border:"1px solid #e5e7eb"
}}
>
Mortgage Payoff Calculator
</a>

<a
href="/calculators/biweekly-mortgage-calculator"
style={{
padding:"18px",
background:"#f8fafc",
borderRadius:"10px",
textDecoration:"none",
color:"#111",
fontWeight:500,
border:"1px solid #e5e7eb"
}}
>
Bi-Weekly Mortgage Calculator
</a>

</div>

</section>

      {/* BOTTOM AD */}

      <div style={{ margin:"40px 0", textAlign:"center" }}>
        <ins
          className="adsbygoogle"
          style={{display:"block"}}
          data-ad-client="ca-pub-2548921396153742"
          data-ad-slot="3333333333"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <Script id="ads-bottom">
          {`(adsbygoogle = window.adsbygoogle || []).push({});`}
        </Script>
      </div>

      {/* FAQ SCHEMA FOR GOOGLE */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How is a mortgage payment calculated?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Mortgage payments are calculated using the loan amount, interest rate, and loan term."
                }
              },
              {
                "@type": "Question",
                "name": "Do extra payments reduce interest?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, extra payments reduce the remaining loan balance which lowers total interest."
                }
              },
              {
                "@type": "Question",
                "name": "What is a bi-weekly mortgage payment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bi-weekly payments split your monthly payment into half payments made every two weeks."
                }
              }
            ]
          })
        }}
      />

    </main>
  )
}

export async function generateStaticParams() {

  return calculatorSEO.map((c) => ({
    slug: c.slug
  }))

}