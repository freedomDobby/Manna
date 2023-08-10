import React from "react";
import { useRecoilState } from "recoil";
import { StyledButton } from "../../User/Login/LoginStyle";
import MacBookBox from "../../../components/common/macbookBox";
import Modal from "@mui/material/Modal";
import api from "../../../apis/Api";
import {
  SogaeResultNoteAtom,
  idAtom,
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
} from "./NoteModalStyle";

interface CheckModalProps {
  profile: string; //프로필 사진 받아올건데, url 맞나?
  name: string; // 이름
  height: number; // 키
  age: number; //나이
  job: string; // 직업
  mbti: string; // mbti
  selfPr: string; // 자기소개
}

export const CheckSogaeNoteModal: React.FC<CheckModalProps> = ({
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);
  let temp = { ...sendnote };

  const sendAccept = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await api.get(`note/sogae/accept/${noteId}`);
      console.log(response.data);
      console.log("잘갔군.");
    } catch (error) {
      console.error(error);
    }
  };
  const handleAccpet = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await sendAccept(e);
    handleClose();
  };
  const sendRefuse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await api.get(`note/sogae/refuse/${noteId}`);
      console.log(response.data);
      console.log("잘갔군.");
    } catch (error) {
      console.error(error);
    }
  };
  const handleRefuse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await sendRefuse(e);
    handleClose();
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
              <ProfileBox style={{ backgroundImage: `url(${profile})` }} />
            </ProfileContainer>
            <InfoContainer>
              <NameInfo>
                <Name>{name}</Name>
              </NameInfo>
              <Info1>
                <Height>키 : {height}</Height>
                <Age>나이 : {age}</Age>
              </Info1>
              <Info2>
                <Job>직업: {job}</Job>
                <MBTI>MBTI : {mbti}</MBTI>
              </Info2>
              <SelfPrInfo>
                <div>{selfPr}</div>
              </SelfPrInfo>
            </InfoContainer>
            <BtnContainer>
              <StyledButton onClick={handleAccpet}>수락</StyledButton>
              <StyledButton onClick={handleRefuse}>거절</StyledButton>
            </BtnContainer>
          </MacBookBox>
        </ModalContent>
      </Modal>
    </ModalContainer>
  );
};
