import React from 'react';
import BackBox from '../../components/common/Back';
import SidebarMission from '../../components/layout/Sidebar/SidebarMission';
import { MyPageContainerBox } from '../User/MyPage/MyPageStyle';
import { Outlet, useNavigate } from 'react-router-dom';
import { StyledButton } from '../User/Login/LoginStyle';
import { FlexBox } from '../Reserve/ReserveStyle';

const Note = () => {
  const navigate = useNavigate();
  const GoRequestNote = () => {
    navigate("/note/requestNote");
  };
  const GoResponseNote = () => {
    navigate("/note");
  };
    return (
        <div>
          <div style={{ height: "5vh" }}></div>
          <BackBox>
            <div style={{ height: "80vh" }}>
            </div>
            <div style={{ height: "80vh" }}>
              <MyPageContainerBox>
                <div style={{display:'flex'}}>
              <StyledButton onClick={GoResponseNote}>받은 쪽지</StyledButton>
              <StyledButton onClick={GoRequestNote}>보낸 쪽지</StyledButton>    
                </div>
              <Outlet></Outlet></MyPageContainerBox>
            </div>
          </BackBox>
        </div>
      );
};

export default Note;