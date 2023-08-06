import { styled } from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export let LoginBox = styled.form`
  border: solid white 4px;
  width: 100vh;
  height: 60vh;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
`;

export let InputBox = styled.div`
  width: 60vh;
  height: 10vh;
  margin-bottom: 7%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export let IdLabel = styled.label`
  color: #ffffff;
  width: 20vh;
  height: 6vh;
  font-size: 4vh;
  text-align: center;
  line-height: 7vh;
`;

export let IdInput = styled.input`
  width: 50vh;
  height: 7vh;
  margin-left: 7%;
  font-size: 3vh;
  background-color: #ffcced;
  border: none;
`;

export let BtnBox = styled.div`
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45vw;
  gap: 4vh;
  height: 10vh;
`;

export let ForgotPasswordLink = styled.a`
  color: #ffffff;
  font-size: 2vh;
  text-decoration: underline;
  // margin-top: 1vh;
  cursor: pointer;
  &:hover {
    color: #d9cff4;
  }
`;

export const StyledButton = styled.button`
  margin: 1px;
  width: 20vh;
  height: 7vh;
  color: #ffcced;
  border: solid 0.4vh;
  border-color: #ffcced;
  background-color: #ffffff;
  border-radius: 1.5vh;
  font-size: 2.5vh;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #d9cff4;
    color: #d9cff4;
    border: solid 0.3vh;
  }
`;

export const CenterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const StyledArrowBackIcon = styled(ArrowBackIosIcon)`
  color: white;
`;
