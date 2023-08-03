import React, { useState ,useEffect} from 'react';
import { CenterBox,BtnBox, IdInput, InputBox, LoginBox  } from '../Login/LoginStyle'
import { LargeStyledButton, SmallIdLabel } from './ForgotIdStyle';
import { useNavigate } from 'react-router-dom';
import GoBackIcon from '../../../components/common/GoBackIcon';
import Logo from '../../../components/common/Logo';
import EmailDomainInput from '../../../components/common/EmailDomain';
import { ForgotIdErrorModalAtom, findEmailDomainAtom, findEmailNameAtom, findPwModalAtom } from '../../../Recoil/State';
import { useRecoilState } from 'recoil';
import { useMutation, useQuery } from '@tanstack/react-query';
import api from '../../../apis/Api';
import { FindidReq, FindpwReq } from '../../../apis/Request/Request';
import { getId } from '../../../apis/FindIdPwApi';
import { FindPwModal, ForgotIdErrorModal } from './ForgotIdStyles';


const ForgotPw = () => {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useRecoilState(findEmailNameAtom);
  const [selectedDomain, setSelectedDomain] = useRecoilState(findEmailDomainAtom);
  const [open, setOpen] = useRecoilState(findPwModalAtom);
  const [erroropen, setErroropen] = useRecoilState(ForgotIdErrorModalAtom);

  const findpw = async (e:React.MouseEvent<HTMLButtonElement>) => {
      
    e.preventDefault()
    const updatedFindpwReq: FindpwReq = {
      id: userId,
      emailId: email,
      emailDomain: selectedDomain,
    };
    console.log(updatedFindpwReq);
    try {
      const response = await api.post('/user/findPw', updatedFindpwReq);
      console.log(response.data.data); 
      setOpen(true);
      setUserId('');
      setEmail('');
      setSelectedDomain('');

    } catch (error) {
      console.error(error);
      setErroropen(true);
      setUserId('');
      setEmail('');
      setSelectedDomain('');
    }
  };

    
    return (
      <div>
      <div style={{height:'10vh', alignItems:'center'}}><Logo/><FindPwModal></FindPwModal>
      <ForgotIdErrorModal></ForgotIdErrorModal></div>
        <CenterBox>
            <GoBackIcon></GoBackIcon>
        <LoginBox>
          <InputBox>
            <SmallIdLabel>아이디</SmallIdLabel>
            <IdInput
              type="text"
              name="user_id"
              value={userId}
              onChange={(e) => setUserId(e.target.value)} 
            />
          </InputBox>
          <InputBox>
            <SmallIdLabel>이메일</SmallIdLabel>
            <EmailDomainInput></EmailDomainInput>
          </InputBox>
          <BtnBox>
            <LargeStyledButton onClick={findpw}>비밀번호 찾기</LargeStyledButton>
          </BtnBox>
        </LoginBox>
      </CenterBox>
      </div>
    );
};

export default ForgotPw;