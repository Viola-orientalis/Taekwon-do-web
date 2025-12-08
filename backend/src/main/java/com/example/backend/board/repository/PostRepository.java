package com.moonru.backend.board.repository;

import com.moonru.backend.board.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    // 카테고리로 찾기 (예: SELECT * FROM post WHERE category = ?)
    List<Post> findByCategory(String category);
    
    // 작성일 내림차순(최신순) 정렬해서 가져오기
    List<Post> findAllByOrderByCreatedAtDesc();
    List<Post> findByCategoryOrderByCreatedAtDesc(String category);
}