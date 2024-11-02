import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Lexend_Deca } from "next/font/google";
import TopBanner from "./components/TopBanner";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend-deca",
});

export const metadata: Metadata = {
  title: "Homework AI: Best AI Homework Helper & Solver (Free)",
  description:
    "Check out HomeworkAI - your intelligent homework helper. Get instant, step-by-step solutions and learn with ease. Try our AI question answerer for free and transform your study sessions today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.variable} antialiased`}>
        <div>
          <TopBanner />
        </div>
        {children}
      </body>
    </html>
  );
}
