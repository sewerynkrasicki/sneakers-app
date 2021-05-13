package com.example.sneakers.exception;

public class SneakerNotFoundException extends RuntimeException{

    public SneakerNotFoundException(Long id){
        super(String.format("Sneaker with Id %d not found", id));
    }
}
