import React, { useState } from "react";
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

import { MissionCardBox } from "./MissionModal";
import { useRecoilState } from "recoil";
import { MissionCardAtom, MissionTitle } from "../../Recoil/State"; // 이 부분을 적절한 경로로 수정하세요

const Mission = () => {
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
  
  // Modal 열기 함수
  const handleOpen = (id: number) => {
    setSelectedMissionId(id);
    setOpen(true);
  };

  // Modal 닫기 함수
  const handleClose = () => {
    setSelectedMissionId(null);
    setOpen(false);
  };
  


  return (
    <div>
      <div style={{ height: "5vh" }} />

      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarMission />
        </div>
        <MissionContainerBox>
          <MissionBox>
            <MissionCard image={Card_A} onClick={() => handleOpen(1)} />
            <MissionCard image={Card_B} onClick={() => handleOpen(2)} />
            <MissionCard image={Card_C} onClick={() => handleOpen(3)} />
          </MissionBox>
          <MissionBox>
            <MissionCard image={Card_D} onClick={() => handleOpen(4)} />
            <MissionCard image={Card_E} onClick={() => handleOpen(5)} />
            <MissionCard image={Card_F} onClick={() => handleOpen(6)} />
          </MissionBox>
        </MissionContainerBox>
      </BackBox>
      {selectedMissionId !== null && (
        <MissionCardBox mission={missionQuestion[selectedMissionId - 1].text} />
      )}
    </div>
  );
};

export default Mission;
