import {styled} from 'styled-components';

export let RegisterBox = styled.form `
  border: solid black 4px;
  width: 100vh;
  height: 90vh;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(188, 211, 255, 0.8); /* Using rgba() for transparency */
`;

export let SmallInputBox = styled.div `
  display: flex;
  border: solid rgba(248, 227, 234, 0.68) 4px;
  width: 85%;
  height: 12%;
  align-items: center;
  margin-bottom: 10px;
  font-size: 2.5vh;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
  justify-content: space-between; /* 두 개의 요소가 양쪽 끝에 배치되도록 설정 */
`;

export let MypageInputBox = styled.div `
  display: flex;
  border: solid rgba(248, 227, 234, 0.68) 4px;
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
export let ImageBox = styled.div `
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

export let SmallInput = styled.input `
  width: 30vh;
  height: 30%;
  font-size: 2.5vh;
  padding: 5px;
  border: none;
  background-color: rgba(248, 227, 234, 0);
  border-radius: 3px;
  // border: 1px solid red;

  ::placeholder {
    /* Styles for the placeholder text */
    color: #000; /* Placeholder text color */
    opacity: 0.6; /* Opacity of the placeholder text */
  }
`;

const LogoBox = styled.div `
height: 5vh;
alignItems: center;
// border: 1px solid red;
display: flex;
line-height: 5vh;
`

const InnerBox = styled.div `
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
// border: 5px solid yellow;
// flex-direction: column;
width: 100vw;
margin-top: 2vh;
`
const SideBox = styled.div `
// border: 2px solid green;
width: 15%;
height: 100%;
display: flex;
flex-direction: column;
`

const MainBox = styled.div `
// border: 2px solid green;
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-contents: center;
`
const MainLogoBox = styled.div `
// border: 2px solid red;
width: 100%;
height: 20%; 
display: flex;
justify-content: center;
`
const MainMidBox = styled.div `
// border: 2px solid red;
width: 100%;
height: 80%; 
display: flex;
justify-content: center;
align-items: center;
`

const SideInnerBox = styled.div `
width: 100%;
height: 33%;
// border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`

const SignUP = styled.img `
width: 70%;
height: 100%;
// border: 1px solid gold;
`

const InputBox = styled.div`
// border: 1px solid blue;
width: 95%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
overflow: auto;
`

const AnswerBox = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
// border: 1px solid orange;
`

const Answer = styled.div`
height: 70%;
`

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
    Answer
};