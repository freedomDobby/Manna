// import React from 'react';
// import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query';
import MacBookBox from '../../../components/common/macbookBox';
import {  SogaeListOffline,  SogeListOnline } from './MyPageStyles';
import api from '../../../apis/Api';
import { useRecoilState } from 'recoil';
import { idAtom } from '../../../Recoil/State';
import { useState } from 'react';

function MyPageHistory() {
    const [userId, setId] = useRecoilState(idAtom);
    const [online,SetOnline]=useState<any>([]);
    const [offline,SetOffline]=useState<any>([]);
    
    const {
        data: scheduleList,
        isLoading,
        isError,
      } = useQuery<any>(["scheduleList"], async () => {
        const response = await api.get(`schedule/${userId}`);
        console.log(response.data.data);
        const offlinelist=response.data.data.offlineSchedule;
        const onlinelist=response.data.data.onlineSchedule;
        SetOnline(onlinelist);
        SetOffline(offlinelist);
        return response.data.data;
      });

      console.log(online);
      console.log(offline);
      

    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
                       {online.map((schedule:any, index:any) => (
            <SogeListOnline userName={schedule.opponentName} date={schedule.date}/>
            ))}
              {offline.map((schedule:any, index:any) => (
            <SogaeListOffline/>
            ))}
        </MacBookBox>
    );
};



export default MyPageHistory;