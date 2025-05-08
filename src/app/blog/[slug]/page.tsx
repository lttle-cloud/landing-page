import PageFooter from "@/components/page-footer/page-footer";
import PageHeader from "@/components/page-header/page-header";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import rootClasses from "../../root.module.scss";
import postClasses from "./blog-post.module.scss";
import { getPostBySlug } from "@/lib/api";
import Image from "next/image";
import { format } from "date-fns";
import markdownToHtml from "@/lib/markdownToHtml";
import markdownStyles from "@/styles/markdown-styles.module.scss";
import { cls } from "@/lib/utils";

export default async function BlogPost({
    params: asyncParams,
}: {
    params: Promise<{ slug: string }>;
}) {
    const params = await asyncParams;
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "author",
        "content",
        "coverImage",
        "ogImage",
        "tags",
    ]);

    if (!post) {
        return <div>Post not found</div>;
    }

    const content = await markdownToHtml(post.content);

    return (
        <div className={rootClasses.root}>
            <PageHeader />

            <main className={rootClasses.main}>
                <div className={postClasses.blogPostContainer}>
                    <div className={postClasses.blogPostHeader}>
                        <h1>{post.title}</h1>
                        <div className={postClasses.blogPostSubHeader}>
                            <div
                                className={postClasses.blogPostAuthorContainer}
                            >
                                <Image
                                    src={post.author.picture}
                                    alt={post.author.name}
                                    width={32}
                                    height={32}
                                />
                                <p className={postClasses.blogPostAuthor}>
                                    {post.author.name}
                                </p>
                            </div>
                            •
                            <p className={postClasses.blogPostDate}>
                                {format(new Date(post.date), "MMMM d, yyyy")}
                            </p>
                        </div>
                    </div>
                    <Image
                        className={postClasses.blogPostCoverImage}
                        src={post.coverImage}
                        alt={post.title}
                        width={1200}
                        height={400}
                    />
                    <div
                        className={cls(
                            markdownStyles.markdown,
                            postClasses.blogPostContent
                        )}
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>
            </main>

            <ShapesMarquee />
            <PageFooter />
        </div>
    );
}
