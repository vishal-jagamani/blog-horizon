package com.bloghorizon.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class BlogDto {

    private Long id;
    private String title;
    private String content;
    private String authorId;
    private String authorName;
    private List<String> tags;
    private int likesCount;
    private int commentsCount;

    public BlogDto(Long id, String title, String content, String authorId, String authorName,
                   List<String> tags, int likesCount, int commentsCount) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.authorId = authorId;
        this.authorName = authorName;
        this.tags = tags;
        this.likesCount = likesCount;
        this.commentsCount = commentsCount;
    }

}
