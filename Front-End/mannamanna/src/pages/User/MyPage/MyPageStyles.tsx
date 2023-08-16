import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { MileageBox, LeftStyle, RightStyle } from "./MyPageStyle";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Modal from "@mui/material/Modal";
import MacBookBox from "../../../components/common/macbookBox";
import {
  ChangePass,
  IsBlock,
  IsDrink,
  IsSmoke,
  MyGuGun,
  MyPageDataState,
  MyPageDataType,
  MyPageJob,
  MyPageMBTI,
  MyPageProfilePicture1,
  MyPageProfilePicture2,
  MyPageProfilePicture3,
  MyPageReligion,
  MyPageSelfIntro,
  MySido,
  MypageUserHeight,
  NowPass,
  WithdrawalPass,
} from "./MyPageState";
import api from "../../../apis/Api";
import { idAtom } from "../../../Recoil/State";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { profilePicture1State, profilePicture2State, profilePicture3State } from "../Register/RegisterState";

// 마이페이지 구군
export const MyPageGuGun = () => {
  const Sido = useRecoilValue(MySido);
  switch (Sido) {
    case "서울특별시":
      return <MySeoulGugun />;
    case "부산광역시":
      return <MyBuSanGugun />;
    case "대구광역시":
      return <MyDaeguGugun />;
    case "인천광역시":
      return <MyIncheonGugun />;
    case "광주광역시":
      return <MyGwangjuGugun />;
    case "대전광역시":
      return <MyDaejeonGugun />;
    case "울산광역시":
      return <MyUlSanGugun />;
    case "세종특별자치시":
      return <MySejongGugun />;
    case "경기도":
      return <MyGyeonggiGugun />;
    case "강원도":
      return <MyGangwonGugun />;
    case "충청북도":
      return <MyChungbukGugun />;
    case "충청남도":
      return <MyChungnamGugun />;
    case "전라북도":
      return <MyJeonbukGugun />;
    case "전라남도":
      return <MyJeonnamGugun />;
    case "경상북도":
      return <MyGyeongbukGugun />;
    case "경상남도":
      return <MyGyeongnamGugun />;
    case "제주특별자치도":
      return <MyJejuGugun />;
    default:
      return null; // 모든 case에 해당하지 않을 때는 null 반환
  }
};
////서울//////
export const MySeoulGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="종로구"> 종로구</option>
        <option value="중구"> 중구</option>
        <option value="용산구"> 용산구</option>
        <option value="성동구"> 성동구</option>
        <option value="광진구">광진구</option>
        <option value="동대문구">동대문구</option>
        <option value="중랑구"> 중랑구</option>
        <option value="성북구"> 성북구</option>
        <option value="강북구"> 강북구</option>
        <option value="도봉구"> 도봉구</option>
        <option value="노원구"> 노원구</option>
        <option value="은평구"> 은평구</option>
        <option value="서대문구"> 서대문구</option>
        <option value="마포구"> 마포구</option>
        <option value="양천구"> 양천구</option>
        <option value="강서구"> 강서구</option>
        <option value="구로구"> 구로구</option>
        <option value="금천구"> 금천구</option>
        <option value="영등포구"> 영등포구</option>
        <option value="동작구"> 동작구</option>
        <option value="이천시"> 관악구</option>
        <option value="서초구"> 서초구</option>
        <option value="강남구"> 강남구</option>
        <option value="송파구"> 송파구</option>
        <option value="강동구"> 강동구</option>
      </select>
    </SelectBoxWrapper>
  );
};
////부산//////
export const MyBuSanGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="중구"> 중구</option>
        <option value="서구"> 서구</option>
        <option value="동구"> 동구</option>
        <option value="영도구"> 영도구</option>
        <option value="부산진구">부산진구</option>
        <option value="동래구">동래구</option>
        <option value="남구"> 남구</option>
        <option value="북구"> 북구</option>
        <option value="해운대구"> 해운대구</option>
        <option value="사하구"> 사하구</option>
        <option value="금정구"> 금정구</option>
        <option value="강서구"> 강서구</option>
        <option value="연제구"> 연제구</option>
        <option value="수영구"> 수영구</option>
        <option value="사상구"> 사상구</option>
        <option value="기장군"> 기장군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////대구//////
export const MyDaeguGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="중구"> 중구</option>
        <option value="동구"> 동구</option>
        <option value="서구"> 서구</option>
        <option value="남구"> 남구</option>
        <option value="북구"> 북구</option>
        <option value="수성구"> 수성구</option>
        <option value="달서구">달서구</option>
        <option value="달성군">달성군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////인천//////
export const MyIncheonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="중구"> 중구</option>
        <option value="동구"> 동구</option>
        <option value="미추홀구"> 미추홀구</option>
        <option value="연수구">연수구</option>
        <option value="남동구">남동구</option>
        <option value="부평구"> 부평구</option>
        <option value="계양구"> 계양구</option>
        <option value="서구"> 서구</option>
        <option value="강화군"> 강화군</option>
        <option value="옹진군"> 옹진군</option>
      </select>
    </SelectBoxWrapper>
  );
};
///광주//////
export const MyGwangjuGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="동구"> 동구</option>
        <option value="서구"> 서구</option>
        <option value="남구"> 남구</option>
        <option value="북구"> 북구</option>
        <option value="광산구"> 광산구</option>
      </select>
    </SelectBoxWrapper>
  );
};
////대전//////
export const MyDaejeonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="동구"> 동구</option>
        <option value="중구"> 중구</option>
        <option value="서구"> 서구</option>
        <option value="유성구"> 유성구</option>
        <option value="대덕구">대덕구</option>
      </select>
    </SelectBoxWrapper>
  );
};
////울산//////
export const MyUlSanGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="중구"> 중구</option>
        <option value="남구"> 남구</option>
        <option value="동구"> 동구</option>
        <option value="북구"> 북구</option>
        <option value="울주군"> 울주군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////세종//////
export const MySejongGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="소정면"> 소정면</option>
        <option value="전의면"> 전의면</option>
        <option value="전동면"> 전동면</option>
        <option value="조치원읍"> 조치원읍</option>
        <option value="연서면">연서면</option>
        <option value="장군면">장군면</option>
        <option value="연기면"> 연기면</option>
        <option value="연동면"> 연동면</option>
        <option value="부강면"> 부강면</option>
        <option value="금남면"> 금남면</option>
      </select>
    </SelectBoxWrapper>
  );
};
////경기도//////
export const MyGyeonggiGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="수원시"> 수원시</option>
        <option value="수원시 장안구"> 수원시 장안구</option>
        <option value="수원시 권선구"> 수원시 권선구</option>
        <option value="수원시 팔달구"> 수원시 팔달구</option>
        <option value="수원시 영통구"> 수원시 영통구</option>
        <option value="성남시"> 성남시</option>
        <option value="성남시 수정구"> 성남시 수정구</option>
        <option value="성남시 중원구"> 성남시 중원구</option>
        <option value="성남시 분당구"> 성남시 분당구</option>
        <option value="의정부시"> 의정부시</option>
        <option value="안양시"> 안양시</option>
        <option value="안양시 만안구"> 안양시 만안구</option>
        <option value="안양시 동안구"> 안양시 동안구</option>
        <option value="부천시">부천시</option>
        <option value="광명시">광명시</option>
        <option value="동두천시"> 동두천시</option>
        <option value="안산시"> 안산시</option>
        <option value="안산시 상록구"> 안산시 상록구</option>
        <option value="안산시 단원구"> 안산시 단원구</option>
        <option value="고양시"> 고양시</option>
        <option value="고양시 덕양구"> 고양시 덕양구</option>
        <option value="고양시 일산동구"> 고양시 일산동구</option>
        <option value="고양시 일산서구"> 고양시 일산서구</option>
        <option value="과천시"> 과천시</option>
        <option value="구리시"> 구리시</option>
        <option value="남양주시"> 남양주시</option>
        <option value="오산시"> 오산시</option>
        <option value="시흥시"> 시흥시</option>
        <option value="군포시"> 군포시</option>
        <option value="의왕시"> 의왕시</option>
        <option value="하남시"> 하남시</option>
        <option value="용인시"> 용인시</option>
        <option value="용인시 처인구"> 용인시 처인구</option>
        <option value="용인시 기흥구"> 용인시 기흥구</option>
        <option value="용인시 수지구"> 용인시 수지구</option>
        <option value="파주시"> 파주시</option>
        <option value="이천시"> 이천시</option>
        <option value="안성시"> 안성시</option>
        <option value="김포시"> 김포시</option>
        <option value="화성시"> 화성시</option>
        <option value="광주시"> 광주시</option>
        <option value="양주시"> 양주시</option>
        <option value="포천시"> 포천시</option>
        <option value="여주시"> 여주시</option>
        <option value="연천구"> 연천구</option>
        <option value="가평군"> 가평군</option>
        <option value="양평군"> 양평군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////강원도//////
export const MyGangwonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="춘천시"> 춘천시</option>
        <option value="원주시"> 원주시</option>
        <option value="강릉시"> 강릉시</option>
        <option value="동해시"> 동해시</option>
        <option value="태백시">태백시</option>
        <option value="속초시">속초시</option>
        <option value="삼척시"> 삼척시</option>
        <option value="홍천군"> 홍천군</option>
        <option value="횡성군"> 횡성군</option>
        <option value="영월군"> 영월군</option>
        <option value="평창군"> 평창군</option>
        <option value="정선군"> 정선군</option>
        <option value="철원군"> 철원군</option>
        <option value="화천군"> 화천군</option>
        <option value="양구군"> 양구군</option>
        <option value="인제군"> 인제군</option>
        <option value="고성군"> 고성군</option>
        <option value="양양군"> 양양군</option>
      </select>
    </SelectBoxWrapper>
  );
};

////충청북도//////
export const MyChungbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="청주시"> 청주시</option>
        <option value="청주시 상당구"> 청주시 상당구</option>
        <option value="청주시 서원구"> 청주시 서원구</option>
        <option value="청주시 흥덕구"> 청주시 흥덕구</option>
        <option value="청주시 청원구"> 청주시 청원구</option>
        <option value="충주시"> 충주시</option>
        <option value="제천시"> 제천시</option>
        <option value="보은군"> 보은군</option>
        <option value="옥천군">옥천군</option>
        <option value="영동군">영동군</option>
        <option value="증평군"> 증평군</option>
        <option value="진천군"> 진천군</option>
        <option value="괴산군"> 괴산군</option>
        <option value="장수군"> 음성군</option>
        <option value="단양군"> 단양군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////충청남도//////
export const MyChungnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="천안시"> 천안시</option>
        <option value="천안시 동남구"> 천안시 동남구</option>
        <option value="천안시 서북구"> 천안시 서북구</option>
        <option value="공주시"> 공주시</option>
        <option value="보령시"> 보령시</option>
        <option value="아산시"> 아산시</option>
        <option value="서산시">서산시</option>
        <option value="논산시">논산시</option>
        <option value="계룡시"> 계룡시</option>
        <option value="당진시"> 당진시</option>
        <option value="금산군"> 금산군</option>
        <option value="부여군"> 부여군</option>
        <option value="서천군"> 서천군</option>
        <option value="청양군"> 청양군</option>
        <option value="홍성군"> 홍성군</option>
        <option value="예산군"> 예산군</option>
        <option value="태안군"> 태안군</option>ㅏ
      </select>
    </SelectBoxWrapper>
  );
};
////전북//////
export const MyJeonbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="전주시"> 전주시</option>
        <option value="전주시 완산구"> 전주시 완산구</option>
        <option value="전주시 덕진구"> 전주시 덕진구</option>
        <option value="군산시"> 군산시</option>
        <option value="익산시"> 익산시</option>
        <option value="정읍시"> 정읍시</option>
        <option value="남원시">남원시</option>
        <option value="김제시">김제시</option>
        <option value="완주군"> 완주군</option>
        <option value="진안군"> 진안군</option>
        <option value="무주군"> 무주군</option>
        <option value="장수군"> 장수군</option>
        <option value="임실군"> 임실군</option>
        <option value="순창군"> 순창군</option>
        <option value="고창군"> 고창군</option>
        <option value="부안군"> 부안군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////전남//////
export const MyJeonnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="목포시"> 목포시</option>
        <option value="여수시"> 여수시</option>
        <option value="순천시"> 순천시</option>
        <option value="나주시"> 나주시</option>
        <option value="광양시">광양시</option>
        {/* <option value="양산시">양산시</option> */}
        <option value="담양군">담양군</option>
        <option value="곡성군"> 곡성군</option>
        <option value="구례군"> 구례군</option>
        <option value="고흥군"> 고흥군</option>
        <option value="보성군"> 장수군</option>
        <option value="화순군"> 화순군</option>
        <option value="장흥군"> 장흥군</option>
        <option value="강진군"> 강진군</option>
        <option value="해남군"> 해남군</option>
        <option value="영암군"> 영암군</option>
        <option value="무안군"> 무안군</option>
        <option value="해남군"> 해남군</option>
        <option value="영암군"> 영암군</option>
        <option value="무안군"> 무안군</option>
        <option value="함평군"> 함평군</option>
        <option value="영광군"> 영광군</option>
        <option value="장성군"> 장성군</option>
        <option value="완도군"> 완도군</option>
        <option value="진도군"> 진도군</option>
        <option value="신안군"> 신안군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////경북//////
export const MyGyeongbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="포항시"> 포항시</option>
        <option value="포항시 남구"> 포항시 남구</option>
        <option value="포항시 북구"> 포항시 북구</option>
        <option value="경주시"> 경주시</option>
        <option value="김천시"> 김천시</option>
        <option value="안동시"> 안동시</option>
        <option value="구미시">구미시</option>
        <option value="영주시">영주시</option>
        <option value="영천시">영천시</option>
        <option value="상주시"> 상주시</option>
        <option value="문경시"> 문경시</option>
        <option value="경산시"> 경산시</option>
        <option value="군위군"> 군위군</option>
        <option value="의성군"> 의성군</option>
        <option value="청송군"> 청송군</option>
        <option value="영양군"> 영양군</option>
        <option value="영덕군"> 영덕군</option>
        <option value="봉화군"> 봉화군</option>
        <option value="울진군"> 울진군</option>
        <option value="울릉군"> 울릉군</option>
        {/* <option value="청도군"> 청도군</option>
        <option value="고령군"> 고령군</option>
        <option value="성주군"> 성주군</option>
        <option value="칠곡군"> 칠곡군</option>
        <option value="예천군"> 예천군</option>
        <option value="예천군"> 예천군</option> */}
      </select>
    </SelectBoxWrapper>
  );
};
////경남//////
export const MyGyeongnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="창원시"> 창원시</option>
        <option value="창원시"> 창원시</option>
        <option value="창원시"> 창원시</option>
        <option value="창원시"> 창원시</option>
        <option value="진주시"> 진주시</option>
        <option value="통영시"> 통영시</option>
        <option value="사천시"> 사천시</option>
        <option value="김해시">김해시</option>
        <option value="밀양시">밀양시</option>
        <option value="거제시">거제시군</option>
        <option value="양산시"> 양산시</option>
        <option value="의령군"> 의령군</option>
        <option value="함안군"> 함안군</option>
        <option value="창년군"> 창년군</option>
        <option value="고성군"> 고성군</option>
        <option value="남해군"> 남해군</option>
        <option value="하동군"> 하동군</option>
        <option value="산청군"> 산청군</option>
        <option value="함양군"> 함양군</option>
        <option value="거창군"> 거창군</option>
        <option value="합천군"> 합천군</option>
      </select>
    </SelectBoxWrapper>
  );
};
////제주//////
export const MyJejuGugun = () => {
  const [Gugun, setGugun] = useRecoilState(MyGuGun);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGugun(event.target.value);
  };
  return (
    <SelectBoxWrapper
      style={{
        // border: "1px solid red",
        marginRight: "2%",
      }}
    >
      <select value={Gugun} onChange={handleChange}>
        <option value="제주시"> 제주시</option>
        <option value="서귀포시"> 서귀포시</option>
      </select>
    </SelectBoxWrapper>
  );
};
///////////////////////////////////////////////////////////////////

// 마이페이지 시도
export const MyPageSido = () => {
  const [mysido, setMysido] = useRecoilState(MySido);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMysido(event.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select
        value={mysido}
        onChange={handleChange}
        style={{marginRight: '1rem'}}
      >
        <option value="서울특별시"> 서울특별시</option>
        <option value="부산광역시"> 부산광역시</option>
        <option value="대구광역시"> 대구광역시</option>
        <option value="인천광역시"> 인천광역시</option>
        <option value="광주광역시">광주광역시</option>
        <option value="대전광역시">대전광역시</option>
        <option value="울산광역시"> 울산광역시</option>
        <option value="세종특별자치시"> 세종특별자치시</option>
        <option value="경기도"> 경기도</option>
        <option value="강원특별자치도"> 강원도</option>
        <option value="충청북도"> 충청북도</option>
        <option value="충청남도"> 충청남도</option>
        <option value="전라북도"> 전라북도</option>
        <option value="전라남도"> 전라남도</option>
        <option value="경상북도"> 경상북도</option>
        <option value="경상남도"> 경상남도</option>
        <option value="제주특별자치도"> 제주특별자치도</option>
      </select>
    </SelectBoxWrapper>
  );
};








// 회원탈퇴 버튼
type WithdrawalButtonProps = {
  children: string;
};
type WithdrawalDataProps = {
  id: string | null;
  pwd: string;
};
type MyPagePicturesProps = {
  id: number;
  path: string;
  name: string;
};

export const MyPageSmallButton = ({ children, onClick }: MyPageButtonProps) => {
  return (
    <Button
      sx={{
        width: "5vw",
        height: "5vh",
        margin: "1vh",
        backgroundColor: "#ffcced",
        border: "0.2vw solid #000",
        borderRadius: 3,
        color: "common.black",
        borderColor: "ffcced",
        fontSize: "2.5vh",
        fontFamily: "inherit",
        "&:hover": { backgroundColor: "#f8e3ea" },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export const WithdrawalButton = ({ children }: WithdrawalButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const withdrawalPass = useRecoilValue(WithdrawalPass);
  const userId = useRecoilValue(idAtom);
  const WithdrawalData: WithdrawalDataProps = {
    id: userId,
    pwd: withdrawalPass,
  };
  const CheckPassword = async () => {
    try {
      const response = await api.post("/user/mypage/checkPwd", WithdrawalData);
      if (response.data.result) {
        withdarwal();
      } else {
        console.log("비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  const withdarwal = async () => {
    try {
      const response = await api.post(`/user/mypage/${userId}`, WithdrawalData);
      alert("회원 탈퇴가 완료 되었습니다.");
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button
        sx={{
          width: "15vw",
          height: "8vh",
          margin: "1vh",
          backgroundColor: "#ffcced",
          border: "0.3vw solid #000",
          borderRadius: 3,
          color: "common.black",
          borderColor: "ffcced",
          fontSize: "2.5vh",
          fontFamily: "inherit",
          "&:hover": { backgroundColor: "#f8e3ea" },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "8%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25%",
            height: "60%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                height: "100%",
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "5vh",
              }}
            >
              <div style={{ fontSize: "3vh" }}>정말 탈퇴하시겠습니까?</div>
              <div>
                {/* <MyPageSmallButton onClick={CheckPassword}>확인</MyPageSmallButton> */}
                <MyPageSmallButton onClick={handleClose}>
                  확인
                </MyPageSmallButton>
                <MyPageSmallButton onClick={handleClose}>
                  취소
                </MyPageSmallButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

// 회원탈퇴 입력
const WithdrawalInputContainer = styled.div`
  width: 80%;
  height: 100%;
  border: 0.5vh solid black;
  border-radius: 1vh;
  display: flex;
  align-items: center;
  font-size: 3vh;
  background-color: #ffcced;
  margin-top: 3vh;
`;
const WithdrawalInput = styled.input`
  width: 90%;
  height: 90%;
  outline: none;
  border: none;
  font-size: inherit;
  background-color: inherit;
`;

const WithdrawalHideInput = styled.button`
  width: 10%;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

export const WithdrawalPassInput = () => {
  const [withdrawalPass, setWithdrawalPass] = useRecoilState(WithdrawalPass);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <WithdrawalInputContainer>
      <WithdrawalInput
        type={showPassword ? "text" : "password"}
        value={withdrawalPass}
        onChange={(e) => setWithdrawalPass(e.target.value)}
      />
      <WithdrawalHideInput onClick={handleTogglePassword}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </WithdrawalHideInput>
    </WithdrawalInputContainer>
  );
};

// 마이페이지 버튼
type MyPageButtonProps = {
  children: string;
  onClick: () => void;
};

export const MyPageButton = ({ children, onClick }: MyPageButtonProps) => {
  return (
    <Button
      sx={{
        width: "15vw",
        height: "10vh",
        margin: "1vh",
        backgroundColor: "#ffcced",
        border: "0.3vw solid #000",
        borderRadius: 3,
        color: "common.black",
        borderColor: "ffcced",
        fontSize: "2.5vh",
        fontFamily: "inherit",
        "&:hover": { backgroundColor: "#f8e3ea" },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

// 저장하기 버튼
type SaveChangeButtonProps = {
  children: string;
};

export const SaveChangeButton = ({ children }: SaveChangeButtonProps) => {
  const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
  const mypageUserHeight = useRecoilValue(MypageUserHeight);
  const myPageSelfIntro = useRecoilValue(MyPageSelfIntro);
  const myPageMBTI = useRecoilValue(MyPageMBTI);
  const myPageReligion = useRecoilValue(MyPageReligion);
  const myPageJob = useRecoilValue(MyPageJob);
  const isSmoke = useRecoilValue(IsSmoke);
  const isDrink = useRecoilValue(IsDrink);
  const isBlock = useRecoilValue(IsBlock);
  const userId = useRecoilValue(idAtom);
  const mysido = useRecoilValue(MySido);
  const mygugun = useRecoilValue(MyGuGun);
  const myPageProfilePicture1 = useRecoilValue(MyPageProfilePicture1);
  const myPageProfilePicture2 = useRecoilValue(MyPageProfilePicture2);
  const myPageProfilePicture3 = useRecoilValue(MyPageProfilePicture3);
  const profilePicture1 = useRecoilValue(profilePicture1State);
  const profilePicture2 = useRecoilValue(profilePicture2State);
  const profilePicture3 = useRecoilValue(profilePicture3State);
  
  const saveChange = async () => {
    const NewMyPageUser: MyPageDataType = {
      name: myPageData.name,
      height: mypageUserHeight,
      job: myPageJob,
      isBlockingFriend: isBlock,
      isSmoker: isSmoke,
      isDrinker: isDrink,
      religion: myPageReligion,
      mbti: myPageMBTI,
      introduction: myPageSelfIntro,
      mileage: myPageData.mileage,
      sido: mysido,
      gugun: mygugun,
      detail: myPageData.detail,
      latitude: 0,
      longitude: 0,
    };
    console.log(profilePicture1);
    console.log(profilePicture2);
    console.log(profilePicture3);
    const formdata = new FormData();
    const json = JSON.stringify(NewMyPageUser);
    const blob = new Blob([json], { type: "application/json" });
    formdata.append("memberUpdateRequest", blob);
    if (profilePicture1 instanceof File) {
      formdata.append("profilePicture1", profilePicture1);
    }
    if (profilePicture2 instanceof File) {
      formdata.append("profilePicture2", profilePicture2);
    }
    if (profilePicture3 instanceof File) {
      formdata.append("profilePicture3", profilePicture3);
    }
    try {
      const response = await api.put(`/user/mypage/${userId}`, formdata, {headers: { "Content-type": "multipart/form-data",},});
      alert("내 정보가 수정 되었습니다.");
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <Button
      sx={{
        width: "15vw",
        height: "10vh",
        margin: "1vh",
        backgroundColor: "#ffcced",
        border: "0.3vw solid #000",
        borderRadius: 3,
        color: "common.black",
        borderColor: "ffcced",
        fontSize: "2.5vh",
        fontFamily: "inherit",
        "&:hover": { backgroundColor: "#f8e3ea" },
      }}
      variant="contained"
      onClick={saveChange}
    >
      {children}
    </Button>
  );
};

// 내 정보 수정 페이지 비밀번호 변경 버튼
const PassChangeInput = styled.input`
  width: 80%;
  height: 10vh;
  border: 0.5vh solid black;
  border-radius: 5px;
  font-size: 3vh;
  margin: 2vh;
`;

const MyNowPassInput = () => {
  const [nowPass, setnowPass] = useRecoilState(NowPass);
  const handleNowChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnowPass(event.target.value);
  };

  return (
    <PassChangeInput
      type="password"
      value={nowPass}
      onChange={handleNowChange}
      placeholder="현재 비밀번호"
    />
  );
};

const MyChangePassInput = () => {
  const [changePass, setChangePass] = useRecoilState(ChangePass);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChangePass(event.target.value);
  };

  return (
    <PassChangeInput
      type="password"
      value={changePass}
      onChange={handleChange}
      placeholder="변경할 비밀번호"
    />
  );
};

type MyPagePassButtonProps = {
  children: string;
};

type PassChangeProps = {
  id: string | null;
  pwd: string;
};

// 비밀번호 변경 확인 버튼
const PassCheckButton = ({ children }: MyPagePassButtonProps) => {
  const userId = useRecoilValue(idAtom);
  const nowPass = useRecoilValue(NowPass);
  const changePass = useRecoilValue(ChangePass);
  const checkData: PassChangeProps = {
    id: userId,
    pwd: nowPass,
  };
  const CheckPassword = async () => {
    try {
      const response = await api.post("/user/mypage/checkPwd", checkData);
      if (response.data.result) {
        checkData.pwd = changePass;
        ChangePassword();
      } else {
        console.log("변경실패");
      }
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  const ChangePassword = async () => {
    try {
      console.log(checkData);
      const response = await api.post("/user/mypage/changePwd", checkData);
      console.log(response.data);
      alert("비밀번호를 변경했습니다.");
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <Button
      sx={{
        width: "15vw",
        height: "10vh",
        margin: "1vh",
        backgroundColor: "#ffcced",
        border: "0.3vw solid #000",
        borderRadius: 3,
        color: "common.black",
        borderColor: "ffcced",
        fontSize: "2.5vh",
        fontFamily: "inherit",
        "&:hover": { backgroundColor: "#f8e3ea" },
      }}
      variant="contained"
      onClick={CheckPassword}
    >
      {children}
    </Button>
  );
};

export const MyPagePassButton = ({ children }: MyPagePassButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div style={{ width: "50%" }}>
      <Button
        sx={{
          width: "100%",
          height: "5vh",
          margin: "1vh",
          backgroundColor: "#ffcced",
          border: "0.3vw solid #000",
          borderRadius: 3,
          color: "common.black",
          borderColor: "ffcced",
          fontSize: "2.5vh",
          fontFamily: "inherit",
          "&:hover": { backgroundColor: "#f8e3ea" },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            borderRadius: "5%",
            background: "white",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "70%",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5vh",
              }}
            >
              현재 비밀번호 입력
              <MyNowPassInput />
              변경할 비밀번호 입력
              <MyChangePassInput />
              <div>
                <PassCheckButton>확인</PassCheckButton>
                <MyPageButton onClick={handleClose}>취소</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  );
};

// 내 정보 수정 키 슬라이더
export const MyPageUserHeightSlider = () => {
  const [myPageUserHeight, setMyPageUserHeight] =
    useRecoilState(MypageUserHeight);
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setMyPageUserHeight(newValue);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{myPageUserHeight}</Grid>
        <Grid item xs>
          <Slider
            onChange={handleSliderChange}
            value={myPageUserHeight}
            min={130}
            max={210}
            aria-labelledby="input-slider"
            sx={{
              color: "#ffcced",
            }}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

// 내 정보 수정 자기소개 입력
const MyPageTextAreaWrapper = styled.div`
  textarea {
    width: 95%;
    height: 95%;
    border: 1px solid white;
    border-radius: 0.5vh;
    color: black;
    font-size: 2.5vh;
    font-family: inherit;
    outline: none;
    align-items: center;
    justify-content: center;
  }
`;

export const MyPageTextArea = () => {
  // const [MyPageSelfIntro, setMySelfIntro] = useState('');

  // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //     setMySelfIntro(event.target.value);
  // };

  const [myPageSelfIntro, setMySelfIntro] = useRecoilState(MyPageSelfIntro);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMySelfIntro(event.target.value);
  };

  return (
    <MyPageTextAreaWrapper>
      <textarea
        value={myPageSelfIntro}
        onChange={handleChange}
        rows={10}
        cols={80}
      />
    </MyPageTextAreaWrapper>
  );
};

// 내 정보 수정 selbox 공통
const SelectBoxWrapper = styled.div`
  select {
    width: 10vw;
    height: 30%;
    border: 1px solid black;
    border-radius: 0.5vh;
    font-size: 2.5vh;
    font-family: inherit;
    color: black;
  }
`;

// 내 정보 수정 MBTI
export const MBTISelectBox = () => {
  const [myPageMBTI, setMyPageMBTI] = useRecoilState(MyPageMBTI);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMyPageMBTI(event.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select
        defaultValue={myPageMBTI}
        value={myPageMBTI}
        onChange={handleChange}
      >
        <option value="ISTJ"> ISTJ</option>
        <option value="ISFJ"> ISFJ</option>
        <option value="INFJ"> INFJ</option>
        <option value="INTJ"> INTJ</option>
        <option value="ISTP"> ISTP</option>
        <option value="ISFP"> ISFP</option>
        <option value="INFP"> INFP</option>
        <option value="INTP"> INTP</option>
        <option value="ESTP"> ESTP</option>
        <option value="ESFP"> ESFP</option>
        <option value="ENFP"> ENFP</option>
        <option value="ENTP"> ENTP</option>
        <option value="ESTJ"> ESTJ</option>
        <option value="ESFJ"> ESFJ</option>
        <option value="ENFJ"> ENFJ</option>
        <option value="ENTJ"> ENTJ</option>
      </select>
    </SelectBoxWrapper>
  );
};

// 내 정보 수정 종교
export const ReligionSelectBox = () => {
  const [myPageReligion, setMyPageReligion] = useRecoilState(MyPageReligion);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMyPageReligion(event.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select value={myPageReligion} onChange={handleChange}>
        <option value="기독교">기독교</option>
        <option value="천주교">천주교</option>
        <option value="불교">불교</option>
        <option value="원불교">원불교</option>
        <option value="무교">무교</option>
      </select>
    </SelectBoxWrapper>
  );
};

// 내 정보 수정 직업
export const JobSelectBox = () => {
  const [myPageJob, setMyPageJob] = useRecoilState(MyPageJob);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMyPageJob(event.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select value={myPageJob} onChange={handleChange}>
        <option value="경영·사무·금융·보험직"> 경영·사무·금융·보험직</option>
        <option value="연구직 및 공학 기술직"> 연구직 및 공학 기술직</option>
        <option value="교육·법률·사회복지·경찰·소방직 및 군인">
          교육·법률·사회복지·경찰·소방직 및 군인
        </option>
        <option value="보건·의료직"> 보건·의료직</option>
        <option value="예술·디자인·방송·스포츠직">
          예술·디자인·방송·스포츠직
        </option>
        <option value="미용·여행·숙박·음식·경비·청소직">
          미용·여행·숙박·음식·경비·청소직
        </option>
        <option value="영업·판매·운전·운송직"> 영업·판매·운전·운송직</option>
        <option value="건설·채굴직"> 건설·채굴직</option>
        <option value="설치·정비·생산직"> 설치·정비·생산직</option>
        <option value="농림·어업직"> 농림·어업직</option>
        <option value="IT 기술직"> IT 기술직</option>
        <option value="학생 및 취업준비생"> 학생 및 취업준비생</option>
        <option value="무직"> 무직</option>
      </select>
    </SelectBoxWrapper>
  );
};

// 내 정보 수정 토글 스위치
const MyPageCustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#ffcced", // 스위치가 checked 상태일 때의 색상
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#f8e3ea", // 스위치가 checked 상태일 때의 트랙 색상
  },
}));

// 내 정보 수정 흡연
export const SmokeCustomSwitch = () => {
  const [isSmoke, setIsSmoke] = useRecoilState(IsSmoke);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSmoke(event.target.checked);
  };

  return (
    <div style={{ width: "10vw" }}>
      <MyPageCustomSwitch checked={isSmoke} onChange={handleChange} />
    </div>
  );
};

//내 정보 수정 음주
export const DrinkCustomSwitch = () => {
  const [isDrink, setIsDrink] = useRecoilState(IsDrink);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDrink(event.target.checked);
  };

  return (
    <div style={{ width: "10vw" }}>
      <MyPageCustomSwitch checked={isDrink} onChange={handleChange} />
    </div>
  );
};

// 내 정보 수정 지인차단
export const BlockCustomSwitch = () => {
  const [isBlock, setIsBlock] = useRecoilState(IsBlock);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBlock(event.target.checked);
  };

  return (
    <div style={{ width: "10vw" }}>
      <MyPageCustomSwitch checked={isBlock} onChange={handleChange} />
    </div>
  );
};

// 마이페이지 회원탈퇴 모달 스타일 (변경 후 삭제 예정)
export const MyPageModalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "0.3vw solid #000",
  borderRadius: 4,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export function UseMileage() {
  return (
    <LeftStyle>
      시간시간시간
      <MileageBox>-50 Point 쪽지 보내기</MileageBox>
    </LeftStyle>
  );
}

export function GetMileage() {
  return (
    <RightStyle>
      시간시간시간
      <MileageBox>+50 Point 미션 참여</MileageBox>
    </RightStyle>
  );
}

export function SogeList() {
  return (
    <LeftStyle>
      <MileageBox>소개팅소개팅소개팅</MileageBox>
    </LeftStyle>
  );
}

export function MeetList() {
  return (
    <RightStyle>
      <MileageBox>미팅미팅미팅</MileageBox>
    </RightStyle>
  );
}
