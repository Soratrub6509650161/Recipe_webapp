package com.recipe.api.controller;

import com.recipe.api.dto.RecipeRequest;
import com.recipe.api.dto.RecipeResponse;
import com.recipe.api.model.Recipe;
import com.recipe.api.service.RecipeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "*") // Allow requests from your frontend
@Tag(name = "Recipe Controller", description = "APIs for managing recipes")
public class RecipeController {

    private final RecipeService recipeService;

    @Autowired
    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    @Operation(summary = "Get all recipes")
    public ResponseEntity<List<RecipeResponse>> getAllRecipes() {
        List<RecipeResponse> recipes = recipeService.getAllRecipes().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get recipe by ID")
    public ResponseEntity<RecipeResponse> getRecipeById(@PathVariable Long id) {
        return recipeService.getRecipeById(id)
                .map(this::mapToResponse)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @Operation(summary = "Create a new recipe")
    public ResponseEntity<RecipeResponse> createRecipe(@Valid @RequestBody RecipeRequest recipeRequest) {
        Recipe recipe = mapToEntity(recipeRequest);
        Recipe savedRecipe = recipeService.createRecipe(recipe);
        return ResponseEntity.ok(mapToResponse(savedRecipe));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update an existing recipe")
    public ResponseEntity<RecipeResponse> updateRecipe(
            @PathVariable Long id,
            @Valid @RequestBody RecipeRequest recipeRequest) {
        Recipe recipe = mapToEntity(recipeRequest);
        Recipe updatedRecipe = recipeService.updateRecipe(id, recipe);
        return ResponseEntity.ok(mapToResponse(updatedRecipe));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete a recipe")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
        return ResponseEntity.ok().build();
    }

    private RecipeResponse mapToResponse(Recipe recipe) {
        RecipeResponse response = new RecipeResponse();
        response.setId(recipe.getId());
        response.setName(recipe.getName());
        response.setDescription(recipe.getDescription());
        response.setIngredients(recipe.getIngredients());
        response.setInstructions(recipe.getInstructions());
        response.setImageUrl(recipe.getImageUrl());
        response.setCookingTime(recipe.getCookingTime());
        response.setServings(recipe.getServings());
        return response;
    }

    private Recipe mapToEntity(RecipeRequest request) {
        Recipe recipe = new Recipe();
        recipe.setName(request.getName());
        recipe.setDescription(request.getDescription());
        recipe.setIngredients(request.getIngredients());
        recipe.setInstructions(request.getInstructions());
        recipe.setImageUrl(request.getImageUrl());
        recipe.setCookingTime(request.getCookingTime());
        recipe.setServings(request.getServings());
        return recipe;
    }
} 