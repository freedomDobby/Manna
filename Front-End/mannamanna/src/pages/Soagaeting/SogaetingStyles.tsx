import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { timerTime } from './SogaetingState';

const HeartIconButtonStyle = styled(IconButton)`
  color: red;
  background-color: #d9cff4;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
`;

const MicVideoIconButtonStyle = styled(IconButton)`
  color: black;
  background-color: #d9cff4;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: white;
  }
`;

const TimePlusIconButtonStyle = styled(IconButton)`
  color: red;
  background-color: #d9cff4;
  border: solid 0.2rem black;
  border-radius: 50%;
  &:hover {
    background-color: #ffffff;
  }
`;

interface SogaeIconButtonProps {
  children: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const HeartIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <HeartIconButtonStyle onClick={onClick} size="large" sx={{width:'9vh',height:'9vh'}}>
      {children}
    </HeartIconButtonStyle>
  );
};

export const MicVideoIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <MicVideoIconButtonStyle onClick={onClick} size="large" sx={{width:'9vh',height:'9vh'}}>
      {children}
    </MicVideoIconButtonStyle>
  );
};

export const TimePlusIconButton: React.FC<SogaeIconButtonProps> = ({ children, onClick }) => {
  return (
    <TimePlusIconButtonStyle onClick={onClick} size="large" sx={{width:'9vh',height:'9vh'}}>
      {children}
    </TimePlusIconButtonStyle>
  );
};

export const Timer: React.FC = () => {
  const [timer, setTimer] = useRecoilState(timerTime);
  const [seconds, setSeconds] = useState(timer);
  const [sum, setSum] = useState(timer);

  useEffect(() => {
    const newSeconds = timer - sum + seconds;
    setSeconds(newSeconds);
    setSum(timer);
  }, [timer]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = seconds - 1;
      setSeconds(newTime);
    }, 1000);

    if (seconds <= 0) {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [seconds]);

  return (
    <div style={{width: '80%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <div style={{border:'solid 0.3rem black', borderRadius:'1rem', background: '#ffffff', width: '85%', height: '70%', flexDirection: 'column', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
        <div style={{width: '100%', height: '90%', flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <div style={{border:'solid 0.2rem #d9cff4', borderRadius:'1rem', background: '#ffffff', width: '13%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem'}}>{Math.floor(seconds/60/10)}</div>
          <div style={{border:'solid 0.2rem #d9cff4', borderRadius:'1rem', background: '#ffffff', width: '13%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem'}}>{Math.floor(seconds/60%10)}</div>
          <div style={{width: '10%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '5rem', color: '#d9cff4'}}>:</div>
          <div style={{border:'solid 0.2rem #d9cff4', borderRadius:'1rem', background: '#ffffff', width: '13%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem'}}>{Math.floor(seconds%60/10)}</div>
          <div style={{border:'solid 0.2rem #d9cff4', borderRadius:'1rem', background: '#ffffff', width: '13%', height: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3rem'}}>{Math.floor(seconds%60%10)}</div>
        </div>
        <div style={{borderTop:'solid 0.3rem black', borderBottomRightRadius:'0.8rem', borderBottomLeftRadius:'0.8rem', background:'#ffcced', width: '100%', height: '10%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
      </div>
    </div>
  );
};