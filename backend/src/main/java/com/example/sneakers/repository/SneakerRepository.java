package com.example.sneakers.repository;

import com.example.sneakers.model.Sneaker;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SneakerRepository extends JpaRepository<Sneaker, Long> {
    Optional<Sneaker> findByName(String name);
}
