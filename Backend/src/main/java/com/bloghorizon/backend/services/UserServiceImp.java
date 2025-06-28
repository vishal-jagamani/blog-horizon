package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dto.CompleteSignupRequest;
import com.bloghorizon.backend.dto.SignupResponse;
import com.bloghorizon.backend.dto.UserResponse;
import com.bloghorizon.backend.dto.UserSignupRequest;
import com.bloghorizon.backend.entity.User;
import com.bloghorizon.backend.repositories.UserRepository;
import com.bloghorizon.backend.response.ApiResponse;
import com.bloghorizon.backend.response.ResponseBuilder;
import com.bloghorizon.backend.utils.SequenceGeneratorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImp implements UserService{

    private final UserRepository userRepository;
    private final SequenceGeneratorService sequenceGenerator;


    @Override
    public ResponseEntity<ApiResponse<SignupResponse>> signup(UserSignupRequest request) {
        if (userRepository.findByAuth0Id(request.getAuth0Id()).isPresent()) {
            ResponseBuilder.conflict("User with Auth0 ID already exists");
        }

        User user = new User();
        user.setId(sequenceGenerator.generateSequence(User.class.getSimpleName()));
        user.setAuth0Id(request.getAuth0Id());
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setCompletedSignup(false);

        userRepository.save(user);
        return ResponseBuilder.success(new SignupResponse(user), "Signup successful");
    }

    @Override
    public ResponseEntity<ApiResponse<UserResponse>> getUserDetails(String auth0Id) {
        Optional<User> optionalUser = userRepository.findByAuth0Id(auth0Id);
        return optionalUser
                .map(user -> ResponseBuilder.success(new UserResponse(user), "User fetched"))
                .orElseGet(() -> ResponseBuilder.notFound("User not found with Auth0 ID: " + auth0Id));
    }

    @Override
    public ResponseEntity<ApiResponse<Boolean>> checkUsernameAvailability(String username) {
        boolean exists = userRepository.existsByUsername(username);
        return ResponseBuilder.success(!exists, "Username check complete");
    }

    @Override
    public ResponseEntity<ApiResponse<UserResponse>> completeSignup(String auth0Id, CompleteSignupRequest request) {
        Optional<User> optionalUser = userRepository.findByAuth0Id(auth0Id);
        if (optionalUser.isEmpty()) {
            return ResponseBuilder.notFound("User not found");
        }

        if (userRepository.existsByUsername(request.getUsername())) {
            return ResponseBuilder.conflict("Username already taken");
        }

        User user = optionalUser.get();
        user.setName(request.getName());
        user.setUsername(request.getUsername());
        user.setBirthday(request.getBirthday());
        user.setBio(request.getBio());
        user.setWebsite(request.getWebsite());
        user.setLocation(request.getLocation());
        user.setCompletedSignup(true);

        userRepository.save(user);
        return ResponseBuilder.success(new UserResponse(user), "Signup completed successfully");
    }
}
