package com.example.sneakers.controller.api;

import com.example.sneakers.exception.SneakerNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class AdvisorController {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(SneakerNotFoundException.class)
    public void handleNotFound(){

    }
}
