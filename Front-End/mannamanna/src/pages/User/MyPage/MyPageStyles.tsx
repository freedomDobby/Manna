import Button from '@mui/material/Button';
import React,{useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { MileageBox, LeftStyle, RightStyle } from './MyPageStyle';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Modal from '@mui/material/Modal';
import MacBookBox from "../../../components/common/macbookBox";
import { ChangePass, IsBlock, IsDrink, IsSmoke, MyPageJob, MyPageMBTI, MyPageReligion, MyPageSelfIntro, MypageUserHeight, NowPass, OriginPass } from './MyPageState';
import { findIdCheckIdAtom, findIdModalAtom, findPwModalAtom } from '../../../Recoil/State';

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
type  SaveChangeButtonProps = {
  children: string;
};

export const SaveChangeButton = ({ children }: SaveChangeButtonProps) => {

  const mypageUserHeight = useRecoilValue(MypageUserHeight);
  const myPageSelfIntro = useRecoilValue(MyPageSelfIntro);
  const myPageMBTI = useRecoilValue(MyPageMBTI);
  const myPageReligion = useRecoilValue(MyPageReligion);
  const myPageJob = useRecoilValue(MyPageJob);
  const isSmoke = useRecoilValue(IsSmoke);
  const isDrink = useRecoilValue(IsDrink);
  const isBlock = useRecoilValue(IsBlock);
  const nowPass = useRecoilValue(NowPass);
  
  const saveChange = () => {
    console.log(mypageUserHeight);
    console.log(myPageSelfIntro);
    console.log(myPageMBTI);
    console.log(myPageReligion);
    console.log(myPageJob);
    console.log(isSmoke);
    console.log(isDrink);
    console.log(isBlock);
    console.log(nowPass);
  }
  
  return(
      <Button
      sx={{
          width: '15vw', 
          height: '10vh',
          margin: '1vh',
          backgroundColor: '#ffcced',
          border: '0.3vw solid #000',
          borderRadius: 3,
          color:'common.black',
          borderColor: "ffcced",
          fontSize: '2.5vh',
          fontFamily:'inherit',
          '&:hover': { backgroundColor: '#f8e3ea' },
      }}
      variant="contained"
      onClick={saveChange}
      >{children}</Button>
  )
}



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

// const ChangePassword = () =>{
//   const originPass = useRecoilValue(OriginPass);
//   const nowPass = useRecoilValue(NowPass);
//   const changePass = useRecoilValue(ChangePass);

//   //현재 유저의 비밀번호와 바꿀 비밀 번호를 저장 
//   if(originPass === nowPass){
//     console.log(nowPass+ '에서')
//     console.log(changePass+ '로 비밀번호 변경')
//   }
// }
  
export const MyPagePassButton = ({children}: MyPagePassButtonProps) => {

export const MyPagePassButton = ({ children }: MyPagePassButtonProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "30%" }}>
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
                <MyPageButton onClick={handleClose}>확인</MyPageButton>
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
  const [MyPageUserHeight, setValue] = useState<number>(177);
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setValue(newValue);
    }
  };

// 내 정보 수정 키 슬라이더 
export const MyPageUserHeightSlider = ()=> {
  
    // const [MyPageUserHeight, setMyPageUserHeight] = useState(177);
    // const handleSliderChange = (_event:Event,newValue: number | number[]) => {
    //   if (typeof newValue === 'number') {
    //     setMyPageUserHeight(newValue);
    //   }
    // };
    
    const [myPageUserHeight, setMyPageUserHeight] = useRecoilState(MypageUserHeight);
    const handleSliderChange = (_event:Event, newValue: number | number[]) => {
      if (typeof newValue === 'number') {
        setMyPageUserHeight(newValue);
      }
    };
  
    return (
      <Box sx={{ width: 250 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {myPageUserHeight}
          </Grid>
          <Grid item xs>
            <Slider
              onChange={handleSliderChange}
              value={myPageUserHeight}
              min={130}
              max={210}
              aria-labelledby="input-slider"
              sx={{
                color: "#ffcced"
              }}
            />
          </Grid>
          <Grid item>
          </Grid>
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
  const [MyPageSelfIntro, setMySelfIntro] = useState("");

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
      <select defaultValue={myPageMBTI} value={myPageMBTI} onChange={handleChange}>
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
  const [MyPageReligion, setMyPageReligion] = useState("무교");

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

  return (
    <SelectBoxWrapper>
      <select value={MyPageReligion} onChange={handleChange}>
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
  const [MyPageJob, setMyPageJob] = useState("무교");

    const [myPageJob, setMyPageJob] = useRecoilState(MyPageJob);
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMyPageJob(event.target.value);
    };
  
    return (
      <SelectBoxWrapper>
        <select value={myPageJob} onChange={handleChange}>
            <option value="경영·사무·금융·보험직"> 경영·사무·금융·보험직</option>
            <option value="연구직 및 공학 기술직"> 연구직 및 공학 기술직</option>
            <option value="교육·법률·사회복지·경찰·소방직 및 군인"> 교육·법률·사회복지·경찰·소방직 및 군인</option>
            <option value="보건·의료직"> 보건·의료직</option>
            <option value="예술·디자인·방송·스포츠직"> 예술·디자인·방송·스포츠직</option>
            <option value="미용·여행·숙박·음식·경비·청소직"> 미용·여행·숙박·음식·경비·청소직</option>
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

  return (
    <SelectBoxWrapper>
      <select value={MyPageJob} onChange={handleChange}>
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

// 내 정보 수정 토글 스위치
const MyPageCustomSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#ffcced', // 스위치가 checked 상태일 때의 색상
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#f8e3ea', // 스위치가 checked 상태일 때의 트랙 색상
    },
}));

// 내 정보 수정 흡연
export const SmokeCustomSwitch = () => {
    const [isSmoke, setIsSmoke] = useRecoilState(IsSmoke);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSmoke(event.target.checked);
    };
  
    return (
      <div style={{ width: '10vw'}}>
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
      <div style={{ width: '10vw'}}>
        <MyPageCustomSwitch checked={isDrink} onChange={handleChange} />
      </div>
    );
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
      <div style={{ width: '10vw'}}>
        <MyPageCustomSwitch checked={isBlock} onChange={handleChange} />
      </div>
    );
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

export function MeetList(){
    return(
        <RightStyle>
            <MileageBox>미팅미팅미팅</MileageBox>
        </RightStyle>
    );
}


export const FindidModal = () => {

  const [open, setOpen] = useRecoilState(findIdModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [userId] =  useRecoilState(findIdCheckIdAtom);
  return(
    <div style={{width:'30%'}}>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
              현재 본인의 아이디는 {userId}  입니다.
              <div style={{marginTop:'20vh'}}>
              <MyPageButton onClick={handleClose} >확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  )
}

export const FindPwModal = () => {

  const [open, setOpen] = useRecoilState(findPwModalAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return(
    <div style={{width:'30%'}}>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
      >
        <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
              이메일로 비밀번호를 전송하였습니다.
              <div style={{marginTop:'20vh'}}>
              <MyPageButton onClick={handleClose} >확인</MyPageButton>
              </div>
            </div>
          </MacBookBox>
        </div>
      </Modal>
    </div>
  )
}
