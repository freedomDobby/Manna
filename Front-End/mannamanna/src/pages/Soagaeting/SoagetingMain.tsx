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
import SelectionObj1 from "../../components/common/Sogeting/Selection/Selection1";
import SelectionObj2 from "../../components/common/Sogeting/Selection/Selection2";
import SelectionObj3 from "../../components/common/Sogeting/Selection/Selection3";
import SelectionObj4 from "../../components/common/Sogeting/Selection/Selection4";
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
    setNoteOpen(true);
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
      console.log(SogaetingFilter);
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
    const fetechchangelocate =async ()=>{
      if (page>locatelimitpage-2) {
     
        alert("이제 페이지가 없어요!");
      }else{
        await setPage(page+1);

        const locate=await locatereommand();
      }
    }
    const fetechchangerecommand =async ()=>{
      if (page > limitpage-2) {
        alert("이제 페이지가 없어요!");
      }else{
        await setPage(page+1);
        const recommand = await normalrecommand(); 
      }
    }
    const refreshfetch =async ()=>{
      await setPage(0);
      try {
        const recommand = await normalrecommand(); 
        const locate=await locatereommand();
      } catch (error) {
        console.error('Mutation Error:', error);
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
    <div style={{ height: '89vh', flexDirection: 'row', display: 'flex',}}>
      <div style={{ width: '20%' ,height: '100%', flexDirection: 'column', display: 'flex',}}>
        <div style={{ width: '100%' , height: '30%', flexDirection: 'column', display: 'flex', }}>
          <div style={{ width: '100%' , height: '40%', color: 'white', fontSize: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            소개팅 추천
          </div>
          <div style={{ width: '100%' , height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={fetechchangerecommand} style={{ border:'0.1rem solid black', borderRadius: '1rem', background: '#f8e3ea', fontFamily: 'inherit', width: '60%' , height: '80%', fontSize: 'large'}}>새로운 사람 추천</button>
          </div>
        </div>
        <div style={{ width: '100%' , height: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{border:'solid 0.2rem black', borderRadius:'1rem', background:'#ffffff', width: '60%', height: '95%', flexDirection: 'column', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginLeft: '2.5%'}}>
              <div style={{borderBottom:'solid 0.2rem black',borderTopRightRadius:'0.8rem', borderTopLeftRadius:'0.8rem', background:'#f8e3ea', width: '100%', height: '5%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
              <div style={{width: '100%', height: '90%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <SelectionObj1 />
                <SelectionObj2 />
                <SelectionObj3 />
                <SelectionObj4 />
                <button onClick={refreshfetch} style={{ border:'0.1rem solid black', borderRadius: '1rem', background: '#f8e3ea', fontFamily: 'inherit', width: '60%' , height: '3rem'}}>필터 적용</button>
              </div>
              <div style={{borderTop:'solid 0.2rem black', borderBottomRightRadius:'0.8rem', borderBottomLeftRadius:'0.8rem', background:'#f8e3ea', width: '100%', height: '5%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
          </div>
        </div>
      </div>
      <div style={{ width: '20%' ,height: '100%', flexDirection: 'column', display: 'flex',}}>
        {recommandData && recommandData.length > 0 && (
          <div style={{width: '100%' , height: '100%'}}>
            {recommandData.map((member: SogaetingMember, index: number) => (
              <div style={{width: '100%' , height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                />                  
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ width: '20%' ,height: '100%', flexDirection: 'column', display: 'flex',}}>
        <div style={{ width: '100%' , height: '30%', flexDirection: 'column', display: 'flex', }}>
          <div style={{ width: '100%' , height: '40%', color: 'white', fontSize: '2.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            내 근처 추천
          </div>
          <div style={{ width: '100%' , height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={fetechchangelocate} style={{ border:'0.1rem solid black', borderRadius: '1rem', background: '#f8e3ea', fontFamily: 'inherit', width: '60%' , height: '80%', fontSize: 'large'}}>다른 상대 추천</button>
          </div>
        </div>
        <div style={{ width: '100%' , height: '70%' }}/>
      </div>
      <div style={{width: '40%' ,height: '100%'}}>
        {locateData && locateData.length > 0 && (
          <div style={{width: '100%' , height: '100%', display: 'flex', flexWrap : 'wrap'}}>
            {locateData.map((member: SogaetingMember, index: number) => (
              <div style={{ width: '50%' , height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                />
              </div>                  
            ))}
          </div>
        )}
      </div>
      <div>
        <TrueNoteModal/>
        <FalseNoteModal/>
      </div>
    </div>
  );
};

export default SoagetingFilter;
