import React from "react";

const BlogPostIntro = ({ image, title, thumbnailText, category, date }) => {
    return (
        <div className="blog-post-intro d-flex align-items-end overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div className="parallax">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="blog-post-intro-text__wrapper d-flex flex-wrap pb-2 mx-2 w-100">

                <div className="col-md-6 order-md-0 order-1 d-flex flex-column justify-content-end">

                    <h5 className="mb-6 mb-md-1">
                        Words and Photos By
                    </h5>

                    <p>Jessica Pham</p>

                </div>

                <div className="col-md-6 order-md-1 order-0 pb-md-0 pb-2">

                    <h6 className="uppercase medium mt-1 mb-1 mt-md-0 mb-md-2">{category}</h6>

                    <h1 className="mb-6 mb-md-1 pe-3 pe-md-0">{title}</h1>

                    <div className="mb-1 mb-md-2 large pe-2 pe-md-0">{thumbnailText}</div>

                    <p className="medium">{date}</p>

                </div>

            </div>

        </div>
    );
}

export default BlogPostIntro;