package com.example.backend.auth.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "users") // 테이블 이름 user는 예약어라 users 추천
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username; // 아이디

    @Column(nullable = false)
    private String password; // 암호화된 비밀번호

    private String role; // "ROLE_USER" or "ROLE_ADMIN"

    @Builder
    public User(String username, String password, String role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}