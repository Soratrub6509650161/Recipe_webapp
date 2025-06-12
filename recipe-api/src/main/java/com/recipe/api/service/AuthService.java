package com.recipe.api.service;

import com.recipe.api.dto.auth.AuthResponse;
import com.recipe.api.dto.auth.LoginRequest;
import com.recipe.api.dto.auth.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);
    AuthResponse login(LoginRequest request);
} 