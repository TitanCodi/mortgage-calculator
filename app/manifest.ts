import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mortgage Calculator with Extra Payments",
    short_name: "Mortgage Calculator",
    description:
      "Free mortgage calculator to estimate payments, amortization schedule, payoff date and interest savings.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}