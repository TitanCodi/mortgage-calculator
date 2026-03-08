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
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* Google AdSense Script */}
        <Script
          id="adsense-script"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2548921396153742"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />

        {/* Structured Data */}
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

        {/* Sticky Header */}
        <header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                textDecoration: "none",
                color: "#111",
                letterSpacing: "0.3px",
              }}
            >
              📊 RateCalcNow
            </a>

            <nav
              style={{
                display: "flex",
                gap: "18px",
                fontSize: "14px",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <a href="/calculator">Calculator</a>
              <a href="/about">About</a>
              <a href="/privacy">Privacy</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main style={{minHeight:"70vh"}}>
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            marginTop: "60px",
            borderTop: "1px solid #e5e7eb",
            background: "#fafafa"
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              padding: "25px 20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              fontSize: "14px",
              color: "#555"
            }}
          >

            <div style={{fontWeight:600}}>
              📊 RateCalcNow
            </div>

            <div
              style={{
                display: "flex",
                gap: "18px",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <a href="/calculator">Calculator</a>
              <a href="/about">About</a>
              <a href="/privacy">Privacy</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>

            <div style={{fontSize:"13px", color:"#777"}}>
              © {new Date().getFullYear()} RateCalcNow
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}