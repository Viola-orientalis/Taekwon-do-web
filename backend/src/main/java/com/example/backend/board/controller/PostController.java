package com.example.backend.board.controller;

import com.example.backend.board.dto.*;
import com.example.backend.board.entity.Post;
import com.example.backend.board.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;

    // 1. 목록 조회 (카테고리 필터 가능)
    @GetMapping
    public List<Post> getList(@RequestParam(required = false) String category) {
        if (category != null && !category.isEmpty()) {
            return postRepository.findByCategoryOrderByCreatedAtDesc(category);
        }
        return postRepository.findAllByOrderByCreatedAtDesc();
    }

    // 2. 상세 조회
    @GetMapping("/{id}")
    public Post getDetail(@PathVariable Long id) {
        return postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("글이 없습니다."));
    }

    // 3. 글 작성 (로그인한 사람만)
    @PostMapping
    public Post createPost(@RequestBody PostRequest dto, Authentication authentication) {
        Post post = Post.builder()
                .title(dto.getTitle())
                .content(dto.getContent())
                .category(dto.getCategory())
                .author(authentication.getName()) // 토큰에서 작성자 이름 꺼냄
                .build();
        return postRepository.save(post);
    }

    // 4. 글 삭제 (본인만)
    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id, Authentication authentication) {
        Post post = postRepository.findById(id).orElseThrow();
        if (!post.getAuthor().equals(authentication.getName())) {
            throw new RuntimeException("삭제 권한이 없습니다.");
        }
        postRepository.delete(post);
    }
}