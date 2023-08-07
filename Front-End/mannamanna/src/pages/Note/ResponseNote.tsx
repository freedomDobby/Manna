// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { useRecoilState } from 'recoil';
// import { idAtom } from '../../Recoil/State';
// import { ReceivedNotesRes, SentNotesRes } from '../../apis/Response/Response';
// import api from '../../apis/Api';

const ResponseNote = () => {
    // const [Userid, setId] = useRecoilState(idAtom);

    // const sentnote = useQuery<SentNotesRes>(['sentnote'], async () => {
    //     const response = await api.get("/note/received/", {
    //       params: {
    //         id: Userid,
    //       },
    //     });
    //     return response.data; 
    //   });
      
    //   if (sentnote.data) {
    //     const checknoteResult = sentnote.data;
    //   }
      
    return (
        <div>
            받은 쪽지들
        </div>
    );
};

export default ResponseNote;