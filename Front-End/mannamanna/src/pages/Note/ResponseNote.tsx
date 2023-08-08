import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilState } from 'recoil';
import { DeleteNoteAtom, SendNoteModalAtom, SogaeResultNoteAtom, idAtom, sendNoteIdAtom, sendNoteReceiverAtom } from '../../Recoil/State';
import { ReceivedNotesRes, SentNotesRes } from '../../apis/Response/Response';
import api from '../../apis/Api';
import { SendContainer } from './NoteStyle';
import { ResponsetNoteBody } from './NoteComponent/NoteBody';
import { CheckSogaeNoteModal, DeleteNoteModal, FalseNoteModal } from '../User/ForgotIdPw/ForgotIdStyles';

const ResponseNote = () => {
        const [userId, setId] = useRecoilState(idAtom);
        const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);
        const [SogaeOpen, setSogaeOpen] = useRecoilState(SogaeResultNoteAtom);
        const [DeleteOpen, setDeleteOpen] = useRecoilState(DeleteNoteAtom);
        const [receiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
        const [noteId, setNoteId] = useRecoilState(sendNoteIdAtom);
           const handleRemove = (NoteId:number) => {
            setNoteId(NoteId);
            setDeleteOpen(true);
          };
        
          const handleCheck = (senderId:string,sogae:boolean,NoteId:number) => {
            console.log("답장하기!", senderId);
            setReceiver(senderId);
            setNoteId(NoteId);
            console.log(sogae);
            if(sogae===true){
                setSogaeOpen(true);
            }else{
                setNoteOpen(true);
            }
          };
        // React Query 사용
        const { data: receivedNoteList, isLoading, isError } = useQuery<ReceivedNotesRes[]>(
          ["receivedNote"],
          async () => {
            const response = await api.get(`note/received/${userId}`);
            return response.data;
          }
        );
      
        if (isLoading) {
          return <p>Loading...</p>;
        }
      
        if (isError) {
          return <p>Error occurred while fetching data</p>;
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
                Check={() => handleCheck(note.senderId, note.sogae,note.id)}
              />
            ))}
            <FalseNoteModal></FalseNoteModal>
            <CheckSogaeNoteModal></CheckSogaeNoteModal>
            <DeleteNoteModal></DeleteNoteModal>
          </SendContainer>
        );
      };

export default ResponseNote;