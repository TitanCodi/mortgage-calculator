import CalculatorPage from "./calculator/page";

export default function Home() {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Mortgage Calculator with Extra Payments",
    description:
      "Free mortgage calculator to estimate monthly payments, amortization schedule, payoff date and interest savings with extra payments.",
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    url: "https://yourdomain.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <CalculatorPage />
    </>
  );
}