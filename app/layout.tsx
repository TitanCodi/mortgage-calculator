import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ratecalcnow.com"),

  title: "Mortgage Calculator with Extra Payments | RateCalcNow",
  description:
    "Free mortgage calculator to estimate monthly payments, amortization schedule, payoff timeline and interest savings with extra payments.",

  keywords: [
    "mortgage calculator",
    "mortgage calculator extra payments",
    "amortization calculator",
    "loan payoff calculator",
    "bi weekly mortgage calculator",
    "mortgage interest calculator",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mortgage Calculator with Extra Payments",
    description:
      "Calculate mortgage payments, payoff date, amortization schedule and interest savings instantly.",
    url: "https://ratecalcnow.com",
    siteName: "RateCalcNow",
    type: "website",
  },

  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2548921396153742"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        {/* Structured Data for Calculator */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Mortgage Calculator with Extra Payments",
              url: "https://ratecalcnow.com",
              applicationCategory: "FinanceApplication",
              operatingSystem: "All",
              description:
                "Free mortgage calculator to estimate payments, amortization schedule and interest savings with extra payments.",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}