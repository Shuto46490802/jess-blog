import React, { useEffect, useRef } from "react";
//Components
import { animateParallaxIntroImage, animateIntroImage, animateIntroSubheadingUp } from "../PageLayouts/animation";

const BlogPostIntro = ({ image, title, thumbnailText, category, date, isPageLoaded, isTransitionning }) => {

    useEffect(() => {
        if (isPageLoaded) {
            if (!isTransitionning) {
                animateIntroImage(imgRef.current);
                animateIntroSubheadingUp(textRefs.current);
                animateIntroSubheadingUp(text2Refs.current)
                animateParallaxIntroImage(sectionRef.current, imgRef.current);
            }
        }
    }, [isPageLoaded, isTransitionning])

    const sectionRef = useRef();
    const imgRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };
    const text2Refs = useRef([]);
    const addToText2Refs = (_el) => {
        if (_el && !text2Refs.current.includes(_el)) {
            text2Refs.current.push(_el)
        } else {
            text2Refs.current = [];
        }
    };

    return (
        <div ref={sectionRef} className="blog-post-intro d-flex align-items-end overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="blog-post-intro-text__wrapper d-flex flex-wrap pb-2 mx-2 w-100">

                <div className="col-md-6 order-md-0 order-1 d-flex flex-column justify-content-end">

                    <h5 ref={addToText2Refs} className="mb-6 mb-md-1 f-sans should-animate">
                        Words and Photos By
                    </h5>

                    <p ref={addToText2Refs} className="f-sans should-animate">Jessica Pham</p>

                </div>

                <div className="col-md-6 order-md-1 order-0 pb-md-0 pb-2">

                    <h6 ref={addToTextRefs} className="uppercase should-animate medium mt-1 mb-1 mt-md-0 mb-md-2 f-sans">{category}</h6>

                    <h1 ref={addToTextRefs} className="mb-6 should-animate mb-md-1 pe-3 pe-md-0 f-serif">{title}</h1>

                    <div ref={addToTextRefs} className="mb-1 should-animate mb-md-2 large pe-2 pe-md-0 f-sans">{thumbnailText}</div>

                    <p ref={addToTextRefs} className="medium should-animate f-sans">{date}</p>

                </div>

            </div>

        </div>
    );
}

export default BlogPostIntro;