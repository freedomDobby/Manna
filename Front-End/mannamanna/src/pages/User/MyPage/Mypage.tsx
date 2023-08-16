import { Profile } from "../../../components/common/Profile";
import { useNavigate, Outlet } from "react-router-dom";
import MacBookBox from "../../../components/common/macbookBox";
import BackBox from "../../../components/common/Back";
import { MyPageButton } from "./MyPageStyles";
import { MyPageContainerBox } from "./MyPageStyle";
import SidebarMyPage from "../../../components/layout/Sidebar/SidebarMyPage";
import { NameBox, ProfileBox, SideBox } from "./MyPageModifyStyle";
import { useRecoilState, useRecoilValue } from "recoil";
import { IsBlock,
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
  MypageUserHeight,} from "./MyPageState";
import { useEffect } from "react";
import { idAtom } from "../../../Recoil/State";
import api from "../../../apis/Api";

function Mypage() {
  const navigate = useNavigate();
  const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
  const Username = myPageData.name;
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
 
  const CheckMyData=async()=>{
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
  }

  useEffect(()=>{
    CheckMyData();
    console.log("새로고침가능?")
  },[]);

  const GoModify = () => {
    navigate("/mypage");
  };
  // const GoMileage = () => {
  //   navigate("/mypage/mileage");
  // };
  const GoHistory = () => {
    navigate("/mypage/history");
  };
  const GoWithdrawal = () => {
    navigate("/mypage/withdrawal");
  };

  return (
    <div>
      <div style={{ height: "5vh" }}></div>
      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarMyPage />
        </div>
        <div style={{ height: "80vh" }}>
          <MyPageContainerBox>
            <MacBookBox
              width="30%"
              height="90%"
              color1="#bcd3ff"
              color2="#ffffff"
              alignItems="center"
            >
              <SideBox>
                <ProfileBox>
                  <Profile />
                </ProfileBox>
                <NameBox>{Username}</NameBox>
                <MyPageButton onClick={GoModify}>내 정보 수정</MyPageButton>
                {/* <MyPageButton onClick={GoMileage}>마일리지</MyPageButton> */}
                <MyPageButton onClick={GoHistory}>
                  소개팅 내역
                </MyPageButton>
                <MyPageButton onClick={GoWithdrawal}>회원탈퇴</MyPageButton>
              </SideBox>
            </MacBookBox>
            <Outlet></Outlet>
          </MyPageContainerBox>
        </div>
      </BackBox>
    </div>
  );
}

export default Mypage;
