import { Modal } from "@mui/material";
import { MissionCard } from "./MissionStyle";
import { MyPageButton } from "../User/MyPage/MyPageStyles";
import MacBookBox from "../../components/common/macbookBox";
import { EnterMission1, EnterMission2 } from "./MissionPicture";
import {
  MostBiggestBox,
  Contain,
  Container2,
  TitleBox,
  ImageForm,
  EnterImageBtnBox,
} from "../User/Register/ModalStyle";
import { MissionCardAtom } from "../../Recoil/State";
import { useRecoilState } from "recoil";

interface MissionCardProps {
  mission: string;
}

export const MissionCardBox = ({ mission }: MissionCardProps) => {
  const [open, setOpen] = useRecoilState(MissionCardAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
              <TitleBox>{mission}</TitleBox>
              <ImageForm>
                <EnterMission1 title="User1" coment="User1" />
                <EnterMission2 title="User2" coment="User2" />
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
  );
};
