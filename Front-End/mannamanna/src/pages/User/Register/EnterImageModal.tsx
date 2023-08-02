import { Button, Modal } from "@mui/material";
import { useState } from "react";
import MacBookBox from "../../../components/common/macbookBox";
import { MyPageButton } from "../MyPage/MyPageStyles";
import {
  Contain,
  Container2,
  EnterImageBtnBox,
  ImageForm,
  MostBiggestBox,
  TitleBox,
} from "./ModalStyle";
import EnterImageBox from "./ImageInput";

type EnterImageProps = {
  children: string;
};

export const EnterImage = ({ children }: EnterImageProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: "30%" }}>
      <Button
        sx={{
          margin: "1px",
          width: "10vw",
          height: " 7vh",
          color: "#ffcced",
          border: "solid 0.4vh",
          borderColor: "#ffcced",
          backgroundColor: "#ffffff",
          borderRadius: "1.5vh",
          fontSize: " 2.5vh",
          // transition: " border-color 0.3s color 0.3s",
          "&:hover": {
            borderColor: "#d9cff4",
            color: "#d9cff4",
            border: "solid 0.3vh",
            backgroundColor: "white",
          },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MostBiggestBox>
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems="center"
          >
            <Contain>
              {/* 이미지 입력받기 */}
              <Container2>
                <TitleBox>
                  본인을 어필 할 수 있는 사진 3장을 등록해 주세요.
                </TitleBox>
                <ImageForm>
                  <EnterImageBox title="프로필 사진 1" />
                  <EnterImageBox title="프로필 사진 2" />
                  <EnterImageBox title="프로필 사진 3" />
                </ImageForm>
                <EnterImageBtnBox>
                  <MyPageButton onClick={handleClose}>확인</MyPageButton>
                  <MyPageButton onClick={handleClose}>취소</MyPageButton>
                </EnterImageBtnBox>
              </Container2>
            </Contain>
          </MacBookBox>
        </MostBiggestBox>
      </Modal>
    </div>
  );
};
