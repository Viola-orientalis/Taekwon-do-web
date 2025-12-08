package com.moonru.backend.board.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    private String category; // "FREE", "QNA" 등

    private String author; // 작성자 ID

    @CreationTimestamp
    private LocalDateTime createdAt; // 작성일 자동 저장

    @Builder
    public Post(String title, String content, String category, String author) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.author = author;
    }
    
    // 수정 편의 메서드
    public void update(String title, String content, String category) {
        this.title = title;
        this.content = content;
        this.category = category;
    }
}