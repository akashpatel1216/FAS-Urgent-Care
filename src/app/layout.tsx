import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F.A.S Urgent Care Center | Quality Healthcare in Tampa, Florida",
  description: "F.A.S. Urgent Care Center offers affordable healthcare services including telemedicine, in-person visits, DOT physicals, and primary care. Serving Tampa Bay, Florida, Georgia, and Wisconsin.",
  keywords: "urgent care, telemedicine, Tampa healthcare, primary care, DOT physicals, immigration exam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
