import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const manropeSans = localFont({
  src: "./fonts/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope-sans",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Boldo Edgar Allen",
  description: "We love to make great things, things that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
