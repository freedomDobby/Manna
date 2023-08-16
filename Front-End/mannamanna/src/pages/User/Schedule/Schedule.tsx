// import React from 'react';
// import MacBookBox from "./../../../components/common/macbookBox";
// import RadiusContainerBox from "./../../../components/common/RadiusContainer";
// import unKnown from "../../../asset/image/unknown.png";
import BackBox from "../../../components/common/Back";
import Sidebar from "../../../components/layout/Sidebar/SidebarHome";
import DateCalendarServerRequest from "../../../components/common/UserCalendar";
import { CenterBox, StyledButton } from "../Login/LoginStyle";
import CustomBox from "../../../components/common/CustomInputBox";
import { useNavigate } from "react-router-dom";
import {
  // DeleteNoteAtom,
  SogaeResultNoteAtom,
  idAtom,
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
  MidSpace,
  ScheduleContainerBox,
  ScheduleState,
  ShceduleCenterBox,
  ShceduleStyledButton,
  SideSpace,
} from "./ScheduleStyle";
const Schedule = () => {
  const [scheduleId, SetScheduleId] = useRecoilState(scheduleIdAtom); // 이거 써야됨 영기
  const [SogaeOpen, setSogaeOpen] = useRecoilState(SogaeResultNoteAtom);
  const [receiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);
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
          <Sidebar />
        </SideSpace>
        <MidSpace>
          <ScheduleContainerBox>
            <ShceduleCenterBox>
              <CalendarContainer>
                <DateCalendarServerRequest />
              </CalendarContainer>
              <CustomBox
                flexDirection="row"
                width="75vh"
                height="10vh"
                color1="black"
                color2="#FFCCED"
              >
                <GoSogaeting>소개팅 상대방 찾기</GoSogaeting>
                <ShceduleStyledButton onClick={GoChoice}>
                  지금 시작하기
                </ShceduleStyledButton>
              </CustomBox>
            </ShceduleCenterBox>
            <CustomBox
              flexDirection="column"
              width="55vh"
              height="58vh"
              color1="black"
              color2="#F8E3EA"
            >
              <ScheduleState>{formattedSelectedDate} 스케줄 현황</ScheduleState>
              {ScheduleData ? (
                <div>
                  {ScheduleData.offlineSchedule?.map(
                    (schedule: any, index: number) => (
                      <div key={index}>
                        오프라인 스케줄<br></br>
                        날짜: {schedule.date}
                        <br />
                        시간: {schedule.time}
                        <br />
                        만나는 장소: {schedule.name}
                        <br />
                        상세주소: {schedule.detail}
                        <StyledButton
                          onClick={() =>
                            handleCheck(
                              schedule.opponentId,
                              schedule.scheduleId
                            )
                          }
                        >
                          상대방 정보보기 및 입장
                        </StyledButton>
                      </div>
                    )
                  )}
                  {ScheduleData.onlineSchedule?.map(
                    (schedule: any, index: number) => (
                      <div key={index}>
                        온라인 스케줄<br></br>
                        날짜: {schedule.date}
                        <br />
                        시간: {schedule.time}
                        <br />
                        <StyledButton
                          onClick={() =>
                            handleCheck(
                              schedule.opponentId,
                              schedule.scheduleId
                            )
                          }
                        >
                          상대방 정보보기 및 입장
                        </StyledButton>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div>스케줄이 없습니다.</div>
              )}
              <StyledButton>취소하기</StyledButton>
            </CustomBox>
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
