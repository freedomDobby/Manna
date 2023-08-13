import { useRecoilState, useRecoilValue } from "recoil";
import { MyPageDataState } from "../../pages/User/MyPage/MyPageState";
import { ProFileStyle } from "../../pages/User/MyPage/MyPageModifyStyle";
import {
  PictureBox,
  PictureContainer,
} from "../../pages/User/MyPage/MyPageStyle";
import { ChangePicModal } from "../../pages/User/MyPage/MyPageModal/ChangePicModal";
import { ChangePicAtom } from "../../Recoil/State";

const Profile = () => {
  const myPageDataState = useRecoilValue(MyPageDataState);
  const hello = myPageDataState.profilePictures[0].path;
  return <ProFileStyle style={{ backgroundImage: `url(${hello})` }} />;
};

export default Profile;

export const ModifyProfile = () => {
  const myPageDataState = useRecoilValue(MyPageDataState);
  const profilePictures = myPageDataState.profilePictures;
  const [ChangeOpen, setChangeOpen] = useRecoilState(ChangePicAtom);

  const ChangePic = () => {
    setChangeOpen(!ChangeOpen);
  };

  return (
    <PictureContainer>
      {profilePictures.map((picture, index) => (
        <PictureBox
          key={index}
          onClick={ChangePic}
          style={{ backgroundImage: `url(${picture.path})` }}
        />
      ))}
      <ChangePicModal />
    </PictureContainer>
  );
};
