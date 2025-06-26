package com.bloghorizon.backend.entity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Getter
@Setter
@Document(collection = "blogs")
public class Blog {

    @Id
    private Long id; // Auto-incremented manually

    private String title;
    private String content;
    private String authorId;
    private List<String> tags;
    private int likesCount;
    private long createdAt;
    private long updatedAt;
    private int commentsCount;
}

