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
      const parseDateTime = (dateStr: string, timeStr: string): Date => new Date(`${dateStr}T${timeStr}`);

      // 날짜(date) 및 시간(time) 값을 기준으로 오름차순 정렬하는 비교 함수
      const compareByDateTime = (a: any, b: any): number =>
        parseDateTime(a.date, a.time).getTime() - parseDateTime(b.date, b.time).getTime();
      
      // 날짜 및 시간을 기준으로 배열 정렬
      const sortedDataOnline:any= online.slice().sort(compareByDateTime);
      const sortedDataOffline:any= offline.slice().sort(compareByDateTime);
      console.log(sortedDataOnline);
      console.log(sortedDataOffline);
      
 
      

    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
                       {sortedDataOnline.map((schedule:any, index:any) => (
            <SogeListOnline userName={schedule.opponentName} date={schedule.date}/>
            ))}
              {sortedDataOffline.map((schedule:any, index:any) => (
            <SogaeListOffline/>
            ))}
        </MacBookBox>
    );
};



export default MyPageHistory;