import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';
import { useRouter } from "next/router";
//Compnents
import { getScrollProxy } from "../../Comps/PageLayouts/Scrollbar";
import "../../Comps/PageLayouts/EdgeEasingPlugin";
import Footer from "../../Comps/PageLayouts/Footer";
import { contentfulClient } from "../../Lib/ContentfulClient";
import BlogPostIntro from "../../Comps/BlogPost/BlogPostIntro";
import { convertDate } from "../../Comps/PageLayouts/util";
import BlogPostText from "../../Comps/BlogPost/BlogPostText";
import BlogPostImages from "../../Comps/BlogPost/BlogPostImages";
import BlogPostTextImage from "../../Comps/BlogPost/BlogPostTextImages";
import MorePost from "../../Comps/BlogPost/MorePost";

export const getStaticPaths = async () => {

    const blogPostRes = await contentfulClient.getEntries({
        content_type: "blogPost"
    });

    const paths = blogPostRes.items.map((post) => {
        return {
            params: { slug: post.fields.slug }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {

    const blogPostRes = await contentfulClient.getEntries({
        content_type: "blogPost",
        "fields.slug": params.slug
    });

    const blogPosts = await contentfulClient.getEntries({
        content_type: "blogPost",
    });

    const filteredBlogPosts = blogPosts.items.filter((post) => post.fields.slug !== params.slug)

    const randomNumArr = [];
    while (randomNumArr.length < 3) {
        let randomNum = Math.floor(Math.random() * 3);
        if (randomNumArr.indexOf(randomNum) === -1) {
            randomNumArr.push(randomNum);
        }
    }

    const morePosts = [
        filteredBlogPosts[0],
        filteredBlogPosts[1],
        filteredBlogPosts[2],
    ]

    const blogPostItems = blogPostRes.items[0].fields;

    const paragrapgKeys = Object.keys(blogPostItems).filter((key) => key.includes("sectionParagraph"));

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    });

    return {
        props: {
            morePosts: morePosts.map((post) => ({
                title: post.fields.title,
                image: "https:" + post.fields.featureImages[0].fields.file.url,
                slug: post.fields.slug,
                category: post.fields.category
            })),
            blogPost: {
                featureImages: blogPostItems.featureImages.map((image) => {
                    return "https:" + image.fields.file.url
                }),
                sectionSmallImages: blogPostItems.sectionSmallImages.map((image) => {
                    return "https:" + image.fields.file.url
                }),
                category: blogPostItems.category,
                date: convertDate(blogPostItems.date),
                sectionTitles: blogPostItems.sectionTitle,
                slug: blogPostItems.slug,
                thumbnailText: blogPostItems.thumbnailText,
                title: blogPostItems.title,
                numOfSection: blogPostItems.featureImages.slice(1),
                paragraphs: paragrapgKeys
                    .map((key) => blogPostItems[`${key}`])
                    .map((paragraph) => paragraph.content)
                    .map((content) => content
                        .map((content) => ({
                            type: content.nodeType,
                            content: content.content[0].value
                        })))

            },
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const BlogPost = ({  morePosts, blogPost, footerImage }) => {

    const router = useRouter();

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
        setIsPageLoaded(true);
    }, [router])

    const scrollerRef = useRef();
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <BlogPostIntro isPageLoaded={isPageLoaded} image={blogPost.featureImages[0]} title={blogPost.title} thumbnailText={blogPost.thumbnailText} category={blogPost.category} date={blogPost.date} />

                <BlogPostText sectionTitle={blogPost.sectionTitles[0]} paragraph={blogPost.paragraphs[0]} />

                {
                    blogPost.numOfSection.map((num, index) => {
                        return (
                            <BlogPostTextImage isPageLoaded={isPageLoaded} key={index} sectionTitle={blogPost.sectionTitles[index + 1]} paragraph={blogPost.paragraphs[index + 1]} smallImage={blogPost.sectionSmallImages[index]} largeImage={blogPost.featureImages[index + 1]} />
                        )

                    })
                }

                <MorePost isPageLoaded={isPageLoaded} posts={morePosts} />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </div>
    );
}

export default BlogPost;