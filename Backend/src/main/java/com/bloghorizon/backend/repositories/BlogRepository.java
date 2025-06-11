package com.bloghorizon.backend.repositories;

import com.bloghorizon.backend.dtos.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BlogRepository extends MongoRepository<Blog,Long> {
}