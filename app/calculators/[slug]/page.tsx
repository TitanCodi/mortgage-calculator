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

      <section style={{ marginTop: "50px" }}>
        <h2>Mortgage Calculator FAQs</h2>

        <h3>How is a mortgage payment calculated?</h3>
        <p>
          Mortgage payments are calculated using the loan amount,
          interest rate, and loan term. The formula determines the
          monthly payment required to fully repay the loan over time.
        </p>

        <h3>Do extra payments reduce interest?</h3>
        <p>
          Yes. Extra payments reduce the remaining loan balance,
          which lowers the total interest paid and shortens the
          payoff timeline.
        </p>

        <h3>What is a bi-weekly mortgage payment?</h3>
        <p>
          Bi-weekly payments split your monthly payment into
          half payments made every two weeks. This results in
          one extra payment per year and reduces the loan term.
        </p>

      </section>

      {/* RELATED CALCULATORS */}

      <section style={{ marginTop: "60px" }}>

        <h2>Related Financial Calculators</h2>

        <div
          style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
            gap:"15px",
            marginTop:"20px"
          }}
        >

          <a href="/calculators/mortgage-payoff-calculator">
            Mortgage Payoff Calculator
          </a>

          <a href="/calculators/biweekly-mortgage-calculator">
            Bi-Weekly Mortgage Calculator
          </a>

          <a href="/calculators/loan-calculator">
            Loan Calculator
          </a>

          <a href="/calculators/car-loan-calculator">
            Car Loan Calculator
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