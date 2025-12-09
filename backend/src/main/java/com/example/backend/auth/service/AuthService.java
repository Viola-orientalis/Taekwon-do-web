package com.example.backend.auth.service;

import com.example.backend.auth.dto.*;
import com.example.backend.auth.entity.User;
import com.example.backend.auth.repository.UserRepository;
import com.example.backend.common.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // 비밀번호 암호화 도구
    private final JwtTokenProvider jwtTokenProvider; // 토큰 생성 도구

    // 회원가입
    @Transactional
    public void signup(SignupRequest request) {
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("이미 존재하는 아이디입니다.");
        }
        
        User user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword())) // 암호화!
                .role("ROLE_USER")
                .build();
        
        userRepository.save(user);
    }

    // 로그인
    @Transactional
    public AuthResponse login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("가입되지 않은 아이디입니다."));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }

        // 인증 성공 시 토큰 생성
        String token = jwtTokenProvider.createToken(user.getUsername(), user.getRole());

        return new AuthResponse(token, user.getUsername(), user.getRole());
    }
}