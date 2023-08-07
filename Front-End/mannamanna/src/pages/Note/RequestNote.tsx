import { useQuery } from "@tanstack/react-query";
// import React from 'react';
import { useRecoilState } from "recoil";
import { idAtom } from "../../Recoil/State";
import { ReceivedNotesRes } from "../../apis/Response/Response";
import api from "../../apis/Api";
import { NoteContainer, SendContainer } from "./NoteStyle";
import NoteBody from "./NoteComponent/NoteBody";

const RequestNote = () => {
  const [Userid, setId] = useRecoilState(idAtom);

  const receivedntnote = useQuery<ReceivedNotesRes>(
    ["receivedntnote"],
    async () => {
      const response = await api.get("/note/received/", {
        params: {
          id: Userid,
        },
      });
      return response.data;
    }
  );

  if (receivedntnote.data) {
    const checknoteResult = receivedntnote.data;
  }

  return (
    <SendContainer>
      <NoteBody comment={"보낸쪽지"} To={"김우빈"}></NoteBody>
    </SendContainer>
  );
};

export default RequestNote;
