// import React from 'react';
import { useRecoilState } from 'recoil';
import { LoginDataState } from './../../Recoil/State';
import { StyledButton } from '../User/Login/LoginStyle';
import { useNavigate } from 'react-router-dom';

const StudyRecoil = () => {
    // 설정을 위해 Recoil 폴더의 State.js에서 값을 정해주세요.
  const [loginData, setLoginData] = useRecoilState(LoginDataState);
  const navigate = useNavigate();
  const FakeLogin = () => {
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      name: '김싸피', 
      gender: '남성', 
      message: '로그인 성공', 
      accessToken: '아아 이것은 성공한 토큰이다.', 
    }));
    navigate('/studyResult')
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      정의하고 받아보자
      <div>name: {loginData.name}</div>
      <div>gender: {loginData.gender}</div>
      <div>accesstoken: {loginData.accessToken}</div>
      <div>message: {loginData.message}</div>
      확인했다면 study.ts 파일도 한번 보자
      <StyledButton onClick={FakeLogin}>
        가짜 로그인<br /> 버튼
      </StyledButton>
    </div>
  );
};

export default StudyRecoil;
