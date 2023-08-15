// import * as React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/User/Login/Login";
import Register from "./pages/User/Register/Register";
import ForgotId from "./pages/User/ForgotIdPw/ForgotId";
import ForgotPw from "./pages/User/ForgotIdPw/ForgotPw";
import MainHome from "./pages/User/MainHome/MainHome";
import Choice from "./pages/Choice";
import Schedule from "./pages/User/Schedule/Schedule";
import Mypage from "./pages/User/MyPage/Mypage";
import SoagetingMain from "./pages/Soagaeting/SoagetingMain";
import SoagetingWait from "./pages/Soagaeting/SoagetingWait";
import Soageting from "./pages/Soagaeting/Soageting";
import MeetingMain from "./pages/Meeting/MeetingMain";
import MeetingMakeRoom from "./pages/Meeting/MeetingMakeRoom";
import MeetingWait from "./pages/Meeting/MeetingWait";
import Meeting from "./pages/Meeting/Meeting";
import Reserve from "./pages/Reserve/Reserve";
import Mission from "./pages/Mission/Mission";
import Note from "./pages/Note/Note";
import RequestNote from "./pages/Note/RequestNote";
import ResponseNote from "./pages/Note/ResponseNote";
import Alarm from "./pages/Alarm";
import GlobalFont from "./Styles/GlobalFont";
import GlobalStyle from "./Styles/GlobalStyle";
import RegisterDetail from "./pages/User/Register/RegisterDetail";
import MyPageModify from "./pages/User/MyPage/MyPageModify";
import MyPageMiileage from "./pages/User/MyPage/MyPageMileage";
import MyPageHistory from "./pages/User/MyPage/MyPageHistory";
import MyPageWithdrawal from "./pages/User/MyPage/MyPageWithdrawal";
import StudyRecoil from "./pages/Study/StudyRecoil";
import StudyRecoilResult from "./pages/Study/StudyRecoilResult";
import Kakao from "./pages/User/Login/KaKaoLogin";
import { Chatting } from "./pages/Chatting/Chatting";
import { useRecoilState } from "recoil";
import { ChattingRoomState, accessTokenAtom, chatListState, genderAtom, idAtom, nameAtom, refreshTokenAtom } from "./Recoil/State";
import { Client, Message } from "@stomp/stompjs";
import CreateChattingClient from "./pages/User/Login/Clinet";
import { SOCET_URL } from "./apis/Url";
import { useEffect, useState } from "react";
import { ChatMessage } from "./apis/Request/Request";
import { ChatOutputRes } from "./apis/Response/Response";

function App() {
  const [name, setName] = useRecoilState(nameAtom);
  const [id, setId] = useRecoilState(idAtom);
  const [UseraccessToken, setUseraccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  const [gender, setGender] = useRecoilState(genderAtom);
  const [Isconnect, setIsconnect] = useState(false);
  const Chattingx=CreateChattingClient();
  const [chatList, setChatList] = useRecoilState(chatListState);
  const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);



  function Connect() {
    Chattingx.client = new Client({
    connectHeaders:{
      ...(UseraccessToken ? { Authorization: `Bearer ${UseraccessToken}` } : {}),
      ...(name ? { userName: `${name}` } : {}),
      ...(id ? { userId: `${id}` } : {}),
      ...(gender ? { gender: `${gender}` } : {}),
    },
    brokerURL: SOCET_URL,
  });

  Chattingx.client.activate();
}
useEffect(() => {
  if (id == null){
    setIsconnect(!Isconnect);
  }else{
    Connect()
  }
},[id])

  return (
    <>
      <GlobalFont />
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="main" element={<MainHome />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="choice" element={<Choice />} />
          <Route path="sogaetingMain" element={<SoagetingMain />} />
          <Route path="sogaetingWait" element={<SoagetingWait />} />
          <Route path="meetingMain" element={<MeetingMain />} />
          <Route path="meetingMakeRoom" element={<MeetingMakeRoom />} />
          <Route path="meetingWait" element={<MeetingWait />} />
          <Route path="reserve" element={<Reserve />} />
          <Route path="mypage" element={<Mypage />}>
            <Route index element={<MyPageModify />} />
            <Route path="mileage" element={<MyPageMiileage />} />
            <Route path="history" element={<MyPageHistory />} />
            <Route path="withdrawal" element={<MyPageWithdrawal />} />
          </Route>
          <Route path="chatting" element={<Chatting />} />
          <Route path="mission" element={<Mission />} />
          <Route path="note" element={<Note />}>
            <Route index element={<ResponseNote />} />
            <Route path="requestNote" element={<RequestNote />} />
          </Route>
          <Route path="alram" element={<Alarm />} />
          <Route index element={<Navigate to="home" replace />} />
        </Route>
        <Route path="sogaeting" element={<Soageting />} />
        <Route path="meeting" element={<Meeting />} />
        <Route path="home" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="ForgotId" element={<ForgotId />} />
        <Route path="ForgotPw" element={<ForgotPw />} />
        <Route path="register" element={<Register />} />
        <Route path="registerDetail" element={<RegisterDetail />} />
        <Route path="study" element={<StudyRecoil />} />
        <Route path="studyResult" element={<StudyRecoilResult />} />
        <Route path="Kakao" element={<Kakao />} />
      </Routes>
    </>
  );
}

export default App;
