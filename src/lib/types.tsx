export type BreakpointType = "mobile" | "tablet" | "desktop" | "large";

type BlogPostAuthor = {
    name: string;
    picture: string;
};

export type BlogPostType = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: BlogPostAuthor;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    tags: string[];
    featured: boolean;
};
