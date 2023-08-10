import React, { useState, useEffect } from 'react';
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
  DetailText,
} from "./SoagaetinStyle";
import { StyledButton } from "../User/Login/LoginStyle";
import { useRecoilState } from "recoil";
import { SendNoteModalAtom, SogaeNoteModalAtom, genderAtom, idAtom } from "../../Recoil/State";
import { FalseNoteModal, TrueNoteModal } from "../User/ForgotIdPw/ForgotIdStyles";
import { SogaetingFilterRes, SogaetingMember } from "../../apis/Response/Response";
import { useMutation } from "@tanstack/react-query";
import api from "../../apis/Api";
import { SogaetingFilterReq, SogaetingReq } from "../../apis/Request/Request";

const SoagetingFilter = () => {
  const [sogaeOpen, setSogaeOpen] = useRecoilState(SogaeNoteModalAtom);
  const [page,setPage]=useState<number>();
  const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);
  const [userId, setId] = useRecoilState(idAtom);
  const [usergender,setGender]=useRecoilState(genderAtom);

  const handleOpenSogaeModal = () => {
    setSogaeOpen(true);
  };

  const handleNoteModal = () => {
    setNoteOpen(true);
  };

  const updatedSogaetingFilter: SogaetingFilterReq = {
    memberId: userId,
    gender: usergender,
    mbti: null,
    religion: null,
    isDrinker: null,
    isSmoker: null,
    curPage: page !== undefined ? page : 0,
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
        {/* 이전 코드 생략 */}
        <div>
          <Back>
            {/* 이전 코드 생략 */}
            <div
              style={{
                // border: `solid 1px black`,
                height: "87vh",
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                {/* recommandData가 존재하고 데이터가 있는 경우에만 렌더링 */}
                {recommandData && recommandData.length > 0 && (
                  <div>
                    {recommandData.map((member: SogaetingMember, index: number) => (
                      <div key={index}>
                        <p>ID: {member.id}</p>
                        <p>Name: {member.name}</p>
                        <p>birth:{member.birth}</p>
                        <hr />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
                {/* recommandData가 존재하고 데이터가 있는 경우에만 렌더링 */}
                {locateData && locateData.length > 0 && (
                  <div>
                    {locateData.map((member: SogaetingMember, index: number) => (
                      <div key={index}>
                        <p>ID: {member.id}</p>
                        <p>Name: {member.name}</p>
                        <p>birth:{member.birth}</p>
                        <hr />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div>
              </div>
            </div>
          </Back>
        </div>
      </div>
    );
                    }

export default SoagetingFilter;