import React from "react";
import { useRecoilState } from "recoil";
import { StyledButton } from "../../User/Login/LoginStyle";
import MacBookBox from "../../../components/common/macbookBox";
import Modal from "@mui/material/Modal";
import api from "../../../apis/Api";
import {
  ChattingRoomState,
  SogaeResultNoteAtom,
  genderAtom,
  idAtom,
  myImgageAtom,
  opponentIdAtom,
  opponentImageAtom,
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
import CreateChattingClient from "../Login/Clinet";

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
  const [gender,setGender]=useRecoilState(genderAtom);
  const handleClose = () => setOpen(false);
  const [scheduleId, SetScheduleId] = useRecoilState(scheduleIdAtom);
  const [RoomId, setRoomId] = useRecoilState(ChattingRoomState);
  const [myUserSessionId, setMyUserSessionId] = useRecoilState(userSessionId);
  const [myUserName, setMyUserName] = useRecoilState(sogaeUserName);
  const [myDateName, setMyDateName] = useRecoilState(dateName);
  const [myImage, setmyImage] = useRecoilState(myImgageAtom);
  const [opponetImage, setopponetImage] = useRecoilState(opponentImageAtom);
  const navigate = useNavigate();
  const GoSogaetingWait = () => {
    navigate('/sogaeting');
  }
  const GoScheduleVideo = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSessionId = `session${scheduleId}`;
    setMyUserSessionId(newSessionId);
    if(UserId){
      setMyUserName(UserId);
    };
    setMyDateName(opponentId);
    const ChatRommData: MakeChatRoom = {
      maleId: gender === 'male' ? UserId : opponentId,
      femaleId: gender == 'female' ? UserId : opponentId,
    };
    console.log(ChatRommData);
   await api.post('chat/room', ChatRommData)
    .then(res => {
      setRoomId(res.data.roomId);
       api.get(`/user/mypage/${UserId}`)
      .then(res => {
        console.log(res);
        console.log(res.data.data.profilePictures[0].path);
        setmyImage(res.data.data.profilePictures[0].path);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
       api.get(`/user/mypage/${opponentId}`)
      .then(res => {
        console.log(res);
        console.log(res.data.data.profilePictures[0]);
        setopponetImage(res.data.data.profilePictures[0].path);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
      handleClose();
      GoSogaetingWait();
    })
    .catch(error => {
      if (error.response) {
        console.error("Error status:", error.response.status);
        console.error("Error data:", error.response.data);
  

        const errorMessage = error.response.data.msg;
        console.error("Error message:", errorMessage);
  
   
        if (errorMessage === "ChatRoomDuplicateException") {
          api.get(`chat/room/${UserId}`)
          .then(res => {
            
            const findmychat:any=res.data.data;
            const foundChatRoom = findmychat.find((chatRoom: any) => {
              return chatRoom.maleId === (gender === 'male' ? UserId : opponentId) &&
                     chatRoom.femaleId === (gender === 'female' ? UserId : opponentId);
            });
            
            if (foundChatRoom) {
              const chatRoomId = foundChatRoom.id;
              setRoomId(chatRoomId);
              api.get(`/user/mypage/${UserId}`)
      .then(res => {
        console.log(res);
        console.log(res.data.data.profilePictures[0].path);
        setmyImage(res.data.data.profilePictures[0].path);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
       api.get(`/user/mypage/${opponentId}`)
      .then(res => {
        console.log(res);
        console.log(res.data.data.profilePictures[0]);
        setopponetImage(res.data.data.profilePictures[0].path);
      })
      .catch(error => {
        console.error("Error:", error.message);
      });
              handleClose();
              GoSogaetingWait();
            } else {

            }
            console.log(findmychat);
           
          })
          .catch(e => {
            console.error(e);
          });
        }
      } else {
        console.error("Error:", error.message);
      }
    });
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
