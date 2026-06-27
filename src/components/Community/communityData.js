import bgImage from "../../assets/ComplexGuide/ComplexGuide1/bg-section.jpg";
import bannerImage from "../../assets/ComplexGuide/ComplexGuide1/complex-1024x573.jpg";
import layoutImage from "../../assets/ComplexGuide/ComplexGuide1/page1.webp";
import designImage from "../../assets/ComplexGuide/ComplexGuide2/page1.webp";
import communityImage from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";

export const communityData = {
  eyebrow: "COMMUNITY",
  title: "품격 있는 일상을 완성하는 단지 설계",
  description:
    "청주 한양립스 더 벨루체는 아파트 11개동, 총 949세대 규모에 맞춘 단지 배치와 조경, 커뮤니티 시설을 통해 입주민의 일상과 휴식, 편의가 조화롭게 이어지는 주거 공간을 제안합니다.",
  backgroundImage: bgImage,
  banner: {
    image: bannerImage,
    alt: "청주 한양립스 더 벨루체 단지 전경",
  },
  items: [
    {
      id: "complex-layout",
      label: "단지 배치도",
      title: "쾌적한 생활을 고려한 단지 배치",
      description:
        "청주 한양립스 더 벨루체는 채광과 통풍, 보행 동선을 고려한 단지 배치로 보다 쾌적한 주거 환경을 제공합니다.",
      image: layoutImage,
      alt: "청주 한양립스 더 벨루체 단지 배치도",
    },
    {
      id: "complex-design",
      label: "단지 특화설계",
      title: "한양건설 브랜드 특화 설계",
      description:
        "조경 공간과 휴게 공간, 보행 동선을 유기적으로 연결해 입주민이 일상 속에서도 여유로운 주거 가치를 누릴 수 있도록 계획하였습니다.",
      image: designImage,
      alt: "청주 한양립스 더 벨루체 특화 설계",
    },
    {
      id: "community-space",
      label: "커뮤니티",
      title: "입주민 중심의 커뮤니티 시설",
      description:
        "입주민의 건강과 여가, 소통을 고려한 다양한 커뮤니티 공간을 통해 더욱 풍요로운 주거 라이프를 제공합니다.",
      image: communityImage,
      alt: "청주 한양립스 더 벨루체 커뮤니티",
    },
  ],
};