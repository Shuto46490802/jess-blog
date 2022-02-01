import { useEffect, useRef } from "react";
//Components
import { animateIntroHeading, animateIntroImage, animateIntroSubheadingDown, animateIntroSubheadingUp, animateIntroImageScale } from "../PageLayouts/animation";

const BlogIntro = ({ image, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateIntroImage(sectionRef.current, imgRef.current);
            animateIntroHeading(textRefs.current);
            animateIntroSubheadingDown(subHeadingRef.current);
            animateIntroSubheadingUp(subHeading2Ref.current);
            animateIntroImageScale(imgRef.current)
        }
    }, [isPageLoaded]);

    const imgRef = useRef();
    const sectionRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };
    const subHeadingRef = useRef();
    const subHeading2Ref = useRef();

    return (
        <div ref={sectionRef} className="blog-intro d-flex flex-column align-items-center justify-content-between p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div></div>

            <div className="blog-intro-sub-heading__wrapper text-center">

                <div className="blog-intro-sub-heading small text-center mb-6 f-sans">

                    <span ref={subHeadingRef}>
                        WELCOME TO MY BLOG
                    </span>

                </div>

                <div className="blog-intro-heading__wrapper text-center">

                <h1 className="blog-intro-heading f-serif overflow-hidden">
                    <span ref={addToTextRefs}>The</span>
                    <span ref={addToTextRefs} className="ms-6">journey</span>
                    <span ref={addToTextRefs} className="ms-6">blog</span>

                </h1>

            </div>

            </div>

            <div ref={subHeading2Ref} className="blog-intro-sub-caption__wrapper pb-md-2 text-center f-sans">

                <h2 className="d-none d-md-block h2">

                    Lorem-ipsum

                </h2>

                <h2 className="d-none d-md-block h2">
                    consectetur adipiscing elit
                </h2>

            </div>

        </div>
    );
}

export default BlogIntro;