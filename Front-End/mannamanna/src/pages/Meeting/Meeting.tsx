//  import React from 'react';
import MeetingMacBox from './MeetingMacBox';
import MacBookBox from '../../components/common/macbookBox';
import Button from '@mui/material/Button';

type MeetingButtonProps = {
    children: string;
    onClick: () => void;
};
const MeetingButton = ({ children, onClick }: MeetingButtonProps) => {
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
 const Meeting = () => {
    const temp = ()=>{
        console.log("hello");
    }

    return (
        <div style={{height:'100vh',width:'100%',display:'flex'}}>
            <div style={{height:'100%',width:'70%'}}>
                <div style={{height:'30%',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#bcd3ff"
                color2="#ffffff"
                alignItems="center"
                Username="홍길동"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#bcd3ff"
                color2="#ffffff"
                alignItems="center"
                Username="이름"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#bcd3ff"
                color2="#ffffff"
                alignItems="center"
                Username="이름"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                </div>
                <div style={{height:'40%',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{border:'solid 0.5vh black',borderRadius:'10px',background:'white',height:'90%',width:'90%'}}>
                    </div>
                </div>
                <div style={{height:'30%',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}}>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#ffcced"
                color2="#ffffff"
                alignItems="center"
                Username="이름"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#ffcced"
                color2="#ffffff"
                alignItems="center"
                Username="이름"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                <MeetingMacBox 
                width="25%"
                height="90%"
                color1="#ffcced"
                color2="#ffffff"
                alignItems="center"
                Username="이름"
                age="나이"
                address="지역"
                >dddd</MeetingMacBox>
                </div>
                
            </div>
            <div style={{height:'100%',width:'30%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <MacBookBox width="80%" height="70%" color1="#ffcced" color2="#ffffff" alignItems='center'>
                    <div style={{height:'30%',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',fontSize:'8vh'}}>
                        <div style={{border:'solid 0.5vh black',borderRadius:'2vh',height:'70%',width:'20%', marginLeft:'0.1vw'}}></div>
                        <div style={{border:'solid 0.5vh black',borderRadius:'2vh',height:'70%',width:'20%', marginLeft:'0.1vw'}}></div>
                        :
                        <div style={{border:'solid 0.5vh black',borderRadius:'2vh',height:'70%',width:'20%', marginLeft:'0.1vw'}}></div>
                        <div style={{border:'solid 0.5vh black',borderRadius:'2vh',height:'70%',width:'20%', marginLeft:'0.1vw', marginRight:'0.1vw'}}></div>
                    </div>
                    <div style={{height:'35%',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',fontSize:'8vh'}}>
                        ❤❤❤
                    </div>
                    <div style={{height:'30%',width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',fontSize:'8vh'}}>
                        <MeetingButton onClick={temp}>게임시작</MeetingButton>
                        <MeetingButton onClick={temp}>퇴장</MeetingButton>
                    </div>
                </MacBookBox>
            </div>
        </div>
    );
 };
 
 export default Meeting;