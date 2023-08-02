import React from 'react';
import MacBookBox from '../../components/common/macbookBox';
import unKnown from '../../asset/image/unknown.png';
import CustomBox from '../../components/common/CustomInputBox';
import { CenterBox } from '../User/Login/LoginStyle';
import { LeftChatBox, RightChatBox, ChatProFile, ChatLeftStyle, ChatRightStyle, } from '../Chatting/ChattingStyle';
const Soageting = () => {
    return (
        <div>
            <CenterBox style={{justifyContent:'space-around'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'105vh',alignItems:'center'}}>
            <MacBookBox width="100vh" height="50vh" color1="#F8E3EA" color2="#ffffff" alignItems='center'>
           <img src={unKnown} alt="Start" style={{ width: '100%', height: '90%' }} />
           </MacBookBox>
           <div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',width:'105vh',alignItems:'center',marginTop:'2vh'}}>
                <CustomBox flexDirection='row' width='40vh' height='20vh' color1='black' color2='black'>
                </CustomBox>
                <MacBookBox width="50vh" height="25vh" color1="#F8E3EA" color2="white" alignItems='center'>
                </MacBookBox>
            </div>
           </div>
            </div>
            <CustomBox flexDirection='column' width='70vh' height='75vh' color1='white' color2='white'>
            <CustomBox flexDirection='column' width='50vh' height='15vh' color1='black' color2='#F8E3EA'>
                프로필 내용
            </CustomBox>
            <MacBookBox width="50vh" height="30vh" color1="#F8E3EA" color2="#ffffff" alignItems='center'>
            <GetChat/>
            <SendChat/>
            </MacBookBox>
            <MacBookBox width="50vh" height="10vh" color1="#F8E3EA" color2="#ffffff" alignItems='center'>
                타이머
            </MacBookBox>
            </CustomBox>
            </CenterBox>

        </div>

    );
    function GetChat(){
        return(
            <ChatLeftStyle>
                <ChatProFile/>
                <LeftChatBox>만나서 반가워요</LeftChatBox>
            </ChatLeftStyle>
        );
    }
    
    function SendChat(){
        return(
            <ChatRightStyle>
                <RightChatBox>저두용</RightChatBox>
                <ChatProFile/>
            </ChatRightStyle>
        );
    }
};

export default Soageting;