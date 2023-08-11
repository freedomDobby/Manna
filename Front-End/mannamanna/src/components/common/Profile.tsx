import styled from "styled-components";
import { MyPagePictures } from "../../pages/User/MyPage/MyPageStyles";

const ProFileStyle = styled.div`
  width: 75px;
  height: 75px;
  background: black;
  border-radius: 50%;
  opacity: 1;
  // border: 1px solid red;
  margin: 2vh;
`;

function Profile() {
  return (
    <ProFileStyle>
      <MyPagePictures />
    </ProFileStyle>
  );
}

export default Profile;
