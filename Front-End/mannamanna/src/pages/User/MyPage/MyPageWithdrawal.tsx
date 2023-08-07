import React from 'react';
// import styled from 'styled-components'
import MacBookBox from '../../../components/common/macbookBox';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { MyPageButton, MyPageModalStyle, WithdrawalButton, WithdrawalPassInput } from './MyPageStyles';

function MyPageWithdrawal() {
    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <div style={{ width:'100%',height:'100%' ,flexDirection:'column' ,display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div style={{ width:'100%',height:'20%' ,flexDirection:'column' ,display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <div>비밀번호 입력</div>
                    <WithdrawalPassInput/>
                </div>
                <WithdrawalButton>회원탈퇴</WithdrawalButton>
            </div>
        </MacBookBox>
    );
 };
  
 export default MyPageWithdrawal;