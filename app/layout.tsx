import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const gmarketSans = localFont({
  src: [
    {
      path: "./fonts/GmarketSansLight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GmarketSansMedium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GmarketSansBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gmarket-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "대형중고차수출",
  description: "대형중고차수출",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body
        className={`${gmarketSans.variable} isolate antialiased font-gmarketSans leading-normal break-keep font-medium`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
