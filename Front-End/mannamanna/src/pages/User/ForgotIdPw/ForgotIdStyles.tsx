
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { ForgotIdErrorModalAtom, LoginErrorModalAtom, NoteAlarmAtom, RegisterMessageAtom, RegisterModalAtom, SendNoteModalAtom, findIdCheckIdAtom, findIdModalAtom, findPwModalAtom } from '../../../Recoil/State';
import MacBookBox from '../../../components/common/macbookBox';
import { MyPageButton } from '../MyPage/MyPageStyles';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { StyledButton } from '../Login/LoginStyle';

export const FindidModal = () => {

    const [open, setOpen] = useRecoilState(findIdModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userId] =  useRecoilState(findIdCheckIdAtom);
    return(
      <div style={{width:'30%'}}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
              <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                현재 본인의 아이디는 {userId}  입니다.
                <div style={{marginTop:'20vh'}}>
                <MyPageButton onClick={handleClose} >확인</MyPageButton>
                </div>
              </div>
            </MacBookBox>
          </div>
        </Modal>
      </div>
    )
  }
  
  export const FindPwModal = () => {
  
    const [open, setOpen] = useRecoilState(findPwModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
      <div style={{width:'30%'}}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
              <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                이메일로 비밀번호를 전송하였습니다.
                <div style={{marginTop:'20vh'}}>
                <MyPageButton onClick={handleClose} >확인</MyPageButton>
                </div>
              </div>
            </MacBookBox>
          </div>
        </Modal>
      </div>
    )
  }
  
  export const LoginErrorModal = () => {
    const navigate=useNavigate();
    const [open, setOpen] = useRecoilState(LoginErrorModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const GoFindId=()=> navigate('/ForgotId');
    return(
      <div style={{width:'30%'}}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
              <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                  <div>로그인 정보가 잘못되었습니다. </div>
                  <br />
                  <div> 재입력해주세요.</div>
                <div style={{marginTop:'20vh'}}>
                <MyPageButton onClick={handleClose} >확인</MyPageButton>
                <MyPageButton onClick={GoFindId}>아이디 찾기</MyPageButton>
                </div>
              </div>
            </MacBookBox>
          </div>
        </Modal>
      </div>
    )
  }
  
  export const ForgotIdErrorModal = () => {
    const navigate=useNavigate();
    const [open, setOpen] = useRecoilState(ForgotIdErrorModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
      <div style={{width:'30%'}}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
              <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                   <div>잘못된 정보를 입력하였습니다.</div>
                   <br></br>
                   <div>재시도해주세요.</div> 
                <div style={{marginTop:'20vh'}}>
                <MyPageButton onClick={handleClose} >확인</MyPageButton>
                </div>
              </div>
            </MacBookBox>
          </div>
        </Modal>
      </div>
    )
  }


  export const RegisterModal = () => {

    const [open, setOpen] = useRecoilState(RegisterModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message] =  useRecoilState(RegisterMessageAtom);
    return(
      <div style={{width:'30%'}}>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <div style={{borderRadius:'5%',background:'white',position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width:'50%',height:'70%',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
              <div style={{flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
               {message}  
                <div style={{marginTop:'20vh'}}>
                <MyPageButton onClick={handleClose} >확인</MyPageButton>
                </div>
              </div>
            </MacBookBox>
          </div>
        </Modal>
      </div>
    )
  }
  
  const StyledModalContainer = styled.div`
    width: 30%;
  `;
  
  const StyledModalContent = styled.div`
    border-radius: 5%;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 70%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const StyledFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  `;
  
  const StyledButtonContainer = styled.div`
    margin-top: 20px;
  `;
  
  export const NoteModal = () => {
    
    const [open, setOpen] = useRecoilState(SendNoteModalAtom);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const [sender, setSender] = useState('');
    const [receiver, setReceiver] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
  
    const handleSubmit = () => {
      console.log('Sender:', sender);
      console.log('Receiver:', receiver);
      console.log('Title:', title);
      console.log('Contents:', contents);
      handleClose();
    };
  
    return (
      <StyledModalContainer>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledModalContent>
          <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems='center'>
            <StyledFormContainer>
              
              <TextField label="보내는 이" variant="outlined" value={sender} onChange={(e) => setSender(e.target.value)} />
              <TextField label="받는 이" variant="outlined" value={receiver} onChange={(e) => setReceiver(e.target.value)} />
              <TextField label="제목" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
              <TextField
                label="내용"
                variant="outlined"
                multiline
                rows={4}
                value={contents}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setContents(e.target.value)}
              />
                          <StyledButtonContainer>
              <MyPageButton onClick={handleSubmit}>보내기</MyPageButton>
              <MyPageButton onClick={handleClose}>취소</MyPageButton>
            </StyledButtonContainer>
            </StyledFormContainer>
            </MacBookBox>
          </StyledModalContent>
        </Modal>
      </StyledModalContainer>
    );
  }


  

export default NoteModal;

export const LoveNoteModal = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useRecoilState(NoteAlarmAtom);

  const handleOpen = () => {
    navigate("/note");
    setOpen(false);
  }

  const handleClose = () => setOpen(false);

  return (
    <div style={{ width: '30%' }}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalContent>
          <MacBookBox width="100%" height="100%" color1="#bcd3ff" color2="#ffffff" alignItems="center">
          <StyledFormContainer>
            <div>
              새로운 쪽지가 있습니다.
            </div>
            <br />
            <div>
              확인하겠습니까?
            </div>   
            <StyledButtonContainer>
            <MyPageButton onClick={handleOpen}>확인 하러가기</MyPageButton>
              </StyledButtonContainer>
            </StyledFormContainer>
          </MacBookBox>
        </StyledModalContent>
      </Modal>
    </div>
  );
}

