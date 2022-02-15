import React, { useEffect, useRef } from "react";
//Components
import { animateIntroHeading, animateIntroImage, animateIntroSubheadingDown, animateParallaxIntroImage } from "../PageLayouts/animation";

const AboutIntro = ({ isTransitionning, image, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            if (!isTransitionning) {
                animateIntroImage(imgRef.current);
                animateIntroHeading(textRefs.current);
                animateIntroSubheadingDown(0, subHeadingRef.current);
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
    const subHeadingRef = useRef();

    return (
        <div ref={sectionRef} className="about-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="about-intro-sub-heading small text-center mb-6 f-sans uppercase">

                <span ref={subHeadingRef} className="should-animte">
                    WHO I AM AND WHY I DO WHAT I DO
                </span>

            </div>

            <div className="about-intro-heading__wrapper text-center">

                <h1 className="about-intro-heading f-serif overflow-hidden">
                    <span ref={addToTextRefs}>About</span>
                    <span ref={addToTextRefs} className="ms-6">Jess</span>
                    <span ref={addToTextRefs} className="ms-6">blog</span>

                </h1>

            </div>

        </div>
    );
}

export default AboutIntro;