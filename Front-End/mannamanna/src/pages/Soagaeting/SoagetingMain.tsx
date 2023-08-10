import React, { useState, useEffect } from "react";
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
import { SendNoteModalAtom, SogaeNoteModalAtom, genderAtom, idAtom } from "../../Recoil/State";
import {
  FalseNoteModal,
  TrueNoteModal,
} from "../User/ForgotIdPw/ForgotIdStyles";
import FilterComponent from "../../components/common/Sogeting/FilterComponents";
import { SogaetingFilterReq } from '../../apis/Request/Request';
import { useMutation } from '@tanstack/react-query';
import api from '../../apis/Api';
import { SogaetingMember } from '../../apis/Response/Response';
// import Button from '@mui/material/Button';

const SoagetingFilter = () => {
  const [sogaeOpen, setSogaeOpen] = useRecoilState(SogaeNoteModalAtom);
  const [page, setPage] = useState<number>();
  const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);
  const [userId, setId] = useRecoilState(idAtom);
  const [usergender, setGender] = useRecoilState(genderAtom);

  const handleOpenSogaeModal = () => {
    setSogaeOpen(true);
  };

  const handleNoteModal = () => {
    setNoteOpen(true);
  };

  //더미데이터
  const UserSmoke = true;
  const UserAlchol = true;
  const updatedSogaetingFilter: SogaetingFilterReq = {
    memberId: userId,
    gender: usergender,
    mbti: null,
    religion: null,
    isDrinker: null,
    isSmoker: null,
    curPage:0,
    // curPage: page !== undefined ? page : 0,
  };

  const { mutate:normalrecommand ,data:recommandData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      const response = await api.post('sogaeting/recommend', updatedSogaetingFilter);
      setPage(response.data.data.curPage+1);
      console.log(response.data.data.sogaetingMembers);
      return response.data.data.sogaetingMembers;
    }
  );

  const { mutate:locatereommand ,data:locateData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      const response = await api.post('sogaeting/recommend/locate', updatedSogaetingFilter);
      console.log(response.data.data.sogaetingMembers);
      return response.data.data.sogaetingMembers;
    }
  );
    const fetechchange =async ()=>{
      const recommand = await normalrecommand(); 
      const locate=await locatereommand();
    }
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const recommand = await normalrecommand(); 
        const locate=await locatereommand();
      } catch (error) {
        console.error('Mutation Error:', error);
      }
    };

    fetchInitialData();
  }, []);


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
        {recommandData && recommandData.length > 0 && (
            <div>
          {recommandData.map((member: SogaetingMember, index: number) => (
          <FilterComponent
            name={member.id}
            age={member.birth}
            height={188}
            location={member.sido}
            selfPR="저는 김치볶음밥을 좋아합니다."
            smoke={member.isSmoke ? "흡연" : "비흡연"}
            alchol={member.isDrink ? "술좋아" : "술싫어"}
            mbti={member.mbti}
            profilePicture={`https://i9b205.p.ssafy.io/img/${member.pictureURLs[0]}`}
            isOnline={member.isOnline}
          />                  ))}
          </div>
        )}
{/* 
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
          </ProfileContaine> */}
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
        {locateData && locateData.length > 0 && (
            <NearPeople>
          {locateData.map((member: SogaetingMember, index: number) => (
          <FilterComponent
            name={member.id}
            age={member.birth}
            height={188}
            location={member.sido}
            selfPR="저는 김치볶음밥을 좋아합니다."
            smoke={member.isSmoke ? "흡연" : "비흡연"}
            alchol={member.isDrink ? "술좋아" : "술싫어"}
            mbti={member.mbti}
            profilePicture={`https://i9b205.p.ssafy.io/img/${member.pictureURLs[0]}`}
            isOnline={member.isOnline}

          />                  ))}
          </NearPeople>
        )}
      </Back>
    </div>
  );
};

export default SoagetingFilter;