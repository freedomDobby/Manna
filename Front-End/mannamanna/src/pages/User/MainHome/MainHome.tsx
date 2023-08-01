import BackBox from "../../../components/common/Back";
import { StyledButton } from "../Login/LoginStyle";
import {
  InnerBox,
  SmallBox,
  MidBox,
  CanlendarBox,
  SecondBox,
} from "../MainHome/MainHomeStyle";
import UserCalendar from "../../../components/common/UserCalendar";
import { useNavigate } from "react-router-dom";
import SidebarHome from "../../../components/layout/Sidebar/SidebarHome";
import { MyPageContainerBox } from "../MyPage/MyPageStyle";

const Main = () => {
  const navigate = useNavigate();

  const GoChoice = () => {
    navigate("/choice");
  };
  const GoSchedule = () => {
    navigate("/schedule");
  };
  return (
    <div>
      <div
        style={{
          height: "5vh",
        }}
      ></div>
      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarHome />
        </div>
        {/* 사이드바 끝 */}
        <MyPageContainerBox>
          <InnerBox>
            <MidBox>
              <SmallBox>
                <CanlendarBox>
                  <UserCalendar />
                  <StyledButton onClick={GoSchedule}>일정확인하기</StyledButton>
                </CanlendarBox>
              </SmallBox>
              <SmallBox>
                <SecondBox></SecondBox>
              </SmallBox>
            </MidBox>
            <MidBox>
              <SmallBox
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  WebkitTextStrokeWidth: "0.5px",
                  WebkitTextStrokeColor: "#d9cff4",
                  fontSize: "200%",
                  fontWeight: "bold",
                }}
              >
                <div>소개팅의 부담감 줄이고</div>
                <div>미팅의 어색함을 즐거움으로</div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  이제 상대방이 나의 인연이
                  <p
                    style={{
                      color: "#5c8ecb",
                      textAlign: "center",
                      width: "10%",
                    }}
                  >
                    맞나
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  먼저 대화해보고
                  <p
                    style={{
                      color: "#5c8ecb",
                      textAlign: "center",
                      width: "10%",
                    }}
                  >
                    만나
                  </p>
                  봐요!
                </div>
                <br />
                <div
                  style={{
                    color: "#5c8ecb",
                  }}
                >
                  맞나? 만나!
                </div>
              </SmallBox>
              <SmallBox>
                <CanlendarBox
                  style={{
                    display: "flex",
                    height: "60%",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      color: "#5c8ecb",
                      textAlign: "center",
                      fontSize: "200%",
                    }}
                  >
                    새로운 인연 찾으로 가기
                  </div>
                  <div
                    style={{
                      height: "10%",
                    }}
                  />
                  <StyledButton onClick={GoChoice}>지금 시작하기</StyledButton>
                </CanlendarBox>
              </SmallBox>
            </MidBox>
          </InnerBox>
        </MyPageContainerBox>
        {/* 이게 컨테이너 인가보군 */}
      </BackBox>
    </div>
  );
};

export default Main;
