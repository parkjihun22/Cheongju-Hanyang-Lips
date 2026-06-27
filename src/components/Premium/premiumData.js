import premiumIcon1 from "../../assets/Main/section3-img1.png";
import premiumIcon2 from "../../assets/Main/section3-img2.png";
import premiumIcon3 from "../../assets/Main/section3-img3.png";
import premiumIcon4 from "../../assets/Main/section3-img4.png";

export const premiumData = {
  eyebrow: "GREAT PREMIUM",
  title: ["청주 한양립스", "더 벨루체"],
  description:
    "청주시 상당구 지북동 247번지 일원에 계획된 청주 한양립스 더 벨루체의 949세대 규모, 59㎡·75㎡·84㎡ 타입, 생활 인프라와 모델하우스 방문예약 정보를 만나보세요.",

  items: [
    {
      id: "premium-location",
      number: "01",
      icon: premiumIcon1,
      title: "청주 지북동 생활권 입지",
      subtitle: "교통과 생활 편의를 함께 살피는 주거 입지",
      description:
        "청주시 상당구 지북동 247번지 일원의 교통, 교육, 상업, 편의시설 접근성을 종합적으로 검토할 수 있는 입지 가치를 안내합니다.",
      link: "/BusinessGuide/intro",
      linkText: "사업안내 보기",
    },
    {
      id: "premium-reservation",
      number: "02",
      icon: premiumIcon2,
      title: "총 949세대 규모",
      subtitle: "아파트 11개동, 지하 3층~지상 29층",
      description:
        "청주 한양립스 더 벨루체는 공동주택과 근린생활시설로 계획되며, 총 949세대 규모의 주거 가치를 제안합니다.",
      link: "/Promotion/Customer",
      linkText: "방문예약 보기",
    },
    {
      id: "premium-infra",
      number: "03",
      icon: premiumIcon3,
      title: "59·75·84㎡ 타입",
      subtitle: "실수요를 고려한 여섯 가지 타입 구성",
      description:
        "59A, 59B, 75A, 75B, 84A, 84B 타입 안내를 통해 가족 구성과 라이프스타일에 맞는 평면을 살펴볼 수 있습니다.",
      link: "/LocationEnvironment/intro",
      linkText: "생활환경 보기",
    },
    {
      id: "premium-brand",
      number: "04",
      icon: premiumIcon4,
      title: "한양건설 브랜드 가치",
      subtitle: "한양립스 더 벨루체가 제안하는 주거 선택",
      description:
        "한양건설이 시공하는 청주 한양립스 더 벨루체는 단지 구성, 타입안내와 관심고객등록을 통해 실거주 중심의 분양 정보를 제공합니다.",
      link: "/LocationEnvironment/primium",
      linkText: "프리미엄 보기",
    },
  ],
};
