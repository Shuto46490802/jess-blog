import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateParallaxInsideImage, animateTextUp, animateParallaxImage } from "../PageLayouts/animation";

const AboutContent2 = ({ largeImages, secondaryImages, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(largeImgWrapper1Ref.current, largeImg1Ref.current);
            animateParallaxInsideImage(largeImgWrapper2Ref.current, largeImg2Ref.current);
            animateTextUp(textWrapper1Ref.current, 0, text1Refs.current);
            animateTextUp(textWrapper2Ref.current, 0, text2Refs.current);
            animateParallaxImage(sectionRef.current, -100, img1Ref.current);
            animateParallaxImage(sectionRef.current, -200, img2Ref.current);
            animateTextUp(textWrapper3Ref.current, 0, text3Refs.current);
        }
    }, [isPageLoaded])

    //two columns
    const largeImgWrapper1Ref = useRef();
    const largeImgWrapper2Ref = useRef();
    const largeImg1Ref = useRef();
    const largeImg2Ref = useRef();
    const text1Refs = useRef([]);
    const addToText1Refs = (_el) => {
        if (_el && !text1Refs.current.includes(_el)) {
            text1Refs.current.push(_el)
        } else {
            text1Refs.current = [];
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
    const textWrapper1Ref = useRef();
    const textWrapper2Ref = useRef();
    //secondary
    const sectionRef = useRef();
    const img1Ref = useRef();
    const img2Ref = useRef();
    const text3Refs = useRef([]);
    const addToText3Refs = (_el) => {
        if (_el && !text3Refs.current.includes(_el)) {
            text3Refs.current.push(_el)
        } else {
            text3Refs.current = [];
        }
    };
    const textWrapper3Ref = useRef();


    return (
        <div className="about-content2">

            <div className="about-content-two-column d-flex flex-wrap">

                <div className="about-content-column col-md-6 col overflow-hidden position-relative">

                    <div ref={largeImgWrapper1Ref} className="about-content-column-image__wrapper position-relative">

                        <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                            <div ref={largeImg1Ref} className="parallax should-animate">

                                <figure className="fig__wrapper">

                                    <Image src={largeImages[0]} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="about-content-large-image-text__wrapper w-100 h-100 d-flex flex-center position-absolute t-0 l-0">

                        <h3 className="about-content-large-image-text h1 text-white text-center uppercase f-serif">
                            MENTAL HEALTH
                        </h3>

                    </div>

                </div>

                <div className="about-content-column bg-r text-w col-md-6 position-relative">

                    <div ref={textWrapper1Ref} className="pt-3 pt-md-2 pb-2 pt-xl-3 pt-xlg-5 ps-1 pe-1 ps-md-2 pe-md-2 pe-xl-0 col-xl-9 ps-xl-4 pb-xl-5">

                        <h3 ref={addToText1Refs} className="h2 mb-2 uppercase should-animate f-serif">
                            Lorem ipsum dolor
                            <br />
                            sit amet
                        </h3>

                        <div ref={addToText1Refs} className="should-animate f-sans">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="about-content-two-column d-flex flex-wrap">

                <div className="about-content-column order-md-0 order-1 col-md-6 position-relative">

                    <div ref={textWrapper2Ref} className="pt-3 pt-md-2 pb-2 pt-xl-3 pt-xlg-5 ps-1 pe-1 ps-md-2 pe-md-2 pe-xl-0 col-xl-9 ps-xl-4 pb-xl-5">

                        <h3 ref={addToText2Refs} className="h2 mb-2 uppercase should-animate f-serif">
                            Lorem ipsum dolor
                            <br />
                            sit amet
                        </h3>

                        <div ref={addToText2Refs} className="should-animate f-sans">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="about-content-column order-md-1 order-0 col-md-6 col overflow-hidden position-relative">

                    <div ref={largeImgWrapper2Ref} className="about-content-column-image__wrapper position-relative">

                        <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                            <div ref={largeImg2Ref} className="parallax">

                                <figure className="fig__wrapper">

                                    <Image src={largeImages[1]} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="about-content-large-image-text__wrapper w-100 h-100 d-flex flex-center position-absolute t-0 l-0">

                        <h3 className="about-content-large-image-text h1 text-white text-center uppercase f-serif">
                            FASHION
                        </h3>

                    </div>

                </div>

            </div>

            <div ref={sectionRef} className="about-content2-secondary-content d-flex flex-wrap">

                <div className="about-content2-secondary-content-left col col-md-6 pt-4 pt-md-5 d-flex justify-content-end justify-content-md-center justify-content-xl-end ">

                    <div className="col col-md-6 col-xl-5 position-relative me-md-4 ps-1 pe-1 ps-md-0 pe-md-0">

                        <div className="about-content2-secondary-content-left-image1 col-8 col-md-10 col-xl-12">

                            <div className="parallax__wrapper position-absolute t-0 l-0">

                                <div style={{ top: "50px" }} ref={img1Ref} className="parallax">

                                    <figure className="fig__wrapper">

                                        <Image src={secondaryImages[0]} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                        <div className="about-content2-secondary-content-left-image2 col-7 offset-5 offset-xl-0 col-md-12 ">

                            <div className="parallax__wrapper position-absolute t-0 l-0">

                                <div style={{ top: "100px" }} ref={img2Ref} className="parallax">

                                    <figure className="fig__wrapper">

                                        <Image src={secondaryImages[1]} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={textWrapper3Ref} className="about-content2-secondary-content-right col-md-6 pt-2 pt-md-3 pb-md-3 pt-xl-5 pb-xl-5 ps-1 pe-1 ps-xl-0 pe-xl-0">

                    <div className="col-xl-8 offset-xl-2">

                        <h3 ref={addToText3Refs} className="h2 mb-2 uppercase pe-4 pe-md-0 should-animate f-serif">
                            Ut enim ad minim veniam, quis nostrud
                        </h3>

                        <div ref={addToText3Refs} className="should-animate f-sans">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutContent2;