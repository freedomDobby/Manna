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
import { ChatOutputRes } from "../../apis/Response/Response";

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
    const [chatCheck,seteChatCheck]=useState("")
  
    const Chat = CreateChattingClient();
      
    Chat.client.activate();
  
    function getMessage() {
      Chat.client.subscribe(`/sub/chat/room${RoomId}`, (body: Message) => {
        const message = JSON.parse(body.body) as ChatMessage;
        console.log(message);
        const addChat:ChatOutputRes={
          senderId: message.senderId,
          senderName: message.senderName,
          message: message.message,
          time: new Date(),
        }
        setChatList((chat_list) => [...chat_list, addChat]);
      });
    }
    Chat.client.onConnect = () => {
      getMessage();
    };

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setInputValue(event.target.value);
    }
  
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
  
    const sendMessage = (message: string) => {
      const newChat: ChatMessage = {
        MessageType: "TALK",
        roomId: RoomId,
        senderId: Userid,
        senderName: name,
        message: message,
      };
      console.log(newChat);
      publish(newChat);
      setInputValue("");
    };
  
    function handleSubmit(event: FormEvent) {
      if (inputValue === "") {
        return;
      }
      sendMessage(inputValue);
      setInputValue("");
    }


    const { data: ChattingHistory } = useQuery<ChatOutputRes[]>(["ChattingHistory"], async () => {
      if(RoomId===0){
        return;
      }
      const response = await api.get(`chat/${RoomId}`);
      setChatList(response.data.data);
      return response.data.data;
    });

    const renderChatComponents = (chatList:ChatOutputRes[]) => {
      return chatList.map((item, index) => {
        if (item.senderId === Userid) {
          return <SendChat key={index} message={item.message} />;
        } else {
          return <GetChat key={index} message={item.message} />;
        }
      });
    };


  
    return (
      <>           
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
      <ChatInputBox>
        <input
          placeholder="메시지를 입력하세요"
          type={"text"}
          onChange={handleChange}
          value={inputValue}
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
        </ChatInputBox>
      </>
    );
  };
  
