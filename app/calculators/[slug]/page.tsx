import MainCalculator from "@/components/calculator/MainCalculator"

const calculatorContent: Record<string, any> = {
  "mortgage-calculator-extra-payments": {
    title: "Mortgage Calculator With Extra Payments",
    description:
      "Calculate how extra mortgage payments reduce loan term and interest."
  },

  "biweekly-mortgage-calculator": {
    title: "Biweekly Mortgage Calculator",
    description:
      "Estimate how biweekly mortgage payments shorten your loan payoff time."
  },

  "mortgage-payoff-calculator": {
    title: "Mortgage Payoff Calculator",
    description:
      "See how quickly you can pay off your mortgage early."
  },

  "loan-calculator": {
    title: "Loan Calculator",
    description:
      "Estimate monthly loan payments and total interest."
  },

  "car-loan-calculator": {
    title: "Car Loan Calculator",
    description:
      "Calculate car loan payments and interest costs."
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const data = calculatorContent[slug]

  if (!data) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Calculator Not Found</h1>
        <p>Slug received: {slug}</p>
      </main>
    )
  }

  return (
    <main style={{ maxWidth: "1100px", margin: "40px auto" }}>

      <h1>{data.title}</h1>

      <p>{data.description}</p>

      <MainCalculator />

      <section style={{ marginTop: "40px" }}>
        <h2>About This Calculator</h2>
        <p>
          Financial calculators help estimate loan payments,
          interest costs, and repayment timelines so borrowers
          can make informed financial decisions.
        </p>
      </section>

    </main>
  )
}

export async function generateStaticParams() {
  return [
    { slug: "mortgage-calculator-extra-payments" },
    { slug: "biweekly-mortgage-calculator" },
    { slug: "mortgage-payoff-calculator" },
    { slug: "loan-calculator" },
    { slug: "car-loan-calculator" }
  ]
}