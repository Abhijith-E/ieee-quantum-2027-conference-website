import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/components/providers/QueryProvider";
import AIAssistantWidget from "@/components/ai/AIAssistantWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "IEEE ICQST 2027",
  description: "International Conference on Quantum Science and Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0F172A] text-white">
        <QueryProvider>
          <Navbar />
          {children}
          <AIAssistantWidget />
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
