package com.bloghorizon.backend.repositories;


import com.bloghorizon.backend.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User,Long> {
    boolean existsByUsername(String username);
    List<User> findByAuth0IdIn(List<String> auth0Ids);
    Optional<User> findByAuth0Id(String auth0Id);
}

