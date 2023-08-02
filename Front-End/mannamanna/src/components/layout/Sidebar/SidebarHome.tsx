import styled from "styled-components";
import Sidetab from "../Sidetab";
import { useNavigate } from "react-router-dom";

const SidebarStyle = styled.div`
  // border: 3px solid red;
  // width: 20%;
  height: 26vh;
  background: black;
  display: flex;
  justify-content: flex-end;
  margin: 0%;
`;

function Sidebar() {
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

  return (
    <SidebarStyle>
      <div>
        <Sidetab onClick={GoHome} menu={"Home"} bg={"pink"} />
        <Sidetab onClick={GoMyPage} menu={"MyPage"} bg={"white"} />
        <Sidetab onClick={Gochat} menu={"Chat"} bg={"white"} />
        <Sidetab onClick={Gomission} menu={"Mission"} bg={"white"} />
        <Sidetab onClick={GoHome} menu={"끝!"} bg={"white"} />
      </div>
    </SidebarStyle>
  );
}

export default Sidebar;
