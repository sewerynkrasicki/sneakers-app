package com.example.sneakers.service.impl;

import com.example.sneakers.model.Sneaker;
import com.example.sneakers.repository.SneakerRepository;
import com.example.sneakers.service.SneakerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SneakerServiceImpl implements SneakerService {
    private final SneakerRepository repository;

    @Override
    public List<Sneaker> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Sneaker> findByName(String name) {
        return repository.findByName(name);
    }

    @Override
    public Optional<Sneaker> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    @Transactional
    public void addNew(Sneaker sneaker) {
        repository.save(sneaker);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
