// import React from 'react';
// import styled from 'styled-components'
import { useQuery } from '@tanstack/react-query';
import MacBookBox from '../../../components/common/macbookBox';
import {  SogaeListOffline,  SogeListOnline } from './MyPageStyles';
import api from '../../../apis/Api';
import { useRecoilState } from 'recoil';
import { idAtom } from '../../../Recoil/State';

function MyPageHistory() {
    const [userId, setId] = useRecoilState(idAtom);

    const {
        data: scheduleList,
        isLoading,
        isError,
      } = useQuery<any>(["scheduleList"], async () => {
        const response = await api.get(`schedule/${userId}`);
        console.log(response.data.data);
        return response.data.data;
      });


    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>

            <SogeListOnline />
            <SogaeListOffline/>
        </MacBookBox>
    );
};





export default MyPageHistory;