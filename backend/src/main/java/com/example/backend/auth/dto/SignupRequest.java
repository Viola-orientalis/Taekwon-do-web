package com.moonru.backend.auth.dto;
import lombok.Data;

@Data
public class SignupRequest {
    private String username;
    private String password;
}