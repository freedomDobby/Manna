// import React from 'react';
import { useNavigate } from 'react-router-dom';
import RadiusContainerBox from '../components/common/RadiusContainer';
import { CenterBox, StyledButton } from './User/Login/LoginStyle';
import MacBookBox from '../components/common/macbookBox';
import sogaeimg from '../asset/image/sogaeting.jpg'
import meetimg from '../asset/image/meeting.jpg'

const Choice = () => {
    const navigate = useNavigate();

    const GoSogaeting = () => {
        navigate('/sogaetingMain');
      }
      const GoMeeting = () => {
        navigate('/meetingMain');
      }
    return (
        <CenterBox style={{flexDirection:'column'}}>
 <RadiusContainerBox>
    <div style={{fontSize:'6.5vh',color:'#D9CFF4',marginTop:'5vh'}}>
        새로운 인연이 필요하신가요?
    </div>
    <CenterBox style={{gap:'15vh'}}>
    <MacBookBox width="50vh" height="60vh" color1="#FFCCDD" color2="#ffffff" alignItems='center'>
    <CenterBox style={{ flexDirection: 'column' ,height: '50vh'}}>
         <img src={sogaeimg} alt="Start" style={{ width: '50vh', height: '35vh',marginBottom:'1vh' }} ></img>
         <div>
         <p>블라인드 소개팅</p>
                    <h3 style={{fontSize:'2.4vh' ,marginTop:'1vh',marginBottom:'2vh'}}>
                        얼굴 공개에 대한 부담감을 버리고<br />
                        간단한 게임을 통해 상대방을 알아가며<br />
                        대화부터 차근차근 시작해보세요!
                    </h3>
         </div>
         <StyledButton onClick={GoSogaeting}>소개팅 시작</StyledButton>
        </CenterBox>
    </MacBookBox>
    <MacBookBox width="50vh" height="60vh" color1="#FFCCDD" color2="#ffffff" alignItems='center'>
    <CenterBox style={{ flexDirection: 'column' ,height: '50vh'}}>
    <img src={meetimg} alt="Meeting" style={{ width: '50vh', height: '35vh',marginBottom:'1vh' }} ></img>
         <div>
         <p>3 : 3 미팅</p>
                    <h3 style={{fontSize:'2.4vh' ,marginTop:'1vh',marginBottom:'2vh'}}>
                        다양한 사람과의 새로운 인연<br />
                        3대3 미팅을 통해 즐거운 시간을 가지고<br />
                        나아가 새로운 만남을 이어가세요 !
                    </h3>
         </div>
         <StyledButton onClick={GoMeeting}>미팅 시작</StyledButton>
        </CenterBox>
    </MacBookBox>
    </CenterBox>
</RadiusContainerBox> 
        </CenterBox>

    );
};

export default Choice;