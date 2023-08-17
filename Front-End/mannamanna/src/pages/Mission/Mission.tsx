import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import BackBox from "../../components/common/Back";
import SidebarMission from "../../components/layout/Sidebar/SidebarMission";
import { MissionBox, MissionCard, MissionContainerBox } from "./MissionStyle";
import Card_A from "../../asset/image/Card_A.png";
import Card_B from "../../asset/image/Card_B.png";
import Card_C from "../../asset/image/Card_C.png";
import Card_D from "../../asset/image/Card_D.png";
import Card_E from "../../asset/image/Card_E.png";
import Card_F from "../../asset/image/Card_F.png";
import Card_Del_A from "../../asset/image/A.jpeg";
import Card_Del_B from "../../asset/image/B.jpeg";
import Card_Del_C from "../../asset/image/C.jpeg";
import Card_Del_D from "../../asset/image/D.jpeg";
import Card_Del_E from "../../asset/image/E.jpeg";
import Card_Del_F from "../../asset/image/F.jpeg";

import { MissionCardBox } from "./MissionModal";
import { useRecoilState } from "recoil";
import { MissionCardAtom, MissionIdAtom, MissionOpponentAtom, MissionTitle, idAtom,missionPicture1Url,missionPicture2Url } from "../../Recoil/State"; // 이 부분을 적절한 경로로 수정하세요
import api from "../../apis/Api";
import { useQuery } from "@tanstack/react-query";
import { MidSpace } from "../Soagaeting/SoagaetinStyle";

const cardImages = [Card_A, Card_B, Card_C, Card_D, Card_E, Card_F]
const deleteImage = [Card_Del_A,Card_Del_B,Card_Del_C,Card_Del_D,Card_Del_E,Card_Del_F]

const Mission = () => {
  const [missionId,setMissionId] = useRecoilState(MissionIdAtom);


  const missionQuestion = [
    { id: 1, text: "저녁 메뉴 공유하기" },
    { id: 2, text: "같은 색 아이템 착용 인증하기" },
    { id: 3, text: "같은 시간 하늘 찍어서 공유하기" },
    { id: 4, text: "어린 시절 사진 공유하기" },
    { id: 5, text: "일상 속 상대방 이름 찾아 찍어서 공유하기" },
    { id: 6, text: "일상 속 하트 찾아 사진 찍어 공유하기" },
  ];

  // missionQuestion 배열의 타입 정의
  type MissionQuestion = {
    id: number;
    text: string;
  };
  const [open, setOpen] = useRecoilState(MissionCardAtom);
  const [selectedMissionId, setSelectedMissionId] = useState<number | null>(
    null
  );
  const [missionTitle,setMissionTitle] = useRecoilState(MissionTitle);
  //회원 id
  const [userId, setUserId] = useRecoilState(idAtom);
  //상대방 id
  const [opponentId, setOpponentId] = useRecoilState(MissionOpponentAtom);
  
  const [picture1Url, setPicture1Url] = useRecoilState(missionPicture1Url);
  const [picture2Url, setPicture2Url] = useRecoilState(missionPicture2Url);
  const {data, isLoading} = useQuery(["cardData"], () => api.get(`/mission/${userId}`).then((response) => response.data.data.missionResponses))
  
  useEffect(() => {
    console.log(12);
    console.log(data);
    const fetchData = async () => {
      try {
        const response = await api.get(`/mission/${userId}`);
        setOpponentId(response.data.data.opponentId);
        setMissionId(response.data.data.missionId);
        const finishResponse = await api.get(`/mission/finish/${response.data.data.missionId}`);
        console.log(finishResponse.data.result);
        // if(finishResponse.data.result) alert("미션을 모두 완료했습니다!");
        //finishResponse.data == true: 미션 완료
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    fetchData();
  }, []);

  // Modal 열기 함수
  const handleOpen = async (id: number) => {
    setSelectedMissionId(id);
    setOpen(true);
    try {


      const detailResponse = api.get(`/mission/${missionId}/${id}/${userId}`)
        .then((data) => {
          console.log(data.data.data);
          setPicture1Url(`https://i9b205.p.ssafy.io/mission/${data.data.data.userImgPath}`)
          setPicture2Url(`https://i9b205.p.ssafy.io/mission/${data.data.data.opponentImgPath}`)
        }
      );

    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Modal 닫기 함수
  const handleClose = () => {
    setSelectedMissionId(null);
    setOpen(false);
  };
  
  //


  return (
    <div>
      <div style={{ height: "5vh" }} />

      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarMission />
        </div>

          <MissionContainerBox>
              <MissionBox>
                {isLoading ? (
                  <span>isLoading..</span>
                ) : (
                  data && data.length > 0 ? (
                    data.slice(0, 3).map((item: any, index: number) =>
                      item.isDone ? (
                        <MissionCard
                          image={deleteImage[index]}
                          onClick={() => handleOpen(index + 1)}
                        ></MissionCard>
                      ) : (
                        <MissionCard
                          image={cardImages[index]}
                          onClick={() => handleOpen(index + 1)}
                        />
                      )
                    )
                  ) : (
                    <span>진행중인 미션이 없습니다.</span>
                  )
                )}
              </MissionBox>
              <MissionBox>
                {isLoading ? (
                  <span>isLoading..</span>
                ) : (
                  data && data.length > 0 ? (
                    data.slice(3, 6).map((item: any, index: number) =>
                      item.isDone ? (
                        <MissionCard
                          image={deleteImage[index+3]}
                          onClick={() => handleOpen(index + 4)}
                        ></MissionCard>
                      ) : (
                        <MissionCard
                          image={cardImages[index+3]}
                          onClick={() => handleOpen(index + 4)}
                        />
                      )
                    )
                  ) : (
                    <span></span>
                  )
                )}
              {/* {selectedMissionId !== null && (
                <MissionCardBox id={selectedMissionId} mission={missionQuestion[selectedMissionId - 1].text} user1={userId ?? "user1"} user2={opponentId ?? "user2"} />
              )} */}
              </MissionBox>
          </MissionContainerBox>
      </BackBox>
    </div>
  );
};

export default Mission;
