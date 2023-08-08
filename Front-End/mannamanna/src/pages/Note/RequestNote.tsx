import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { SendNoteModalAtom, idAtom } from "../../Recoil/State";
import api from "../../apis/Api";
import { NoteContainer, SendContainer } from "./NoteStyle";
import { ReceivedNotesRes } from "../../apis/Response/Response";
import { RequestNoteBody } from "./NoteComponent/NoteBody";

const RequestNote = () => {
  const [userId, setId] = useRecoilState(idAtom);
  const handleRemove = () => {
    // Remove 로직 구현
  };

  const handleCheck = () => {
    // Check 로직 구현
  };
  // React Query 사용
  const { data: receivedNoteList, isLoading, isError } = useQuery<ReceivedNotesRes[]>(
    ["receivedNote"],
    async () => {
      const response = await api.get(`note/sent/${userId}`);
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
        <RequestNoteBody
                key={index}
                comment="보낸 쪽지"
                To={note.receiverName} 
                Title={note.subject}
                Note={note.content}
                Remove={handleRemove}
                Check={handleCheck}
                
              />
      ))}
    </SendContainer>
  );
};

export default RequestNote;
