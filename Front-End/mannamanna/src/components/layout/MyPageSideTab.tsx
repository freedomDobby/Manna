import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import Font_Main from "../../asset/font/neodgm.woff";

import {
  IsBlock,
  IsDrink,
  IsSmoke,
  MyGuGun,
  MyPageDataState,
  MyPageJob,
  MyPageMBTI,
  MyPageProfilePicture1,
  MyPageProfilePicture2,
  MyPageProfilePicture3,
  MyPageReligion,
  MyPageSelfIntro,
  MySido,
  MypageUserHeight,
} from "../../pages/User/MyPage/MyPageState";
import api from "../../apis/Api";
import { idAtom } from "../../Recoil/State";

interface SidebarProps {
  menu: string;
  bg: string;
}

const Sidecom = styled.button`
  width: 15vh;
  height: 6vh;
  opacity: 1;
  border-style: solid;
  border-color: #000000;
  border-radius: 10px;
  border-width: 0.3vh;
  justify-content: center;
  align-items: center;
  font-family: "Font_test";
  src: local("Font_test"), url(${Font_Main}) format("woff");
  font-weight: normal;
`;

const MyPageSideTab: React.FC<SidebarProps> = ({ menu, bg }) => {
  const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
  const [myPageUserHeight, setMyPageUserHeight] = useRecoilState(MypageUserHeight);
  const [myPageSelfIntro, setMySelfIntro] = useRecoilState(MyPageSelfIntro);
  const [myPageMBTI, setMyPageMBTI] = useRecoilState(MyPageMBTI);
  const [myPageReligion, setMyPageReligion] = useRecoilState(MyPageReligion);
  const [myPageJob, setMyPageJob] = useRecoilState(MyPageJob);
  const [isSmoke, setIsSmoke] = useRecoilState(IsSmoke);
  const [isDrink, setIsDrink] = useRecoilState(IsDrink);
  const [isBlock, setIsBlock] = useRecoilState(IsBlock);
  const [mysido, setMysido] = useRecoilState(MySido);
  const [myGuGun, setMyGuGun] = useRecoilState(MyGuGun);
  const [myPageProfilePicture1, setMyPageProfilePicture1] = useRecoilState(MyPageProfilePicture1);
  const [myPageProfilePicture2, setMyPageProfilePicture2] = useRecoilState(MyPageProfilePicture2);
  const [myPageProfilePicture3, setMyPageProfilePicture3] = useRecoilState(MyPageProfilePicture3);
  const userId = useRecoilValue(idAtom);

  const navigate = useNavigate();

  const GoMyPage = async () => {
    try {
      const response = await api.get(`/user/mypage/${userId}`);
      console.log(response.data);
      setmyPageData((prevMyPageData) => ({
        ...prevMyPageData,
        name: response.data.data.name,
        height: response.data.data.height,
        job: response.data.data.job,
        isBlockingFriend: response.data.data.isBlockingFriend,
        isSmoker: response.data.data.isSmoker,
        isDrinker: response.data.data.isDrinker,
        religion: response.data.data.religion,
        mbti: response.data.data.mbti,
        introduction: response.data.data.introduction,
        mileage: response.data.data.mileage,
        sido: response.data.data.sido,
        gugun: response.data.data.gugun,
        detail: response.data.data.detailAddress,
      }));
      setMyPageUserHeight(response.data.data.height);
      setMySelfIntro(response.data.data.introduction);
      setMyPageMBTI(response.data.data.mbti);
      setMyPageReligion(response.data.data.religion);
      setMyPageJob(response.data.data.job);
      setIsSmoke(response.data.data.isSmoker);
      setIsDrink(response.data.data.isDrinker);
      setIsBlock(response.data.data.isBlockingFriend);
      setMysido(response.data.data.sido);
      setMyGuGun(response.data.data.gugun);
      setMyPageProfilePicture1(response.data.data.profilePictures[0]);
      setMyPageProfilePicture2(response.data.data.profilePictures[1]);
      setMyPageProfilePicture3(response.data.data.profilePictures[2]);
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
    navigate("/mypage");
  };

  return (
    <div>
      <Sidecom
        onClick={GoMyPage}
        style={{
          backgroundColor: `${bg}`,
          border: "0.5vh solid black",
          borderRight: "none",
          marginBottom: "2%",
          borderTopRightRadius: "0%",
          borderBottomRightRadius: "0%",
        }}
      >
        {menu}
      </Sidecom>
    </div>
  );
};

export default MyPageSideTab;
