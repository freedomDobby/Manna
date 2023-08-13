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
  MyPageDataState,
  MyPageJob,
  MyPageMBTI,
  MyPageReligion,
  MyPageSelfIntro,
  MypageUserHeight,
  NowPass,
  WithdrawalPass,
} from "./MyPageState";
import api from "../../../apis/Api";
import { idAtom } from "../../../Recoil/State";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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
  const temp = { ...myPageData };
  const mypageUserHeight = useRecoilValue(MypageUserHeight);
  const myPageSelfIntro = useRecoilValue(MyPageSelfIntro);
  const myPageMBTI = useRecoilValue(MyPageMBTI);
  const myPageReligion = useRecoilValue(MyPageReligion);
  const myPageJob = useRecoilValue(MyPageJob);
  const isSmoke = useRecoilValue(IsSmoke);
  const isDrink = useRecoilValue(IsDrink);
  const isBlock = useRecoilValue(IsBlock);
  const userId = useRecoilValue(idAtom);
  const saveChange = async () => {
    temp.height = mypageUserHeight;
    temp.job = myPageJob;
    temp.isBlockingFriend = isBlock;
    temp.isSmoker = isSmoke;
    temp.isDrinker = isDrink;
    temp.religion = myPageReligion;
    temp.mbti = myPageMBTI;
    temp.introduction = myPageSelfIntro;

    try {
      const response = await api.put(`/user/mypage/${userId}`, temp);
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
