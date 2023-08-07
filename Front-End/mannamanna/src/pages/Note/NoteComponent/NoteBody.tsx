import React from "react"; // React를 import해야 합니다.
import {
  NoteContainer,
  NoteFootBar,
  NoteInfoBar,
  NoteMidBar,
  NotePart,
  NoteTopBar,
  Info,
  NoteButton,
} from "../NoteStyle";

interface NoteBodyProps {
  comment: string;
  To: string;
}

const NoteBody: React.FC<NoteBodyProps> = ({ comment, To }) => {
  // NoteBodyProps를 React.FC로 사용하고, comment를 구조분해하여 사용합니다.
  return (
    <NoteContainer>
      <NoteTopBar> {comment}</NoteTopBar>
      <NoteInfoBar>
        <Info>보낸사람: {To}</Info>
      </NoteInfoBar>
      <NoteMidBar>
        <NotePart></NotePart>
      </NoteMidBar>
      <NoteFootBar>
        <NoteButton>삭제하기</NoteButton>
        <NoteButton>답장하기</NoteButton>
      </NoteFootBar>
    </NoteContainer>
  );
};

export default NoteBody;
