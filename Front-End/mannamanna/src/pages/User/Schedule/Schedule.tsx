// import React from 'react';
// import MacBookBox from "./../../../components/common/macbookBox";
// import RadiusContainerBox from "./../../../components/common/RadiusContainer";
// import unKnown from "../../../asset/image/unknown.png";
import BackBox from "../../../components/common/Back";
import DateCalendarServerRequest from "../../../components/common/UserCalendar";
import { CenterBox, StyledButton } from "../Login/LoginStyle";
import CustomBox from "../../../components/common/CustomInputBox";
import { useNavigate } from "react-router-dom";
import {
  // DeleteNoteAtom,
  SogaeResultNoteAtom,
  idAtom,
  opponentIdAtom,
  scheduleIdAtom,
  selectedDateAtom,
  sendNoteIdAtom,
  sendNoteReceiverAtom,
} from "../../../Recoil/State";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import moment from "moment";
import { useMutation } from "@tanstack/react-query";
import api from "../../../apis/Api";
import { DetailScheduleReq } from "../../../apis/Request/Request";
import {
  SenderAgeState,
  SenderHeightState,
  SenderJobState,
  SenderMbtiState,
  SenderNameState,
  SenderPrState,
  SenderProfileState,
} from "../../Note/NoteState";
import { CheckSchduleModal } from "./SchduelModal";
import { MyPageContainerBox } from "../MyPage/MyPageStyle";
import {
  CalendarContainer,
  GoSogaeting,
  HeadSpace,
  LeftInnerBox,
  MidSpace,
  RightInnerBox,
  ScheduleContainerBox,
  ScheduleContainerSpace,
  ScheduleCustomBox,
  ScheduleState,
  ScheduleStateBox,
  ScheduleUl,
  SchelduleStyledButton,
  ScheuleListBox,
  ShceduleCenterBox,
  ShceduleStyledButton,
  SideSpace,
  StyledTableCell,
} from "./ScheduleStyle";
import { RightChatBox } from "../../Chatting/ChattingStyle";
import SidebarSchdule from "../../../components/layout/Sidebar/SidebarSchdule";
const Schedule = () => {
  const [scheduleId, SetScheduleId] = useRecoilState(scheduleIdAtom); // 이거 써야됨 영기
  const [SogaeOpen, setSogaeOpen] = useRecoilState(SogaeResultNoteAtom);
  const [opponentId, setOpponentId] = useRecoilState(opponentIdAtom);
  const [SenderName, setSenderName] = useRecoilState(SenderNameState);
  const [SenderHeight, setSenderHeight] = useRecoilState(SenderHeightState);
  const [SendeAge, setSendeAge] = useRecoilState(SenderAgeState);
  const [SenderJob, setSenderJob] = useRecoilState(SenderJobState);
  const [SenderMbti, setSenderMbti] = useRecoilState(SenderMbtiState);
  const [SenderPr, setSenderPr] = useRecoilState(SenderPrState);
  const [SenderProfile, setSenderProfile] = useRecoilState(SenderProfileState);
  const [userId, setId] = useRecoilState(idAtom);
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);
  const formattedSelectedDate = moment(selectedDate).format("YYYY-MM-DD");
  const navigate = useNavigate();
  const DetailScheduleData: DetailScheduleReq = {
    userId: userId,
    date: moment(selectedDate).format("YYYY-MM-DD"),
  };

  const GoSogaetingWait = () => {
    navigate("/sogaetingWait");
  };
  const GoChoice = () => {
    navigate("/sogaetingMain");
  };
  const { mutate: PostDetailSchedule, data: ScheduleData } = useMutation<any>(
    ["PostDetailSchedule"],
    async () => {
      const response = await api.post("schedule/list", DetailScheduleData);
      console.log(DetailScheduleData);
      console.log(response.data.data);
      return response.data.data;
    }
  );
  useEffect(() => {
    console.log("Selected Date:", moment(selectedDate).format("YYYY-MM-DD"));
    const fetchInitialData = async () => {
      try {
        const details = await PostDetailSchedule();
      } catch (error) {
        console.error("Mutation Error:", error);
      }
    };

    fetchInitialData();
  }, [selectedDate]);

  const handleCheck = (opponentId: string, sessionId: number) => {
    console.log("누름");
    setSogaeOpen(true);
    SetScheduleId(sessionId);
    setOpponentId(opponentId);
    processSenderInfo(opponentId);
  };

  const processSenderInfo = async (senderId: string) => {
    try {
      const SenderResponse = await api.get(`/user/mypage/${senderId}`);
      const promiseResult = SenderResponse.data;
      console.log(promiseResult.data);
      // setSendeAge(promiseResult.data.name);
      setSenderName(promiseResult.data.name);
      setSenderHeight(promiseResult.data.height);
      setSenderJob(promiseResult.data.job);
      setSenderMbti(promiseResult.data.mbti);
      setSenderPr(promiseResult.data.introduction);
      setSenderProfile(promiseResult.data.profilePictures[0].path);

      setSogaeOpen(true);
    } catch (error) {
      console.error("API 요청 실패:", error);
      throw error;
    }
  };

  return (
    <div>
      <HeadSpace />
      <BackBox>
        <SideSpace>
          <SidebarSchdule />
        </SideSpace>

        <MidSpace>
          <ScheduleContainerBox>
            <ShceduleCenterBox>
              <LeftInnerBox>
                <CalendarContainer>
                  <DateCalendarServerRequest />
                </CalendarContainer>
                <CustomBox
                  flexDirection="row"
                  width="97%"
                  height="20%"
                  color1="black"
                  color2="#FFCCED"
                >
                  <GoSogaeting>소개팅 상대방 찾기</GoSogaeting>
                  <ShceduleStyledButton onClick={GoChoice}>
                    지금 시작하기
                  </ShceduleStyledButton>
                </CustomBox>
              </LeftInnerBox>
            </ShceduleCenterBox>

            <ScheduleContainerSpace>
              <RightInnerBox>
                <ScheduleCustomBox>
                  <ScheduleStateBox>
                    <ScheduleState>
                      {formattedSelectedDate} 스케줄 현황
                    </ScheduleState>
                  </ScheduleStateBox>

                  <ScheuleListBox>
                    {ScheduleData ? (
                      <ScheduleUl>
                        {ScheduleData.offlineSchedule?.map(
                          (schedule: any, index: number) => (
                            <tbody style={{ border: "1px solid black" }}>
                              <tr key={index}>
                                <StyledTableCell>오프라인</StyledTableCell>
                                <StyledTableCell>
                                  {schedule.date}
                                  <br />
                                  {schedule.time}
                                </StyledTableCell>
                                <StyledTableCell>
                                  만나는 장소: {schedule.name}
                                  <br />
                                  상세주소: {schedule.detail}
                                </StyledTableCell>
                                <StyledTableCell>
                                  <SchelduleStyledButton
                                    onClick={() =>
                                      handleCheck(
                                        schedule.opponentId,
                                        schedule.scheduleId
                                      )
                                    }
                                  >
                                    입장
                                  </SchelduleStyledButton>
                                </StyledTableCell>
                              </tr>
                            </tbody>
                          )
                        )}
                        {ScheduleData.onlineSchedule?.map(
                          (schedule: any, index: number) => (
                            <tbody>
                              <tr key={index}>
                                <StyledTableCell>온라인</StyledTableCell>
                                <StyledTableCell>
                                  {schedule.date}
                                </StyledTableCell>
                                <StyledTableCell>
                                  {schedule.time}
                                </StyledTableCell>
                                <StyledTableCell>
                                  <SchelduleStyledButton
                                    onClick={() =>
                                      handleCheck(
                                        schedule.opponentId,
                                        schedule.scheduleId
                                      )
                                    }
                                  >
                                    입장
                                  </SchelduleStyledButton>
                                </StyledTableCell>
                              </tr>
                            </tbody>
                          )
                        )}
                      </ScheduleUl>
                    ) : (
                      <div>스케줄이 없습니다.</div>
                    )}
                  </ScheuleListBox>
                </ScheduleCustomBox>
              </RightInnerBox>
            </ScheduleContainerSpace>
          </ScheduleContainerBox>

          <CheckSchduleModal
            profile={SenderProfile}
            name={SenderName}
            height={SenderHeight}
            age={SendeAge}
            job={SenderJob}
            mbti={SenderMbti}
            selfPr={SenderPr}
          ></CheckSchduleModal>
        </MidSpace>
      </BackBox>
    </div>
  );
};

export default Schedule;
