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
  title: "대한중고차수출",
  description:
    "대한중고차수출은 중고차 해외 수출 전문 업체로, 한국 중고차의 수출 절차, 비용, 등 자세한 상담을 도와드리며, 전 세계 다양한 국가에 신속하게 중고차를 수출합니다.",
  keywords: [
    "중고차 수출",
    "중고차 해외 수출",
    "중고차 판매",
    "한국 중고차 수출",
    "해외 중고차 거래",
    "수출용 중고차",
    "중고차 수출업체",
    "한국 자동차 수출",
    "중고차 수출 상담",
    "중고차 수출 절차",
    "자동차 수출",
    "수출 자동차 매입",
    "중고차 딜러 수출",
    "해외 바이어 중고차",
    "중고차 수출 국가",
    "중고차 수출 비용",
    "중고차 수출 세금",
    "중고차 수출 전문 업체",
    "중고차 수출 가격 비교",
    "한국 중고차 시장",
    "중고차 수출 문의",
    "중고차 수출 서비스",
    "중고차 수출 서류",
    "중고차 수출 물류",
    "중고차 수출 비용 절감",
  ],
  openGraph: {
    images: "https://daehancar.com/img/daehan-logo.png",
    type: "website",
    url: `https://daehancar.com`,
    title: `대한중고차수출`,
    description:
      "대한중고차수출은 한국의 중고차를 전 세계로 수출하는 전문 업체입니다. 신속하고 신뢰할 수 있는 수출 절차를 통해 고객에게 최고의 서비스를 제공합니다.",
  },
  icons: { icon: "/favicon.ico" },
  other: {
    "naver-site-verification": "123",
  },
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
