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
import { MyPageButton, MyPageModalStyle } from './MyPageStyles';

function MyPageWithdrawal() {

    // 비밀번호 보이게 하거나 안하기
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    // 모달창 열고 닫기
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <div style={{ width:'100%',height:'100%' ,flexDirection:'column' ,display:'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                <div  style={{display:'flex', justifyContent:'center', alignItems:'center' }}>
                    Password : 
                    <FormControl sx={{ m: 1, width: '25vw', color:'black' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                    </FormControl>
                </div>
                <MyPageButton onClick={handleOpen}>회원탈퇴</MyPageButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    {/* <MacBookBox width="60%" height="90%" color1="#bcd3ff" color2="#ffffff" alignItems='center'> */}
                    <Box sx={MyPageModalStyle}>
                        <p>
                            회원 탈퇴를 진행하면 다시 복구할 수 없습니다. <br/>
                            정말 탈퇴하시겠습니까?
                        </p>
                        <div>
                        <Button variant="outlined" color="warning" >확인</Button>
                        <Button variant="outlined" color="error" onClick={handleClose}>취소</Button>
                        </div>
                    </Box>
                    {/* </MacBookBox> */}
                </Modal>
            </div>
        </MacBookBox>
    );
 };
  
 export default MyPageWithdrawal;