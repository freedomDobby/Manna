import styled from "styled-components";
import Logo from "../common/Logo";
// import { Profile } from "../common/Profile";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useRecoilState } from "recoil";
import {
  NoteAlarmAtom,
  accessTokenAtom,
  genderAtom,
  idAtom,
  nameAtom,
  refreshTokenAtom,
} from "../../Recoil/State";
import { useNavigate } from "react-router-dom";
import { RecentNoteModal } from "../../pages/User/ForgotIdPw/ForgotIdStyles";
// import { useQuery } from "@tanstack/react-query";
// import api from "../../apis/Api";
// import { checkNote } from "../../apis/Response/Response";
import { userNameState } from "../../pages/User/Register/RegisterState";
// import CreateChattingClient from "../../pages/User/Login/Clinet";

const HeaderBack = styled.div`
  width: 100%;
  height: 10vh;
  background-color: rgba(255, 255, 255, 0.35);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Greetings() {
  const [gender, setGender] = useRecoilState(genderAtom);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);
  const [open, setOpen] = useRecoilState(NoteAlarmAtom);
  const [name1, setName1] = useRecoilState(userNameState);
  const [name, setName] = useRecoilState(nameAtom);
  const [userId, setId] = useRecoilState(idAtom);

  const navigate = useNavigate();

  const GoResponseNote = () => {
    navigate("/note");
  };

  const GoAlarm = () => {
    alert("서비스 준비 중입니다.")
  };

  const GoLogOut = async () => {
    await setGender(null);
    await setAccessToken(null);
    await setRefreshToken(null);
    await setId(null);
    await setName(null);
    navigate("/");
    window.location.reload();
  };

  // 노트 알람
  // console.log(name1);
  // console.log(gender);
  // console.log(accessToken);
  // const { data: checkrecentnote } = useQuery<boolean>(
  //     ["checkrecentnote"],
  //     async () => {
  //       const response = await api.get(`note/new/${userId}`);
  //       return response.data;
  //     }
  //   );
  //   if(checkrecentnote===true){
  //     setOpen(true);
  //   }

  return (
    <div>
      <RecentNoteModal></RecentNoteModal>
      <HeaderBack>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
        </div>
        <div style={{ display: "flex", justifyContent: 'space-around', alignItems: "center" }}>
          <p style={{ marginRight: '1vw', fontSize: "large" }}>{name} 님</p>
          <div>
            <IconButton color="inherit" size="medium" onClick={GoResponseNote}>
              <EmailOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" size="medium" onClick={GoAlarm}>
              <NotificationsNoneOutlinedIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" size="medium" onClick={GoLogOut}>
              <LogoutOutlinedIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </HeaderBack>
    </div>
  );
}

export default Greetings;
