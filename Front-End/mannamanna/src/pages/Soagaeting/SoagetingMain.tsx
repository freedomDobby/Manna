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
import { SendNoteModalAtom, SogaeNoteModalAtom, SogaetingFilterAtom, genderAtom, idAtom, sendNoteReceiverAtom } from "../../Recoil/State";
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
  const [page, setPage] = useState<number>(0);
  const [limitpage,SetLimitPage]=useState<number>(0);
  const [locatelimitpage,SetLocateLimitPage]=useState<number>(0);
  const [sogaetingFilter, setSogaetingFilter] = useRecoilState(SogaetingFilterAtom);
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
    mbti: sogaetingFilter.mbti,
    religion: sogaetingFilter.religion,
    isDrinker: sogaetingFilter.isDrinker,
    isSmoker: sogaetingFilter.isSmoker,
    curPage:page,
  };

  const { mutate:normalrecommand ,data:recommandData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      console.log(page);
      const response = await api.post('sogaeting/recommend', SogaetingFilter);
      SetLimitPage(response.data.data.totalPage);
      console.log(response.data.data.sogaetingMembers);
      return response.data.data.sogaetingMembers;
    }
  );

  const { mutate:locatereommand ,data:locateData} = useMutation<any>(
    ['filtersogaeting'],
    async () => {
      const response = await api.post('sogaeting/recommend/locate', SogaetingFilter);
      console.log(response.data);
      SetLocateLimitPage(response.data.data.totalPage);
      console.log(response.data.data.sogaetingMembers);
      return response.data.data.sogaetingMembers;
    }
  );
    const fetechchange =async ()=>{
      if (page === limitpage - 1||page===locatelimitpage-1) {
        // Display an alert when page is one less than limitpage
        alert("이제 페이지가 없어요!");
      }else{
        await setPage(page+1);
        const recommand = await normalrecommand(); 
        const locate=await locatereommand();
      }
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
          <Btn1 ChangeFilter={()=>fetechchange()}/>
        </MidSpace>
        <BtnContainer>
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
