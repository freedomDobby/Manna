
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { ForgotIdErrorModalAtom, LoginErrorModalAtom, NoteAlarmAtom, RegisterMessageAtom, RegisterModalAtom, SendNoteModalAtom, findIdCheckIdAtom, findIdModalAtom, findPwModalAtom, idAtom, nameAtom, sendNoteAtom } from '../../../Recoil/State';
import MacBookBox from '../../../components/common/macbookBox';
import { MyPageButton } from '../MyPage/MyPageStyles';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import React, { useState, ChangeEvent } from 'react';
import { TextField } from '@mui/material';
import { StyledButton } from '../Login/LoginStyle';
import { Answer, AnswerBox, SmallInput, SmallInputBox } from '../Register/RegisterStyle';
import { Question } from '../Register/AnswerBox';
import { MessageReq } from '../../../apis/Request/Request';
import api from '../../../apis/Api';

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

  interface NoteQuestionProps {
    question: string;
    Id: string;
    placeholder: string;
    value: string;
  }
  
  export const NoteQuestion: React.FC<NoteQuestionProps> = ({
    question,
    Id,
    placeholder,
    value,
  }) => {
    return (
      <SmallInputBox>
        <AnswerBox>
          <Answer>{question}</Answer>
          <SmallInput
            id={Id}
            placeholder={placeholder}
            value={value}
          />
        </AnswerBox>
      </SmallInputBox>
    );
  };
  



interface TextareaQuestionProps {
  question: string;
  Id: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const StyledTextarea = styled.textarea`
  width: 100%; /* 가로 길이를 조정 */
  height: 10vh; /* 세로 길이를 조정 */
  font-weight: bold; /* 다른 스타일 속성도 추가할 수 있습니다 */
  overflow-y: auto; /* 내용이 넘칠 경우 세로 스크롤바 표시 */
`;

export const TextareaQuestion: React.FC<TextareaQuestionProps> = ({
  question,
  Id,
  placeholder,
  onChange,
}) => {
  return (
    <SmallInputBox>
      <AnswerBox style={{flexDirection:'column'}}>
        <Answer>{question}</Answer>
        <StyledTextarea
          id={Id}
          placeholder={placeholder}
          onChange={onChange}
        />
      </AnswerBox>
    </SmallInputBox>
  );
};

export const NoteModal = () => {
  const [open, setOpen] = useRecoilState(SendNoteModalAtom);
  const [sendnote, Setsendnote] = useRecoilState(sendNoteAtom);
  const [UserId] = useRecoilState(idAtom);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let temp = { ...sendnote };

  const sendUnLoveNote= async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedMessage: MessageReq = {
      receiver: sendnote.receiver,
      sender: sendnote.sender,
      subject: sendnote.subject,
      content: sendnote.content,
      isSogae: sendnote.isSogae,
      date:'',
    };
    console.log(updatedMessage);
    try {
      const response = await api.post("/note", updatedMessage);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (UserId !== null) {
      temp.sender = UserId;
    }
    Setsendnote(temp);
    
    sendUnLoveNote(e); 
    
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
          <MacBookBox
            width="100%"
            height="100%"
            color1="#bcd3ff"
            color2="#ffffff"
            alignItems='center'
          >
            <StyledFormContainer>
              {UserId !== null ? (
                <NoteQuestion
                  question="보내는 이"
                  Id="sender"
                  placeholder="이름"
                  value={UserId}
                />
              ) : null}
              <Question
                question="받는 이"
                Type="text"
                Id="receiver"
                placeholder="이름"
                onChange={(e) => temp.receiver = e.target.value}
              />
              <Question
                question="제목"
                Type="text"
                Id="subject"
                placeholder="제목"
                onChange={(e) => temp.subject = e.target.value}
              />
              <TextareaQuestion
                question="내용"
                Id="content"
                placeholder="내용을 입력하세요"
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => temp.content = e.target.value}
              />
              <StyledButtonContainer>
                <StyledButton onClick={handleSubmit}>보내기</StyledButton>
                <StyledButton onClick={handleClose}>취소</StyledButton>
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

