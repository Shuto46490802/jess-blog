import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateParallaxInsideImage, animateTextUp, animateParallaxImage } from "../PageLayouts/animation";

const AboutMe = ({ image, smallImages, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(img1WrapperRef.current, img1Ref.current);
            animateTextUp(textWrapperRef.current, 0, textRefs.current);
            animateParallaxImage(sectionRef.current, -200, img2Ref.current)
        }
    }, [isPageLoaded])

    const sectionRef = useRef();
    const img1Ref = useRef();
    const img1WrapperRef = useRef();
    const textWrapperRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };
    const img2Ref = useRef();

    return (
        <div ref={sectionRef} className="about-me text-g d-flex flex-wrap pt-1 pb-3 pt-md-3 pt-xl-5 pb-xl-5">

            <div className="about-me-image1__wrapper d-flex justify-content-xl-center col-md-5 col ps-xl-4 ps-1 pe-1 pe-md-2 pe-xl-1">

                <div className="about-me-image1__inner col-12 overflow-hidden">

                    <div className="about-me-image1 position-relative">

                        <div ref={img1WrapperRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                            <div ref={img1Ref} className="parallax should-animate">

                                <figure className="fig__wrapper">

                                    <Image src={image} layout="fill" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div ref={textWrapperRef} className="about-me-text__wrapper col-md col-xl-4 ps-md-2 pe-md-2 mt-3 mt-md-2 mt-xl-4">

                <div className="about-me-text__inner ms-1 pe-1 pe-md-0">

                    <h2 ref={addToTextRefs} className="about-me-heading h2 mb-xl-3 mb-md-2 uppercase should-animate f-serif">
                        Lorem ipsum dolor sit amet
                    </h2>

                    <div ref={addToTextRefs} className="about-me-introduction pe-md-2 small should-animate f-sans">

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco laboris.
                        </p>

                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                    </div>

                </div>

            </div>

            <div className="about-me-small-images__wrapper d-flex d-md-none d-xl-flex flex-column justify-content-center col-6 offset-3 offset-md-0 col-md-3 ps-md-1 mt-2 mt-md-0">

                <div className="about-me-small-images__inner me-md-4">

                    <div className="about-me-small-images">



                        {/* <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute"> */}

                        <div style={{ top: "200px" }} ref={img2Ref} className="parallax h-100 w-100 should-animate">

                            <div className="about-me-small-image2 position-relative">

                                <figure className="fig__wrapper">

                                    <Image src={smallImages[0]} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        {/* </div> */}



                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutMe;