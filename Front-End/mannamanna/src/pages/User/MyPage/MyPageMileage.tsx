// import React from 'react';
// import styled from 'styled-components'
import MacBookBox from '../../../components/common/macbookBox';
import { GetMileage, UseMileage } from './MyPageStyles';

function MyPageMiileage() {
    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <UseMileage/>
            <GetMileage/>
            <UseMileage/>
            <GetMileage/>
            <UseMileage/>
            <GetMileage/>
        </MacBookBox>
    );
};

export default MyPageMiileage;