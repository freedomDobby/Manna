import { useRecoilState, useRecoilValue } from "recoil";

import { Modal } from "@mui/material";
import MacBookBox from "../../../../components/common/macbookBox";
import { StyledButton } from "../../Login/LoginStyle";
import { RemoveBtnContainer } from "../../../Note/Modal/NoteModalStyle";
import {
  ChangePicAtom,
  ChangePicIndexAtom,
  idAtom,
} from "../../../../Recoil/State";
import { Container2, TitleBox } from "../../Register/ModalStyle";
import {
  ChangeBox,
  ChangePictureModal,
  MyPageImageForm,
} from "../MyPageModifyStyle";
import { ChangeImage1 } from "./ImageChange";
import { useState } from "react";
import {
  profilePicture1State,
  profilePicture2State,
  profilePicture3State,
} from "../../Register/RegisterState";
import api from "../../../../apis/Api";
import {
  MyPageDataState,
  MypageUserHeight,
  MyPageSelfIntro,
  MyPageMBTI,
  MyPageReligion,
  MyPageJob,
  IsSmoke,
  IsDrink,
  IsBlock,
} from "../MyPageState";

export const ChangePicModal = () => {
  const [open, setOpen] = useRecoilState(ChangePicAtom);
  const handleClose = () => setOpen(false);
  const profilePicture1 = useRecoilValue(profilePicture1State);
  const profilePicture2 = useRecoilValue(profilePicture2State);
  const profilePicture3 = useRecoilValue(profilePicture3State);
  const ChangePicIndex = useRecoilValue(ChangePicIndexAtom);
  const userId = useRecoilValue(idAtom);
  const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
  const temp = { ...myPageData };
  const mypageUserHeight = useRecoilValue(MypageUserHeight);
  const myPageSelfIntro = useRecoilValue(MyPageSelfIntro);
  const myPageMBTI = useRecoilValue(MyPageMBTI);
  const myPageReligion = useRecoilValue(MyPageReligion);
  const myPageJob = useRecoilValue(MyPageJob);
  const isSmoke = useRecoilValue(IsSmoke);
  const isDrink = useRecoilValue(IsDrink);
  const isBlock = useRecoilValue(IsBlock);
  let ModifyPicture = new File([], "dummy.jpg"); // let으로 변수 선언

  // const SavePic = async () => {
  //   temp.height = mypageUserHeight;
  //   temp.job = myPageJob;
  //   temp.isBlockingFriend = isBlock;
  //   temp.isSmoker = isSmoke;
  //   temp.isDrinker = isDrink;
  //   temp.religion = myPageReligion;
  //   temp.mbti = myPageMBTI;
  //   temp.introduction = myPageSelfIntro;

  //   if (ChangePicIndex === 0) {
  //     ModifyPicture = profilePicture1;
  //   } else if (ChangePicIndex === 1) {
  //     ModifyPicture = profilePicture2;
  //   } else {
  //     ModifyPicture = profilePicture3;
  //   }
  //   console.log("1" + ModifyPicture);
  //   try {
  //     const response = await api.put(`/user/mypage/${userId}`, formdata, {
  //       headers: {
  //         "Content-type": "multipart/form-data", // Set the correct content type
  //       },
  //     });
  //     console.log(response);
  //     alert("내 정보가 수정 되었습니다.");
  //   } catch (error) {
  //     console.error(error);
  //     alert("오류가 발생했습니다." + error);
  //   }
  //   setOpen(false);
  // };

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
                <ChangeImage1 title="프로필 사진" coment="사진" />
              </MyPageImageForm>
              <RemoveBtnContainer>
                <StyledButton>저장</StyledButton>
                <StyledButton onClick={handleClose}>취소</StyledButton>
              </RemoveBtnContainer>
            </Container2>
          </ChangeBox>
        </MacBookBox>
      </ChangePictureModal>
    </Modal>
  );
};
