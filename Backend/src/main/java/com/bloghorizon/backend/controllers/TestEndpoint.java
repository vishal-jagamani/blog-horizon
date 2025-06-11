package com.bloghorizon.backend.controllers;

import com.bloghorizon.backend.dtos.UserResponse;
import com.bloghorizon.backend.dtos.UserSignupRequest;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class TestEndpoint {

    @GetMapping("/testEndpoint")
    public String testEndpoint() {
        return "Blog Horizon Test Endpoint";
    }

}
