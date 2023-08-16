import { useRecoilState, useRecoilValue } from "recoil";
import { MyPageDataState, MyPageProfilePicture1, MyPageProfilePicture2, MyPageProfilePicture3 } from "../../pages/User/MyPage/MyPageState";
import { ProFileStyle } from "../../pages/User/MyPage/MyPageModifyStyle";
import {
  PictureBox,
  PictureContainer,
} from "../../pages/User/MyPage/MyPageStyle";
import { ChangePicModal } from "../../pages/User/MyPage/MyPageModal/ChangePicModal";
import { ChangePicAtom, ChangePicIndexAtom } from "../../Recoil/State";

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
        <PictureBox onClick={() => ChangePic(0)} style={{ backgroundImage: `url(${myPageProfilePicture1.path})` }}/>
        <PictureBox onClick={() => ChangePic(0)} style={{ backgroundImage: `url(${myPageProfilePicture2.path})` }}/>
        <PictureBox onClick={() => ChangePic(0)} style={{ backgroundImage: `url(${myPageProfilePicture3.path})` }}/>
      <ChangePicModal />
    </PictureContainer>
  );
};
