import React from "react";

//Component
import BlogPostImages from "./BlogPostImages";
import BlogPostText from "./BlogPostText";

const BlogPostTextImage = ({ sectionTitle, paragraph, smallImage, largeImage, isPageLoaded }) => {
    return (
        <>

            <BlogPostImages isPageLoaded={isPageLoaded} smallImage={smallImage} largeImage={largeImage} />

            <BlogPostText sectionTitle={sectionTitle} paragraph={paragraph} />

        </>
    );
}

export default BlogPostTextImage;