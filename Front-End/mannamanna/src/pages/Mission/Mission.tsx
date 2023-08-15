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
  const [open, setOpen] = useRecoilState(MissionCardAtom);

  const [missionTitle,setMissionTitle] = useRecoilState(MissionTitle);
  
  // Modal 열기 함수
  const handleOpen = (title:string) => {
    setMissionTitle(title);
    setOpen(true);
  };

  // Modal 닫기 함수
  const handleClose = () => {
    setOpen(false);
  };
  


  return (
    <div style={{ border: "3px solid red" }}>
      <div style={{ height: "5vh", border: "1px solid red" }} />

      <BackBox>
        <div style={{ height: "80vh", border: "1px solid red" }}>
          <SidebarMission />
        </div>
        <MissionContainerBox>
          <MissionBox style={{ border: "1px solid red" }}>
            <MissionCard image={Card_A} onClick={()=>{
              handleOpen("A미션");
            } }/>
            <MissionCard image={Card_B} onClick={()=>{
              handleOpen("B미션");
            } } />
            <MissionCard image={Card_C} onClick = {()=>{
              handleOpen("C미션");
            } } />
          </MissionBox>
          <MissionBox style={{ border: "1px solid red" }}>
            <MissionCard image={Card_D} onClick = {()=>{
              handleOpen("D미션");
            } } />
            <MissionCard image={Card_E} onClick = {()=>{
              handleOpen("E미션");
            } }/>
            <MissionCard image={Card_F} onClick = {()=>{
              handleOpen("F미션");
            } } />
          </MissionBox>
        </MissionContainerBox>
      </BackBox>
      {/* MissionCardBox 컴포넌트에 mission prop을 전달 */}

      <MissionCardBox mission={missionTitle} />
    </div>
  );
};

export default Mission;
