// import React from 'react';
import { CenteredDiv } from '../Landing/LandingStyle';
import { CenterBox, StyledButton } from '../User/Login/LoginStyle';
import SmallMacBookProfile from '../../components/common/SmallMacBookProfile';
import { ImageContainer } from './SoagaetinStyle';
import unKnown from '../../asset/image/unknown.png';
// import fullheart from '../../asset/image/fullheart.png'
// import emptyheart from '../../asset/image/emptyheart.png'
import HeartAnimation from './../../components/animation/HeartAnimation';
import { useNavigate } from 'react-router-dom';
import { IMissionStartRequest } from '../Reserve/Interfaces';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { dateName, sogaeUserName } from './SogaetingState';
import { genderAtom, scheduleIdAtom } from '../../Recoil/State';

const fetchSogaeting = (MissionStartRequest: IMissionStartRequest) => {
  return axios({
      method: "POST",
      url: `https://i9b205.p.ssafy.io/api/sogaeting/start`,
      headers: {"Content-Type": "application/json"},
      data: MissionStartRequest
  })
}

const SoagetingWait = () => {
  const navigate = useNavigate();
  
  const [scheduleId] = useRecoilState(scheduleIdAtom);
  const [opponentId] = useRecoilState(dateName);
  const [myId] = useRecoilState(sogaeUserName);
  const [userGender] = useRecoilState(genderAtom);
  
  const GoSogaetingMain = () => {
    let maleId;
    let femaleId;
    if(userGender=="male") {
        maleId = myId;
        femaleId = opponentId;
    }
    else{
        maleId = opponentId;
        femaleId = myId;
    }
    console.log("maleId: "+maleId);
    fetchSogaeting({
      sogaetingId: scheduleId,
      maleId: maleId,
      femaleId: femaleId,}
    ).then(response => {
      console.log(response)
      navigate('/sogaeting');
    })
    .catch(() => {
      console.log("이미 존재하는 소개팅입니다.");
      navigate('/sogaeting');
  })};
  return (
    <CenteredDiv style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ fontSize: '3vw', color: 'white', marginTop: '6vh' }}>
        너와 내가 이어지는 중...
      </div>
      <CenterBox style={{display:'flex',justifyContent:'space-around',width:'90%'}}>
        <SmallMacBookProfile 
          width="35vh"
          height="40vh"
          color1="#bcd3ff"
          color2="#ffffff"
          alignItems="center"
          Username="이름"
          age="나이"
          address="지역"
        >
          <ImageContainer>
            <img src={unKnown} alt="Start" style={{ width: '20vh', height: '20vh' }} />
          </ImageContainer>
        </SmallMacBookProfile>  
        <HeartAnimation></HeartAnimation>
        <SmallMacBookProfile
          width="35vh"
          height="40vh"
          color1="#F8E3EA"
          color2="#ffffff"
          alignItems="center"
          Username="이름"
          age="나이"
          address="지역"
        >
          <ImageContainer>
            <img src={unKnown} alt="Start" style={{ width: '20vh', height: '20vh' }} />
          </ImageContainer>
        </SmallMacBookProfile>
      </CenterBox>

      <StyledButton style={{ marginTop: '1vh', marginBottom: '5vh' }} onClick={GoSogaetingMain}>입장하기</StyledButton>
    </CenteredDiv>
  );
};

export default SoagetingWait;
