import BackBox from "../../../components/common/Back";
import { StyledButton } from "../Login/LoginStyle";
import {
  InnerBox,
  SmallBox,
  MidBox,
  CanlendarBox,
  SecondBox,
  MainCanlendarBody,
  MainScheduleBody,
  HalfBox,
} from "../MainHome/MainHomeStyle";
import UserCalendar from "../../../components/common/UserCalendar";
import { useNavigate } from "react-router-dom";
import SidebarHome from "../../../components/layout/Sidebar/SidebarHome";
import { MyPageContainerBox } from "../MyPage/MyPageStyle";
import { CanlendarBody } from "../Schedule/ScheduleStyle";

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
        <div style={{ height: "80vh" }}>
          <MyPageContainerBox>
            <InnerBox>
              <MidBox>
                <HalfBox>
                  <CanlendarBox>
                    {/* 달력 */}
                    <MainCanlendarBody>
                      <UserCalendar />
                    </MainCanlendarBody>
                    {/* 버튼 */}
                    <MainScheduleBody>
                      <StyledButton
                        onClick={GoSchedule}
                        style={{ fontSize: "2vh" }}
                      >
                        일정확인
                      </StyledButton>
                    </MainScheduleBody>
                  </CanlendarBox>
                </HalfBox>
              </MidBox>
              <MidBox style={{ flexDirection: "column" }}>
                {/* 그림이 들어간 곳 */}
                <SmallBox>
                  <SecondBox />
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
                    <StyledButton onClick={GoChoice}>
                      지금 시작하기
                    </StyledButton>
                  </CanlendarBox>
                </SmallBox>
              </MidBox>
            </InnerBox>
          </MyPageContainerBox>
          {/* 이게 컨테이너 인가보군 */}
        </div>
      </BackBox>
    </div>
  );
};

export default Main;
