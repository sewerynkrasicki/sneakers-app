package com.example.sneakers.controller.api;

import com.example.sneakers.dto.SneakerDto;
import com.example.sneakers.exception.SneakerNotFoundException;
import com.example.sneakers.model.Sneaker;
import com.example.sneakers.service.SneakerService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/sneakers")
public class SneakerController {
    private final SneakerService sneakerService;

    @GetMapping()
    public ResponseEntity<List<Sneaker>> getAllSneakers(){
        return ResponseEntity.ok(sneakerService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sneaker> getSneakerById(@PathVariable Long id){
        Sneaker sneaker = sneakerService.findById(id).orElseThrow(() -> new SneakerNotFoundException(id));
        return ResponseEntity.ok(sneaker);
    }

    @PostMapping()
    public ResponseEntity<Sneaker> addNewSneaker(@RequestBody SneakerDto sneakerDto){
        Sneaker sneaker = Sneaker.builder()
                .brand(sneakerDto.getBrand())
                .name(sneakerDto.getName())
                .description(sneakerDto.getDescription())
                .imageUrl(sneakerDto.getImageUrl())
                .shopUrl(sneakerDto.getShopUrl())
                .price(sneakerDto.getPrice())
                .releaseDate(sneakerDto.getReleaseDate())
                .build();

        sneakerService.addNew(sneaker);
        return ResponseEntity.ok(sneaker);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sneaker> updateSneaker(@RequestBody SneakerDto sneakerDto, @PathVariable Long id){
        Sneaker sneaker = sneakerService.findById(id).orElseThrow(() -> new SneakerNotFoundException(id));
        sneaker.setBrand(sneakerDto.getBrand());
        sneaker.setDescription(sneakerDto.getDescription());
        sneaker.setName(sneakerDto.getName());
        sneaker.setImageUrl(sneakerDto.getImageUrl());
        sneaker.setPrice(sneakerDto.getPrice());
        sneaker.setShopUrl(sneaker.getShopUrl());
        sneaker.setReleaseDate(sneakerDto.getReleaseDate());
        sneakerService.addNew(sneaker);
        return ResponseEntity.ok(sneaker);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Sneaker> deleteSneaker(@PathVariable Long id){
        Sneaker sneaker = sneakerService.findById(id).orElseThrow(() -> new SneakerNotFoundException(id));
        sneakerService.delete(id);
        return ResponseEntity.ok(sneaker);
    }

}
