import React from 'react';
import BackBox from '../../components/common/Back';
import SidebarMission from '../../components/layout/Sidebar/SidebarMission';
import { MyPageContainerBox } from '../User/MyPage/MyPageStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { StyledButton } from '../User/Login/LoginStyle';
import { FlexBox } from '../Reserve/ReserveStyle';
import { SendNoteModalAtom } from '../../Recoil/State';
import { useRecoilState } from 'recoil';
import NoteModal from './../User/ForgotIdPw/ForgotIdStyles';

const Note = () => {
  const navigate = useNavigate();
  const GoRequestNote = () => {
    navigate("/note/requestNote");
  };
  const GoResponseNote = () => {
    navigate("/note");
  };

  const [open, setOpen] = useRecoilState(SendNoteModalAtom);

  const handleOpenNoteModal = () => {
    setOpen(true);
  };

    return (
        <div>
          <div style={{ height: "5vh" }}></div>
          <BackBox>
            <div style={{ height: "80vh" }}>
            </div>
            <div style={{ height: "80vh" }}>
              <MyPageContainerBox>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <div style={{display:'flex'}}>
              <StyledButton onClick={GoResponseNote}>받은 쪽지</StyledButton>
              <div>
              <StyledButton onClick={GoRequestNote}>보낸 쪽지</StyledButton>       
              </div>
                </div>
                <div>
                <StyledButton onClick={handleOpenNoteModal}>쪽지보내기</StyledButton>  
                </div>
                </div>
              <Outlet></Outlet></MyPageContainerBox>
            </div>
          </BackBox>
          <NoteModal></NoteModal>
        </div>
      );
};

export default Note;