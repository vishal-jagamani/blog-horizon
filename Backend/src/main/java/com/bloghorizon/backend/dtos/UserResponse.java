package com.bloghorizon.backend.dtos;

public class UserResponse {
    private final int id;
    private final String username;
    private final String email;

    public UserResponse(int id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }
}

