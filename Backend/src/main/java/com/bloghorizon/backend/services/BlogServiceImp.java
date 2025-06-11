package com.bloghorizon.backend.services;

import com.bloghorizon.backend.dtos.Blog;
import com.bloghorizon.backend.exceptions.ResourceNotFoundException;
import com.bloghorizon.backend.repositories.BlogRepository;
import com.bloghorizon.backend.utils.SequenceGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Date;

@Service
public class BlogServiceImp implements BlogService {

    private final BlogRepository blogRepository;
    private final SequenceGeneratorService sequenceGenerator;

    @Autowired
    public BlogServiceImp(BlogRepository blogRepository, SequenceGeneratorService sequenceGenerator) {
        this.blogRepository = blogRepository;
        this.sequenceGenerator = sequenceGenerator;
    }

    @Override
    public Blog createBlog(Blog blog) {
        blog.setId(sequenceGenerator.generateSequence("blog_sequence"));
        long now = System.currentTimeMillis();
        blog.setCreatedAt(now);
        blog.setUpdatedAt(now);
        return blogRepository.save(blog);
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public Blog getBlogById(Long id) {
        return blogRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Blog not found with id: " + id));
    }

    @Override
    public Blog updateBlog(Long id, Blog updatedBlog) {
        Blog existingBlog = getBlogById(id);
        existingBlog.setTitle(updatedBlog.getTitle());
        existingBlog.setContent(updatedBlog.getContent());
        existingBlog.setTags(updatedBlog.getTags());
        existingBlog.setLikesCount(updatedBlog.getLikesCount());
        existingBlog.setCommentsCount(updatedBlog.getCommentsCount());

        existingBlog.setUpdatedAt(System.currentTimeMillis());

        return blogRepository.save(existingBlog);
    }

    @Override
    public void deleteBlog(Long id) {
        if (!blogRepository.existsById(id)) {
            throw new ResourceNotFoundException("Blog not found with id: " + id);
        }
        blogRepository.deleteById(id);
    }
}
