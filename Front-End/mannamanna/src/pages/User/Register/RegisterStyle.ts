import { styled } from "styled-components";

export let RegisterBox = styled.div`
  border: solid black 4px;
  width: 100vh;
  height: 90vh;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(
    188,
    211,
    255,
    0.8
  ); /* Using rgba() for transparency */
`;

export let SmallInputBox = styled.div`
  border: solid rgba(248, 227, 234, 0.68) 4px;
  display: flex;
  width: 85%;
  height: 12%;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.5vh;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  justify-content: center; /* 두 개의 요소가 양쪽 끝에 배치되도록 설정 */
`;

export let MypageInputBox = styled.div`
  border: solid rgba(248, 227, 234, 0.68) 4px;
  display: flex;
  width: 30vw;
  height: 6vh;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.5vh;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  justify-content: space-between; /* 두 개의 요소가 양쪽 끝에 배치되도록 설정 */
`;
export let ImageBox = styled.div`
  display: flex;
  width: 20vw;
  height: 6vh;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.5vh;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  justify-content: space-between; /* 두 개의 요소가 양쪽 끝에 배치되도록 설정 */
`;

const SmallInput = styled.input`
  // border: 1px solid red;
  width: 30%;
  height: 100%;
  font-size: 2.5vh;
  padding: 5px;
  border: none;
  background-color: rgba(248, 227, 234, 0);
  border-radius: 3px;
  ::placeholder {
    /* Styles for the placeholder text */
    color: #000; /* Placeholder text color */
    opacity: 0.6; /* Opacity of the placeholder text */
  }
`;

const LogoBox = styled.div`
  // border: 1px solid red;
  height: 5vh;
  alignitems: center;
  display: flex;
  line-height: 5vh;
`;

const InnerBox = styled.div`
  // border: 5px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  // flex-direction: column;
  width: 100vw;
  margin-top: 2vh;
`;
const SideBox = styled.div`
  // border: 2px solid green;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  // border: 2px solid green;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-contents: center;
`;
const MainLogoBox = styled.div`
  // border: 2px solid red;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;
const MainMidBox = styled.div`
  // border: 2px solid red;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SideInnerBox = styled.div`
  // border: 1px solid black;
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignUP = styled.img`
  // border: 1px solid gold;
  width: 70%;
  height: 100%;
`;

interface InputBoxProps {
  alignItems?: string;
}

const InputBox = styled.form<InputBoxProps>`
  // border: 1px solid blue;
  width: 100%;
  height: 100%;
  margin-top: 1.5%;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-contents: center;
  align-items: ${(props) => props.alignItems || "center"};
  overflow: auto;
  &::-webkit-scrollbar {
    width: 0.5vw;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.5vh;
    background: rgba(.slice(5, 7), 16 0.7);
  }
`;

const AnswerBox = styled.div`
  // border: 1px solid orange;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Answer = styled.div`
  // border: 1px solid blue;
  height: 100%;
`;
const Select = styled.div`
  // border: 1px solid red;
  height: 70%;
  width: 25%;
  display: flex;
  justify-content: center;
  align-contents: center;
`;

export {
  LogoBox,
  InnerBox,
  SideBox,
  MainBox,
  SideInnerBox,
  MainLogoBox,
  SignUP,
  MainMidBox,
  InputBox,
  AnswerBox,
  Answer,
  Select,
  SmallInput,
};
