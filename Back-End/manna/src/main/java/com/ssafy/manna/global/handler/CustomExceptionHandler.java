package com.ssafy.manna.global.handler;

import com.ssafy.manna.global.util.ResponseTemplate;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ResponseTemplate<String>> handle(RuntimeException e) {
        log.error(e.getMessage());
        return new ResponseEntity<>(
                ResponseTemplate.<String>builder()
                        .msg(e.getMessage())
                        .result(false)
                        .data(null)
                        .build(),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
