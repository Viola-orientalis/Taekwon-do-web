package com.example.backend.auth.repository;

import com.example.backend.auth.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// JpaRepository<Entity, PK타입>을 상속받으면 DB 연결 코드가 자동 생성됩니다.
public interface UserRepository extends JpaRepository<User, Long> {
    
    // 아이디(username)로 사용자 찾기 (로그인 시 사용)
    // 결과가 없을 수 있으므로 Optional로 감쌉니다.
    Optional<User> findByUsername(String username);

    // 아이디 중복 가입 체크용 (회원가입 시 사용)
    // 존재하면 true, 없으면 false 반환
    boolean existsByUsername(String username);
}