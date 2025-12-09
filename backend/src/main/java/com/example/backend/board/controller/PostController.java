package com.example.backend.board.controller;

import com.example.backend.board.dto.*;
import com.example.backend.board.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
public class PostController {

    // 리포지토리가 아니라 서비스(Service)를 사용합니다.
    private final PostService postService;

    // 1. 목록 조회
    @GetMapping
    public ResponseEntity<List<PostResponse>> getList(@RequestParam(required = false) String category) {
        return ResponseEntity.ok(postService.getPosts(category));
    }

    // 2. 상세 조회
    @GetMapping("/{id}")
    public ResponseEntity<PostResponse> getDetail(@PathVariable Long id) {
        return ResponseEntity.ok(postService.getPost(id));
    }

    // 3. 글 작성
    @PostMapping
    public ResponseEntity<PostResponse> createPost(@RequestBody PostRequest request, Authentication authentication) {
        return ResponseEntity.ok(postService.createPost(request, authentication.getName()));
    }

    // ⭐ 4. 글 수정 (여기가 추가되었습니다!)
    @PutMapping("/{id}")
    public ResponseEntity<PostResponse> updatePost(
            @PathVariable Long id, 
            @RequestBody PostRequest request, 
            Authentication authentication
    ) {
        return ResponseEntity.ok(postService.updatePost(id, request, authentication.getName()));
    }

    // 5. 글 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id, Authentication authentication) {
        postService.deletePost(id, authentication.getName());
        return ResponseEntity.ok().build();
    }
}