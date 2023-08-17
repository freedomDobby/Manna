import Sidetab from "../Sidetab";
import { useNavigate } from "react-router-dom";
import MyPageSideTab from "../MyPageSideTab";
import { SidebarStyle, SidetabContainer } from "./SidebarStyle";

function SidebarNote() {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/main");
  };
  const GoMyPage = () => {
    navigate("/mypage");
  };
  const Gochat = () => {
    navigate("/chatting");
  };
  const Gomission = () => {
    navigate("/mission");
  };
  const GoSchedule = () => {
    navigate("/schedule");
  };
  const GoNote = () => {
    navigate("/note");
  };

  return (
    <SidebarStyle>
      <SidetabContainer>
        <Sidetab onClick={GoHome} menu={"Home"} bg={"white"} />
        <Sidetab onClick={GoMyPage} menu={"MyPage"} bg={"white"} />
        <Sidetab onClick={Gochat} menu={"Chat"} bg={"white"} />
        <Sidetab onClick={Gomission} menu={"Mission"} bg={"white"} />
        <Sidetab onClick={GoSchedule} menu={"Schedule"} bg={"white"} />
        <Sidetab onClick={GoNote} menu={"Note"} bg={"#ffcced"} />
      </SidetabContainer>
    </SidebarStyle>
  );
}

export default SidebarNote;
