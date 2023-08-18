import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { Client, CompatClient, Message, Stomp } from "@stomp/stompjs";
import {
  ChattingRoomState,
  LoginErrorModalAtom,
  accessTokenAtom,
  chatListState,
  genderAtom,
  idAtom,
  inputValueState,
  nameAtom,
  refreshTokenAtom,
} from "../../../Recoil/State";
import { ChatMessage } from "../../../apis/Request/Request";
import { SOCET_URL } from "../../../apis/Url";


const CreateChattingClient = () => {
  const [gender, setGender] = useRecoilState(genderAtom);
  const [name, setName] = useRecoilState(nameAtom);
  const [id, setId] = useRecoilState(idAtom);
  const [UseraccessToken, setUseraccessToken] = useRecoilState(
    accessTokenAtom
  );
  const client = useRef<CompatClient>();
  const [chatList, setChatList] = useRecoilState(chatListState);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  const [inputValue, setInputValue] = useRecoilState(inputValueState); 
  const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);


  return {client};
};

export default CreateChattingClient;
