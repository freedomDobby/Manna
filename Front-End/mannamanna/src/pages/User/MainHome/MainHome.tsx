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
              <MidBox style={{ flexDirection: "column"}}>
                <SmallBox>
                  <MainCanlendarBody style={{ flexDirection: "row"}}>
                    <UserCalendar />
                  </MainCanlendarBody>
                </SmallBox>
                <SmallBox>
                <div
                    style={{
                      display: "flex",
                      width: '90%',
                      height: "60%",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: 'center',
                      fontSize: "1.5vw",
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
                        width: "15%",
                        WebkitTextStroke: '0.03rem black',
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
                    <p
                      style={{
                        color: "#ffcced",
                        textAlign: "center",
                        width: "15%",
                        WebkitTextStroke: '0.03rem black',
                      }}
                    >
                      먼저
                    </p> 
                    대화해보고
                    <p
                      style={{
                        color: "#5c8ecb",
                        textAlign: "center",
                        width: "15%",
                        WebkitTextStroke: '0.03rem black',
                      }}
                    >
                      만나
                    </p>
                    봐요!
                  </div>
                  </div>
                </SmallBox>
              </MidBox>
              <MidBox style={{ flexDirection: "column"}}>
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
                        WebkitTextStroke: '0.03rem black',
                      }}
                    >
                      새로운 인연 찾으러 가기
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
        </div>
      </BackBox>
    </div>
  );
};

export default Main;
