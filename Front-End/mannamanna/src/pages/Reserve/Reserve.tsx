import React from 'react';
import TenMinuteTimer from '../../components/common/Timer';
// import SmallMacBookProfile from
// '../../components/common/SmallMacBookProfile';
import Selection1 from './Selection1';
import Selection2 from './Selection2';
import Selection3 from './Selection3';


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
    Map,
    Board,
    Select
} from './ReserveStyle';

const Reserve = () => {
    return (
        <BigContainer>
            <TopContainer>
                <TopSide>
                    <LogoBox>
                        <Logo/>
                        <LogoFont>예약하기</LogoFont>
                    </LogoBox>
                </TopSide>
                <UserContainer>
                User1
                    {/* <SmallMacBookProfile/> */}
                </UserContainer>
                <TimerContainer>
                    <Hart/>
                    <TenMinuteTimer/>
                </TimerContainer>
                <UserContainer>User2</UserContainer>
                <TopSide></TopSide>
            </TopContainer>
            <MidContainer></MidContainer>
            <BottomContainer>
                <MapBox>
                    <Select>
                        <Selection1/>
                        <Selection2/>
                        <Selection3/>
                    </Select>
                    <FlexBox>
                        <Map>카카오지도</Map>
                        <Board>장소 리스트</Board>
                    </FlexBox>
                </MapBox>
            </BottomContainer>
        </BigContainer>
    );
};

export default Reserve;