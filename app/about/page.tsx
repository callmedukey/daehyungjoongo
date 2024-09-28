import Image from "next/image";
import React from "react";
import AboutShip from "@/public/img/about-ship.png";
import Salesman from "@/public/img/sales-man-2.png";
import Car1 from "@/public/img/about-car-1.png";
import Car2 from "@/public/img/about-car-2.png";
import InquiryForm from "@/components/InquiryForm";
const AboutPage = () => {
  return (
    <main className="max-w-6xl mx-auto w-full px-4">
      <article className="relative min-h-[min(60dvh,400px)] mt-12 flex flex-wrap isolate justify-center items-center gap-[clamp(2rem,10vw,12rem)] pt-12 text-center lg:text-left rounded-3xl overflow-clip px-2">
        <div className="absolute inset-0 bg-white opacity-50 " />
        <Image
          src={AboutShip}
          alt="화물선"
          fill
          quality={100}
          placeholder="blur"
          priority
          sizes="80vw"
          className="-z-10 object-cover object-center"
        />
        <div className="z-10 thirty font-bold space-y-6 text-primaryFormText">
          <h1 className="text-primary">중고차 직수출의 신뢰와 전문성!</h1>
          <p className="">
            대한중고차수출에서{" "}
            <span className="text-primary"> 믿을 수 있는</span> <br />
            중고차 거래의 새로운 기준을 만나보세요
          </p>
        </div>
        <Image
          priority
          quality={100}
          placeholder="blur"
          src={Salesman}
          alt="판매원"
          className="z-10 self-end"
          width={250}
        />
      </article>
      <article className="mt-[clamp(6rem,12vw,12rem)] about-max-width">
        <h2 className="flex flex-col gap-4 text-center">
          <span className="twenty text-primaryFormText">
            중고차 직수출 업계의 Number 1
          </span>
          <span className="text-primary thirty font-bold">대한중고차수출</span>
        </h2>
        <p className="mt-[clamp(2rem,8vw,6rem)]">
          <span className="font-bold twenty">대한중고차수출은</span> 체계적인
          시스템과 전문 인력의{" "}
          <span className="font-bold twenty">신뢰를 바탕으로</span>, 국내 차량의
          가치를 인정받아 다양한 국가로 중고차를 수출하고 있습니다. 중고차 수출
          시장에서 선도적인 위치를 차지하기 위해 끊임없는 노력을 하고 있습니다.
        </p>
        <div className="flex sm:gap-24 justify-center h-[25rem] my-16 flex-col sm:flex-row">
          <div className="aspect-square basis-[15rem] background-gradient rounded-full flex items-center justify-center flex-col self-start">
            <span className="twenty text-primaryFormText">거래 국가</span>
            <span className="text-[3rem] font-bold text-primary">+ 28</span>
          </div>
          <div className="basis-[15rem] aspect-square background-gradient rounded-full self-end flex items-center justify-center flex-col">
            <span className="twenty text-primaryFormText">연간 수출 대수</span>
            <span className="text-[3rem] font-bold text-primary">+ 2568</span>
          </div>
        </div>
        <p className="">
          온라인 플랫폼과 해외 지사를 통해 중남미, 아프리카, 중동 및 아시아
          지역의 다양한 해외 고객에게 매년 2,500대 이상의 차량을 수출하고
          있으며, 오랜 기간 신뢰할 수 있는 거래를 이어가고 있습으며
          대한중고차수출은 정직 바탕으로{" "}
          <span className="font-bold twenty">고객의 소중한 차량을</span>{" "}
          안전하게 매입할 것을 약속드리며, 중고차 수출의 발전을 위해 끊임없이
          노력하겠습니다!
        </p>
        <Image
          src={Car1}
          alt="중고차"
          className="mx-auto my-[clamp(6rem,12vw,11rem)]"
          width={360}
        />
        <h3 className="flex flex-col gap-2 items-center twenty text-primaryFormText">
          내 차를 파를 다른 방법은 없을까?
          <br />
          <span className="text-primary thirty font-bold">대한중고차수출</span>
        </h3>
        <p className="mt-[clamp(2rem,8vw,6rem)]">
          국내에서만 가능한 중고차 판매 방식에 대한{" "}
          <span className="font-bold twenty">새로운 대안!</span> 자신의 차량을
          국내 판매 가격은 물론, 해외 중고차 직수출 가격과 비교하여 보다
          합리적인 판매 방안을 제공합니다. 중고차 수출, 생각보다 간단합니다!
          복잡하고 번거로운 차량 판매 과정, 대한중고차수출이 훨씬 더{" "}
          <span className="font-bold twenty">쉽고 간편하게</span>{" "}
          도와드리겠습니다.
        </p>
        <Image
          src={Car2}
          alt="중고차"
          className="mx-auto my-[clamp(6rem,12vw,11rem)]"
          width={360}
        />
        <h4 className="flex flex-col gap-2 items-center twenty text-primaryFormText">
          가장 높은 가격에 판매하는 방법!
          <br />
          <span className="text-primary thirty font-bold">대한중고차수출</span>
        </h4>
        <p className="mt-[clamp(2rem,8vw,6rem)]">
          중고차 매매상사와 경매장에서의 구매 시세를 분석하여{" "}
          <span className="twenty font-bold">가장 합리적인 가격과</span> 판매
          방안을 제안합니다. 중고차 전문 카마스터가 비교 분석, 차량 점검, 구매
          계약까지 모든 과정을 대행해 드리므로, 소정의 대행 수수료로 중고차를
          가장 <span className="font-bold twenty">투명한 가격에</span> 판매하실
          수 있습니다.
          <br />
          <br />
          전문 교육을 받은 카마스터가 중고차 거래 시 발생할 수 있는 모든 고민과
          시간을 절약해드리며, 차량 전송 방법도 간소화해 드립니다. 일부 중고차
          딜러만이 진행하던 생소한 중고차 수출, 이제 국민중고차수출과 함께라면
          누구나 쉽게 이용할 수 있습니다!
        </p>
      </article>
      <div className="bg-white z-10 my-[clamp(6rem,12vw,11rem)] mx-auto px-6 pt-12 flex-1 max-w-[40rem] rounded-2xl border shadow-md">
        <h2 className="thirty text-primary text-center font-medium">
          실시간 차량 수출 무료 상담
        </h2>
        <p className="text-center text-shadow twenty font-medium">
          연식, 주행거리, 사고 유무 상관없이 최고가 매입
        </p>
        <InquiryForm />
      </div>
    </main>
  );
};

export default AboutPage;
