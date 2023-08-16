import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
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
import { ChattingRoomState, accessTokenAtom, chatListState, genderAtom, idAtom, inputValueState, nameAtom } from "../../Recoil/State";
import CreateChattingClient from "../User/Login/Clinet";
import { useQuery } from "@tanstack/react-query";
import api from "../../apis/Api";
import { StyledButton } from "../User/Login/LoginStyle";
import { ChatMessage } from "../../apis/Request/Request"; 
import { Client, CompatClient, Message, Stomp } from "@stomp/stompjs";
import { SOCET_URL } from "../../apis/Url";
import { ChatOutputRes } from "../../apis/Response/Response";
import SockJS from "sockjs-client";

export function GetChat({ message }: { message: string|null }) {
  return (
    <ChatLeftStyle>
      <ChatProFile />
      <LeftChatBox>{message}</LeftChatBox>
    </ChatLeftStyle>
  );
}
  
  export function SendChat({ message }: { message: string|null }) {
    return (
      <ChatRightStyle>
        <RightChatBox>{message}</RightChatBox>
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

  export const ChattingComponent = () => {
    const [Userid, setId] = useRecoilState(idAtom);
    const [gender, setGender] = useRecoilState(genderAtom);
    const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);
    const [chatList, setChatList] = useState<ChatOutputRes[]>([]);
    const [name, setName] = useRecoilState(nameAtom);
    const [inputValue, setInputValue] = useState("");

    const client = useRef<CompatClient>();

    // 웹소켓 연결
    const connect=()=>{
      client.current=Stomp.over(()=>{
        const ws = new SockJS("https://i9b205.p.ssafy.io/ws");
        return ws;
      })
    }
    client.current?.connect({}, () => {
      // 웹소켓 이벤트 핸들러 설정
      client.current!.subscribe(`/sub/chat/room${RoomId}`, res => {
        const message = JSON.parse(res.body) as ChatMessage;
        const addChat:ChatOutputRes={
          senderId: message.senderId,
          senderName: message.senderName,
          message: message.message,
          time: new Date(),
        }
        setChatList((chat_list) => [...chat_list, addChat]);
      });
    });
  useEffect(() => {
      connect();
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

    
    const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=> {
      setInputValue(event.target.value);
    }
  
    const SendMessage=(message: string)=> {
      const newChat: ChatMessage = {
        MessageType: "TALK",
        roomId: RoomId,
        senderId: Userid,
        senderName: name,
        message: message,
      };
      client.current?.send(
        `/sub/chat/room${RoomId}`,
        {},
        JSON.stringify(newChat)
      )
    }

  
    const handleSubmit=()=> {
      if (inputValue === "") {
        return;
      }
      SendMessage(inputValue);
      setInputValue("");
    }
    useEffect(() => {
      if(RoomId===0){
        return;
      }
      api.get(`chat/${RoomId}`)
        .then(res => {
          setChatList(res.data.data);
        })
        .catch(e => {
          console.error(e);
        });
  
    }, []);

    useEffect(() => {
      const rapperDiv = document.getElementById("rapperDiv");
      if (rapperDiv) {
        rapperDiv.scrollTo({
          top: rapperDiv.scrollHeight,
          behavior: "smooth",
        });
      }
    }, [chatList]);
 
    const color2 = "#ffcced";

    
    return (
    <>
      <div id="rapperDiv" style={{ overflow: "auto", minHeight:'84%', maxHeight: "84%",}}>
              <ChatOutBox>
                <ChatInBox>
                {chatList?.map((item, index) => {
            if (item.senderId === Userid) {
              return <SendChat key={index} message={item.message} />;
            } else {
              return <GetChat key={index} message={item.message} />;
            }
          })}
                </ChatInBox>
              </ChatOutBox>
      </div>
        <ChatInputBox>
                        <input
                          placeholder="메시지를 입력하세요"
                          type={"text"}
                          onChange={handleChange}
                          onKeyDown={handleKeyPress}
                          value={inputValue}
                          style={{
                            height:'50%',
                            width: "70%",
                            fontSize:'large',
                            backgroundColor: "#ffcced",
                            borderRadius: "1rem",
                            marginRight:'1vw',
                          }}
                          autoFocus
                        />
                        <div>
                        <div
                  style={{
                    backgroundColor: "#ffcced",
                    height: '5vh',
                    width: '5vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius:'2vh'
                  }}
                  onClick={handleSubmit}
                >
                  <SendIcon style={{ width: '90%', height: '90%' }} />
                </div>
                        </div>
        </ChatInputBox>
        </>
    );
  };