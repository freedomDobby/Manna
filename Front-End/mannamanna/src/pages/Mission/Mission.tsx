// import React from "react";
import { Modal } from "@mui/material";
// import React from "react";
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

const Mission = () => {
  return (
    <div>
      {/* 헤더 밑 공간 */}
      <div style={{ height: "5vh" }} />

      <BackBox>
        {/* 사이드바 공간 */}
        <div style={{ height: "80vh" }}>
          <SidebarMission />
        </div>
        {/* 실질적 미션보드 공간 */}
        <div style={{ height: "80vh" }}>
          <MissionContainerBox>
            <MissionBox>
              <MissionCardBox card={Card_A} mission="저녁 메뉴 공유하기" />
              <MissionCardBox
                card={Card_B}
                mission="같은 색 아이템 착용 인증하기"
              />
              <MissionCardBox
                card={Card_C}
                mission="같은 시간 하늘 찍어서 공유하기"
              />
            </MissionBox>
            <MissionBox>
              <MissionCardBox card={Card_D} mission="어린 시절 사진 공유하기" />
              <MissionCardBox
                card={Card_E}
                mission="일상 속 상대방 이름 찾아 찍어서 공유하기"
              />
              <MissionCardBox
                card={Card_F}
                mission="일상 속 하트 찾아 사진 찍어 공유하기"
              />
            </MissionBox>
          </MissionContainerBox>
        </div>
      </BackBox>
    </div>
  );
};

export default Mission;
