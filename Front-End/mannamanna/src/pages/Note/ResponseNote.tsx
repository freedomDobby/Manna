import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilState } from "recoil";
import {
  DeleteNoteAtom,
  SendNoteModalAtom,
  SogaeResultNoteAtom,
  idAtom,
  sendNoteIdAtom,
  sendNoteReceiverAtom,
} from "../../Recoil/State";
import { ReceivedNotesRes, SentNotesRes } from "../../apis/Response/Response";
import api from "../../apis/Api";
import { SendContainer } from "./NoteStyle";
import { ResponsetNoteBody } from "./NoteComponent/NoteBody";
import { FalseNoteModal } from "../User/ForgotIdPw/ForgotIdStyles";
import { CheckSogaeNoteModal } from "../Note/Modal/AcceptModal";
import { DeleteNoteModal } from "./Modal/DeleteNoteModal";
import {
  SenderAgeState,
  SenderHeightState,
  SenderJobState,
  SenderMbtiState,
  SenderNameState,
  SenderPrState,
  SenderProfileState,
} from "./NoteState";

const ResponseNote = () => {
  const [userId, setId] = useRecoilState(idAtom);
  const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);
  const [SogaeOpen, setSogaeOpen] = useRecoilState(SogaeResultNoteAtom);
  const [DeleteOpen, setDeleteOpen] = useRecoilState(DeleteNoteAtom);
  const [receiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);
  const [SenderName, setSenderName] = useRecoilState(SenderNameState);
  const [SenderHeight, setSenderHeight] = useRecoilState(SenderHeightState);
  const [SendeAge, setSendeAge] = useRecoilState(SenderAgeState);
  const [SenderJob, setSenderJob] = useRecoilState(SenderJobState);
  const [SenderMbti, setSenderMbti] = useRecoilState(SenderMbtiState);
  const [SenderPr, setSenderPr] = useRecoilState(SenderPrState);
  const [SenderProfile, setSenderProfile] = useRecoilState(SenderProfileState);

  const handleRemove = (NoteId: number) => {
    setNoteId(NoteId);
    setDeleteOpen(true);
  };

  const handleCheck = (senderId: string, sogae: boolean, NoteId: number) => {
    console.log("답장하기!", senderId);
    setReceiver(senderId);
    setNoteId(NoteId);
    console.log(sogae);

    processSenderInfo(senderId, sogae);
  };

  const processSenderInfo = async (senderId: string, sogae: boolean) => {
    try {
      const SenderResponse = await api.get(`/user/mypage/${senderId}`);
      const promiseResult = SenderResponse.data;
      console.log(promiseResult.data);
      setSenderName(promiseResult.data.name);
      setSenderHeight(promiseResult.data.height);
      setSendeAge(promiseResult.data.age);
      setSenderJob(promiseResult.data.job);
      setSenderMbti(promiseResult.data.mbti);
      setSenderPr(promiseResult.data.introduction);
      setSenderProfile(promiseResult.data.profilePictures[0].path);

      if (sogae === true) {
        setSogaeOpen(true);
      } else {
        setNoteOpen(true);
      }
    } catch (error) {
      console.error("API 요청 실패:", error);
      throw error;
    }
  };

  // React Query 사용
  const {
    data: receivedNoteList,
    isLoading,
    isError,
  } = useQuery<ReceivedNotesRes[]>(["receivedNote"], async () => {
    const response = await api.get(`note/received/${userId}`);
    console.log(response.data);
    return response.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>에러입니다.</p>;
  }

  return (
    <SendContainer>
      {receivedNoteList.reverse().map((note, index) => (
        <ResponsetNoteBody
          key={index}
          comment="받은쪽지"
          To={note.senderName}
          Title={note.subject}
          Note={note.content}
          Remove={() => handleRemove(note.id)}
          Check={() => handleCheck(note.senderId, note.sogae, note.id)}
        />
      ))}
      <FalseNoteModal />
      <CheckSogaeNoteModal
        profile={SenderProfile}
        name={SenderName}
        height={SenderHeight}
        age={SendeAge}
        job={SenderJob}
        mbti={SenderMbti}
        selfPr={SenderPr}
      />
      <DeleteNoteModal />
    </SendContainer>
  );
};

export default ResponseNote;
