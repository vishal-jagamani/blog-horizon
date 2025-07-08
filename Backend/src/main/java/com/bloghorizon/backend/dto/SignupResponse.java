package com.bloghorizon.backend.dto;

import com.bloghorizon.backend.entity.User;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SignupResponse {
    private String auth0UserId;
    private String username;
    private String email;
    private boolean completedSignup;

    public SignupResponse(User user) {
        this.auth0UserId = user.getAuth0UserId();
        this.username = user.getUsername();
        this.email = user.getEmail();
        this.completedSignup = user.isCompletedSignup();
    }
}
