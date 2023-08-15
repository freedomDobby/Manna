import styled from "styled-components";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenAtom, refreshTokenAtom } from "../../Recoil/State";

const LogoWrapper = styled.div`
  //   border : solid 1px black;
  margin-left: 2vh;
  font-size: 2rem;
  front-weight: bolder;
  color: black;
  cursor: pointer;
`;

const Logo = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);
  const [refreshToken, setRefreshToken] = useRecoilState(refreshTokenAtom);

  const GoMain = () => {
    if(accessToken === null){
      navigate("/");
    } else{
      navigate("/main");
    }
  };

  return (
    <LogoWrapper style={{ cursor: "pointer" }}>
      <div onClick={GoMain}>맞나?만나!</div>
    </LogoWrapper>
  );
};

export default Logo;
