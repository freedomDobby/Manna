import React from 'react';
import { useRecoilState } from 'recoil';
import { LoginDataState } from '../../Recoil/State';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../User/Login/LoginStyle';

// 여기서 중요한 점은 Recoil또한 새로고침하면 모든 상태가 날라간다는 것!
const StudyRecoilResult = () => {
    const [loginData, setLoginData] = useRecoilState(LoginDataState);
    const navigate = useNavigate();
    const Goback = () => {
        navigate(-1);    }
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        로그인이 유지되는군.
        <div>name: {loginData.name}</div>
        <div>gender: {loginData.gender}</div>
        <div>accesstoken: {loginData.accessToken}</div>
        <div>message: {loginData.message}</div>
        <h2>
            돌아가기 버튼을 통해 계속 상태가 유지되는지 보자
        </h2>
        <StyledButton onClick={Goback}>
        돌아가기
      </StyledButton>
      </div>
    );
  };

export default StudyRecoilResult;