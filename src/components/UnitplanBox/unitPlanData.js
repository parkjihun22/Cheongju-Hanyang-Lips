import unit84A from "../../assets/UnitplanBox/unit01.jpg";
import unit84B from "../../assets/UnitplanBox/unit02.jpg";
import unit84C from "../../assets/UnitplanBox/unit03.jpg";
import unit101 from "../../assets/UnitplanBox/unit04.jpg";

export const unitPlanData = {
  eyebrow: "UNIT PLAN",
  title: "청주 한양립스 평면안내",
  description:
    "청주 한양립스의 전용 84㎡와 101㎡ 평면도를 확인할 수 있습니다. 타입별 공간 구성과 생활 동선을 비교하며 실거주에 적합한 평면을 살펴보세요.",

  plans: [
    {
      id: "unit-84a",
      type: "84A㎡",
      image: unit84A,
      alt: "청주 한양립스 84A㎡ 평면도",
    },
    {
      id: "unit-84b",
      type: "84B㎡",
      image: unit84B,
      alt: "청주 한양립스 84B㎡ 평면도",
    },
    {
      id: "unit-84c",
      type: "84C㎡",
      image: unit84C,
      alt: "청주 한양립스 84C㎡ 평면도",
    },
    {
      id: "unit-101",
      type: "101㎡",
      image: unit101,
      alt: "청주 한양립스 101㎡ 평면도",
    },
  ],
};