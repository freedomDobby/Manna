import { Button, Modal } from "@mui/material";
import { useState } from "react";
import MacBookBox from "../../../components/common/macbookBox";
import { MyPageButton } from "../MyPage/MyPageStyles";
// import { useRecoilState } from "recoil";
// import { userAddress } from "../Register/RegisterState";
import {
  Contain,
  Container2,
  EnterImageBtnBox,
  ImageForm,
  MostBiggestBox,
  TitleBox,
} from "./ModalStyle";
import { Sido } from "./Selection";
import { GuGun } from "./EnterGuGun";
import { AddressDetail } from "./AddressDetail";

type EnterLocationProps = {
  children: string;
};

export const EnterLocation = ({ children }: EnterLocationProps) => {
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
                  예약하기 서비스를 이용하기 위한 주소를 입력해주세요.
                </TitleBox>
                <ImageForm
                  style={{ justifyContent: "center", alignContent: "center" }}
                >
                  <div
                    style={{
                      // border: "1px solid blue",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center" /* 수직 중앙 정렬 설정 */,
                      height: "60%",
                      width: "80%",
                      margin: "3%",
                    }}
                  >
                    <label
                      style={{
                        // border: "1px solid red",
                        textAlign: "center",
                        width: "30%" /* 라벨 너비 설정 */,
                      }}
                    >
                      주소
                    </label>
                    <Sido />
                    <GuGun />
                    <AddressDetail />
                  </div>
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
