import Image from "next/image";
import Ship from "@/public/img/ship.jpeg";
import SalesMan from "@/public/img/salesman.png";
import Graph from "@/public/img/graph.png";
import InquiryForm from "@/components/InquiryForm";
import Morning from "@/public/img/morning.jpeg";
import Avante from "@/public/img/avante.jpeg";
import NewRey from "@/public/img/new.jpeg";
import K3 from "@/public/img/k3.jpeg";
import SecondShip from "@/public/img/second-ship.jpeg";
import VectorShip from "@/public/img/vector-ship.svg";
import Phone from "@/public/img/phone.svg";
import Office from "@/public/img/office.svg";
import Partner1 from "@/public/img/partner-1.png";
import Partner2 from "@/public/img/partner-2.png";
import Partner3 from "@/public/img/partner-3.png";
import Partner4 from "@/public/img/partner-4.png";
import Partner5 from "@/public/img/partner-5.png";
import Partner6 from "@/public/img/partner-6.png";
import Step1 from "@/public/img/stage-1.jpeg";
import Step2 from "@/public/img/stage-2.jpeg";
import Step3 from "@/public/img/stage-3.png";
import Step4 from "@/public/img/stage-4.jpeg";
import Step5 from "@/public/img/stage-5.jpeg";
import Step6 from "@/public/img/stage-6.png";

import Link from "next/link";
import NonCarouselCarList from "@/components/NonCarouselCarList";
import CarouselCarList from "@/components/CarouselCarList";

const partners = [
  {
    src: Partner1,
    alt: "파트너 하나캐피털",
  },
  {
    src: Partner2,
    alt: "파트너 우리은행",
  },
  {
    src: Partner3,
    alt: "파트너 DB손해보험",
  },
  {
    src: Partner4,
    alt: "파트너 신한은행",
  },
  {
    src: Partner5,
    alt: "파트너 KB국민카드",
  },
  {
    src: Partner6,
    alt: "파트너 Donghee",
  },
];

const carList: Car[] = [
  {
    src: Morning,
    car: "올 뉴 모닝 디럭스 스페셜",
    year: "2013년식",
    buy: "499 만 원",
    export: "699 만 원",
    markup: "200만 원 mark up",
  },
  {
    src: Avante,
    car: "아반떼 MD M16 GDI",
    year: "2013년식",
    buy: "490 만 원",
    export: "640 만 원",
    markup: "150만 원 mark up",
  },
  {
    src: K3,
    car: "K3 1.6 GDI 프레스티지",
    year: "2015년식",
    buy: "630 만 원",
    export: "750 만 원",
    markup: "120만 원 mark up",
  },
  {
    src: NewRey,
    car: "더 뉴 레이",
    year: "2015년식",
    buy: "759 만 원",
    export: "929 만 원",
    markup: "170만 원 mark up",
  },
];

const stages: Stages[] = [
  {
    src: Step1,
    title: "상담 신청",
  },
  {
    src: Step2,
    title: "접수 후 상담사 연결",
  },
  {
    src: Step3,
    title: "견적 받기",
  },
  {
    src: Step4,
    title: "계약서 작성/차량 대금 송금",
  },
  {
    src: Step5,
    title: "탁송 배정 / 차량 이동",
  },
  {
    src: Step6,
    title: "당일 말소처리",
  },
];

export default function Home() {
  return (
    <main className="text-primaryText">
      <article className="relative xl:h-[min(80dvh,600px)] isolate bg-black">
        <div className="absolute inset-0 bg-black/40" />
        <Image
          src={Ship}
          alt="화물선"
          className="object-cover xl:object-left object-[55%_0%] -z-10"
          quality={100}
          priority
          fill
        />
        <div className="flex justify-center xl:gap-12 h-full max-w-screen-8xl mx-auto xl:flex-row flex-col px-2 sm:px-0">
          <div className="bg-white z-10 xl:m-12 mt-0 mx-auto mb-12 px-6 py-12 flex-1 max-w-[40rem] rounded-2xl order-2 xl:order-1">
            <h2 className="thirty text-primary text-center font-medium">
              실시간 차량 수출 무료 상담
            </h2>
            <p className="text-center text-shadow twenty font-medium">
              연식, 주행거리, 사고 유무 상관없이 최고가 매입
            </p>
            <InquiryForm />
          </div>
          <div className="flex flex-col section-top-padding relative flex-1 order-1 xl:order-2">
            <h1 className="text-white font-bold thirty flex flex-col w-full">
              <span className="text-primary self-center text-center xl:self-start">
                투명한 가격과 프로세스로
              </span>
              <span className="self-center text-center">
                신뢰할 수 있는 중고차 수출 술로션
              </span>
            </h1>
            <div className="xl:absolute bottom-0 mx-auto">
              <Image src={SalesMan} alt="영업원" height={300} priority />
            </div>
          </div>
        </div>
      </article>
      <article className="section-top-padding font-bold max-w-4xl mx-auto px-4 sm:px-0">
        <h3 className="text-center thirty text-primary">
          자동차 연식이 높아 걱정하시나요?
        </h3>
        <p className="text-center twenty mt-[clamp(30px,10dvh,40px)]">
          팔지는 못 하고 폐차 하기 아까우시면 수출!
        </p>
        <p className="text-center mt-[clamp(60px,10dvh,100px)] thirty">
          폐차 대비 <span className="text-customSecondary">50~300만원</span> 더
          높은 가격에 내차 팔기!
        </p>
        <section className="relative flex justify-center lg:gap-4 xl:gap-8 sm:gap-2 font-medium mt-[clamp(50px,10dvh,90px)] max-w-sm mx-auto lg:max-w-full">
          <p className="self-end flex-1 text-right absolute lg:relative left-4 bottom-[clamp(6rem,8vw,8rem)] lg:bottom-4">
            국내 매입 가격 <br />
            <span className="text-customSecondary">700만원</span>
          </p>
          <Image
            src={Graph}
            alt="상승을 보이는 그래프"
            height={300}
            className="flex-1 max-w-[400px]"
            quality={100}
          />
          <p className="self-start thirty font-bold flex-1 absolute lg:static right-4 top-0">
            수출 매입 가격 <br />
            <span className="text-customSecondary">700만원</span>
          </p>
        </section>
        <Link
          href="/#inquiry-form"
          className="font-medium twenty text-white block w-fit bg-primary py-2 px-4 mx-auto rounded-xl mt-[clamp(30px,10dvh,40px)]"
        >
          <span className="translate-y-1 inline-block">
            지금 바로 상담 받기
          </span>
        </Link>
      </article>
      <article className="my-[clamp(100px,10vw,180px)] max-w-screen-8xl mx-auto">
        <NonCarouselCarList carList={carList} />
        <CarouselCarList carList={carList} />
      </article>
      <article>
        <h4 className="text-center text-primary thirty font-bold">
          중고 차 수출 판매 절차
        </h4>
        <ul className="flex flex-wrap lg:gap-12 gap-4 sm:gap-8 max-w-4xl mx-auto w-full px-4">
          {stages.map((stage, index) => (
            <li
              key={index}
              className="flex-1 flex flex-col basis-[15rem] overflow-clip rounded-md relative shadow-lg isolate"
            >
              <span className="bg-primary p-2 rounded-md absolute z-10">
                <span className="translate-y-0.5 inline-block text-white">
                  Step {index}.
                </span>
              </span>

              <div className="relative flex-1 sm:basis-[10rem] basis-[15rem] w-full">
                <Image
                  src={stage.src}
                  alt={stage.title}
                  fill
                  quality={100}
                  sizes="(max-width: 500px) 90vw, 25vw"
                  placeholder="blur"
                  className="object-cover object-center"
                />
              </div>
              <p className="text-center py-4 twenty">
                <span className="translate-y-0.5 inline-block">
                  {stage.title}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </article>
      <article className="my-[clamp(100px,10vw,180px)] relative py-16 isolate">
        <div className="absolute inset-0 bg-black/50" />
        <Image
          src={SecondShip}
          alt="바다를 가로질르는 화물선"
          fill
          className="-z-10 object-cover object-center"
          sizes="100vw"
        />
        <ul className="flex justify-center flex-wrap gap-12 px-4">
          <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem]">
            <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
            <Image
              src={Phone}
              alt="전화기"
              width={80}
              height={80}
              className="self-start -translate-y-2"
            />
            <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
              <span className="text-customSecondary">대한중고차수출</span>
              <span className="sm:twenty">문의하기</span>
            </p>
          </li>
          <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem]">
            <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
            <Image
              src={VectorShip}
              alt="백터 화물선"
              width={90}
              height={90}
              className="self-start -translate-y-2"
            />
            <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
              <span className="text-customSecondary">대한중고차수출</span>
              <span className="sm:twenty">중고차 직수출</span>
            </p>
          </li>
          <li className="flex bg-white isolate relative py-6 pl-6 pr-10 rounded-xl h-[8rem] gap-6 basis-[20rem]">
            <div className="absolute -left-8 -bottom-6 size-[8rem] bg-[#01258C] opacity-10 z-10 rounded-full blur-sm" />
            <Image
              src={Office}
              alt="사무실"
              width={80}
              height={80}
              className="self-start -translate-y-2"
            />
            <p className="flex flex-col gap-4 self-end ml-auto sm:ml-0">
              <span className="text-customSecondary">대한중고차수출</span>
              <span className="sm:twenty">소개</span>
            </p>
          </li>
        </ul>
      </article>
      <ul className="flex flex-wrap justify-center gap-x-[clamp(4rem,10vw,8rem)] lg:gap-y-4 gap-y-8 mx-auto px-4 border-t-2 border-primary pt-8 pb-16">
        {partners.map((partner, index) => (
          <li key={index}>
            <Image
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={100}
              placeholder="blur"
              quality={100}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
