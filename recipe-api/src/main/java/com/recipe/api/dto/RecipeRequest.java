package com.recipe.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class RecipeRequest {
    @NotBlank(message = "Name is required")
    private String name;

    private String description;

    @NotBlank(message = "Ingredients are required")
    private String ingredients;

    @NotBlank(message = "Instructions are required")
    private String instructions;

    private String imageUrl;

    @NotNull(message = "Cooking time is required")
    @Positive(message = "Cooking time must be positive")
    private Integer cookingTime;

    @Positive(message = "Servings must be positive")
    private Integer servings;
} 