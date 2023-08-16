import { useRecoilState, useRecoilValue } from "recoil";
import { MyPageDataState, MyPageProfilePicture1, MyPageProfilePicture2, MyPageProfilePicture3 } from "../../pages/User/MyPage/MyPageState";
import { ProFileStyle } from "../../pages/User/MyPage/MyPageModifyStyle";
import {
  PictureBox,
  PictureContainer,
} from "../../pages/User/MyPage/MyPageStyle";
import { ChangePicModal } from "../../pages/User/MyPage/MyPageModal/ChangePicModal";
import { ChangePicAtom, ChangePicIndexAtom } from "../../Recoil/State";
import { Modal } from "@mui/material";
import { Contain, Container2, EnterImageBtnBox, ImageForm, MostBiggestBox, TitleBox } from "../../pages/User/Register/ModalStyle";
import MacBookBox from "./macbookBox";
import { EnterImage1, EnterImage2, EnterImage3 } from "../../pages/User/Register/Image/ImageInput";
import { MyPageButton } from "../../pages/User/MyPage/MyPageStyles";
import { useState } from "react";
import { profilePicture1State, profilePicture2State, profilePicture3State } from "../../pages/User/Register/RegisterState";

export const Profile = () => {
  const myPageProfilePicture1 = useRecoilValue(MyPageProfilePicture1);
  const hello = myPageProfilePicture1.path;
  return <ProFileStyle style={{ backgroundImage: `url(${hello})` }} />;
};

export const ModifyProfile = () => {
  const myPageProfilePicture1 = useRecoilValue(MyPageProfilePicture1);
  const myPageProfilePicture2 = useRecoilValue(MyPageProfilePicture2);
  const myPageProfilePicture3 = useRecoilValue(MyPageProfilePicture3);
  const [ChangeOpen, setChangeOpen] = useRecoilState(ChangePicAtom);
  const [ChangePicIndex, setChangePicIndex] = useRecoilState(ChangePicIndexAtom);

  const ChangePic = (index: any) => {
    // index 매개변수 추가
    setChangeOpen(!ChangeOpen);
    setChangePicIndex(index);
    console.log(index); // 전달받은 index 출력
  };

  return (
    <PictureContainer>
      <MyEnterImage1/>
      <MyEnterImage2/>
      <MyEnterImage3/>
    </PictureContainer>
  );
};

export const MyEnterImage1 = () => {
  const [profilePicture1, setProfilePicture1] = useRecoilState(profilePicture1State);
  const [myPageProfilePicture1, setMyPageProfilePicture1] = useRecoilState(MyPageProfilePicture1);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProfilePicture1(new File([], "dummy.jpg"));
    setOpen(false);
  }
  const handleSave = () => {
    const imageUrl = URL.createObjectURL(profilePicture1);
    const temp = {...myPageProfilePicture1};
    temp.path = imageUrl;
    setMyPageProfilePicture1(temp);
    setOpen(false);
  }
  return (
    <div style={{ width: "30%", height: '70%' }}>
      <PictureBox onClick={handleOpen} style={{ backgroundImage: `url(${myPageProfilePicture1.path})` }}/>
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
              <Container2>
                <TitleBox>
                  프로필 사진 1
                </TitleBox>
                <ImageForm>
                  <EnterImage1 title="프로필 사진 1" coment="Best 사진" />
                </ImageForm>
                <EnterImageBtnBox>
                  <MyPageButton onClick={handleSave}>확인</MyPageButton>
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

export const MyEnterImage2 = () => {
  const [profilePicture2, setProfilePicture2] = useRecoilState(profilePicture2State);
  const [myPageProfilePicture2, setMyPageProfilePicture2] = useRecoilState(MyPageProfilePicture2);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProfilePicture2(new File([], "dummy.jpg"));
    setOpen(false);
  }
  const handleSave = () => {
    const imageUrl = URL.createObjectURL(profilePicture2);
    const temp = {...myPageProfilePicture2};
    temp.path = imageUrl;
    setMyPageProfilePicture2(temp);
    setOpen(false);
  }

  return (
    <div style={{ width: "30%", height: '70%' }}>
      <PictureBox onClick={handleOpen} style={{ backgroundImage: `url(${myPageProfilePicture2.path})` }}/>
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
              <Container2>
                <TitleBox>
                  프로필 사진 2
                </TitleBox>
                <ImageForm>
                  <EnterImage2 title="프로필 사진 2" coment="사진2" />
                </ImageForm>
                <EnterImageBtnBox>
                  <MyPageButton onClick={handleSave}>확인</MyPageButton>
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

export const MyEnterImage3 = () => {
  const [profilePicture3, setProfilePicture3] = useRecoilState(profilePicture3State);
  const [myPageProfilePicture3, setMyPageProfilePicture3] = useRecoilState(MyPageProfilePicture3);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setProfilePicture3(new File([], "dummy.jpg"));
    setOpen(false);
  }
  const handleSave = () => {
    const imageUrl = URL.createObjectURL(profilePicture3);
    const temp = {...myPageProfilePicture3};
    temp.path = imageUrl;
    setMyPageProfilePicture3(temp);
    setOpen(false);
  }

  return (
    <div style={{ width: "30%", height: '70%' }}>
      <PictureBox onClick={handleOpen} style={{ backgroundImage: `url(${myPageProfilePicture3.path})` }}/>
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
              <Container2>
                <TitleBox>
                  프로필 사진3
                </TitleBox>
                <ImageForm>
                  <EnterImage3 title="프로필 사진 3" coment="사진3" />
                </ImageForm>
                <EnterImageBtnBox>
                  <MyPageButton onClick={handleSave}>확인</MyPageButton>
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