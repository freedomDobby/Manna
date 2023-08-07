// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import { ReceivedNotesRes } from '../Response/Response';
// import { idAtom } from '../../Recoil/State';
// import { useRecoilState } from 'recoil';
// import api from '../Api';

// export const GetRequestNote = () => {
//     const [Userid] = useRecoilState(idAtom);

//     // useQuery의 queryKey와 async 함수에서 데이터를 반환하는 부분을 수정하였습니다.
//     const { isLoading, isError, data, error } = useQuery<ReceivedNotesRes>(
//         ['receivedntnote', Userid], // queryKey에 Userid를 포함시켰습니다.
//         async () => {
//             try {
//                 const response = await api.get("/note/received/", {
//                     params: {
//                         id: Userid,
//                     },
//                 });
//                 return response.data; // 데이터를 반환하도록 수정하였습니다.
//             } catch (error) {
//                 throw error; // 에러를 던져서 useQuery가 에러를 처리하도록 합니다.
//             }
//         }
//     );
    

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error: {error}</div>;
//     }

//     if (data) {
//         // 데이터를 활용하여 렌더링하는 부분을 추가하세요.
//         return (
//             <div>
//                 {/* 예시: 데이터를 매핑하여 표시 */}
//                 {data.map((note) => (
//                     <div key={note.id}>
//                         {/* 데이터에 맞게 표시 */}
//                         {note.receiver} - {note.date}
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     return null;
// };




export const GetResponseNote = () => {
    return (
        <div>
            
        </div>
    );
};

