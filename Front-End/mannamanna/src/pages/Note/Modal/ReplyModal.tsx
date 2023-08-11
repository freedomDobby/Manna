// import { useRecoilState } from "recoil";
// import {
//   SendNoteModalAtom,
//   idAtom,
//   sendNoteAtom,
//   sendNoteReceiverAtom,
// } from "../../../Recoil/State";
// import MacBookBox from "../../../components/common/macbookBox";
// import React from "react";
// // import { TextField } from '@mui/material';
// import { MessageReq, SogaetingReq } from "../../../apis/Request/Request";
// import api from "../../../apis/Api";

export const FalseNoteModal = () => {
  //   const [open, setOpen] = useRecoilState(SendNoteModalAtom);
  //   const [sendnote, Setsendnote] = useRecoilState(sendNoteAtom);
  //   const [UserId] = useRecoilState(idAtom);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  //   const [notereceiver, setReceiver] = useRecoilState(sendNoteReceiverAtom);
  //   let temp = { ...sendnote };
  //   const sendUnLoveNote = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     const date = new Date();
  //     const dateString = date.toISOString();
  //     const updatedMessage: MessageReq = {
  //       receiver: notereceiver,
  //       sender: temp.sender,
  //       subject: temp.subject,
  //       content: temp.content,
  //       isSogae: temp.isSogae,
  //       date: dateString,
  //     };
  //     console.log(updatedMessage);
  //     try {
  //       const response = await api.post("/note/send", updatedMessage);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
  //     e.preventDefault();
  //     // Update temp object
  //     if (UserId !== null) {
  //       temp.sender = UserId;
  //     }
  //     console.log(temp.receiver);
  //     console.log(temp.sender);
  //     console.log(temp.content);
  //     console.log(temp.subject);
  //     await sendUnLoveNote(e);
  //     handleClose();
  //   };
  //   return (
  //     <StyledModalContainer>
  //       <Modal
  //         open={open}
  //         onClose={handleClose}
  //         aria-labelledby="modal-modal-title"
  //         aria-describedby="modal-modal-description"
  //       >
  //         <StyledModalContent>
  //           <MacBookBox
  //             width="100%"
  //             height="100%"
  //             color1="#bcd3ff"
  //             color2="#ffffff"
  //             alignItems="center"
  //           >
  //             <StyledFormContainer>
  //               {UserId !== null ? (
  //                 <NoteQuestion question="보내는 이" Id={UserId} />
  //               ) : null}
  //               {notereceiver !== null ? (
  //                 <NoteQuestion question="받는 이" Id={notereceiver} />
  //               ) : null}
  //               <Question
  //                 question="제목"
  //                 Type="text"
  //                 Id="subject"
  //                 placeholder="제목"
  //                 onChange={(e) => (temp.subject = e.target.value)}
  //               />
  //               <TextareaQuestion
  //                 question="내용"
  //                 Id="content"
  //                 placeholder="내용을 입력하세요"
  //                 onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
  //                   (temp.content = e.target.value)
  //                 }
  //               />
  //               <StyledButtonContainer>
  //                 <StyledButton onClick={handleSubmit}>보내기</StyledButton>
  //                 <StyledButton onClick={handleClose}>취소</StyledButton>
  //               </StyledButtonContainer>
  //             </StyledFormContainer>
  //           </MacBookBox>
  //         </StyledModalContent>
  //       </Modal>
  //     </StyledModalContainer>
  //   );
};
