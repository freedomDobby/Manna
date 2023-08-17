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
  NoteTitle,
  NoteDetail,
} from "../NoteStyle";

interface RequestNoteBodyProps {
  comment: string;
  To: string;
  Title: string;
  Note: string;
  Remove: () => void;
  // Check: () => void;
}

interface ResponsetNoteProps {
  comment: string;
  To: string;
  Title: string;
  Note: string;
  Remove: () => void;
  Check: () => void;
}

export const RequestNoteBody: React.FC<RequestNoteBodyProps> = ({
  comment,
  To,
  Title,
  Note,
  Remove,
  // Check,
}) => {
  // NoteBodyProps를 React.FC로 사용하고, comment를 구조분해하여 사용합니다.
  return (
    <NoteContainer>
      <NoteTopBar> {comment}</NoteTopBar>
      <NoteInfoBar>
        <Info>받은 사람: {To}</Info>
      </NoteInfoBar>
      <NoteMidBar>
        <NotePart>
          <NoteTitle><div>
          제목: {Title}
            </div></NoteTitle>
          <NoteDetail><div>
          내용 : {Note}
            </div></NoteDetail>
        </NotePart>
      </NoteMidBar>
      <NoteFootBar>
        <NoteButton onClick={Remove}>삭제하기</NoteButton>
        {/* <NoteButton onClick={Check}>답장하기</NoteButton> */}
      </NoteFootBar>
    </NoteContainer>
  );
};

export const ResponsetNoteBody: React.FC<ResponsetNoteProps> = ({
  comment,
  To,
  Title,
  Note,
  Remove,
  Check,
}) => {
  // NoteBodyProps를 React.FC로 사용하고, comment를 구조분해하여 사용합니다.
  return (
    <NoteContainer>
      <NoteTopBar> {comment}</NoteTopBar>
      <NoteInfoBar>
        <Info>보낸 사람: {To}</Info>
      </NoteInfoBar>
      <NoteMidBar>
        <NotePart>
          <NoteTitle>제목: {Title}</NoteTitle>
          <NoteDetail>내용 : {Note}</NoteDetail>
        </NotePart>
      </NoteMidBar>
      <NoteFootBar>
        <NoteButton onClick={Remove}>삭제하기</NoteButton>
        <NoteButton onClick={Check}>답장하기</NoteButton>
      </NoteFootBar>
    </NoteContainer>
  );
};
