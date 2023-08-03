import { useState } from "react";
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

const Chatting = () => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    // 여기서 입력된 값을 처리하고 원하는 작업을 수행합니다.
    alert(`입력된 값: ${inputValue}`);
    setInputValue(""); // 폼을 초기화하려면 상태값을 초기화해줍니다.
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
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
                  <ChatPeople />
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
                  <GetChat />
                  <SendChat />
                  <GetChat />
                  <SendChat />
                  <GetChat />
                  <SendChat />
                </ChatInBox>
              </ChatOutBox>
              <ChatInputBox>
                <TextField
                  variant="filled"
                  color="secondary"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
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
                  {/* 보내기 */}
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

function GetChat() {
  return (
    <ChatLeftStyle>
      <ChatProFile />
      <LeftChatBox>-50 Point 쪽지 보내기</LeftChatBox>
    </ChatLeftStyle>
  );
}

function SendChat() {
  return (
    <ChatRightStyle>
      <RightChatBox>+50 Point 미션 참여</RightChatBox>
      <ChatProFile />
    </ChatRightStyle>
  );
}

function ChatPeople() {
  return (
    <ChatPeopleBox>
      <ChatProFile />
      <div>
        <div>이름이름</div>
        <div style={{ fontSize: "1vw" }}>대화대화대화</div>
      </div>
      <div style={{ fontSize: "0.3vw" }}>
        <div>시간시간</div>
        <div>숫자</div>
      </div>
    </ChatPeopleBox>
  );
}

export default Chatting;
