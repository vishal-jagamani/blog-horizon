package com.bloghorizon.backend.dto;

import com.bloghorizon.backend.entity.User;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupResponse {
    private String auth0Id;
    private String name;
    private String email;
    private boolean completedSignup;

    public SignupResponse(User user) {
        this.auth0Id = user.getAuth0Id();
        this.name = user.getName();
        this.email = user.getEmail();
        this.completedSignup = user.isCompletedSignup();
    }
}
