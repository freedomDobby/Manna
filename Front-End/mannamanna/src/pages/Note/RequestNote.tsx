import { useQuery } from '@tanstack/react-query';
// import React from 'react';
import { useRecoilState } from 'recoil';
import { idAtom } from '../../Recoil/State';
import { ReceivedNotesRes } from '../../apis/Response/Response';
import api from '../../apis/Api';

const RequestNote = () => {
    const [Userid, setId] = useRecoilState(idAtom);

    const receivedntnote = useQuery<ReceivedNotesRes>(['receivedntnote'], async () => {
        const response = await api.get("/note/received/", {
          params: {
            id: Userid,
          },
        });
        return response.data; 
      });
      
      if (receivedntnote.data) {
        const checknoteResult = receivedntnote.data;
      }
      
    
    return (
        <div>
            보낸 쪽지
        </div>
    );
};

export default RequestNote;