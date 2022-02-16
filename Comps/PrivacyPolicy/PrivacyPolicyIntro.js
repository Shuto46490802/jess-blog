import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Comp
import { animateIntroHeading, animateIntroImage, animateIntroSubheadingDown, animateParallaxIntroImage } from "../PageLayouts/animation";

const PrivacyPolicyIntro = ({ image, isTransitionning, isPageLoaded }) => {

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
        <div ref={sectionRef} className="privacy-policy-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={image} layout="fill" objectFit="cover" priority />

                    </figure>

                </div>

            </div>

            <div className="privacy-policy-intro-sub-heading small text-center mb-6 f-sans uppercase">

                <span ref={subHeadingRef} className="should-animate">
                    Terms of
                </span>

            </div>

            <div className="privacy-policy-intro-heading__wrapper text-center">

                <h1 className="privacy-policy-intro-heading f-serif overflow-hidden">
                    <span ref={addToTextRefs}>Service</span>
                    <span ref={addToTextRefs} className="ms-6">&</span>
                    <span ref={addToTextRefs} className="ms-6">Policy</span>

                </h1>

            </div>


        </div>
    );
}

export default PrivacyPolicyIntro;