package com.example.backend.board.service;

import com.example.backend.board.dto.*;
import com.example.backend.board.entity.Post;
import com.example.backend.board.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;

    // 1. 목록 조회 (카테고리 필터링)
    @Transactional(readOnly = true)
    public List<PostResponse> getPosts(String category) {
        List<Post> posts;
        // 카테고리가 있고, "ALL"이 아니면 필터링해서 검색
        if (category != null && !category.isEmpty() && !category.equals("ALL")) {
            posts = postRepository.findByCategoryOrderByCreatedAtDesc(category);
        } else {
            // 없으면 전체 검색
            posts = postRepository.findAllByOrderByCreatedAtDesc();
        }
        // Entity 리스트를 DTO 리스트로 변환해서 반환
        return posts.stream().map(PostResponse::new).collect(Collectors.toList());
    }

    // 2. 상세 조회
    @Transactional(readOnly = true)
    public PostResponse getPost(Long id) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
        return new PostResponse(post);
    }

    // 3. 글 작성
    @Transactional
    public PostResponse createPost(PostRequest request, String author) {
        Post post = Post.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .category(request.getCategory())
                .author(author)
                .build();
        return new PostResponse(postRepository.save(post));
    }

    // 4. 글 수정 ( ⭐ 여기가 문제였던 부분입니다! )
    @Transactional
    public PostResponse updatePost(Long id, PostRequest request, String username) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
        
        // 작성자 본인인지 확인 (보안)
        if (!post.getAuthor().equals(username)) {
            throw new RuntimeException("수정 권한이 없습니다.");
        }
        
        // Entity의 update 메서드를 호출하면, @Transactional이 끝나면서 자동으로 DB가 수정됩니다.
        post.update(request.getTitle(), request.getContent(), request.getCategory());
        
        return new PostResponse(post);
    }

    // 5. 글 삭제
    @Transactional
    public void deletePost(Long id, String username) {
        Post post = postRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글이 없습니다."));
        
        // 작성자 본인인지 확인 (보안)
        if (!post.getAuthor().equals(username)) {
            throw new RuntimeException("삭제 권한이 없습니다.");
        }
        
        postRepository.delete(post);
    }
}