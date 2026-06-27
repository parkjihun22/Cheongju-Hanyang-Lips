// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect, useRef } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>청주 지북동 동남지역주택조합 공동주택 신축 계획</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>충청북도 청주시 상당구 지북동 247번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>아파트 11개동 (지하 3층~지상 29층)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 949세대</span>
        </li>
        <li>
          <strong>세대정보</strong>
          <span>59㎡A · 59㎡B · 75㎡A · 75㎡B · 84㎡A · 84㎡B</span>
        </li>
        <li>
          <strong>입지환경</strong>
          <span>청주시 상당구 지북동 생활권</span>
        </li>
        <li>
          <strong>용도</strong>
          <span>공동주택(아파트) 및 근린생활시설</span>
        </li>
        <li>
          <strong>건설사</strong>
          <span>한양건설</span>
        </li>
      </ul>
    ),
  },
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="청주 한양립스 입지환경 지도"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="청주 한양립스 지북동 생활권 지도"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            청주 지북동 생활 인프라와 949세대 가치를 누리는<br />
            청주 한양립스 프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "청주 지북동 생활권 입지",
      desc:
        "청주시 상당구 지북동 247번지 일원<br/>생활·교육·교통 인프라를 살피는 주거환경<br/>청주 한양립스 더 벨루체 브랜드 프리미엄",
    },
    {
      img: slide2,
      title: "59㎡ · 75㎡ · 84㎡ 타입 구성",
      desc:
        "59A·59B·75A·75B·84A·84B 타입 구성<br/>공간 활용과 생활 동선을 고려한 설계<br/>가족 중심 라이프스타일을 담은 주거 공간",
    },
    {
      img: slide3,
      title: "총 949세대 브랜드 단지",
      desc:
        "아파트 11개동, 지하 3층~지상 29층 규모<br/>공동주택과 근린생활시설이 함께 계획된 단지<br/>청주 한양립스 더 벨루체의 주거 가치",
    },
    {
      img: slide4,
      title: "생활·교육 인프라를 모두 누리다",
      desc:
        "청주 생활권을 가까이 누리는 입지<br/>교육시설과 상업시설, 공원까지 살펴보는 생활환경<br/>쾌적한 일상을 완성하는 브랜드 아파트",
    },
    {
      img: slide5,
      title: "한양건설 브랜드 프리미엄",
      desc:
        "한양건설이 시공하는 청주 한양립스<br/>입주민 중심의 편리한 주거 환경 제공<br/>청주 한양립스 더 벨루체 브랜드 아파트",
    },
    {
      img: slide6,
      title: "미래가치가 기대되는 주거 선택",
      desc:
        "청주 지북동 일대의 주거 변화와 함께 보는 미래가치<br/>분양가 상담과 모델하우스 방문예약 안내<br/>실거주와 분양 정보를 함께 갖춘 청주 한양립스",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const itemRefs = useRef({});

  const toggle = (key) => {
    setOpenKey((prevKey) => (prevKey === key ? null : key));

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const targetItem = itemRefs.current[key];
        if (!targetItem) return;

        const fixedHeaderOffset = 96;
        const targetTop =
          window.scrollY + targetItem.getBoundingClientRect().top - fixedHeaderOffset;

        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: "auto",
        });
      });
    });
  };

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>CHEONGJU HANYANG LIPS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      <img src={heroImage} className={styles.heroImage} alt="청주 한양립스 히어로 메인사진" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div
          key={key}
          className={styles.accordionItem}
          ref={(node) => {
            itemRefs.current[key] = node;
          }}
        >
          <button
            type="button"
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
            aria-expanded={openKey === key}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
