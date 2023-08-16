import TenMinuteTimer from "../../components/common/Timer";
// import SmallMacBookProfile from
import KakaoMap from "../../components/common/KakaoMap";

import {
  BigContainer,
  BottomContainer,
  MidContainer,
  TimerContainer,
  TopContainer,
  TopSide,
  UserContainer,
  LogoBox,
  Logo,
  LogoFont,
  Hart,
  MapBox,
  FlexBox,
  NotMap,
  Board,
  Select,
} from "./ReserveStyle";
import ReserveComp from "./ReserveComp";

const Reserve = () => {
  return (
      <ReserveComp userId="test11" opponentId="test12"/>
    // <BigContainer>
    //   <TopContainer>
    //     <TopSide>
    //       <LogoBox>
    //         <Logo />
    //         <LogoFont>예약하기</LogoFont>
    //       </LogoBox>
    //     </TopSide>
    //     <UserContainer>User1 {/* <SmallMacBookProfile/> */}</UserContainer>
    //     <TimerContainer>
    //       <Hart />
    //       <TenMinuteTimer />
    //     </TimerContainer>
    //     <UserContainer>User2</UserContainer>
    //     <TopSide></TopSide>
    //   </TopContainer>
    //   <MidContainer></MidContainer>
    //   <BottomContainer>
    //     <MapBox>
    //       <Select>
    //         <Selection1 />
    //         <Selection2 />
    //         <Selection3 />
    //       </Select>
    //       <FlexBox>
    //         <NotMap>
    //           <KakaoMap />
    //         </NotMap>
    //         <Board>장소 리스트</Board>
    //       </FlexBox>
    //     </MapBox>
    //   </BottomContainer>
    // </BigContainer>
  );
};

export default Reserve;
