package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dto.CompleteSignupRequest;
import com.bloghorizon.backend.dto.SignupResponse;
import com.bloghorizon.backend.dto.UserResponse;
import com.bloghorizon.backend.dto.UserSignupRequest;
import com.bloghorizon.backend.response.ApiResponse;
import org.springframework.http.ResponseEntity;

public interface UserService {

    ResponseEntity<ApiResponse<SignupResponse>> signup(UserSignupRequest request);

    ResponseEntity<ApiResponse<UserResponse>> getUserDetails(String auth0Id);

    ResponseEntity<ApiResponse<UserResponse>> completeSignup(String auth0Id, CompleteSignupRequest request);

    ResponseEntity<ApiResponse<Boolean>> checkUsernameAvailability(String username);
}