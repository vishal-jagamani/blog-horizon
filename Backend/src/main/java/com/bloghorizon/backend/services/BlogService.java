package com.bloghorizon.backend.services;

import com.bloghorizon.backend.entity.Blog;
import com.bloghorizon.backend.dto.BlogDto;
import org.springframework.data.domain.Page;

public interface BlogService {
    Blog createBlog(Blog blog);
    Page<BlogDto> getAllBlogs(int page, int size);
    Blog getBlogById(Long id);
    Blog updateBlog(Long id, Blog blog);
    void deleteBlog(Long id);
    Page<BlogDto> getBlogsByAuthorId(String auth0Id, int page, int limit);
}