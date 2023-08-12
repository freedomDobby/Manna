import { Button, Modal } from "@mui/material";
import { useState } from "react";
import MacBookBox from "../../../../components/common/macbookBox";
import { MyPageButton } from "../../MyPage/MyPageStyles";
// import { useRecoilState } from "recoil";
// import { userAddress } from "../Register/RegisterState";
import {
  Contain,
  Container2,
  EnterImageBtnBox,
  ImageForm,
  MostBiggestBox,
  TitleBox,
} from "../ModalStyle";
import { Sido } from "../Selection";
import { GuGun } from "./EnterGuGun";
import { AddressDetail } from "./AddressDetail";
import { LocalApi } from "./LocalApi";
import { useRecoilState } from "recoil";
import api from "../../../../apis/Api";
import {
  latitudeState,
  longitudeState,
  RegisterDataState,
  userAddressDetailState,
  userGuGunState,
  userSidoState,
} from "../RegisterState";

interface AddressSearchResult {
  documents: {
    address_name: string;
    x: string;
    y: string;
  }[];
}

export const EnterLocation = () => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [latitude, setlatitude] = useRecoilState(latitudeState);
  const [longitude, setlongitude] = useRecoilState(longitudeState);
  const [userInfo] = useRecoilState(RegisterDataState);
  const [sido] = useRecoilState(userSidoState);
  const [gugun] = useRecoilState(userGuGunState);
  const [detail] = useRecoilState(userAddressDetailState);
  // const [searchQuery, setSearchQuery] = useState(""); // 주소 검색어 상태
  const [searchResults, setSearchResults] =
    useState<AddressSearchResult | null>(null); // 검색 결과 상태
  const [open, setOpen] = useState(false);

  const handleSearch = async () => {
    // event.preventDefault(); // 폼 전송을 막음
    const combinedString = `${sido} ${gugun} `;
    const REST_API_KEY = "2502d7b7bd98ef898c9d2e3a10cfd6e3";
    try {
      const response = await api.get<AddressSearchResult>(
        "https://dapi.kakao.com/v2/local/search/address.json",
        {
          headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`,
          },
          params: {
            query: combinedString,
          },
        }
      );
      setSearchResults(response.data);
      console.log(searchResults);
      if (searchResults !== null) {
        const xValue = parseFloat(response.data.documents[0].x);
        const yValue = parseFloat(response.data.documents[0].y);
        setlatitude(xValue);
        setlongitude(yValue);
      } else {
        setlatitude(userInfo.latitude);
        setlongitude(userInfo.longitude);
      }
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
    handleClose();
  };

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
        지역검색
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
