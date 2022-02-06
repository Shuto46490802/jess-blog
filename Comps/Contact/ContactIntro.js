import React, { useEffect, useRef } from "react";
//Components
import { animateIntroHeading, animateIntroImage, animateParallaxIntroImage } from "../PageLayouts/animation";

const ContactIntro = ({ isTransitionning, image, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            if (!isTransitionning) {
                animateIntroImage(imgRef.current);
                animateIntroHeading(textRefs.current);
                animateParallaxIntroImage(sectionRef.current, imgRef.current);
            }
        }
    }, [isPageLoaded, isTransitionning]);

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

    return (
        <div ref={sectionRef} className="contact-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <div className="image cover bg-center h-100 w-100" style={{ backgroundImage: `url(${image})` }} />

                </div>

            </div>

            <div className="contact-intro-heading__wrapper text-center uppercase" >

                <h1 className="contact-intro-heading f-serif overflow-hidden">

                    <span ref={addToTextRefs}>We</span>
                    <span ref={addToTextRefs} className="ms-6">would</span>
                    <span ref={addToTextRefs} className="ms-6">love</span>
                    <span ref={addToTextRefs} className="ms-6">to</span>

                </h1>

                <h1 className="contact-intro-heading f-serif overflow-hidden">

                    <span ref={addToTextRefs}>hear</span>
                    <span ref={addToTextRefs} className="ms-6">from</span>
                    <span ref={addToTextRefs} className="ms-6">you</span>

                </h1>

            </div>

        </div>
    );
}

export default ContactIntro;