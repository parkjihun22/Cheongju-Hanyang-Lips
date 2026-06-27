export const siteSeo = {
  siteName: "청주 한양립스",
  siteUrl: "https://www.diarivalencia.com",
  phone: "1533-8848",
  ogImage: "/img/og/main.jpg",
  locale: "ko_KR",
  organizationId: "https://hillstategodeok-elisth.co.kr/#organization",
  websiteId: "https://hillstategodeok-elisth.co.kr/#website",
  defaultDescription:
    "청주 한양립스 공식 홈페이지입니다. 청주시 상당구 지북동 247번지 일원에 계획된 청주 한양립스 더 벨루체 949세대, 59㎡·75㎡·84㎡ 타입, 청약정보, 분양가 상담, 견본주택과 모델하우스 방문예약 정보를 확인하세요.",
  project: {
    addressCountry: "KR",
    addressRegion: "충청북도",
    addressLocality: "청주시",
    streetAddress: "상당구 지북동 247번지 일원",
    brands: ["한양립스", "더 벨루체", "한양건설"],
    navigationSchemaName: "청주 한양립스 주요 메뉴",
  },
  keywords: [
    "청주 한양립스",
    "청주 한양립스 더 벨루체",
    "청주한양립스",
    "한양립스 더 벨루체",
    "청주 지북동 한양립스",
    "청주 지북동 아파트",
    "청주 상당구 아파트 분양",
    "청주 아파트 분양",
    "청주 모델하우스",
    "청주 견본주택",
    "청주 청약",
    "청주 분양가",
    "청주 한양립스 공급정보",
    "청주 한양립스 949세대",
    "59㎡ 75㎡ 84㎡ 타입",
    "청주 잔여세대 문의",
    "모델하우스 방문예약",
  ],
};

export const seoNavigation = [
  {
    name: "브랜드소개",
    path: "/Brand/intro",
    children: [
      { name: "브랜드소개", path: "/Brand/intro" },
      { name: "홍보영상", path: "/Brand/video" },
    ],
  },
  {
    name: "사업개요",
    path: "/BusinessGuide/intro",
    children: [
      { name: "사업안내", path: "/BusinessGuide/intro" },
      { name: "분양일정", path: "/BusinessGuide/plan" },
    ],
  },
  {
    name: "분양안내",
    path: "/SalesInfo/announcement",
    children: [
      { name: "입주자 모집공고", path: "/SalesInfo/announcement" },
      { name: "마감자재리스트", path: "/BusinessGuide/documents" },
      { name: "서류안내", path: "/SalesInfo/guide" },
    ],
  },
  {
    name: "입지환경",
    path: "/LocationEnvironment/intro",
    children: [
      { name: "입지안내", path: "/LocationEnvironment/intro" },
      { name: "프리미엄", path: "/LocationEnvironment/primium" },
    ],
  },
  {
    name: "단지안내",
    path: "/ComplexGuide/intro",
    children: [
      { name: "단지 배치도", path: "/ComplexGuide/intro" },
      { name: "호수 배치도", path: "/ComplexGuide/detailintro" },
      { name: "커뮤니티", path: "/ComplexGuide/community" },
    ],
  },
  {
    name: "타입안내",
    path: "/FloorPlan/59A",
    children: [
      { name: "59A", path: "/FloorPlan/59A" },
      { name: "59B", path: "/FloorPlan/59B" },
      { name: "75A", path: "/FloorPlan/84A" },
      { name: "75B", path: "/FloorPlan/84B" },
      { name: "84A", path: "/FloorPlan/114A" },
      { name: "84B", path: "/FloorPlan/114B" },
      { name: "E-모델하우스", path: "/FloorPlan/Emodel" },
    ],
  },
  {
    name: "홍보센터",
    path: "/Promotion/Customer",
    children: [
      { name: "관심고객등록", path: "/Promotion/Customer" },
    ],
  },
];

const page = ({
  path,
  title,
  description,
  menu,
  image = siteSeo.ogImage,
  priority = 0.8,
  changefreq = "weekly",
  robots = "index, follow, max-snippet:-1, max-image-preview:large",
}) => ({
  path,
  title,
  description,
  menu,
  image,
  priority,
  changefreq,
  robots,
});

export const seoPages = {
  home: page({
    path: "/",
    title: "청주 한양립스 | 청주 한양립스 더 벨루체",
    description: siteSeo.defaultDescription,
    menu: "홈",
    priority: 1,
    changefreq: "daily",
  }),
  brandIntro: page({
    path: "/Brand/intro",
    title: "브랜드소개 | 청주 한양립스",
    description:
      "청주 한양립스 더 벨루체의 브랜드 가치와 주거 철학을 소개합니다. 청주에서 만나는 한양립스의 주거 가치와 분양 정보를 확인하세요.",
    menu: "브랜드소개",
  }),
  brandVideo: page({
    path: "/Brand/video",
    title: "홍보영상 | 청주 한양립스",
    description:
      "청주 한양립스 홍보영상을 통해 청주 한양립스 더 벨루체의 브랜드 프리미엄, 분양 안내와 주거 가치를 확인하세요.",
    menu: "브랜드소개",
  }),
  businessIntro: page({
    path: "/BusinessGuide/intro",
    title: "사업개요 | 청주 한양립스",
    description:
      "청주 한양립스 사업개요 안내입니다. 청주시 상당구 지북동 247번지 일원, 아파트 11개동 지하 3층~지상 29층, 총 949세대 규모의 청주 한양립스 더 벨루체 정보를 확인하세요.",
    menu: "사업개요",
    image: "/img/og/business.jpg",
    priority: 0.9,
  }),
  businessPlan: page({
    path: "/BusinessGuide/plan",
    title: "분양일정 | 청주 한양립스",
    description:
      "청주 한양립스 분양일정 안내입니다. 특별공급, 일반공급, 당첨자 발표, 서류접수와 정당계약 등 주요 청약 일정을 확인하세요.",
    menu: "사업개요",
  }),
  salesGuide: page({
    path: "/BusinessGuide/documents",
    title: "마감자재리스트 | 청주 한양립스",
    description:
      "청주 한양립스 마감자재리스트 안내 페이지입니다. 청주 한양립스 더 벨루체의 세대 마감, 옵션, 타입별 확인 사항과 분양 상담 전 필요한 정보를 안내합니다.",
    menu: "분양안내",
  }),
  salesInfoGuide: page({
    path: "/SalesInfo/guide",
    title: "서류안내 | 청주 한양립스",
    description:
      "청주 한양립스 서류안내 페이지입니다. 청약, 계약, 자격 확인, 제출서류와 상담 전 준비해야 할 주요 내용을 확인하세요.",
    menu: "분양안내",
  }),
  subscriptionGuide: page({
    path: "/SalesInfo/SubscriptionGuide",
    title: "청약안내 | 청주 한양립스",
    description:
      "청주 한양립스 청약안내입니다. 특별공급과 일반공급 신청 전 확인해야 할 청약 자격, 접수 절차, 당첨자 발표 정보를 안내합니다.",
    menu: "분양안내",
  }),
  announcement: page({
    path: "/SalesInfo/announcement",
    title: "입주자 모집공고 | 청주 한양립스",
    description:
      "청주 한양립스 입주자 모집공고 안내 페이지입니다. 총 949세대 공급 계획, 청약 일정, 계약 조건 등 분양 전 반드시 확인해야 할 공고 정보를 제공합니다.",
    menu: "분양안내",
  }),
  stampTax: page({
    path: "/SalesInfo/StampTax",
    title: "인지세 납부안내 | 청주 한양립스",
    description:
      "청주 한양립스 인지세 납부안내입니다. 분양계약 시 필요한 인지세 납부 기준과 계약 관련 유의사항을 확인하세요.",
    menu: "분양안내",
  }),
  locationIntro: page({
    path: "/LocationEnvironment/intro",
    title: "입지환경 | 청주 한양립스",
    description:
      "청주 한양립스 입지환경 안내입니다. 청주시 상당구 지북동 247번지 일원에서 누리는 교통, 교육, 생활 인프라와 청주 한양립스 더 벨루체의 주거 가치를 확인하세요.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
    priority: 0.9,
  }),
  locationPremium: page({
    path: "/LocationEnvironment/primium",
    title: "프리미엄 | 청주 한양립스",
    description:
      "청주 한양립스 프리미엄 안내입니다. 청주 한양립스 더 벨루체의 생활 인프라, 브랜드 설계, 모델하우스 상담과 분양 가치를 소개합니다.",
    menu: "입지환경",
    image: "/img/og/location.jpg",
  }),
  complexIntro: page({
    path: "/ComplexGuide/intro",
    title: "단지 배치도 | 청주 한양립스",
    description:
      "청주 한양립스 단지 배치도 안내입니다. 동선, 조망, 생활 편의와 쾌적성을 고려한 단지 구성과 배치 계획을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
    priority: 0.9,
  }),
  complexDetail: page({
    path: "/ComplexGuide/detailintro",
    title: "호수 배치도 | 청주 한양립스",
    description:
      "청주 한양립스 호수 배치도 안내입니다. 동·호수 구성과 단지 내 위치 정보를 통해 세대별 배치 흐름을 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),
  complexCommunity: page({
    path: "/ComplexGuide/community",
    title: "커뮤니티 | 청주 한양립스",
    description:
      "청주 한양립스 커뮤니티 안내입니다. 입주민의 일상 편의와 여가를 고려한 커뮤니티 시설과 단지 생활 가치를 확인하세요.",
    menu: "단지안내",
    image: "/img/og/complex.jpg",
  }),
  floorPlan84A: page({
    path: "/FloorPlan/59A",
    title: "59A㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 59A㎡ 평면도 안내입니다. 실거주 선호도가 높은 소형 타입의 공간 구성과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),
  floorPlan84C: page({
    path: "/FloorPlan/59B",
    title: "59B㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 59B㎡ 평면도 안내입니다. 공간 활용과 수납, 생활 동선을 고려한 세대 구성을 확인하세요.",
    menu: "타입안내",
  }),
  floorPlan101: page({
    path: "/FloorPlan/84A",
    title: "75A㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 75A㎡ 평면도 안내입니다. 가족 생활과 실용적인 공간 활용을 고려한 타입 구성을 확인하세요.",
    menu: "타입안내",
  }),
  floorPlan84B: page({
    path: "/FloorPlan/84B",
    title: "75B㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 75B㎡ 평면도 안내입니다. 75㎡ 타입의 세대 구성과 공간 활용 포인트를 확인하세요.",
    menu: "타입안내",
  }),
  floorPlan114A: page({
    path: "/FloorPlan/114A",
    title: "84A㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 84A㎡ 평면도 안내입니다. 84㎡ 타입의 평면 구성과 주거 동선을 확인하세요.",
    menu: "타입안내",
  }),
  floorPlan114B: page({
    path: "/FloorPlan/114B",
    title: "84B㎡ 평면도 | 청주 한양립스",
    description:
      "청주 한양립스 84B㎡ 평면도 안내입니다. 84㎡ 타입의 공간 구성, 수납 계획과 생활 동선을 확인하세요.",
    menu: "타입안내",
  }),
  floorPlanVideos: page({
    path: "/FloorPlan/videos",
    title: "타입안내영상 | 청주 한양립스",
    description:
      "청주 한양립스 타입안내영상 페이지입니다. 타입별 공간 구성과 실내 포인트를 영상으로 확인하세요.",
    menu: "타입안내",
  }),
  emodel: page({
    path: "/FloorPlan/Emodel",
    title: "E-모델하우스 | 청주 한양립스",
    description:
      "청주 한양립스 E-모델하우스입니다. 59㎡, 75㎡, 84㎡ 타입의 실내 구조, 공간 구성과 주거 동선을 온라인으로 확인하세요.",
    menu: "타입안내",
    image: "/img/og/emodel.jpg",
    priority: 0.9,
  }),
  interior84A: page({
    path: "/Interior/59A",
    title: "84A㎡ 인테리어 | 청주 한양립스",
    description:
      "청주 한양립스 84A㎡ 인테리어 안내입니다. 실내 마감, 공간 분위기와 타입별 인테리어 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior84C: page({
    path: "/Interior/84A",
    title: "84C㎡ 인테리어 | 청주 한양립스",
    description:
      "청주 한양립스 84C㎡ 인테리어 안내입니다. 타입별 실내 분위기와 공간 활용 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  interior101: page({
    path: "/Interior/84B",
    title: "101㎡ 인테리어 | 청주 한양립스",
    description:
      "청주 한양립스 101㎡ 인테리어 안내입니다. 여유로운 실내 공간과 마감 포인트를 확인하세요.",
    menu: "인테리어",
  }),
  press: page({
    path: "/Promotion/Press",
    title: "언론보도 | 청주 한양립스",
    description:
      "청주 한양립스 언론보도 페이지입니다. 청주 한양립스 더 벨루체 분양 소식, 사업 안내와 최신 홍보센터 정보를 확인하세요.",
    menu: "홍보센터",
    priority: 0.7,
  }),
  customer: page({
    path: "/Promotion/Customer",
    title: "관심고객등록 | 청주 한양립스",
    description:
      "청주 한양립스 관심고객등록 페이지입니다. 분양 일정, 모델하우스 방문예약, 청약 정보와 주요 안내를 빠르게 받아보세요.",
    menu: "홍보센터",
    image: "/img/og/customer.jpg",
    priority: 0.9,
    changefreq: "daily",
  }),
  notFound: page({
    path: "/404",
    title: "페이지를 찾을 수 없습니다 | 청주 한양립스",
    description:
      "요청하신 페이지를 찾을 수 없습니다. 청주 한양립스 공식 홈페이지의 사업안내, 입지환경, 타입안내, E-모델하우스와 관심고객등록 메뉴를 이용해 주세요.",
    menu: "오류",
    priority: 0,
    changefreq: "yearly",
    robots: "noindex, follow",
  }),
};

export const seoPathMap = Object.fromEntries(
  Object.entries(seoPages).map(([key, value]) => [value.path.toLowerCase(), key])
);

export const getAbsoluteUrl = (path = "/") => {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteSeo.siteUrl}${path}`;
};

export const getSeoPageByPath = (pathname = "/") => {
  const decodedPath = decodeURI(pathname).replace(/\/$/, "") || "/";
  const normalizedPath = decodedPath.toLowerCase();
  const exactKey = seoPathMap[normalizedPath];

  if (exactKey) return seoPages[exactKey];

  if (normalizedPath.endsWith("/press")) return seoPages.press;
  if (normalizedPath.includes("/press/")) return seoPages.press;
  if (normalizedPath.endsWith("/customer")) return seoPages.customer;

  return seoPages.notFound;
};
