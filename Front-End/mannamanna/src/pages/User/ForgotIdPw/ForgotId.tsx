import React, { useState, useEffect } from "react";
import {
  CenterBox,
  BtnBox,
  IdInput,
  InputBox,
  LoginBox,
} from "../Login/LoginStyle";
import { LargeStyledButton, SmallIdLabel } from "./ForgotIdStyle";
import { useNavigate } from "react-router-dom";
import GoBackIcon from "../../../components/common/GoBackIcon";
import Logo from "../../../components/common/Logo";
import EmailDomainInput from "../../../components/common/EmailDomain";
import { ForgotIdErrorModalAtom, findEmailDomainAtom, findEmailNameAtom, findIdCheckIdAtom, findIdModalAtom } from "../../../Recoil/State";
import { useRecoilState } from "recoil";
import api from "../../../apis/Api";
import { FindidReq } from "../../../apis/Request/Request";
import axios from "axios";
import { FindidModal, ForgotIdErrorModal } from "./ForgotIdStyles";

const ForgotId = () => {
    const [userId, setUserId] =  useRecoilState(findIdCheckIdAtom);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useRecoilState(findEmailNameAtom);
    const [selectedDomain, setSelectedDomain] = useRecoilState(findEmailDomainAtom);
    const [open, setOpen] = useRecoilState(findIdModalAtom);
    const [erroropen, setErroropen] = useRecoilState(ForgotIdErrorModalAtom);
      const findid = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const updatedFindidReq: FindidReq = {
          name: userName,
          emailId: email,
          emailDomain: selectedDomain,
          
        };
        console.log(updatedFindidReq);
        try {
          const response = await api.post('/user/findId', updatedFindidReq);
          console.log(response.data.data);
          await setUserId(response.data.data.id);
          setOpen(true);
        } catch (error) {
          console.error(error);
          setErroropen(true);
        }
      };
    return (
      <div>
        <div style={{ height: "10vh", alignItems: "center" }}>
          <Logo />
          <FindidModal></FindidModal>
          <ForgotIdErrorModal></ForgotIdErrorModal>
        </div>
        <CenterBox>
          <GoBackIcon></GoBackIcon>
          <LoginBox>
            <InputBox>
              <SmallIdLabel>이름</SmallIdLabel>
              <IdInput
                type="text"
                name="user_id"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </InputBox>
            <InputBox>
              <SmallIdLabel>이메일</SmallIdLabel>
              <EmailDomainInput></EmailDomainInput>
            </InputBox>
            <BtnBox>
              <LargeStyledButton onClick={findid}>아이디찾기</LargeStyledButton>
            </BtnBox>
          </LoginBox>
        </CenterBox>
      </div>
    );
};

export default ForgotId;