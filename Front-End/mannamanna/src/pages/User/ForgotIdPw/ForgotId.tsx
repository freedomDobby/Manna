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
import { findEmailDomainAtom, findEmailNameAtom } from "../../../Recoil/State";
import { useRecoilState } from "recoil";
import api from "../../../apis/Api";
import { FindidReq } from "../../../apis/Request/Request";
import axios from "axios";

const ForgotId = () => {
  const [userId, setUserId] = useState("이름과 이메일을 제대로 작성해주세요");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useRecoilState(findEmailNameAtom);
  const [selectedDomain, setSelectedDomain] = useRecoilState(findEmailDomainAtom);


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
        alert(response.data.data.id); // setUserId 호출 후 alert를 하였습니다.
  
      } catch (error) {
        console.error(error);
        alert(userId);
      }
    };
    console.log(updatedFindidReq);
    try {
      const response = await api.post("/user/findId", updatedFindidReq);
      console.log(response.data);
      const { id } = response.data;
      setUserId(id);
      alert(userId);
    } catch (error) {
      console.error(error);
      alert(userId);
    }
  };

  return (
    <div>
      <div style={{ height: "10vh", alignItems: "center" }}>
        <Logo />
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
        <div>
          {userName}
          {email}
          {selectedDomain}
        </div>
      </CenterBox>
    </div>
  );
};

export default ForgotId;
