package com.recipe.api.repository;

import com.recipe.api.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
 
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    // Basic CRUD operations are automatically provided by JpaRepository
    // You can add custom query methods here if needed
} 