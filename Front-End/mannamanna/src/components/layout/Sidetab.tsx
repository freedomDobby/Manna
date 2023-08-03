import styled from "styled-components";
// GlobalFont.ts
// 각 폰트 파일 import
import Font_Main from "../../asset/font/neodgm.woff";

interface SidebarProps {
  menu: string;
  bg: string;
  onClick: () => void;
}

const Sidecom = styled.button`
  // border: 1px solid red;
  width: 15vh;
  height: 6vh;
  opacity: 1;
  // margin-botton: 3%;
  border-style: solid;
  border-color: #000000;
  border-radius: 10px;
  border-width: 0.3vh;
  justify-content: center;
  align-items: center;
  font-family: "Font_test";
  src: local("Font_test"), url(${Font_Main}) format("woff");
  font-weight: normal;
`;

const Sidetab: React.FC<SidebarProps> = ({ menu, bg, onClick }) => {
  return (
    <div>
      <Sidecom
        onClick={onClick}
        style={{
          backgroundColor: `${bg}`,
          border: "0.5vh solid black",
          borderRight: "none",
          marginBottom: "2%",
          borderTopRightRadius: "0%",
          borderBottomRightRadius: "0%",
        }}
      >
        {menu}
      </Sidecom>
    </div>
  );
};
export default Sidetab;
