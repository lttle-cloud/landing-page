import Image from "next/image";
import classes from "./blog-post-featured-link.module.scss";
import { BlogPostType } from "@/lib/types";
import Link from "next/link";
import { format } from "date-fns";

const BlogPostFeaturedLink = ({ post }: { post: BlogPostType }) => {
    return (
        <Link href={`/blog/${post.slug}`} className={classes.blogPostCard}>
            <div className={classes.blogPostCardImage}>
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={100}
                    height={60}
                />
            </div>
            <div className={classes.blogPostCardContent}>
                <h3>{post.title}</h3>
                <p>{format(new Date(post.date), "MMMM d, yyyy")}</p>
            </div>
        </Link>
    );
};

export default BlogPostFeaturedLink;
