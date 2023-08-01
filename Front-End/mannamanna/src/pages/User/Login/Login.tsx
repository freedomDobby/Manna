import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import GoBackIcon from '../../../components/common/GoBackIcon';
import Logo from '../../../components/common/Logo';
import { postLogin } from '../../../apis/LoginApi';
import { CenterBox, BtnBox, ForgotPasswordLink, IdInput, IdLabel, InputBox, LoginBox, StyledButton } from './LoginStyle';
import { genderAtom, nameAtom } from '../../../Recoil/State';
import { useRecoilState } from 'recoil';
const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [gender, setGender] = useRecoilState(genderAtom);
  const [name, setName] = useRecoilState(nameAtom);
  
  const GoFindId = () => {
    navigate('/ForgotId');
  };
  
  const GoFindPw = () => {
    navigate('/ForgotPw');
  };
  
  const GoRegister = () => {
    navigate('/register');
  };

  const Loginmutation = useMutation(postLogin, {
    onSuccess: (response) => {
      console.log('Login successful:', response);

      const { gender, name, accessToken,refreshToken } = response.data;

      setGender(gender);
      setName(name);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('accessToken', accessToken);

    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });

  const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() // poem 제출시 새로고침 예방 + url에 어떤 값을 보내는지 안보이게 하기 용
    Loginmutation.mutate({ id: userId, pwd: userPw });
  };

  return (
    <div>
      <div style={{ height: '10vh', alignItems: 'center' }}><Logo /></div>
      <CenterBox>
        <GoBackIcon></GoBackIcon>
        <LoginBox>
          <InputBox>
            <IdLabel>ID</IdLabel>
            <IdInput
              type="text"
              name="user_id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)} 
            />
          </InputBox>
          <InputBox>
            <IdLabel>PASSWORD</IdLabel>
            <IdInput
              type="password"
              name="user_pw"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)} 
            />
          </InputBox>
          <BtnBox>
            <ForgotPasswordLink onClick={GoFindId}>
              아이디 찾기
            </ForgotPasswordLink>
            <ForgotPasswordLink onClick={GoFindPw}>
              비밀번호 찾기
            </ForgotPasswordLink>
          </BtnBox>
          <BtnBox>
            <StyledButton onClick={handleLogin}>로그인</StyledButton>
            <StyledButton onClick={GoRegister}>회원가입</StyledButton>
          </BtnBox>
        </LoginBox>
      </CenterBox>
    </div>
  );
};

export default Login;
