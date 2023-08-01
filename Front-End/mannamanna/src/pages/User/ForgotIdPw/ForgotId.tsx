// import React, { useState, useEffect } from "react";
// import {
//   CenterBox,
//   BtnBox,
//   IdInput,
//   InputBox,
//   LoginBox,
// } from "../Login/LoginStyle";
// import { LargeStyledButton, SmallIdLabel } from "./ForgotIdStyle";
// import { useNavigate } from "react-router-dom";
// import GoBackIcon from "../../../components/common/GoBackIcon";
// import Logo from "../../../components/common/Logo";
// import EmailDomainInput from "../../../components/common/EmailDomain";
// import { findEmailDomainAtom, findEmailNameAtom } from "../../../Recoil/State";
// import { useRecoilState } from "recoil";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import api from "../../../apis/Api";
// import { FindidReq } from "../../../apis/Request/Request";
// import { getId } from "../../../apis/FindIdPwApi";

const ForgotId = () => {
  //   const [userName, setUserName] = useState("");
  //   const [email, setEmail] = useRecoilState(findEmailNameAtom);
  //   const [selectedDomain, setSelectedDomain] =
  //     useRecoilState(findEmailDomainAtom);
  // const updatedFindidReq: FindidReq = {
  //   name: userName,
  //   emailId: email,
  //   emailDomain: selectedDomain,
  // };
  //   const Loginmutation = useMutation(getId, {
  //     onSuccess: (response) => {
  //       console.log("Login successful:", response);
  //     },
  //     onError: (error) => {
  //       console.error("Login failed:", error);
  //     },
  //   });
  //   const findid = (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault(); // poem 제출시 새로고침 예방 + url에 어떤 값을 보내는지 안보이게 하기 용
  //     Loginmutation.mutate(updatedFindidReq);
  //   };
  //   return (
  //     <div>
  //       <div style={{ height: "10vh", alignItems: "center" }}>
  //         <Logo />
  //       </div>
  //       <CenterBox>
  //         <GoBackIcon></GoBackIcon>
  //         <LoginBox>
  //           <InputBox>
  //             <SmallIdLabel>이름</SmallIdLabel>
  //             <IdInput
  //               type="text"
  //               name="user_id"
  //               value={userName}
  //               onChange={(e) => setUserName(e.target.value)}
  //             />
  //           </InputBox>
  //           <InputBox>
  //             <SmallIdLabel>이메일</SmallIdLabel>
  //             <EmailDomainInput></EmailDomainInput>
  //           </InputBox>
  //           <BtnBox>
  //             <LargeStyledButton onClick={findid}>아이디찾기</LargeStyledButton>
  //           </BtnBox>
  //         </LoginBox>
  //         <div>
  //           {userName}
  //           {email}
  //           {selectedDomain}
  //         </div>
  //       </CenterBox>
  //     </div>
  //   );
};

export default ForgotId;
