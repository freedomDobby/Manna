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
import { SendNoteModalAtom, SogaeNoteModalAtom, genderAtom, idAtom, sendNoteReceiverAtom } from "../../Recoil/State";
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
  const [notereceiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  const handleOpenSogaeModal = async (memberId:string) => {
    await setReceiver(memberId);
    setSogaeOpen(true);
  };

  const handleNoteModal = async(memberId:string) => {
    await setReceiver(memberId);
    setSogaeOpen(true);
  };

  const SogaetingFilter: SogaetingFilterReq = {
    memberId: userId,
    gender: usergender,
    mbti: null,
    religion: null,
    isDrinker: null,
    isSmoker: null,
    // curPage: page !== undefined ? page : 0,
    curPage:0,
  };

  const { mutate:normalrecommand ,data:recommandData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      const response = await api.post('sogaeting/recommend', SogaetingFilter);
      console.log(response.data);
      console.log(response.data.data.sogaetingMembers);
      return response.data.data.sogaetingMembers;
    }
  );

  const { mutate:locatereommand ,data:locateData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      const response = await api.post('sogaeting/recommend/locate', SogaetingFilter);
      console.log(response.data);
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
            height={member.height}
            location={member.sido}
            selfPR={member.introduction}
            smoke={member.isSmoke ? "흡연" : "비흡연"}
            alchol={member.isDrink ? "술좋아" : "술싫어"}
            mbti={member.mbti}
            profilePicture={`https://i9b205.p.ssafy.io/img/${member.pictureURLs[0]}`}
            isOnline={member.isOnline}
            onApplicationClick={()=>handleOpenSogaeModal(member.id)}
            onMessageClick={()=>handleNoteModal(member.id)}
            onReportClick={()=>handleNoteModal(member.id)}
          />                  ))}
          </div>
        )}
        </SelectPeople>

        <MidSpace>
          <Font1>
            <p>
              내 근처
              <br />
              추천
            </p>
          </Font1>
          <Btn1 ChangeFilter={()=>handleNoteModal}/>
        </MidSpace>
        <BtnContainer>
          {/* 임시 확인용 */}
        </BtnContainer>
        {locateData && locateData.length > 0 && (
            <NearPeople>
          {locateData.map((member: SogaetingMember, index: number) => (
          <FilterComponent
            name={member.id}
            age={member.birth}
            height={member.height}
            location={member.sido}
            selfPR={member.introduction}
            smoke={member.isSmoke ? "흡연" : "비흡연"}
            alchol={member.isDrink ? "술좋아" : "술싫어"}
            mbti={member.mbti}
            profilePicture={`https://i9b205.p.ssafy.io/img/${member.pictureURLs[0]}`}
            isOnline={member.isOnline}
            onApplicationClick={()=>handleOpenSogaeModal(member.id)}
            onMessageClick={()=>handleNoteModal(member.id)}
            onReportClick={()=>handleNoteModal(member.id)}
          />                  ))}
          </NearPeople>
        )}
      </Back>
    </div>
  );
};

export default SoagetingFilter;
