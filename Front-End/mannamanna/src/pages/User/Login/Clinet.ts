import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Client, Stomp } from "@stomp/stompjs";
import {
  LoginErrorModalAtom,
  accessTokenAtom,
  genderAtom,
  idAtom,
  nameAtom,
  refreshTokenAtom,
} from "../../../Recoil/State";

const CreateChattingClient = () => {
  const [gender, setGender] = useRecoilState(genderAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [id, setId] = useRecoilState(idAtom);
  const [UseraccessToken, setUseraccessToken] = useRecoilState(
    accessTokenAtom
  );
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);

  const ws = new WebSocket("wss://i9b205.p.ssafy.io/ws");
  const client = Stomp.over(ws);

  const headers = {
    ...(UseraccessToken ? { Authorization: `Bearer ${UseraccessToken}` } : {}),
    ...(name ? { userName: `${name}` } : {}),
    ...(id ? { userId: `${id}` } : {}),
    ...(gender ? { gender: `${gender}` } : {}),
  };


  // client.onStompError = (frame) => {
  //   console.error("에러남: " + frame.headers["message"]);
  //   console.error("상세한 에러 " + frame.body);
  // };

  // client.reconnectDelay = 5000;
  // client.heartbeatIncoming = 4000;
  // client.heartbeatOutgoing = 4000;

  return {client,headers};
};

export default CreateChattingClient;
