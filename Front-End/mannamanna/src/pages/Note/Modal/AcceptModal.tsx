import { useRecoilState } from "recoil";
import {
  SogaeResultNoteAtom,
  idAtom,
  sendNoteAtom,
  sendNoteIdAtom,
} from "../../../Recoil/State";
import MacBookBox from "../../../components/common/macbookBox";
import Modal from "@mui/material/Modal";
import React from "react";
// import { TextField } from '@mui/material';
import api from "../../../apis/Api";
import {
  BtnContainer,
  InfoContainer,
  ModalContainer,
  ModalContent,
  ProfileBox,
  ProfileContainer,
} from "./NoteModalStyle";
import { StyledButton } from "../../User/Login/LoginStyle";

export const CheckSogaeNoteModal = () => {
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
              <ProfileBox />
            </ProfileContainer>
            <InfoContainer></InfoContainer>
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
