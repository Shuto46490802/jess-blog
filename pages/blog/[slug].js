import React, { useEffect, useRef } from "react";
import Head from 'next/head';
//Compnents
import { getScrollProxy } from "../../Comps/PageLayouts/Scrollbar";
import "../../Comps/PageLayouts/EdgeEasingPlugin";
import Footer from "../../Comps/PageLayouts/Footer";
import { contentfulClient } from "../../Lib/ContentfulClient";
import BlogPostIntro from "../../Comps/BlogPost/BlogPostIntro";
import { convertDate } from "../../Comps/PageLayouts/util";

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

    const blogPostItems = blogPostRes.items[0].fields;

    const paragrapgKeys = Object.keys(blogPostItems).filter((key) => key.includes("sectionParagraph"));

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    });

    return {
        props: {
            res: blogPostItems,
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

const BlogPost = ({ res, blogPost, footerImage }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
    }, [])

    const scrollerRef = useRef();

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <BlogPostIntro image={blogPost.featureImages[0]} title={blogPost.title} thumbnailText={blogPost.thumbnailText} category={blogPost.category} date={blogPost.date} />

            </div>

            <Footer image={footerImage} />

        </div>
    );
}

export default BlogPost;