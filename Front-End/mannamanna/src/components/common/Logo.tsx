import styled from "styled-components";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenAtom, refreshTokenAtom } from "../../Recoil/State";

const LogoStyle = styled.div`
  margin-left: 2rem;
  font-size: 1.5rem;
  front-weight: bolder;
  color: #000000;
  cursor: pointer;
`;

const LogoMainStyle = styled.div`
  margin: 2rem;
  font-size: 1.5rem;
  front-weight: bolder;
  color: #ffffff;
  cursor: pointer;
`;

const Logo = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenAtom);

  const GoMain = () => {
    if(accessToken === null){
      navigate("/");
    } else{
      navigate("/main");
    }
  };

  return (
    <div>
    { accessToken === null ? (<LogoMainStyle onClick={GoMain}>맞나?만나!</LogoMainStyle>) : (<LogoStyle onClick={GoMain}>맞나?만나!</LogoStyle>) }
    </div>
  );
};

export default Logo;
