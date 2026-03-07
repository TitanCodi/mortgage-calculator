import MainCalculator from "@/components/calculator/MainCalculator"
import { calculatorSEO } from "@/lib/calculatorSeo"

export default function Page({ params }: { params: { slug: string } }) {

  const data = calculatorSEO.find((c) => c.slug === params.slug)

  if (!data) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Calculator Not Found</h1>
        <p>Slug received: {params.slug}</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: "1100px", margin: "40px auto", padding:"20px" }}>

      <h1>{data.title}</h1>

      <p style={{marginBottom:"30px"}}>
        {data.description}
      </p>

      <MainCalculator />

      <section style={{ marginTop: "50px" }}>
        <h2>About This Calculator</h2>

        <p>
          Financial calculators help estimate payments, interest costs,
          and repayment timelines so borrowers can make informed
          financial decisions.
        </p>

      </section>

    </main>
  )
}

export function generateStaticParams() {

  return calculatorSEO.map((c) => ({
    slug: c.slug
  }))

}