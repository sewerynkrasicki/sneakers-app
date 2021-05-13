package com.example.sneakers.service;

import com.example.sneakers.model.Sneaker;

import java.util.List;
import java.util.Optional;

public interface SneakerService {

    List<Sneaker> findAll();
    Optional<Sneaker> findByName(String name);
    Optional<Sneaker> findById(Long id);
    void addNew(Sneaker sneaker);
    void delete(Long id);
}
