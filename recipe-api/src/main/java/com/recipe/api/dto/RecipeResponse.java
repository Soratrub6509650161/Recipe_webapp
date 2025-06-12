package com.recipe.api.dto;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class RecipeResponse {
    private Long id;
    private String name;
    private String description;
    private String ingredients;
    private String instructions;
    private String imageUrl;
    private Integer cookingTime;
    private Integer servings;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
} 