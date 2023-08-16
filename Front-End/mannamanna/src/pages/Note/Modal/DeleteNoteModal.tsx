import { useRecoilState } from "recoil";
import { DeleteNoteAtom, sendNoteIdAtom } from "../../../Recoil/State";
import MacBookBox from "../../../components/common/macbookBox";
import Modal from "@mui/material/Modal";
import React from "react";
// import { TextField } from '@mui/material';
import { StyledButton } from "../../User/Login/LoginStyle";

import api from "../../../apis/Api";
import {
  BtnContainer,
  InfoContainer,
  ModalContent,
  ProfileContainer,
  RemoveBtnContainer,
  RemoveInfoContainer,
  RemoveModalContainer,
  RemoveModalContent,
} from "./NoteModalStyle";

export const DeleteNoteModal = () => {
  const [open, setOpen] = useRecoilState(DeleteNoteAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);

  const sendDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await api.delete(`note/${noteId}`);
      console.log(response.data);
      console.log("잘지웠군");
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await sendDelete(e);
    handleClose();
    // window.location.reload();
  };

  return (
    <RemoveModalContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <RemoveModalContent>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <RemoveInfoContainer>
              쪽지를 정말 삭제하겠습니까?
            </RemoveInfoContainer>
            <RemoveBtnContainer>
              <StyledButton onClick={handleRemove}>삭제</StyledButton>
              <StyledButton onClick={handleClose}>취소</StyledButton>
            </RemoveBtnContainer>
          </MacBookBox>
        </RemoveModalContent>
      </Modal>
    </RemoveModalContainer>
  );
};
