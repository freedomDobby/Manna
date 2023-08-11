// import React from "react";
import BackBox from "../components/common/Back";
import { MyPageContainerBox } from "./User/MyPage/MyPageStyle";
import SidebarMission from "../components/layout/Sidebar/SidebarMission";

const Mission = () => {
  return (
    <div>
      <div style={{ height: "5vh" }}></div>
      <p></p>
      <BackBox>
        <div style={{ height: "80vh" }}>
          <SidebarMission />
        </div>
        <div style={{ height: "80vh" }}>
          <MyPageContainerBox>{/* <Outlet></Outlet> */}</MyPageContainerBox>
        </div>
      </BackBox>
    </div>
  );
};

export default Mission;
