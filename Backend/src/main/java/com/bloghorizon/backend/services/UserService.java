package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dtos.UserResponse;
import com.bloghorizon.backend.dtos.UserSignupRequest;
import com.bloghorizon.backend.entities.User;
import com.bloghorizon.backend.repositories.UserRepository;
import com.bloghorizon.backend.response.ApiResponse;
import com.bloghorizon.backend.response.ResponseBuilder;
import com.bloghorizon.backend.utils.SequenceGeneratorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repository;
    private final SequenceGeneratorService sequenceGenerator;

    public UserService(UserRepository repository, SequenceGeneratorService sequenceGenerator) {
        this.repository = repository;
        this.sequenceGenerator = sequenceGenerator;
    }

    public ResponseEntity<?> registerUser(UserSignupRequest request) {
        if (repository.existsByEmail(request.getEmail())) {
            return ResponseBuilder.error("User with this email already exists", HttpStatus.CONFLICT);
        }

        if (repository.existsByUsername(request.getUsername())) {
            return ResponseBuilder.error("Username already taken", HttpStatus.CONFLICT);
        }

        User user = new User(request.getUsername(), request.getEmail());
        user.setId(sequenceGenerator.generateSequence("user_sequence"));
        User savedUser = repository.save(user);

        UserResponse response = new UserResponse(savedUser.getId(), savedUser.getUsername(), savedUser.getEmail());
        return ResponseBuilder.created(response, "User registered successfully");
    }
}