// import React from "react";
import Back from "../../components/common/Sogeting/SogetingMainBack";
import Font1 from "../../components/common/Sogeting/SogetingFont1";
import Btn1 from "../../components/common/Sogeting/button/NewPersonBtn";
import FilterContainer from "../../components/common/Sogeting/FilterContainer";
import FilterBody from "../../components/common/Sogeting/FilterBody";
import OnlineBox from "../../components/common/OnlineBtn";
import BtnBox from "../../components/common/Sogeting/BtnBox";

import {
  ProfileContaine,
  UnderBar,
  Profile,
  Online,
  DetailProfile,
  BtnContainer,
  NearPeople,
  MidSpace,
  SelectPeople,
  SelectSpace,
} from "./SoagaetinStyle";
import { StyledButton } from "../User/Login/LoginStyle";
import { useRecoilState } from "recoil";
import { SendNoteModalAtom, SogaeNoteModalAtom } from "../../Recoil/State";
import {
  FalseNoteModal,
  TrueNoteModal,
} from "../User/ForgotIdPw/ForgotIdStyles";
import FilterComponent from "../../components/common/Sogeting/FilterComponents";
// import Button from '@mui/material/Button';

const SoagetingFilter = () => {
  const [sogaeOpen, setSogaeOpen] = useRecoilState(SogaeNoteModalAtom);
  const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);

  const handleOpenSogaeModal = () => {
    setSogaeOpen(true);
  };
  const handleNoteModal = () => {
    setNoteOpen(true);
  };

  //더미데이터
  const UserSmoke = true;
  const UserAlchol = true;

  //

  return (
    <div>
      <Back>
        <SelectSpace>
          <TrueNoteModal />
          <FalseNoteModal />
          <Font1>
            <p>
              소개팅
              <br />
              추천
            </p>
          </Font1>
          <FilterContainer>
            <FilterBody></FilterBody>
          </FilterContainer>
        </SelectSpace>

        <SelectPeople>
          <FilterComponent
            name="이름"
            age={25}
            height={188}
            location="대전"
            selfPR="저는 김치볶음밥을 좋아합니다."
            smoke={UserSmoke ? "흡연" : "비흡연"}
            alchol={UserAlchol ? "술좋아" : "술싫어"}
            mbti="infp"
            profilePicture="profile"
          />

          <ProfileContaine>
            <DetailProfile></DetailProfile>
            <Profile>
              <UnderBar>
                <Online>
                  <OnlineBox></OnlineBox>
                </Online>
                <BtnBox></BtnBox>
              </UnderBar>
            </Profile>
          </ProfileContaine>
        </SelectPeople>

        <MidSpace>
          <Font1>
            <p>
              내 근처
              <br />
              추천
            </p>
          </Font1>
          <Btn1 />
        </MidSpace>
        <BtnContainer>
          <StyledButton onClick={handleOpenSogaeModal}>
            소개팅 신청
          </StyledButton>
          <StyledButton onClick={handleNoteModal}>일반 쪽지</StyledButton>
          {/* 임시 확인용 */}
        </BtnContainer>
        <NearPeople>
          <FilterComponent
            name="이름"
            age={25}
            height={188}
            location="대전"
            selfPR="저는 김치볶음밥을 좋아합니다."
            smoke={UserSmoke ? "흡연" : "비흡연"}
            alchol={UserAlchol ? "술좋아" : "술싫어"}
            mbti="infp"
            profilePicture="profile"
          />

          <ProfileContaine>
            <DetailProfile></DetailProfile>
            <Profile>
              <UnderBar>
                <Online>
                  <OnlineBox></OnlineBox>
                </Online>
                <BtnBox />
              </UnderBar>
            </Profile>
          </ProfileContaine>

          <ProfileContaine>
            <DetailProfile></DetailProfile>
            <Profile>
              <UnderBar>
                <Online>
                  <OnlineBox></OnlineBox>
                </Online>
                <BtnBox />
              </UnderBar>
            </Profile>
          </ProfileContaine>

          <ProfileContaine>
            <DetailProfile></DetailProfile>
            <Profile>
              <UnderBar>
                <Online>
                  <OnlineBox></OnlineBox>
                </Online>
                <BtnBox />
              </UnderBar>
            </Profile>
          </ProfileContaine>
        </NearPeople>
      </Back>
    </div>
  );
};

export default SoagetingFilter;
