package com.example.sneakers.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.URL;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.Date;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Sneaker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @NotBlank
    @Size(min = 3, max = 100)
    private String brand;

    @NotBlank
    @Size(min = 3, max = 100)
    private String name;

    @Lob
    @Size(min = 3, max = 300)
    private String description;

    @DecimalMin(value = "0.0", inclusive = false)
    private BigDecimal price;

    @URL(protocol = "http")
    @NotBlank
    private String imageUrl;

    @URL
    @NotBlank
    private String shopUrl;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date releaseDate;

}
