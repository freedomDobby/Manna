import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useRecoilState } from 'recoil';
import { SendNoteModalAtom, idAtom, sendNoteReceiverAtom } from '../../Recoil/State';
import { ReceivedNotesRes, SentNotesRes } from '../../apis/Response/Response';
import api from '../../apis/Api';
import { SendContainer } from './NoteStyle';
import { ResponsetNoteBody } from './NoteComponent/NoteBody';
import { FalseNoteModal } from '../User/ForgotIdPw/ForgotIdStyles';

const ResponseNote = () => {
        const [userId, setId] = useRecoilState(idAtom);
        const [NoteOpen, setNoteOpen] = useRecoilState(SendNoteModalAtom);
        const [SogaeOpen, setSogaeOpen] = useRecoilState(SendNoteModalAtom);
        const [receiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
        const handleRemove = () => {
            
          };
        
          const handleCheck = (senderId:string,sogae:boolean) => {
            console.log("답장하기!", senderId);
            setReceiver(senderId);
            console.log(sogae);
            if(sogae===true){
                setNoteOpen(true);
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
                Remove={handleRemove}
                Check={() => handleCheck(note.senderId, note.sogae)}
              />
            ))}
            <FalseNoteModal></FalseNoteModal>
          </SendContainer>
        );
      };

export default ResponseNote;