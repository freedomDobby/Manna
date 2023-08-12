import { Button, Modal } from "@mui/material";
import { useState } from "react";
import MacBookBox from "../../../../components/common/macbookBox";
import { MyPageButton, MyPagePassButton } from "../MyPageStyles";
import {
  Contain,
  Container2,
  EnterImageBtnBox,
  ImageForm,
  MostBiggestBox,
  TitleBox,
} from "../../Register/ModalStyle";
import { Sido } from "../../Register/Selection";
import { GuGun } from "../../Register/Address/EnterGuGun";
import { useRecoilState } from "recoil";
import {
  latitudeState,
  longitudeState,
  RegisterDataState,
  userAddressDetailState,
  userGuGunState,
  userSidoState,
} from "../../Register/RegisterState";

interface AddressSearchResult {
  documents: {
    address_name: string;
    x: string;
    y: string;
  }[];
}

export const ModifyLocal = () => {
  const [open, setOpen] = useState(false); // open 상태 초기화
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [latitude, setlatitude] = useRecoilState(latitudeState);
  const [longitude, setlongitude] = useRecoilState(longitudeState);
  const [userInfo] = useRecoilState(RegisterDataState);
  const [sido] = useRecoilState(userSidoState);
  const [gugun] = useRecoilState(userGuGunState);
  const [detail] = useRecoilState(userAddressDetailState);

  const [searchResults, setSearchResults] =
    useState<AddressSearchResult | null>(null);

  const handleSearch = async () => {
    // 나머지 코드...
  };

  return (
    <div style={{ width: "30%" }}>
      <Button
        sx={{
          width: "100%",
          height: "5vh",
          margin: "1vh",
          backgroundColor: "#ffcced",
          border: "0.3vw solid #000",
          borderRadius: 3,
          color: "common.black",
          borderColor: "ffcced",
          fontSize: "2.5vh",
          fontFamily: "inherit",
          "&:hover": { backgroundColor: "#f8e3ea" },
        }}
        variant="contained"
        onClick={handleOpen}
      >
        주소변경
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
                <TitleBox>예약하기 서비스를 위한 주소를 입력해주세요.</TitleBox>
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
                  </div>
                </ImageForm>
                <EnterImageBtnBox>
                  <MyPageButton onClick={handleSearch}>확인</MyPageButton>
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
