import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AT Ventilasjon AS - Profesjonell ventilasjonsrens og varmepumpeservice",
  description: "AT Ventilasjon AS (Org.nr 935 684 862) tilbyr profesjonell ventilasjonsrens, varmepumpeservice og filterabonnement i hele Norge. VVS-spesialister fra Risør. Bestill befaring i dag!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
