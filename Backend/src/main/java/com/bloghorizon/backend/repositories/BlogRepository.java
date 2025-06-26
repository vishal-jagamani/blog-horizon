package com.bloghorizon.backend.repositories;

import com.bloghorizon.backend.dto.BlogDto;
import com.bloghorizon.backend.entity.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogRepository extends MongoRepository<Blog, Long> {
    Page<Blog> findByAuthorId(String auth0Id, Pageable pageable);
}