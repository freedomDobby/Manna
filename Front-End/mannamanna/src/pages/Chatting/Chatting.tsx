import { ChangeEvent, useEffect, useState } from "react";
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
import { genderAtom, idAtom, inputValueState } from "../../Recoil/State";
import CreateChattingClient from "../User/Login/Clinet";
import { useQuery } from "@tanstack/react-query";
import api from "../../apis/Api";
import { StyledButton } from "../User/Login/LoginStyle";
import { ChatPeople, GetChat, SendChat } from "./ChattingComponent";



export const Chatting = () => {
  const [id, setId] = useRecoilState(idAtom);
  const [gender, setGender] = useRecoilState(genderAtom);
  const [RoomId, setRoomId] = useState(0);
  const [inputValue, setInputValue] = useRecoilState(inputValueState); // 상태 초기화


  const { data: ChattingInfo, isLoading, isError } = useQuery<any>(["ChattingInfo"], async () => {
    const response = await api.get(`chat/room/${id}`);
    console.log(response.data);
    return response.data.data;
  });

  const Chatting = CreateChattingClient();

  const EnterRoom = (ChattingRoom: number) => {
    console.log(ChattingRoom);
    setRoomId(ChattingRoom);
  };

  useEffect(() => {
    Chatting.client.connect(Chatting.headers, () => {
      console.log("연결됨");
    }, (error: any) => {
      console.error("에러 발생:", error);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>에러입니다.</p>;
  }

  const sendMessage = () => {
    const message = {
      sender: id, 
      content: inputValue, 
      room: {RoomId}, 
    };
  
    Chatting.client.send('/sub/chat/room/', {}, JSON.stringify(message));
  };


    // return () => {
    //   // 컴포넌트가 언마운트될 때, client를 비활성화
    //   client.deactivate();
    // };
  
    let messageContent = "";

    // Handle input value change
    const handleInputChange = (message:string) => {
      messageContent=message;
    };

    const handleSubmit = () => {
      console.log(messageContent); // 상태 업데이트 전의 값 출력
      setInputValue(messageContent); // 상태 업데이트
      console.log(inputValue); // 업데이트된 상태 값 출력
     };
  return (
    <div>
      <div style={{ height: "5vh" }}></div>
      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarChat />
        </div>
        <div style={{ height: "80vh" }}>
          <MyPageContainerBox>
            <MacBookBox
              width="30%"
              height="90%"
              color1="#ffcced"
              color2="#ffffff"
              alignItems="center"
            >
              <ChatPeopleOutBox>
                <ChatInBox>
                {ChattingInfo.map((note:any, index:any) => (
              <ChatPeople
              userName={gender === "male" ? note.femaleId : note.maleId}
                onEnterRoom={() =>
                  EnterRoom(
                    note.id
                  )} />
                ))}
                                  <StyledButton onClick={() => console.log(inputValue)}>값좀보자씨발</StyledButton>
                </ChatInBox>
              </ChatPeopleOutBox>
            </MacBookBox>
            <MacBookBox
              width="60%"
              height="90%"
              color1="#ffcced"
              color2="#ffffff"
              alignItems="center"
            >
              {/* 스크롤바 디자인 추가해야함 */}
              <ChatOutBox>
                <ChatInBox>
                  <GetChat />
                  <SendChat />
                </ChatInBox>
              </ChatOutBox>
              <ChatInputBox>
              <TextField
                  variant="filled"
                  color="secondary"
                  onChange={(e)=>handleInputChange(e.target.value)}
                  sx={{
                    width: "70%",
                    backgroundColor: "#ffcced",
                    borderRadius: "0.5vw",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#ffcced" }}
                  onClick={handleSubmit}
                >
                  <SendIcon />
                </Button>
              </ChatInputBox>
            </MacBookBox>
          </MyPageContainerBox>
        </div>
      </BackBox>
    </div>
  );
};
