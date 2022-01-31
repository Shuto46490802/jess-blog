import React, { useEffect, useRef } from "react";
//Components
import { animateIntroImage } from "../PageLayouts/animation";

const BlogPostIntro = ({ image, title, thumbnailText, category, date, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateIntroImage(sectionRef.current, imgRef.current);
        }
    }, [isPageLoaded])

    const sectionRef = useRef();
    const imgRef = useRef();

    return (
        <div ref={sectionRef} className="blog-post-intro d-flex align-items-end overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="blog-post-intro-text__wrapper d-flex flex-wrap pb-2 mx-2 w-100">

                <div className="col-md-6 order-md-0 order-1 d-flex flex-column justify-content-end">

                    <h5 className="mb-6 mb-md-1 f-sans">
                        Words and Photos By
                    </h5>

                    <p className="f-sans">Jessica Pham</p>

                </div>

                <div className="col-md-6 order-md-1 order-0 pb-md-0 pb-2">

                    <h6 className="uppercase medium mt-1 mb-1 mt-md-0 mb-md-2 f-sans">{category}</h6>

                    <h1 className="mb-6 mb-md-1 pe-3 pe-md-0 f-serif">{title}</h1>

                    <div className="mb-1 mb-md-2 large pe-2 pe-md-0 f-sans">{thumbnailText}</div>

                    <p className="medium f-sans">{date}</p>

                </div>

            </div>

        </div>
    );
}

export default BlogPostIntro;