import { StyledButton } from "../User/Login/LoginStyle";
import { ChatLeftStyle, ChatProFile, ChatRightStyle, LeftChatBox,RightChatBox,ChatPeopleBox } from "./ChattingStyle";

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

