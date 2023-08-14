import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import BackBox from "../../components/common/Back";
import MacBookBox from "../../components/common/macbookBox";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  ChatPeopleBox,
  LeftChatBox,
  RightChatBox,
  ChatProFile,
  ChatContainerBox,
  ChatLeftStyle,
  ChatRightStyle,
  ChatInBox,
  ChatPeopleOutBox,
  ChatOutBox,
  ChatInputBox,
} from "./ChattingStyle";
import SidebarChat from "../../components/layout/Sidebar/SidebarChat";
import { MyPageContainerBox } from "../User/MyPage/MyPageStyle";
import { useRecoilState } from "recoil";
import { ChattingRoomState, chatListState, genderAtom, idAtom, inputValueState, nameAtom } from "../../Recoil/State";
import CreateChattingClient from "../User/Login/Clinet";
import { useQuery } from "@tanstack/react-query";
import api from "../../apis/Api";
import { StyledButton } from "../User/Login/LoginStyle";
import { ChatMessage } from "../../apis/Request/Request";
import { Client, Message } from "@stomp/stompjs";
import { SOCET_URL } from "../../apis/Url";

export function GetChat() {
    return (
      <ChatLeftStyle>
        <ChatProFile />
        <LeftChatBox>-50 Point 쪽지 보내기</LeftChatBox>
      </ChatLeftStyle>
    );
  }
  
  export function SendChat() {
    return (
      <ChatRightStyle>
        <RightChatBox>+50 Point 미션 참여</RightChatBox>
        <ChatProFile />
      </ChatRightStyle>
    );
  }
  
  interface ChatPeopleProps {
    userName: string;
    onEnterRoom: () => void;
  }
  
  export function ChatPeople({ userName, onEnterRoom }: ChatPeopleProps) {
    return (
      <ChatPeopleBox>
        <ChatProFile />
        <div>
          <div>{userName}과의 채팅방</div>
        </div>
        <div style={{ fontSize: "0.3vw" }}>
          <StyledButton onClick={onEnterRoom}>입장</StyledButton>
        </div>
      </ChatPeopleBox>
    );
  }

  export const ChattingInput = () => {
    const [Userid, setId] = useRecoilState(idAtom);
    const [gender, setGender] = useRecoilState(genderAtom);
    const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);
    const [chatList, setChatList] = useRecoilState(chatListState);
    const [name, setName] = useRecoilState(nameAtom);
    const [inputValue, setInputValue] = useState(""); 
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    }

    
    const Chat=CreateChattingClient();

    let messageContent = "";
  
    // }
    function getMessage() {
      Chat.client.subscribe(`/sub/chat/room/${RoomId}`, (body:Message) => {
        const message = JSON.parse(body.body) as ChatMessage;
        console.log(message);
        setChatList((chat_list) => [...chat_list, message]);
      });
    }

    Chat.client.activate();
    function publish(chat: ChatMessage) {
      console.log(chat.message);
      if (!Chat.client.connected) {
        return;
      }
      Chat.client.publish({
        destination: `/sub/chat/room${RoomId}`,
        body: JSON.stringify(chat),
      });
    }
    
    const sendMessage=(message:string)=>{
      const newChat: ChatMessage = {
        MessageType: "TALK",
        roomId:RoomId,
        senderId:Userid,
        senderName:name,
        message:message,
        
    };
    console.log(newChat);
      publish(newChat);
      setInputValue("");
    }


     function handleSubmit(event: FormEvent) {
      if(inputValue===""){
        return;
      }
      sendMessage(inputValue);
      setInputValue(""); 
    }
    return (
          <>
                        <input
    placeholder="메시지를 입력하세요" type={'text'} onChange={handleChange} value={inputValue}
    style={{
      width: "70%",
      backgroundColor: "#ffcced",
      borderRadius: "0.5vw",
    }}
    autoFocus 
  />
                  <Button
                  variant="contained"
                  sx={{ backgroundColor: "#ffcced" }}
                  onClick={handleSubmit}
                >
                  <SendIcon />
                </Button>
          </>
    );
  };
  

