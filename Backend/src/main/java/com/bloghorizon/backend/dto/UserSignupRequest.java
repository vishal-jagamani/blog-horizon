package com.bloghorizon.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignupRequest {

    @NotBlank
    private String auth0Id;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String name;
}

