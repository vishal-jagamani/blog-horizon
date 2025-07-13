// APIs types
export interface Blog {
    id: string;
    title: string;
    content: string;
    authorId: string;
    name: string;
    authorName: string;
    authorUserName: string;
    tags: string[];
    likesCount: number;
    commentsCount: number;
    createdAt: number;
    updatedAt: number;
}

export interface CreateBlogPayload {
    title: string;
    content: string;
}

export interface getBlogsResponse {
    status: boolean;
    message: string;
    data: {
        content: Blog[];
        totalCount: number;
        limit: number;
        page: number;
    };
}

export interface createBlogData {
    title: string;
    content: string;
    tags?: string[];
    auth0UserId: string;
    authorName: string;
    authorUserName: string;
}

export interface createBlogResponse {
    status: boolean;
    message: string;
    data: Blog;
}
