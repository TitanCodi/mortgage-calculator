import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Mortgage Calculator with Extra Payments",
  description:
    "Free mortgage calculator to estimate monthly payments, payoff date, amortization schedule and interest savings with extra payments.",
  keywords: [
    "mortgage calculator",
    "mortgage calculator extra payments",
    "amortization calculator",
    "loan payoff calculator",
    "bi-weekly mortgage calculator"
  ],
  authors: [{ name: "Mortgage Calculator" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Mortgage Calculator with Extra Payments",
    description:
      "Calculate mortgage payments, payoff timeline, amortization schedule and interest savings instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        {/* Navigation Bar */}
        <nav
          style={{
            width: "100%",
            borderBottom: "1px solid #eee",
            padding: "15px 0",
            marginBottom: "20px",
            background: "white"
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 20px"
            }}
          >
            <strong style={{ fontSize: "18px" }}>
              Mortgage Calculator
            </strong>

            <div style={{ display: "flex", gap: "20px", fontSize: "14px" }}>
              <a href="/calculator">Calculator</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}