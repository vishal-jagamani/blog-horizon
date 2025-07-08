package com.bloghorizon.backend.controllers;

import com.bloghorizon.backend.dto.CompleteSignupRequest;
import com.bloghorizon.backend.dto.SignupResponse;
import com.bloghorizon.backend.dto.UserResponse;
import com.bloghorizon.backend.dto.UserSignupRequest;
import com.bloghorizon.backend.response.ApiResponse;
import com.bloghorizon.backend.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<ApiResponse<SignupResponse>> signup(@RequestBody @Valid  UserSignupRequest request) {
        return userService.signup(request);
    }

    @GetMapping("/{auth0UserId}")
    public ResponseEntity<ApiResponse<UserResponse>> getUserDetails(@PathVariable String auth0UserId) {
        return userService.getUserDetails(auth0UserId);
    }

    @GetMapping("/username/check")
    public ResponseEntity<ApiResponse<Boolean>> checkUsernameAvailability(@RequestParam("value") String userName) {
        return userService.checkUsernameAvailability(userName);
    }

    @PutMapping("/{auth0UserId}/complete-signup")
    public ResponseEntity<ApiResponse<UserResponse>> completeSignup(
            @PathVariable String auth0UserId,
            @RequestBody @Valid CompleteSignupRequest request) {
        return userService.completeSignup(auth0UserId, request);
    }


}
