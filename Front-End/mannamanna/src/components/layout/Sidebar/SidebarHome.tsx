import Sidetab from "../Sidetab";
import { useNavigate } from "react-router-dom";
import MyPageSideTab from "../MyPageSideTab";
import { SidebarStyle, SidetabContainer } from "./SidebarStyle";

function Sidebar() {
  const navigate = useNavigate();
  const GoHome = () => {
    navigate("/main");
  };
  const Gochat = () => {
    navigate("/chatting");
  };
  const Gomission = () => {
    navigate("/mission");
  };

  return (
    <SidebarStyle>
      <SidetabContainer>
        <Sidetab onClick={GoHome} menu={"Home"} bg={"#ffcced"} />
        <MyPageSideTab menu={"MyPage"} bg={"white"} />
        <Sidetab onClick={Gochat} menu={"Chat"} bg={"white"} />
        <Sidetab onClick={Gomission} menu={"Mission"} bg={"white"} />
        <Sidetab onClick={GoHome} menu={"끝!"} bg={"white"} />
      </SidetabContainer>
    </SidebarStyle>
  );
}

export default Sidebar;
