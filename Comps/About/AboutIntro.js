import React, { useEffect, useRef } from "react";
//Components
import { animateIntroImage } from "../PageLayouts/animation";

const AboutIntro = ({ image, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){{
            animateIntroImage(sectionRef.current, imgRef.current);
        }}
    }, [isPageLoaded])

    const sectionRef = useRef();
    const imgRef = useRef();

    return (
        <div ref={sectionRef} className="about-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }}/>

                </div>

            </div>

            <div className="about-intro-sub-heading small text-center mb-6 f-sans uppercase">

                <span>
                    WHO I AM AND WHY I DO WHAT I DO
                </span>

            </div>

            <h1 className="about-intro-heading text-center m-0 f-serif">

                <span>
                    About Jess Blog
                </span>

            </h1>

        </div>
    );
}

export default AboutIntro;