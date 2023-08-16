import React from "react";
import { useRecoilState } from "recoil";
import { StyledButton } from "../../User/Login/LoginStyle";
import MacBookBox from "../../../components/common/macbookBox";
import Modal from "@mui/material/Modal";
import api from "../../../apis/Api";
import {
  ChattingRoomState,
  SogaeResultNoteAtom,
  idAtom,
  opponentIdAtom,
  scheduleIdAtom,
  sendNoteAtom,
  sendNoteIdAtom,
} from "../../../Recoil/State";
import {
  BtnContainer,
  Info1,
  Height,
  Age,
  Info2,
  InfoContainer,
  ModalContainer,
  ModalContent,
  Name,
  NameInfo,
  ProfileBox,
  ProfileContainer,
  SelfPrInfo,
  MBTI,
  Job,
} from "../../Note/Modal/NoteModalStyle";
import { useNavigate } from "react-router-dom";
import { dateName, sogaeUserName, userSessionId } from "../../Soagaeting/SogaetingState";
import { MakeChatRoom } from "../../../apis/Request/Request";

interface CheckModalProps {
  profile: string; //프로필 사진 받아올건데, url 맞나?
  name: string; // 이름
  height: number; // 키
  age: number; //나이
  job: string; // 직업
  mbti: string; // mbti
  selfPr: string; // 자기소개
}

export const CheckSchduleModal: React.FC<CheckModalProps> = ({
  profile,
  name,
  height,
  age,
  job,
  mbti,
  selfPr,
}) => {
  const [open, setOpen] = useRecoilState(SogaeResultNoteAtom);
  const [sendnote, Setsendnote] = useRecoilState(sendNoteAtom);
  const [UserId] = useRecoilState(idAtom);
  const [opponentId,setOpponentId]=useRecoilState(opponentIdAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [scheduleId, SetScheduleId] = useRecoilState(scheduleIdAtom);
  const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);
  const [myUserSessionId, setMyUserSessionId] = useRecoilState(userSessionId);
  const [myUserName, setMyUserName] = useRecoilState(sogaeUserName);
  const [myDateName, setMyDateName] = useRecoilState(dateName);
  const navigate = useNavigate();
  const GoSogaetingWait = () => {
    navigate('/sogaeting');
  }
  const GoScheduleVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSessionId = `session${scheduleId}`;
    setMyUserSessionId(newSessionId);
    const ChatRommData:MakeChatRoom={
    maleId:UserId,
    femaleId:opponentId,
    }
    if(UserId){
      const myuser = UserId;
      setMyUserName(myuser);
    }
    console.log(ChatRommData);
    // const response = await api.post('chat/room', ChatRommData);
    // console.log("나와라@@@@@@@@@@@@@@@@@@@@@@@"+response.data.roomId);
    // setRoomId(response.data.roomId);
    setMyDateName(opponentId)
    handleClose();
    GoSogaetingWait();
  };
  const deleteScheduel = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await api.delete(`schedule/${scheduleId}`);
      console.log(response.data);
      console.log("삭제됬꾼");
    } catch (error) {
      console.error(error);
    }
  };
  const ClickdeleteScheduel = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteScheduel(e);
    handleClose();
    window.location.reload();
  };

  return (
    <ModalContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* 소개팅 수락 모달 */}
        <ModalContent>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <ProfileContainer>
              <ProfileBox style={{ backgroundImage: `url(${profile})`, backgroundSize:'100%' }} />
            </ProfileContainer>
            <InfoContainer>
              <NameInfo>
                <Name>{name}</Name>
              </NameInfo>
              <Info2>
                <Job>직업: {job}</Job>
              </Info2>
              <Info1>
                <Height>키 : {height}</Height>
                <Age>나이 : {age}</Age>
              </Info1>

              <Info2>
                <MBTI>MBTI : {mbti}</MBTI>
              </Info2>

              <SelfPrInfo>
                <div>{selfPr}</div>
              </SelfPrInfo>
            </InfoContainer>
            <BtnContainer>
              <StyledButton onClick={GoScheduleVideo}>입장하기</StyledButton>
              <StyledButton onClick={ClickdeleteScheduel}>일정 삭제</StyledButton>
            </BtnContainer>
          </MacBookBox>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
};
