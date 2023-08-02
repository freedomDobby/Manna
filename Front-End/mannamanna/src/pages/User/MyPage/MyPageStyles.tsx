import Button from '@mui/material/Button';
import React,{useState} from 'react';
import { MileageBox, LeftStyle, RightStyle } from './MyPageStyle';
import styled from 'styled-components';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';

type MyPageButtonProps = {
    children: string;
    onClick: () => void;
};
  
export const MyPageButton = ({ children, onClick }: MyPageButtonProps) => {
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
        onClick={onClick}
        >{children}</Button>
    )
}

// 비밀번호 변경 버튼 

type MyPagePassButtonProps = {
    children: string;
};
  
export const MyPagePassButton = ({ children}: MyPagePassButtonProps) => {
    return(
        <Button
        sx={{
            width: '30%', 
            height: '5vh',
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
        >{children}</Button>
    )
}




/////키 슬라이더 

export const MyPageUserHeightSlider = ()=> {
    const [MyPageUserHeight, setValue] = React.useState<number>(177);
  
    const handleSliderChange = (_event:Event,newValue: number | number[]) => {
      if (typeof newValue === 'number') {
        setValue(newValue);
      }
    };
  
    return (
      <Box sx={{ width: 250 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            {MyPageUserHeight}
          </Grid>
          <Grid item xs>
            <Slider
              onChange={handleSliderChange}
              value={MyPageUserHeight}
              min={130}
              max={210}
              aria-labelledby="input-slider"
              sx={{
                color: "#F8E3EA"
              }}
            />
          </Grid>
          <Grid item>
          </Grid>
        </Grid>
      </Box>
    );
}




///////////








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
        align-items:center;
        justify-content:center;
    }
`;

export const MyPageTextArea = () => {

    const [MyPageSelfIntro, setMySelfIntro] = useState('');

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
///////////////////////////////////////////////////////


// sel box 만들기 //////////////////////////////////////////

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

export const MBTISelectBox = () => {

  const [MyPageMBTI, setMyPageMBTI] = useState('INFP');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setMyPageMBTI(event.target.value);
  };

  return (
    <SelectBoxWrapper>
      <select defaultValue={MyPageMBTI} value={MyPageMBTI} onChange={handleChange}>
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

    const [MyPageReligion, setMyPageReligion] = useState('무교');
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMyPageReligion(event.target.value);
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

export const JobSelectBox = () => {

    const [MyPageJob, setMyPageJob] = useState('무교');
  
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMyPageJob(event.target.value);
    };
  
    return (
      <SelectBoxWrapper>
        <select value={MyPageJob} onChange={handleChange}>
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
///////////////////////////////////////////////////////////////////

//토글스위치만들기//////////////////////////////////////////
const MyPageCustomSwitch = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: '#ffcced', // 스위치가 checked 상태일 때의 색상
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: '#f8e3ea', // 스위치가 checked 상태일 때의 트랙 색상
        },
  }));
  
export const SmokeCustomSwitch: React.FC = () => {
    const [isSmoke, setIsSmoke] = useState(false);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSmoke(event.target.checked);
    };
  
    return (
      <div style={{ width: '10vw'}}>
        <MyPageCustomSwitch checked={isSmoke} onChange={handleChange} />
      </div>
    );
  };

export const DrinkCustomSwitch: React.FC = () => {
    const [isDrink, setIsDrink] = useState(false);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsDrink(event.target.checked);
    };
  
    return (
      <div style={{ width: '10vw'}}>
        <MyPageCustomSwitch checked={isDrink} onChange={handleChange} />
      </div>
    );
  };

export const BlockCustomSwitch: React.FC = () => {
    const [isBlock, setIsBlock] = useState(false);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsBlock(event.target.checked);
    };
  
    return (
      <div style={{ width: '10vw'}}>
        <MyPageCustomSwitch checked={isBlock} onChange={handleChange} />
      </div>
    );
  };

/////////////////////////////////////////////////////////








export const MyPageModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '0.3vw solid #000',
    borderRadius: 4,
    p: 4,
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center', 
    alignItems: 'center',
};

export function UseMileage(){
    return(
        <LeftStyle>
            시간시간시간
            <MileageBox>-50 Point 쪽지 보내기</MileageBox>
        </LeftStyle>
    );
}

export function GetMileage(){
    return(
        <RightStyle>
            시간시간시간
            <MileageBox>+50 Point 미션 참여</MileageBox>
        </RightStyle>
    );
}

export function SogeList(){
    return(
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