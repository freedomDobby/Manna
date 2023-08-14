import { useRecoilState, useRecoilValue } from "recoil";
import { MyPageDataState } from "../../pages/User/MyPage/MyPageState";
import { ProFileStyle } from "../../pages/User/MyPage/MyPageModifyStyle";
import {
  PictureBox,
  PictureContainer,
} from "../../pages/User/MyPage/MyPageStyle";
import { ChangePicModal } from "../../pages/User/MyPage/MyPageModal/ChangePicModal";
import { ChangePicAtom, ChangePicIndexAtom } from "../../Recoil/State";

export const Profile = () => {
  const myPageDataState = useRecoilValue(MyPageDataState);
  const hello = myPageDataState.profilePictures[0].path;
  return <ProFileStyle style={{ backgroundImage: `url(${hello})` }} />;
};

export const ModifyProfile = () => {
  const myPageDataState = useRecoilValue(MyPageDataState);
  const profilePictures = myPageDataState.profilePictures;
  const [ChangeOpen, setChangeOpen] = useRecoilState(ChangePicAtom);
  const [ChangePicIndex, setChangePicIndex] =
    useRecoilState(ChangePicIndexAtom);
  const ChangePic = (index: any) => {
    // index 매개변수 추가
    setChangeOpen(!ChangeOpen);
    setChangePicIndex(index);
    console.log(index); // 전달받은 index 출력
  };

  return (
    <PictureContainer>
      {profilePictures.map((picture, index) => (
        <PictureBox
          key={index}
          onClick={() => ChangePic(index)} // ChangePic 함수에 index 전달
          style={{ backgroundImage: `url(${picture.path})` }}
        />
      ))}
      <ChangePicModal />
    </PictureContainer>
  );
};
