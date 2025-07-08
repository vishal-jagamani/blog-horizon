package com.bloghorizon.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignupRequest {

    private String auth0UserId;
    private String email;
    private String username;
}

