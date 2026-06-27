import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",
  title: ["청주 한양립스", "더 벨루체"],
  description:
    "청주 한양립스 더 벨루체는 청주시 상당구 지북동 247번지 일원에 조성되는 총 949세대 브랜드 아파트입니다. 전용 59㎡·75㎡·84㎡ 타입과 우수한 교통, 생활, 교육 인프라를 갖춘 프리미엄 주거단지를 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "청주 지북동 중심 입지",
      subtitle: "교통과 생활 편의를 모두 누리는 프리미엄 입지",
      description:
        "청주시 상당구 지북동 247번지 일원의 교통, 교육, 상업, 생활 인프라를 가까이 누릴 수 있는 우수한 입지환경을 제공합니다.",
      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },
    {
      id: "premium-reservation",
      number: "02",
      icon: premiumIcon2,
      title: "총 949세대 브랜드 단지",
      subtitle: "아파트 11개동, 지하 3층~지상 29층",
      description:
        "청주 한양립스 더 벨루체는 총 949세대 규모의 브랜드 아파트로 쾌적한 단지 설계와 주거 편의를 함께 제공합니다.",
      link: "/Promotion/Customer",
      linkText: "방문예약 보기",
    },
    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "59㎡ · 75㎡ · 84㎡ 평면 구성",
      subtitle: "실수요를 고려한 다양한 타입",
      description:
        "59A, 59B, 75A, 75B, 84A, 84B 타입으로 구성되어 다양한 가족 구성원과 라이프스타일에 맞는 공간을 제공합니다.",
      link: "/LocationEnvironment/intro",
      linkText: "생활환경 보기",
    },
    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "한양건설 브랜드 프리미엄",
      subtitle: "품격 있는 주거 가치를 완성하다",
      description:
        "한양건설의 브랜드 노하우를 바탕으로 단지 설계부터 커뮤니티, 공간 구성까지 완성도 높은 프리미엄 라이프를 제안합니다.",
      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};