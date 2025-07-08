package com.bloghorizon.backend.controllers;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class TestEndpoint {

    @GetMapping("/testEndpoint")
    public String testEndpoint() {
        return "Blog Horizon Test Endpoint";
    }

}
