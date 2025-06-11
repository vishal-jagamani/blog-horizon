package com.bloghorizon.backend.controllers;

import com.bloghorizon.backend.response.ApiResponse;
import com.bloghorizon.backend.dtos.Blog;
import com.bloghorizon.backend.response.ResponseBuilder;
import com.bloghorizon.backend.services.BlogService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/blogs")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Blog>> createBlog(@RequestBody Blog blog) {
        return ResponseBuilder.created(
                blogService.createBlog(blog),
                "Blog created successfully"
        );
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Blog>>> getAllBlogs() {
        List<Blog> blogs = blogService.getAllBlogs();
        return ResponseBuilder.success(blogs, "Blogs fetched successfully");
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Blog>> getBlogById(@PathVariable Long id) {
        Blog blog = blogService.getBlogById(id);
        if (blog == null) {
            return ResponseBuilder.error("Blog not found", HttpStatus.NOT_FOUND);
        }
        return ResponseBuilder.success(blog, "Blog fetched successfully");
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Blog>> updateBlog(@PathVariable Long id, @RequestBody Blog blog) {
        Blog updated = blogService.updateBlog(id, blog);
        if (updated == null) {
            return ResponseBuilder.error("Blog not found for update", HttpStatus.NOT_FOUND);
        }
        return ResponseBuilder.success(updated, "Blog updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteBlog(@PathVariable Long id) {
        try {
            blogService.deleteBlog(id);
            return ResponseBuilder.noContent("Blog deleted successfully");
        } catch (Exception e) {
            return ResponseBuilder.error("Blog not found", HttpStatus.NOT_FOUND);
        }
    }
}

