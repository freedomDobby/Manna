import React,{useState,ChangeEvent} from 'react';
import styled from 'styled-components'
import MacBookBox from '../../../components/common/macbookBox';
import InputSlider from '../../../components/common/slider';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ImageBox, MypageInputBox, SmallInputBox } from '../Register/RegisterStyle';

import InputLabel from '@mui/material/InputLabel';

import MenuItem from '@mui/material/MenuItem';
import { Avatar, Switch , SwitchProps } from '@mui/material';
import TextField from '@mui/material/TextField';

import { SelectChangeEvent } from '@mui/material/Select';
import OutboxIcon from '@mui/icons-material/Outbox';

import Select, { SelectProps } from '@mui/material/Select';
import GoBackIcon from '../../../components/common/GoBackIcon';
import RadiusContainerBox from '../../../components/common/RadiusContainer';
import signup from '../../../asset/image/signup.png';
import Logo from '../../../components/common/Logo';
import MacbookBox from '../../../components/common/macbookBox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';


import Box from '@mui/material/Box';
import { CenterBox, StyledButton } from '../Login/LoginStyle';
import { MyPageDataState } from './MyPageState';
import { DrinkCustomSwitch, JobSelectBox, MBTISelectBox, MyPagePassButton, MyPageTextArea, MyPageUserHeightSlider, ReligionSelectBox, SmokeCustomSwitch} from './MyPageStyles';

type MyPageButtonProps = {
    children: string;
    onClick: ()=>void;
};
  
const MyPageButton = ({ children, onClick }: MyPageButtonProps) => {
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
            borderColor: "#ffcced",
            fontSize: '3vh',
            '&:hover': { backgroundColor: '#f8e3ea' },
        }}
        variant="contained"
        onClick={onClick}
        >{children}</Button>
    )
}

const CustomSwitch = styled(Switch)(({  }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#d9cff4', // 스위치가 checked 상태일 때의 색상
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#d9cff4', // 스위치가 checked 상태일 때의 트랙 색상
    },
  }));

//   const CustomSelect = styled(Select)(({ theme }) => ({
//     background: '#f8e3ea', // 배경색
//     color: '#000', // 글자색
//     borderRadius: '5px', // 테두리 둥글기
//     padding: '10px', // 내부 padding
//     minWidth: '150px', // 최소 너비
//   }));
  
  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-root': {
      color: 'black', // 텍스트 색상을 빨간색으로 지정
    },
    '& .MuiInputBase-input': {
      // 텍스트 필드 입력 영역 스타일
      backgroundColor: '#ffcced', // 입력 영역 배경색을 회색으로 지정
      padding: '2vh', // 내부 여백을 추가
    },
    '& .MuiInputLabel-root': {
      // 라벨 스타일
      color: '#000000', // 라벨 색상을 초록색으로 지정
    },
  });
  const CustomSelect = styled(Select)(({}) => ({
    '& .MuiSelect-root': {
      minWidth: '200px', // 최소 너비를 200px로 지정
      backgroundColor: '#ffcced', // 배경색을 회색으로 지정
      padding: '8px', // 내부 여백을 추가
      borderRadius: '4px', // 테두리를 둥글게 만듦
    },
    '& .MuiSelect-select:focus': {
      // 포커스 상태일 때 스타일
      backgroundColor: '#ffcced', // 배경색을 연한 회색으로 변경
    },
    '& .MuiInputLabel-root': {
      // 라벨 스타일
      color: 'black', // 라벨 색상을 파란색으로 지정
    },
    '& .MuiMenuItem-root': {
      // MenuItem 스타일
      color: 'red', // 메뉴 아이템 텍스트 색상을 빨간색으로 지정
    },
  }));
  
  interface CustomSelectProps extends SelectProps {
    // 추가적인 커스텀 Props가 있다면 이곳에 정의합니다.
  }
  
  const MyComponent: React.FC<CustomSelectProps> = ({ value, onChange }) => {
    return (
      <div>
        <FormControl>
          {/* 커스텀 스타일이 적용된 CustomSelect 컴포넌트 */}
          <InputLabel>Custom Select</InputLabel>
          <CustomSelect
            value={value}
            onChange={onChange}
            label="Custom Select"
          >
            <MenuItem value="임시임시">
              <em>None</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </CustomSelect>
        </FormControl>
      </div>
    );
  };

const ModifyBox = styled.div`
    width: 90%;
    background: rgba(255, 255, 255, 0.5);
    border: solid 0.5vh black;
    border-radius: 2vh;
    text-align: center;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3vw;
`

// const [inputValue, setInputValue] = useState('여기에 기존의 정보');





function MyPageModify() {

    // const [userHeight, setUserHeight] = React.useState<number>(170);  

    const [selfIntro, setSelfIntro] = useState('MyPageData.userSelfIntro');
    const selfIntroChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setSelfIntro(event.target.value);
    };

    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const [block, setBlock] = useState(false);
    const handleBlock = (event: ChangeEvent<HTMLInputElement>) => {
        setBlock(event.target.checked);
        console.log(block);
    };

    const [selectedValue, setSelectedValue] = useState('선택');
    const handleChange = (event:SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value as string);
    };

    return (
            <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
                    <div  style={{flexDirection: 'column', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width:'90%',margin:'1vh'}}>기본정보</div>
                        <ModifyBox>
                            
                            
                            <div style={{width:'100%', display:'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', margin:'1vh'}}>
                                <div>키</div>
                                <MyPageUserHeightSlider/>
                            </div>
                            <div style={{width:'100%', display:'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', margin:'1vh'}}>
                                <div>비밀번호 변경</div>
                                <MyPagePassButton>dd</MyPagePassButton>
                            </div>


                            <div style={{width:'100%',height:'3vh',display:'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                                <div style={{width:'25%', height:'100%'}}>주소</div>
                                <div style={{width:'75%', height:'100%'}}>입력입력</div>
                            </div>

                            <div style={{width:'100%', display:'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', margin:'1vh'}}>
                              <div style={{width:'15%'}}>직업</div>
                              <JobSelectBox/> 
                              <div style={{width:'15%'}}>지인차단</div>
                              <SmokeCustomSwitch/>
                            </div>
                        </ModifyBox>
                    </div>

                    <div style={{flexDirection: 'column',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width:'90%',margin:'1vh'}}>세부정보</div>
                        <ModifyBox>
                            <div style={{width:'100%', display:'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', margin:'1vh'}}>
                                <div style={{width:'15%'}}>흡연</div>
                                <SmokeCustomSwitch/> 
                                <div style={{width:'15%'}}>음주</div>
                                <DrinkCustomSwitch/>  
                            </div>
                            <div style={{width:'100%', display:'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', margin:'1vh'}}>
                              <div style={{width:'15%'}}>종교</div>
                              <ReligionSelectBox/> 
                              <div style={{width:'15%'}}>MBTI</div>
                              <MBTISelectBox/>
                            </div>
                        </ModifyBox>
                    </div>




                    <div  style={{flexDirection: 'column',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width:'90%',margin:'1vh'}}>사진등록</div>
                        <ModifyBox>
                                <ImageBox>
                                        <Avatar src="/broken-image.jpg" />
                                        <Avatar src="/broken-image.jpg" />
                                        <Avatar src="/broken-image.jpg" />
                                </ImageBox>
                                <MypageInputBox>
                                        <div>
                                        <p>자신을 표현가능한 사진 3장을 입력해주세요.</p>
                                        </div>
                                        <OutboxIcon fontSize='large'></OutboxIcon>
                                </MypageInputBox>
                        </ModifyBox>
                    </div>







                    <div  style={{flexDirection: 'column',display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{width:'90%',margin:'1vh'}}>자기소개</div>
                        <ModifyBox>
                          <div style={{width:'100%',}}>
                          <MyPageTextArea/>
                          </div>
                        </ModifyBox>
                    </div>
                    <div  style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <MyPageButton onClick={handleOpen}>저장하기</MyPageButton>
                    </div>
            </MacBookBox>
    );
 };
  



 export default MyPageModify;