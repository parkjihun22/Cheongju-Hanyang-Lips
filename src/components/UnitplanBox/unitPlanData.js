import unit01 from "../../assets/UnitplanBox/unit01.jpg";
import unit02 from "../../assets/UnitplanBox/unit02.jpg";
import unit03 from "../../assets/UnitplanBox/unit03.jpg";
import unit04 from "../../assets/UnitplanBox/unit04.jpg";
import unit05 from "../../assets/FloorPlan/FloorPlan5/unit05.jpg";
import unit06 from "../../assets/FloorPlan/FloorPlan6/unit06.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "청주 한양립스 타입안내",
  description:
    "청주 한양립스 더 벨루체의 59㎡A·59㎡B·75㎡A·75㎡B·84㎡A·84㎡B 타입별 평면을 확인할 수 있습니다. 공간 구성과 생활 동선을 비교하며 실거주에 적합한 타입을 살펴보세요.",
  plans: [
    {
      id: "59A",
      type: "59A",
      name: "59A㎡",
      summary: "실거주를 고려한 59A 타입의 공간 구성과 생활 동선을 확인하세요.",
      image: unit01,
      alt: "청주 한양립스 59A㎡ 평면도",
      link: "/FloorPlan/59A",
    },
    {
      id: "59B",
      type: "59B",
      name: "59B㎡",
      summary: "실용적인 공간 활용이 돋보이는 59B 타입 평면을 확인하세요.",
      image: unit02,
      alt: "청주 한양립스 59B㎡ 평면도",
      link: "/FloorPlan/59B",
    },
    {
      id: "75A",
      type: "75A",
      name: "75A㎡",
      summary: "가족 생활과 수납, 동선을 고려한 75A 타입 평면을 확인하세요.",
      image: unit03,
      alt: "청주 한양립스 75A㎡ 평면도",
      link: "/FloorPlan/84A",
    },
    {
      id: "75B",
      type: "75B",
      name: "75B㎡",
      summary: "타입별 공간 활용과 주거 동선을 살펴볼 수 있는 75B 타입입니다.",
      image: unit04,
      alt: "청주 한양립스 75B㎡ 평면도",
      link: "/FloorPlan/84B",
    },
    {
      id: "84A",
      type: "84A",
      name: "84A㎡",
      summary: "여유로운 실내 구성과 생활 동선을 갖춘 84A 타입 평면입니다.",
      image: unit05,
      alt: "청주 한양립스 84A㎡ 평면도",
      link: "/FloorPlan/114A",
    },
    {
      id: "84B",
      type: "84B",
      name: "84B㎡",
      summary: "84㎡ 타입의 수납 계획과 공간 구성을 확인할 수 있는 84B 타입입니다.",
      image: unit06,
      alt: "청주 한양립스 84B㎡ 평면도",
      link: "/FloorPlan/114B",
    },
  ],
};
