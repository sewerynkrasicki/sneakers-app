package com.example.sneakers.repository;

import com.example.sneakers.model.Sneaker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SneakerRepository extends JpaRepository<Sneaker, Long> {
    Optional<Sneaker> findByName(String name);
}
