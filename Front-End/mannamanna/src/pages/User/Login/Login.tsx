import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBackIcon from '../../../components/common/GoBackIcon';
import Logo from '../../../components/common/Logo';
import { CenterBox, BtnBox, ForgotPasswordLink, IdInput, IdLabel, InputBox, LoginBox, StyledButton } from './LoginStyle';
import { LoginErrorModalAtom, accessTokenAtom, genderAtom, idAtom, nameAtom, refreshTokenAtom } from '../../../Recoil/State';
import { useRecoilState } from 'recoil';
import { LoginReq } from '../../../apis/Request/Request';
import api, { apilogin } from '../../../apis/Api';
import { LoginErrorModal } from '../ForgotIdPw/ForgotIdStyles';
const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [open, setOpen] = useRecoilState(LoginErrorModalAtom);
  const [gender, setGender] = useRecoilState(genderAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [id, setId] = useRecoilState(idAtom);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  
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
    // console.log(userData);
    try {
      const response = await apilogin.post('/user/login', userData);
      // console.log(response.data); 
      setGender(response.data.gender);
      setName(response.data.userName);
      setId(response.data.id);
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      navigate('/main');

    } catch (error) {
      console.error(error);
      setOpen(true);
    }
  };

  return (
    <div>
      <div style={{ height: '10vh', alignItems: 'center' }}><Logo /></div>
      <CenterBox>
        <GoBackIcon></GoBackIcon>
        <LoginBox>
          <LoginErrorModal></LoginErrorModal>
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
