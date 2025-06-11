package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dtos.Blog;

import java.util.List;

public interface BlogService {
    Blog createBlog(Blog blog);
    List<Blog> getAllBlogs();
    Blog getBlogById(Long id);
    Blog updateBlog(Long id, Blog blog);
    void deleteBlog(Long id);
}