import React, { useEffect, useRef } from "react";

//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../Lib/ContentfulClient";
import Footer from "../Comps/PageLayouts/Footer";
import BlogIntro from "../Comps/Blog/BlogIntro";

export const getStaticProps = async () => {

    const blogPageRes = await contentfulClient.getEntries({
        content_type: "blogPage"
    })

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    })

    return {
        props: {
            blogPageIntroImage: "https:" + blogPageRes.items[0].fields.blogPageIntroImage.fields.file.url,
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const Blog = ({ blogPageIntroImage, footerImage }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
    }, [])

    const scrollerRef = useRef();

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <BlogIntro image={blogPageIntroImage} />

            </div>

            <Footer image={footerImage} />

        </div>
    );
}

export default Blog;