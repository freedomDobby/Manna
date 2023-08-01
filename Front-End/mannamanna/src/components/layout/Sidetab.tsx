import styled from "styled-components";

interface SidebarProps {
  menu: string;
  bg: string;
  onClick: () => void;
}

const Sidecom = styled.button`
  width: 15vh;
  height: 6vh;
  opacity: 1;
  border-style: solid;
  border-color: #000000;
  border-radius: 10px;
  border-width: 0.3vh;
  justify-content: center;
  align-items: center;
`;

const Sidetab: React.FC<SidebarProps> = ({ menu, bg, onClick }) => {
  return (
    <div>
      <Sidecom onClick={onClick} style={{ backgroundColor: `${bg}` }}>
        {menu}
      </Sidecom>
    </div>
  );
};
export default Sidetab;
