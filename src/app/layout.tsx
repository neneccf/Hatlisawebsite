import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hatlisagroup.co.mz"),
  title: {
    default: "Hatlisa Group | Execution Across Critical Business Functions",
    template: "%s | Hatlisa Group",
  },
  description:
    "Hatlisa Group: Mozambique-based execution firm specializing in technology, finance, procurement, marketing, and logistics for emerging markets. Focused mandates, integrated capability.",
  keywords: [
    "execution",
    "business functions",
    "technology",
    "finance",
    "procurement",
    "marketing",
    "logistics",
    "Mozambique",
    "Southern Africa",
    "emerging markets",
    "operational platforms",
    "automation",
    "financial structuring",
    "cost optimization",
    "supplier sourcing",
    "field marketing",
    "distribution design",
  ],
  authors: [{ name: "Hatlisa Group" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hatlisa Group",
    title: "Hatlisa Group | Execution Across Critical Business Functions",
    description:
      "Mozambique-based execution firm specializing in technology, finance, procurement, marketing, and logistics for emerging markets.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatlisa Group | Execution Across Critical Business Functions",
    description:
      "Mozambique-based execution firm specializing in technology, finance, procurement, marketing, and logistics for emerging markets.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
