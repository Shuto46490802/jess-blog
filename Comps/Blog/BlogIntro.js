import { useEffect, useRef } from "react";
//Components
import { animateIntroImage } from "../PageLayouts/animation";

const BlogIntro = ({ image, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateIntroImage(sectionRef.current, imgRef.current);
        }
    }, [isPageLoaded]);

    const imgRef = useRef();
    const sectionRef = useRef();

    return (
        <div ref={sectionRef} className="blog-intro d-flex flex-column align-items-center justify-content-between p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div></div>

            <div className="blog-intro-sub-heading__wrapper text-center">

                <div className="blog-intro-sub-heading small text-center mb-6">

                    <span>
                        WELCOME TO MY BLOG
                    </span>

                </div>

                <h1 className="blog-intro-heading text-center m-0">

                    <span>
                        The Journey
                    </span>

                </h1>

            </div>

            <div className="blog-intro-sub-caption__wrapper pb-md-2 text-center">

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