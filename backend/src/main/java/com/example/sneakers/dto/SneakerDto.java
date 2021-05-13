package com.example.sneakers.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SneakerDto {
    private String brand;
    private String name;
    private String description;
    private BigDecimal price;
    private String imageUrl;
    private String shopUrl;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date releaseDate;
}
