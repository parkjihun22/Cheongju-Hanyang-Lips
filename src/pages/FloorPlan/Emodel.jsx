import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import EmodelInline from "../../components/EmodelInline/EmodelInline";

const menuContents = [
  { title: "59A", url: "/FloorPlan/59A" },
  { title: "59B", url: "/FloorPlan/59B" },
  { title: "75A", url: "/FloorPlan/84A" },
  { title: "75B", url: "/FloorPlan/84B" },
  { title: "84A", url: "/FloorPlan/114A" },
  { title: "84B", url: "/FloorPlan/114B" },
  { title: "E-모델하우스", url: "/FloorPlan/Emodel" },
];

const Emodel = () => {
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <div className={styles.textBox}>
        <div>청주 한양립스 더 벨루체 타입별 공간을 온라인으로 확인</div>
        <div>59㎡·75㎡·84㎡ 타입의 구조와 생활 동선을 살펴보세요.</div>
      </div>

      <EmodelInline />

      <Footer />
    </div>
  );
};

export default Emodel;
