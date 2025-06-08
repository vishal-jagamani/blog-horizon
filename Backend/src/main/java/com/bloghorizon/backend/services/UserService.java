package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dtos.UserResponse;
import com.bloghorizon.backend.dtos.UserSignupRequest;
import com.bloghorizon.backend.entities.User;
import com.bloghorizon.backend.repositories.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public UserResponse registerUser(UserSignupRequest request) {
        if (repository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("User with this email already exists");
        }

        if (repository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already taken");
        }

        User user = new User(request.getUsername(), request.getEmail());
        User savedUser = repository.save(user);
        return new UserResponse(savedUser.getId(), savedUser.getUsername(), savedUser.getEmail());
    }
}