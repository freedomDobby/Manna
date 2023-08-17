import React, { useState } from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import { useRecoilState } from "recoil";
import {
  userHeightState,
  userMbtiState,
  userReligionState,
  userJobState,
  userSidoState,
  userGuGunState,
} from "./RegisterState";

/// 자기소개 입력
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
  const [MyPageSelfIntro, setMySelfIntro] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMySelfIntro(event.target.value);
  };

  return (
    <MyPageTextAreaWrapper>
      <textarea
        value={MyPageSelfIntro}
        onChange={handleChange}
        rows={10}
        cols={80}
      />
    </MyPageTextAreaWrapper>
  );
};
/////////////////////g회원키//////////////////////////////////
export const UserHeightSlider = () => {
  const [UserHeight, setUserHeight] = useRecoilState(userHeightState);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setUserHeight(newValue);
    }
    // console.log(UserHeight); //유저 키 입력 완
  };

  return (
    <Box sx={{ width: 250 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{UserHeight}</Grid>
        <Grid item xs>
          <Slider
            onChange={handleSliderChange}
            value={UserHeight}
            min={130}
            max={210}
            aria-labelledby="input-slider"
            sx={{
              color: "#F8E3EA",
            }}
          />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
};

// sel box 만들기 //////////////////////////////////////////

const SelectBoxWrapper = styled.div`
  select {
    width: 10vw;
    height: 100%;
    border: 1px solid black;
    border-radius: 0.5vh;
    font-size: 2.5vh;
    font-family: inherit;
    color: black;
  }
`;

export const MBTISelectBox = () => {
  const [MBTI, setMBTI] = useRecoilState(userMbtiState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMBTI(event.target.value);
  };

  // console.log(MBTI);

  return (
    <SelectBoxWrapper>
      <select defaultValue={MBTI} value={MBTI} onChange={handleChange}>
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

export const ReligionSelectBox = () => {
  const [Religion, setReligion] = useRecoilState(userReligionState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReligion(event.target.value);
  };
  // console.log(Religion);

  return (
    <SelectBoxWrapper>
      <select value={Religion} onChange={handleChange}>
        <option value="기독교">기독교</option>
        <option value="천주교">천주교</option>
        <option value="불교">불교</option>
        <option value="원불교">원불교</option>
        <option value="무교">무교</option>
      </select>
    </SelectBoxWrapper>
  );
};

export const JobSelectBox = () => {
  const [Job, setJob] = useRecoilState(userJobState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJob(event.target.value);
  };
  // console.log(Job);

  return (
    <SelectBoxWrapper>
      <select value={Job} onChange={handleChange}>
        <option value="경영·사무·금융·보험직"> 경영·사무·금융·보험직</option>
        <option value="연구직 및 공학 기술직"> 연구직 및 공학 기술직</option>
        <option value="교육·법률·사회복지·경찰·소방직 및 군인">
          {" "}
          교육·법률·사회복지·경찰·소방직 및 군인
        </option>
        <option value="보건·의료직"> 보건·의료직</option>
        <option value="예술·디자인·방송·스포츠직">
          {" "}
          예술·디자인·방송·스포츠직
        </option>
        <option value="미용·여행·숙박·음식·경비·청소직">
          {" "}
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
///////////////////////////////////////////////////////////////////

//토글스위치만들기//////////////////////////////////////////
const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#ffcced", // 스위치가 checked 상태일 때의 색상
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#f8e3ea", // 스위치가 checked 상태일 때의 트랙 색상
  },
}));

export const SmokeCustomSwitch: React.FC = () => {
  const [isSmoke, setIsSmoke] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsSmoke(event.target.checked);
  };

  // console.log(JSON.stringify(isSmoke));

  return (
    <div style={{ width: "10vw" }}>
      <CustomSwitch checked={isSmoke} onChange={handleChange} />
    </div>
  );
};

export const DrinkCustomSwitch: React.FC = () => {
  const [isDrink, setIsDrink] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDrink(event.target.checked);
  };

  return (
    <div style={{ width: "10vw" }}>
      <CustomSwitch checked={isDrink} onChange={handleChange} />
    </div>
  );
};

export const BlockCustomSwitch: React.FC = () => {
  const [isBlock, setIsBlock] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBlock(event.target.checked);
  };

  return (
    <div style={{ width: "10vw" }}>
      <CustomSwitch checked={isBlock} onChange={handleChange} />
    </div>
  );
};

///////////////////////회원주소 (시도)///////////////////////////
export const Sido = () => {
  const [Sido, setSido] = useRecoilState(userSidoState);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSido(event.target.value);
  };
  return (
    <SelectBoxWrapper>
      <select
        value={Sido}
        onChange={handleChange}

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
///////////////////////회원주소 (구군)///////////////////////////

////서울//////
export const SeoulGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const BuSanGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const DaeguGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const IncheonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const GwangjuGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const DaejeonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const UlSanGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const SejongGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const GyeonggiGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const GangwonGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const ChungbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const ChungnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const JeonbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const JeonnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const GyeongbukGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const GyeongnamGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
export const JejuGugun = () => {
  const [Gugun, setGugun] = useRecoilState(userGuGunState);

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
