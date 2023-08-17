import { Modal } from "@mui/material";
import { MissionCard } from "./MissionStyle";
import { MyPageButton } from "../User/MyPage/MyPageStyles";
import MacBookBox from "../../components/common/macbookBox";
import { EnterMission1, EnterMission2 } from "./MissionPicture";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  MostBiggestBox,
  Contain,
  Container2,
  TitleBox,
  ImageForm,
  EnterImageBtnBox,
} from "../User/Register/ModalStyle";
import { MissionCardAtom, MissionIdAtom, MissionOpponentAtom, MissionTitle, idAtom, genderAtom
  ,missionPicture1State,missionPicture2State,
} from "../../Recoil/State";
import api from "../../apis/Api";
import { useRecoilState } from "recoil";
import {MissionDoReq} from "../../apis/Request/Request";
interface MissionCardProps {
  id: number;
  mission: string;
  user1:  string;
  user2: string;
}

export const MissionCardBox = ({ id,mission,user1,user2 }: MissionCardProps) => {
  const [open, setOpen] = useRecoilState(MissionCardAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //회원 id
  const [userId, setUserId] = useRecoilState(idAtom);
  const [gender,setGender] = useRecoilState(genderAtom);
  const [missionId,setMissionId] = useRecoilState(MissionIdAtom);

  //json
  const MissionDoData: MissionDoReq = {
    memberId: userId,
    gender:gender,
    id:id,
    missionId:missionId,
  };

  function formDataToObject(formData: FormData) {
    const obj: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }

  //사진
  const [missionPicture1, setMissionPicture1] = useRecoilState(missionPicture1State);
  const [missionPicture2, setMissionPicture2] = useRecoilState(missionPicture2State);
  
  //등록 버튼
  const doMission = async ()=>{
    if ( missionPicture1 === null){
      setOpen(false);
      setMissionPicture1(null);
      return;
    }
    try {
      const formdata = new FormData();
      const json = JSON.stringify(MissionDoData);
      const blob = new Blob([json], { type: "application/json" });
      formdata.append("missionDoRequest", blob);
      console.log(MissionDoData);

      if (missionPicture1!=null && missionPicture1 instanceof File) {
        console.log("첫번째 사진올림")
        formdata.append("missionPicture", missionPicture1);
      }
      console.log("FormData:", formDataToObject(formdata));
      const response = await api.put("/mission/do", formdata, {
        headers: {
          "Content-type": "multipart/form-data", // Set the correct content type
        },
      });
      console.log(response.data);
    } catch (error: any) {
      console.error(error);
      alert(error.response.data);
    }
    //user id

    //미션 id,
    //gender;

    // const { mutate: PostMissionDo } = useMutation<any>(
    //   ["PostMissionDo"],
    //   async () => {
    
    //     const response = await api.post("/mission/do",MissionDoData);
    //     return response.data.data;
    //   }
    // );
    setOpen(false);

  }

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
                <EnterMission1 title={user1} coment="User1" />
                <EnterMission2 title={user2} coment="User2" />
              </ImageForm>
              <EnterImageBtnBox>
                <MyPageButton onClick = {() => doMission()}>확인</MyPageButton>
                <MyPageButton onClick={handleClose}>취소</MyPageButton>
              </EnterImageBtnBox>
            </Container2>
          </Contain>
        </MacBookBox>
      </MostBiggestBox>
    </Modal>
  );
};
