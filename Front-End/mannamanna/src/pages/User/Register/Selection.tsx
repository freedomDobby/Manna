import React, { useState } from "react";
import styled from "styled-components";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";

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
  const [UserHeight, setUserHeight] = React.useState<number>(177);

  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setUserHeight(newValue);
    }
    console.log(UserHeight); //유저 키 입력 완
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
  const [MBTI, setMBTI] = useState("INFP");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMBTI(event.target.value);
  };

  console.log(MBTI);

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
  const [Religion, setReligion] = useState("무교");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setReligion(event.target.value);
  };
  console.log(Religion);

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
  const [Job, setJob] = useState("경영·사무·금융·보험직");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setJob(event.target.value);
  };
  console.log(Job);

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

/////////////////////////////////////////////////////////
