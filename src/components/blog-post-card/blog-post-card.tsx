import Image from "next/image";
import classes from "./blog-post-card.module.scss";
import { BlogPostType } from "@/lib/types";
import Link from "next/link";

const BlogPostCard = ({ post }: { post: BlogPostType }) => {
    return (
        <Link href={`/blog/${post.slug}`} className={classes.blogPostCard}>
            <div className={classes.blogPostCardImage}>
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={500}
                    height={500}
                />
            </div>
            <div className={classes.blogPostCardContent}>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={classes.blogPostCardTags}>
                    {post.tags?.length &&
                        post.tags.map((tag) => (
                            <span className={classes.blogPostCardTag} key={tag}>
                                {tag}
                            </span>
                        ))}
                </div>
            </div>
        </Link>
    );
};

export default BlogPostCard;
