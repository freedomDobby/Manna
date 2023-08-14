import { Profile } from "../../../components/common/Profile";
import { useNavigate, Outlet } from "react-router-dom";
import MacBookBox from "../../../components/common/macbookBox";
import BackBox from "../../../components/common/Back";
import { MyPageButton } from "./MyPageStyles";
import { MyPageContainerBox } from "./MyPageStyle";
import SidebarMyPage from "../../../components/layout/Sidebar/SidebarMyPage";
import { NameBox, ProfileBox, SideBox } from "./MyPageModifyStyle";
import { useRecoilState } from "recoil";
import { MyPageDataState } from "./MyPageState";

function Mypage() {
  const navigate = useNavigate();
  const [myPageData, setmyPageData] = useRecoilState(MyPageDataState);
  const Username = myPageData.name;

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
                  소개팅/미팅 내역
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
