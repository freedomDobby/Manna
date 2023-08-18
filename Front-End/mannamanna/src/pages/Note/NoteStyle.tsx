import styled from "styled-components";
import noteLogo from "../../asset/image/noteLogo.png";
const BackPart = styled.div`
  // border: solid 2px blue;
  // background-color: gold;
  width: 100vw;
  height: 80vh;
  display: flex;
  // justify-content: center;
  // align-items: center;
  margin: 0%;
  padding: 0%;
`;

const SidePart = styled.div`
  // border: solid 1px red;
  // background-color: white;
  height: 100%;
  width: 15%;
`;

const NoteLogoBox = styled.div`
  // border: solid 1px black;
  height: 10%;
  width: 100%;
  background-image: url(${noteLogo});
  background-size: 100% 100%;
`;

const MidPart = styled.div`
  // border: solid 1px blue;
  // background-color: green;
  // height: 100%;
  // width: 70%;
  width: 140vh;
  height: 80vh;
`;

const KeyPart = styled.div`
  border: solid 5px black;
  background-color: white;
  // background-color: black;
  // width: 100%;
  // height: 100%;
  
  width: 140vh;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const KeySelectPart = styled.div`
  // border: solid 1px black;
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SearchPart = styled.form`
  // border: 1px solid red;
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  // border: 1px solid black;
  width: 60%;
  height: 60%;
  font-size: large;
  margin-left: 3%;
`;

const SearchBtn = styled.button`
  margin: 1px;
  width: 45%;
  height: 70%;
  color: #ffffff;
  border: none;
  background-color: #ffcced;
  font-size: 2.5vh;
  transition: border-color 0.3s, color 0.3s;

  &:hover {
    border-color: #d9cff4;
    color: #d9cff4;
    border: solid 0.3vh;
  }
`;
const BtnBox = styled.div`
  // border: 1px solid green;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
`;

const NoteBtn = styled.button`
  margin: 1.5%;
  width: 15%;
  height: 70%;
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
const KeyMainPart = styled.div`
  // border: solid 3px red;
  width: 100%;
  height: 88%;
  overflow-y: auto;
  overflow-x: hidden;
`;
////////////////////////////////보낸쪽지///////////////////////////////////////
const SendContainer = styled.div`
  // border: 1px solid blue;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const NoteContainer = styled.div`
  border: 3px solid black;
  width: 30%;
  height: 40%;
  margin-top: 1.5%;
`;

const NoteTopBar = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  height: 7%;
  background-color: #ffcced;
  align-items: center;
`;
const NoteInfoBar = styled.div`
  // background-color: red;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid black;
`;
const Info = styled.div`
  // border: 1px solid black;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const NoteMidBar = styled.div`
  border-top: 1px solid black;
  width: 100%;
  height: 72%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NotePart = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 80%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NoteTitle = styled.div`
  border-bottom: 1px solid black;
  background: #ffcced;
  width: 100%;
  height: 30%;
  overflow: auto;
`;
const NoteDetail = styled.div`
  width: 100%;
  height: 70%;
  overflow: auto;
`;
const NoteFootBar = styled.div`
  border-top: 1px solid black;
  // background-color: red;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const NoteButton = styled.button`
  width: 30%;
  height: 90%;
  background: #ffcced;
  font-family: inherit;
  margin-left: 1%;
  margin-right: 3%;
`;

export {
  BackPart,
  SidePart,
  MidPart,
  KeyPart,
  KeySelectPart,
  KeyMainPart,
  NoteBtn,
  SearchPart,
  SearchInput,
  SearchBtn,
  BtnBox,
  NoteContainer,
  SendContainer,
  NoteTopBar,
  NoteInfoBar,
  NoteMidBar,
  NoteLogoBox,
  NoteFootBar,
  NotePart,
  Info,
  NoteButton,
  NoteTitle,
  NoteDetail,
};
