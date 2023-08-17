import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import BackBox from "../../components/common/Back";
import MacBookBox from "../../components/common/macbookBox";
import { TextField, Button, IconButton } from "@mui/material";
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
  CircularImageContainer,
  CircularImage,
} from "./ChattingStyle";
import SidebarChat from "../../components/layout/Sidebar/SidebarChat";
import { MyPageContainerBox } from "../User/MyPage/MyPageStyle";
import { useRecoilState } from "recoil";
import { ChattingRoomState, accessTokenAtom, chatListState, genderAtom, idAtom, inputValueState, myImgageAtom, nameAtom, opponentImageAtom } from "../../Recoil/State";
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
  const [myImage, setmyImage] = useRecoilState(myImgageAtom);
  const [opponetImage, setopponetImage] = useRecoilState(opponentImageAtom);
  return (
    <ChatLeftStyle>
      <CircularImageComponent src={opponetImage} />
      <LeftChatBox>
      <div style={{width:'90%',height:'90%'}}>
          {message}
        </div>
      </LeftChatBox>
    </ChatLeftStyle>
  );
}
  
  export function SendChat({ message }: { message: string|null }) {
    const [myImage, setmyImage] = useRecoilState(myImgageAtom);
    const [opponetImage, setopponetImage] = useRecoilState(opponentImageAtom);
    console.log(myImage);
    return (
      <ChatRightStyle>
        <RightChatBox>
          <div style={{width:'90%',height:'90%'}}>
            {message}
          </div>
        </RightChatBox>
        <CircularImageComponent src={myImage}/>
      </ChatRightStyle>
    );
  }


export const CircularImageComponent = ({ src, alt }:any) => (

  <CircularImageContainer style={{ backgroundImage: `url(${src})` }} />

);

  
  interface ChatPeopleProps {
    userName: string;
    onEnterRoom: () => void;
  }
  
  export function ChatPeople({ userName, onEnterRoom }: ChatPeopleProps) {
    return (
      <ChatPeopleBox  onClick={onEnterRoom}>
          <div style={{width:'100%'}}>{userName}과의 채팅방</div>
      </ChatPeopleBox>
    );
  }

  export const ChattingComponent = () => {
    const [userId, setId] = useRecoilState(idAtom);
    const [gender, setGender] = useRecoilState(genderAtom);
    const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);
    const [chatList, setChatList] = useState<ChatOutputRes[]>([]);
    const [userName, setName] = useRecoilState(nameAtom);
    const [inputValue, setInputValue] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [myImage, setmyImage] = useRecoilState(myImgageAtom);
    const [opponetImage, setopponetImage] = useRecoilState(opponentImageAtom);
    const [userAccessToken, setUseraccessToken] = useRecoilState(accessTokenAtom);
    const handleMouseEnter = () => {
      setShowMessage(true);
    };
  
    const handleMouseLeave = () => {
      setShowMessage(false);
    };
    const client = useRef<CompatClient>();

    // 웹소켓 연결
    function connect(){
      const headers:any={
        userId:userId,
        gender: gender,
        userName: userName,
        token:userAccessToken
      }
      var socket= new SockJS("https://i9b205.p.ssafy.io/ws");
      client.current=Stomp.over(socket);
      client.current.connect(headers,function(frame:any){

      });
    };

    useEffect(() => {
      connect();
  }, []);
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
        senderId: userId,
        senderName: userName,
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

    // useEffect(() => {
    //   if(RoomId===0){
    //     return;
    //   }
    //   api.get(`chat/${RoomId}`)
    //     .then(res => {
    //       setChatList(res.data.data);
    //     })
    //     .catch(e => {
    //       console.error(e);
    //     });
  
    // }, []);

    useEffect(() => {
      const rapperDiv = document.getElementById("rapperDiv");
      if (rapperDiv) {
        rapperDiv.scrollTo({
          top: rapperDiv.scrollHeight,
          behavior: "smooth",
        });
      }
    }, [chatList]);
 

    const {
      data: chattingRommList,
    } = useQuery<any>(["chattingRommList"], async () => {
      const response = await api.get(`chat/${RoomId}`);
      console.log(response.data.data);
      setChatList(response.data.data);
      return response.data;
    });



  

    
    return (
    <>
      <div id="rapperDiv" style={{ overflow: "auto", minHeight:'84%', maxHeight: "84%",}}>
              <ChatOutBox>
                <ChatInBox>
                {chatList?.map((item, index) => {
            if (item.senderId === userId) {
              return <SendChat key={index} message={item.message} />;
            } else {
              return <GetChat key={index } message={item.message} />;
            }
          })}
                </ChatInBox>
              </ChatOutBox>
      </div>
      <ChatInputBox>
        <input
          placeholder=" 메시지를 입력하세요"
          type={"text"}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={inputValue}
          style={{
            height:'50%',
            width: "70%",
            fontSize:'large',
            backgroundColor: "#ffcced",
            borderRadius: "0.5rem",
            border: '0.1rem solid black',
            marginRight:'3%',
            fontFamily: 'inherit',
          }}
          autoFocus
        />
        <div  style={{
            backgroundColor: "#ffffff",
            height: '60%',
            width: '20%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
        <IconButton
          style={{
            backgroundColor: "#ffcced",
            height: '100%',
            width: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem',
            color: 'black',
            border: 'solid 0.1rem black',
          }}
          onClick={handleSubmit}
        >
          <SendIcon/>
        </IconButton>

        <IconButton
          style={{
            backgroundColor: "#ffcced",
            height: '100%',
            width: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0.5rem',
            color: 'black',
            border: 'solid 0.1rem black',
            fontFamily:'inherit',
          }}
          onClick={handleQuiz}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {showMessage && (
            <div
              style={{
                position: 'absolute',
                backgroundColor: 'rgba(255, 204, 237, 0.7)',
                color: 'black',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                bottom: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 1,
              }}
            >
              누르면 밸런스 게임을 보내요😖
            </div>
          )}
          <QuizIcon/>
        </IconButton>
        </div>
      </ChatInputBox>
    </>
    );
  };