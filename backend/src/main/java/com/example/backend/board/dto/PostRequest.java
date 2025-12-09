package com.example.backend.board.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostRequest {
    private String title;
    private String content;
    private String category; // "FREE", "QNA" 등
}