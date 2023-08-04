import { useRecoilValue } from "recoil";
import {
  BuSanGugun,
  ChungbukGugun,
  ChungnamGugun,
  DaeguGugun,
  DaejeonGugun,
  GangwonGugun,
  GwangjuGugun,
  GyeongbukGugun,
  GyeonggiGugun,
  GyeongnamGugun,
  IncheonGugun,
  JejuGugun,
  JeonbukGugun,
  JeonnamGugun,
  SejongGugun,
  SeoulGugun,
  UlSanGugun,
} from "../Selection";
import { userSidoState } from "../RegisterState";

export const GuGun = () => {
  const Sido = useRecoilValue(userSidoState);

  switch (Sido) {
    case "서울특별시":
      return <SeoulGugun />;
    case "부산광역시":
      return <BuSanGugun />;
    case "대구광역시":
      return <DaeguGugun />;
    case "인천광역시":
      return <IncheonGugun />;
    case "광주광역시":
      return <GwangjuGugun />;
    case "대전광역시":
      return <DaejeonGugun />;
    case "울산광역시":
      return <UlSanGugun />;
    case "세종특별자치시":
      return <SejongGugun />;
    case "경기도":
      return <GyeonggiGugun />;
    case "강원특별자치도":
      return <GangwonGugun />;
    case "충청북도":
      return <ChungbukGugun />;
    case "충청남도":
      return <ChungnamGugun />;
    case "전라북도":
      return <JeonbukGugun />;
    case "전라남도":
      return <JeonnamGugun />;
    case "경상북도":
      return <GyeongbukGugun />;
    case "경상남도":
      return <GyeongnamGugun />;
    case "제주특별자치도":
      return <JejuGugun />;
    default:
      return null; // 모든 case에 해당하지 않을 때는 null 반환
  }
};
