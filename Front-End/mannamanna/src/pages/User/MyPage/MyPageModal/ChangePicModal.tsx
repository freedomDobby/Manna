import { useRecoilState } from "recoil";

import { Modal } from "@mui/material";
import MacBookBox from "../../../../components/common/macbookBox";
import { StyledButton } from "../../Login/LoginStyle";
import {
  RemoveBtnContainer,
  RemoveModalContainer,
  RemoveModalContent,
} from "../../../Note/Modal/NoteModalStyle";
import { ChangePicAtom } from "../../../../Recoil/State";
import { EnterImage1 } from "../../Register/Image/ImageInput";
import { Container2, TitleBox, ImageForm } from "../../Register/ModalStyle";
import {
  ChangeBox,
  ChangePictureModal,
  MyPageImageForm,
} from "../MyPageModifyStyle";
import { ChangeImage1 } from "./ImageChange";

export const ChangePicModal = () => {
  const [open, setOpen] = useRecoilState(ChangePicAtom);
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ChangePictureModal>
        <MacBookBox
          width="100%"
          height="100%"
          color1="#bcd3ff"
          color2="#ffffff"
          alignItems="center"
        >
          <ChangeBox>
            <Container2>
              <TitleBox>본인을 어필 할 수 있는 사진</TitleBox>
              <MyPageImageForm>
                <ChangeImage1 title="프로필 사진 1" coment="사진1" />
              </MyPageImageForm>
            </Container2>
          </ChangeBox>
          <RemoveBtnContainer>
            <StyledButton>저장</StyledButton>
            <StyledButton onClick={handleClose}>취소</StyledButton>
          </RemoveBtnContainer>
        </MacBookBox>
      </ChangePictureModal>
    </Modal>
  );
};
