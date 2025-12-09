package com.example.backend.common.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Collections;
import java.util.Date;
import java.util.List;

@Component
public class JwtTokenProvider {

    @Value("${jwt.secret}")
    private String secretKeyString; // application.yml에서 가져옴

    private SecretKey secretKey;
    private final long tokenValidityInMilliseconds = 1000L * 60 * 60; // 1시간 유효

    // 객체 생성 후 secretKey를 암호화 객체로 변환
    @PostConstruct
    protected void init() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKeyString);
        this.secretKey = Keys.hmacShaKeyFor(keyBytes);
    }

    // 1. 토큰 생성
    public String createToken(String username, String role) {
        Date now = new Date();
        Date validity = new Date(now.getTime() + tokenValidityInMilliseconds);

        return Jwts.builder()
                .subject(username) // 사용자 ID
                .claim("role", role) // 권한 정보
                .issuedAt(now)
                .expiration(validity) // 만료 시간
                .signWith(secretKey) // 암호화
                .compact();
    }

    // 2. 토큰에서 인증 정보(아이디) 가져오기
    public Authentication getAuthentication(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(secretKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        String username = claims.getSubject();
        String role = claims.get("role", String.class);

        // Spring Security가 이해하는 UserDetails 객체 생성
        UserDetails userDetails = new User(username, "", 
                List.of(new SimpleGrantedAuthority(role)));
        
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // 3. 토큰 유효성 검사
    public boolean validateToken(String token) {
        try {
            Jwts.parser().verifyWith(secretKey).build().parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            // 토큰이 만료되었거나 위조되었을 경우
            return false;
        }
    }
}