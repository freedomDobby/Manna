import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import BackBox from "../../components/common/Back";
import MacBookBox from "../../components/common/macbookBox";
import { TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import QuizIcon from '@mui/icons-material/Quiz';
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
      <LeftChatBox>
      <div style={{width:'90%',height:'90%'}}>
          {message}
        </div>
      </LeftChatBox>
    </ChatLeftStyle>
  );
}
  
  export function SendChat({ message }: { message: string|null }) {
    return (
      <ChatRightStyle>
        <RightChatBox>
          <div style={{width:'90%',height:'90%'}}>
            {message}
          </div>
        </RightChatBox>
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
    const [showMessage, setShowMessage] = useState(false);

    const handleMouseEnter = () => {
      setShowMessage(true);
    };
  
    const handleMouseLeave = () => {
      setShowMessage(false);
    };
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

    const handleQuiz=()=> {
      api.get('sogaeting/chatRecommend')
      .then(res => {
        SendMessage("😍밸런스 게임 시작😍");
        SendMessage(res.data.data.name);
        SendMessage("당신의 선택은?!");
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
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
        <div  style={{
            backgroundColor: "#ffcced",
            height: '5vh',
            width: '13vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'space-around',
            borderRadius:'2vh'
          }}>
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
        <div
      style={{
        backgroundColor: "#ffcced",
        height: '5vh',
        width: '5vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '2vh',
        position: 'relative', // 필수: 메시지를 상대 위치로 표시하기 위해
      }}
      onClick={handleQuiz}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <QuizIcon style={{ width: '90%', height: '90%' }} />
      {showMessage && (
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            borderRadius: '4px',
            padding: '4px',
            fontSize: '1.2rem',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        >
          누르면 밸런스 게임을 보내요  😖
        </div>
      )}
    </div>
        </div>

        </ChatInputBox>
        </>
    );
  };