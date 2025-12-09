package com.example.backend.board.dto;

import com.example.backend.board.entity.Post;
import lombok.Data;
import java.time.LocalDateTime;

@Data
public class PostResponse {
    private Long id;
    private String title;
    private String content;
    private String category;
    private String author;
    private LocalDateTime createdAt;

    // Entity -> DTO 변환 생성자
    public PostResponse(Post post) {
        this.id = post.getId();
        this.title = post.getTitle();
        this.content = post.getContent();
        this.category = post.getCategory();
        this.author = post.getAuthor();
        this.createdAt = post.getCreatedAt();
    }
}