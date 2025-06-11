package com.bloghorizon.backend.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseBuilder {

    public static <T> ResponseEntity<ApiResponse<T>> success(T data, String message) {
        return ResponseEntity.ok(new ApiResponse<>(true, message, data));
    }

    public static <T> ResponseEntity<ApiResponse<T>> created(T data, String message) {
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, message, data));
    }

    public static <T> ResponseEntity<ApiResponse<T>> error(String message, HttpStatus status) {
        return ResponseEntity.status(status).body(new ApiResponse<>(false, message, null));
    }

    public static <T> ResponseEntity<ApiResponse<T>> noContent(String message) {
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse<>(true, message, null));
    }
}

