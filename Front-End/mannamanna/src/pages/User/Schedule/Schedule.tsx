// import React from 'react';
import BackBox from '../../../components/common/Back';
import Sidebar from '../../../components/layout/Sidebar/SidebarHome';
import RadiusContainerBox from './../../../components/common/RadiusContainer';
import DateCalendarServerRequest from '../../../components/common/UserCalendar';
import { CenterBox, StyledButton } from '../Login/LoginStyle';
import CustomBox from '../../../components/common/CustomInputBox';
import unKnown from '../../../asset/image/unknown.png';
import { useNavigate } from 'react-router-dom';
const Schedule = () => {
    const navigate = useNavigate();

    const GoSogaetingWait = () => {
        navigate('/sogaetingWait');
      }
  return (
    <div>
      <div style={{ height: '5vh' }}></div>
      <BackBox>
        <div style={{ height: '80vh' }}>
          <Sidebar></Sidebar>
        </div>
        <div style={{ height: '80vh' }}>
          <RadiusContainerBox style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <CenterBox style={{ flexDirection: 'column' }}>
              <div style={{ border: 'solid 0.4vh black', borderRadius: '0.5vh', width: '76vh', height: '45vh' }}>
                <DateCalendarServerRequest />
              </div>
              <CustomBox flexDirection='row' width='75vh' height='10vh' color1='black' color2='#FFCCED'>
                <div style={{ color: 'white' }}>
                  가장 가까운 예약 <br />
                  김우빈님과 예약이 예정되어있습니다.
                </div>
                <StyledButton style={{ marginTop: '1vh' }} onClick={GoSogaetingWait}>
                  지금 시작하기
                </StyledButton>
              </CustomBox>
            </CenterBox>
            <CustomBox flexDirection='column' width='40vh' height='58vh' color1='black' color2='#F8E3EA'>
              <div style={{ fontSize: '3vh' }}>0000 00 00 00:00 상세시간</div>
              <img src={unKnown} alt="Start" style={{ width: '20vh', height: '20vh' }} />
              <div style={{ fontSize: '3vh' }}>장소 또는 상대의 명칭</div>
              <div style={{ fontSize: '2.5vh' }}>장소 또는 상대의 대한 사항1</div>
              <div style={{ fontSize: '2.5vh' }}>장소 또는 상대의 대한 사항1</div>
              <StyledButton>취소하기</StyledButton>
            </CustomBox>
          </RadiusContainerBox>
        </div>
        <div></div>
      </BackBox>
    </div>
  );
};

export default Schedule;
