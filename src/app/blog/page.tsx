import PageFooter from "@/components/page-footer/page-footer";
import PageHeader from "@/components/page-header/page-header";
import ShapesMarquee from "@/components/shapes-marquee/shapes-marquee";
import rootClasses from "../root.module.scss";
import blogClasses from "./blog.module.scss";

import { getAllPosts } from "@/lib/api";
import BlogPostCard from "@/components/blog-post-card/blog-post-card";
import Image from "next/image";
import BlogPostFeaturedLink from "@/components/blog-post-featured-link/blog-post-featured-link";
import Button from "@/components/button/button";
import Link from "next/link";
import {
    DISCORD_URL,
    IGNITION_URL,
    LINKEDIN_URL,
    SUBSCRIBE_URL,
} from "../constants";

export default async function Blog() {
    // Fetch posts on the server
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "ogImage",
        "excerpt",
        "tags",
        "featured",
    ]);

    const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);

    return (
        <div className={rootClasses.root}>
            <PageHeader />

            <div className={blogClasses.blogContainer}>
                <main className={blogClasses.main}>
                    <div className={blogClasses.titleContainer}>
                        <h1>
                            <span>lttle</span> blog
                        </h1>
                        <p>
                            little subtitle about the blog with a few words that
                            say something
                        </p>
                    </div>
                    <div className={blogClasses.mainContent}>
                        <div className={blogClasses.postList}>
                            {allPosts.map((post) => (
                                <BlogPostCard key={post.slug} post={post} />
                            ))}
                        </div>
                        <aside className={blogClasses.sidebar}>
                            <div className={blogClasses.authorCard}>
                                <div className={blogClasses.authorCardImage}>
                                    <Image
                                        src={"/assets/blog/authors/laur.png"}
                                        alt={"Laur"}
                                        width={256}
                                        height={256}
                                    />
                                </div>
                                <h3>laurențiu ciobanu</h3>
                                <p>
                                    little description about laurențiu ciobanu,
                                    his background, his interests, what kind of
                                    food does he like? what are the names of his
                                    pets, etc.
                                </p>
                            </div>
                            {featuredPosts.length > 0 && (
                                <div className={blogClasses.featuredPostsCard}>
                                    <h2>featured articles</h2>
                                    <div
                                        className={
                                            blogClasses.featuredPostsList
                                        }
                                    >
                                        {featuredPosts.map((post) => (
                                            <BlogPostFeaturedLink
                                                key={post.slug}
                                                post={post}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className={blogClasses.subscribeCard}>
                                <h2>subscribe to our newsletter</h2>
                                <p>
                                    interested in finding out more about tech
                                    and cloud infrastructure? subscribe now to
                                    receive news every time we write a new blog
                                    post
                                </p>
                                <div className={blogClasses.buttonContainer}>
                                    <Link href={SUBSCRIBE_URL} target="_blank">
                                        <Button tabIndex={-1}>subscribe</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className={blogClasses.otherSocialsCard}>
                                <h2>check out our other channels</h2>
                                <p>
                                    we&apos;re active on these platforms as
                                    well.
                                </p>

                                <div className={blogClasses.buttonsContainer}>
                                    <Link href={IGNITION_URL} target="_blank">
                                        <Button
                                            variant="primary"
                                            width="full"
                                            tabIndex={-1}
                                        >
                                            github
                                        </Button>
                                    </Link>
                                    <Link href={DISCORD_URL} target="_blank">
                                        <Button
                                            variant="purple"
                                            width="full"
                                            tabIndex={-1}
                                        >
                                            discord
                                        </Button>
                                    </Link>
                                    <Link href={LINKEDIN_URL} target="_blank">
                                        <Button
                                            variant="blue"
                                            width="full"
                                            tabIndex={-1}
                                        >
                                            linkedin
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </main>
            </div>

            <ShapesMarquee />
            <PageFooter />
        </div>
    );
}
