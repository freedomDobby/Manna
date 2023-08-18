package com.ssafy.manna.messenger.controller;

import com.ssafy.manna.global.util.ResponseTemplate;
import com.ssafy.manna.member.dto.response.MemberFindIdResponse;
import com.ssafy.manna.messenger.domain.Note;
import com.ssafy.manna.messenger.dto.request.NoteSendRequest;
import com.ssafy.manna.messenger.dto.request.SogaeNoteSendRequest;
import com.ssafy.manna.messenger.dto.response.NoteDetailResponse;
import com.ssafy.manna.messenger.dto.response.NoteListResponse;
import com.ssafy.manna.messenger.dto.response.SogaeNoteDetailResponse;
import com.ssafy.manna.messenger.repository.NoteRepository;
import com.ssafy.manna.messenger.service.NoteService;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import static com.ssafy.manna.member.Enums.MemberInfoEnum.MEMBER_SEARCH_SUCCESS;
import static com.ssafy.manna.messenger.Enums.NoteExceptionsEnum.*;
@RestController
@RequiredArgsConstructor
@EnableWebMvc
@Slf4j
@RequestMapping("/api/note")
public class NoteController {

    private final NoteService noteService;

    private final NoteRepository noteRepository;

    //일반 쪽지 쓰기
    @PostMapping("/send")
    public ResponseEntity<ResponseTemplate> sendNote(@RequestBody NoteSendRequest noteSendRequest) {
         noteService.send(noteSendRequest);
         return new ResponseEntity<>(
           ResponseTemplate.builder()
                   .result(true)
                   .msg(NOTE_SEND_SUCCESS.getValue())
                   .build(),
                 HttpStatus.OK
         );
    }

    //소개팅 쪽지 쓰기
    @PostMapping("/sogae/send")
    public ResponseEntity<ResponseTemplate> sendSogaeNote(@RequestBody SogaeNoteSendRequest sogaeNoteSendRequest) {

        noteService.sendSogaeNote(sogaeNoteSendRequest);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(NOTE_SOGAE_SEND_SUCCESS.getValue())
                        .build(),
                HttpStatus.OK
        );
    }

    //받은 쪽지 삭제
    @DeleteMapping("/{noteId}/{userId}")
    public ResponseEntity<ResponseTemplate> deleteNote(@PathVariable("noteId") int noteId, @PathVariable("userId") String userId) throws Exception {

        noteService.deleteNote(noteId,userId);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(NOTE_DELETE_SUCCESS.getValue())
                        .build(),HttpStatus.OK
        );

    }

    //보낸 쪽지 삭제


    //쪽지 상세보기
    @ApiResponse(responseCode = "200", description = "성공", content = {
            @Content(mediaType = "application/json", schema = @Schema(implementation = NoteDetailResponse.class)),
            @Content(mediaType = "application/json", schema = @Schema(implementation = SogaeNoteDetailResponse.class))
    })
    @GetMapping("/{noteId}")
    public ResponseEntity<?> readNote(@PathVariable("noteId") int noteId) {
        Note note = noteRepository.findById(noteId).orElseThrow(() -> new RuntimeException(NOTE_EXIST_ERROR.getValue()));
        if (!note.getIsSogae()) {
                //일반 쪽지 인 경우
                NoteDetailResponse noteDetailResponse = noteService.readDetailNote(noteId);
                return new ResponseEntity<>(
                    ResponseTemplate.<NoteDetailResponse>builder()
                            .msg(MEMBER_SEARCH_SUCCESS.getValue())
                            .data(noteDetailResponse)
                            .result(true)
                            .build(),
                    HttpStatus.OK);
        } else {
                //소개팅 쪽지인 경우
                SogaeNoteDetailResponse sogaeNoteDetailResponse = noteService.readSogaeDetailNote(noteId);
                return new ResponseEntity<>(
                    ResponseTemplate.<SogaeNoteDetailResponse>builder()
                            .msg(MEMBER_SEARCH_SUCCESS.getValue())
                            .data(sogaeNoteDetailResponse)
                            .result(true)
                            .build(),
                    HttpStatus.OK);
        }
    }

    //쪽지 리스트(받은 쪽지함)
    @GetMapping("/received/{userId}")
    public ResponseEntity<ResponseTemplate<List<NoteListResponse>>> getReceivedNoteList(@PathVariable("userId") String userId) {
        List<NoteListResponse> receivedNoteList = noteService.receivedNoteList(userId);
        Collections.reverse(receivedNoteList);
        return new ResponseEntity<>(
                ResponseTemplate.<List<NoteListResponse>>builder()
                        .result(true)
                        .msg(RECEIVED_NOTE_SUCCESS.getValue())
                        .data(receivedNoteList)
                        .build(),HttpStatus.OK
        );

    }

    //쪽지 리스트(보낸 쪽지함)
    @GetMapping("/sent/{userId}")
    public ResponseEntity<ResponseTemplate<List<NoteListResponse>>> getSentNoteList(@PathVariable("userId") String userId) {
        List<NoteListResponse> sentNoteList = noteService.sentNoteList(userId);
        Collections.reverse(sentNoteList);
        return new ResponseEntity<>(
                ResponseTemplate.<List<NoteListResponse>>builder()
                        .result(true)
                        .msg(SENT_NOTE_SUCCESS.getValue())
                        .data(sentNoteList)
                        .build(),HttpStatus.OK
        );

    }

    //소개팅 쪽지 수락
    @GetMapping("/sogae/accept/{noteId}")
    public ResponseEntity<ResponseTemplate> acceptSogaeting(@PathVariable("noteId") int noteId) {
        noteService.acceptSogating(noteId);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(SOGAE_ACCEPT_MESSAGE.getValue())
                        .build(),HttpStatus.OK
        );
    }

    //소개팅 쪽지 거절
    @GetMapping("/sogae/refuse/{noteId}")
    public ResponseEntity<?> refuseSogaeting(@PathVariable("noteId") int noteId) {

        noteService.refuseSogating(noteId);
        return new ResponseEntity<>(
                ResponseTemplate.builder()
                        .result(true)
                        .msg(SOGAE_DECLINE_MESSAGE.getValue())
                        .build(),HttpStatus.OK
        );
    }

    //새로운 쪽지 확인 - 안읽은거 있으면 true, 없으면 false
    @GetMapping("/new/{userId}")
    public ResponseEntity<ResponseTemplate<List<NoteListResponse>>> getNewNoteList(@PathVariable("userId") String userId) {
        List<NoteListResponse> newNoteList = noteService.newNoteList(userId);
        return new ResponseEntity<>(
                ResponseTemplate.<List<NoteListResponse>>builder()
                        .result(true)
                        .msg(NEW_NOTE_SUCCESS.getValue())
                        .data(newNoteList)
                        .build(),
                HttpStatus.OK
        );

    }

}
