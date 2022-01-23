import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
//Components
import { getScrollProxy } from "../../Comps/PageLayouts/Scrollbar";
import "../../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../../Lib/ContentfulClient";
import Footer from "../../Comps/PageLayouts/Footer";
import BlogIntro from "../../Comps/Blog/BlogIntro";
import BlogFilter from "../../Comps/Blog/BlogFilter";
import Pagination from "../../Comps/Blog/Pagination";
import BlogThumbnailTemp1 from "../../Comps/Blog/BlogThumbnailTemp1";
import BlogThumbnailTemp2 from "../../Comps/Blog/BlogThumbnailTemp2";
import BlogThumbnailTemp3 from "../../Comps/Blog/BlogThumbnailTemp3";
import { convertDate } from "../../Comps/PageLayouts/util";

export const getServerSideProps = async (context) => {

    const blogPageRes = await contentfulClient.getEntries({
        content_type: "blogPage"
    })

    const blogPostRes = await contentfulClient.getEntries({
        content_type: "blogPost",
        "fields.category": "Fashion",
        limit: 10,
        skip: ((Number(context.query.page) - 1) * 10)
    })

    const allBlogPostRes = await contentfulClient.getEntries({
        content_type: "blogPost",
        "fields.category": "Fashion"
    })

    const numOfPosts = allBlogPostRes.total;

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    })


    return {
        props: {
            blogPageIntroImage: "https:" + blogPageRes.items[0].fields.blogPageIntroImage.fields.file.url,
            blogPosts: blogPostRes.items.map((post) => ({
                title: post.fields.title,
                image1: "https:" + post.fields.featureImages[0].fields.file.url,
                image2: "https:" + post.fields.featureImages[1].fields.file.url,
                thumbnailText: post.fields.thumbnailText,
                slug: post.fields.slug,
                dateForSort: post.fields.date.slice(0, 10).split("-").join(""),
                date: convertDate(post.fields.date),
                category: post.fields.category
            })),
            numOfPosts: numOfPosts,
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const Fashion = ({ blogPageIntroImage, blogPosts, numOfPosts, footerImage }) => {

    const router = useRouter();

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
        sortDescending(blogPosts);
    }, [router])

    useEffect(() => {
        const _numOfPage = Math.ceil(numOfPosts / 10);
        setNumOfPage(_numOfPage);
        setIsPageLoaded(true);
    }, [])

    const scrollerRef = useRef();
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    const sortDescending = (_posts) => {
        const result = _posts.sort((a, b) => Number.parseInt(b.dateForSort) - Number.parseInt(a.dateForSort));

        return result
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [numOfPage, setNumOfPage] = useState(0);

    const paginate = (_num, _currentPage) => {
        if (_num !== _currentPage) {
            setCurrentPage(_num)
            router.push({ pathname: "/blog/fashion", query: { page: _num } })
        }
    }

    const paginatePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        } else {
            return;
        }
    };

    const paginateNext = () => {
        if (currentPage < numOfPage) {
            setCurrentPage(currentPage + 1)
        } else {
            return;
        }
    };

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <BlogIntro isPageLoaded={isPageLoaded} image={blogPageIntroImage} />

                <BlogFilter />

                {
                    blogPosts.map((post) => (
                        post.category === "Skincare"
                            ? <BlogThumbnailTemp1 isPageLoaded={isPageLoaded} slug={post.slug} image1={post.image1} image2={post.image2} title={post.title} thumbnailText={post.thumbnailText} category={post.category} date={post.date} />
                            : post.category === "Mental Health"
                                ? <BlogThumbnailTemp2 isPageLoaded={isPageLoaded} slug={post.slug} image1={post.image1} image2={post.image2} title={post.title} thumbnailText={post.thumbnailText} category={post.category} date={post.date} />
                                : <BlogThumbnailTemp3 isPageLoaded={isPageLoaded} slug={post.slug} image1={post.image1} image2={post.image2} title={post.title} thumbnailText={post.thumbnailText} category={post.category} date={post.date} />
                    ))
                }

                <Pagination numOfPage={numOfPage} currentPage={currentPage} paginate={paginate} paginatePrev={paginatePrev} paginateNext={paginateNext} />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </div>
    );
}

export default Fashion;