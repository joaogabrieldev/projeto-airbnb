import "./globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb | Aluguéis por temporada, casas e experiências",
  description:
    "Encontre aluguéis por temporada, apartamentos, cabanas, casas de praia, acomodações únicas e experiências ao redor do mundo — tudo oferecido por anfitriões no Airbnb.",
  creator: "João Gabriel R. Rocha | Fullstack Developer",
  keywords: ["AIRBNB", "NEXT", "REACT", "Typescript", "NEXT.JS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
