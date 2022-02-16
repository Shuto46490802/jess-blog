import React from "react";

//Components
import { convertParagraph } from "../PageLayouts/util";

const BlogPostText = ({ sectionTitle, paragraph }) => {

    return (
        <div className="blog-post-text text-g d-md-flex pt-md-3 pt-2 pb-3 pb-md-4 px-1 px-md-3">

            <div className="blog-post-text-heading__wrapper col-md-6 col">

                <h2 className="blog-post-text-heading mb-2 mb-md-0 f-serif">

                    {sectionTitle}

                </h2>

            </div>

            <div className="blog-post-text-content__wrapper col-md-6 col">

                <div className="blog-post-text-content__inner col-xl-9">

                    <div className="pr-md-2 lh-16 mb-1 mb-2 f-sans">

                        {convertParagraph(paragraph)}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogPostText;