import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import GoBackIcon from '../../../components/common/GoBackIcon';
import Logo from '../../../components/common/Logo';
import { postLogin } from '../../../apis/LoginApi';
import { CenterBox, BtnBox, ForgotPasswordLink, IdInput, IdLabel, InputBox, LoginBox, StyledButton } from './LoginStyle';
import { genderAtom, nameAtom } from '../../../Recoil/State';
import { useRecoilState } from 'recoil';
import { LoginReq } from '../../../apis/Request/Request';
import api from '../../../apis/Api';
const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const [gender, setGender] = useRecoilState(genderAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [id, setId] = useRecoilState(nameAtom);
  const [accessToken, setAccessToken] = useRecoilState(nameAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(nameAtom);
  
  const GoFindId = () => {
    navigate('/ForgotId');
  };
  
  const GoFindPw = () => {
    navigate('/ForgotPw');
  };
  
  const GoRegister = () => {
    navigate('/register');
  };


  const handleLogin = async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const userData: LoginReq = {
      id: userId,
      pwd: userPw,
    };
    console.log(userData);
    try {
      const response = await api.post('/user/login', userData);
      console.log(response.data); 
      const { gender, name,id, accessToken,refreshToken } = response.data;

      setGender(gender);
      setName(name);
      setId(id);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
      navigate('/main');

    } catch (error) {
      console.error(error);
    }
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
