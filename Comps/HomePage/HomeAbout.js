import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
//Components
import { animateParallaxInsideImage, animateParallaxImage, animateTextUp, animateButtonScale } from "../PageLayouts/animation";

const HomeAbout = ({ image1, image2, image3, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(imageTriggerRef.current, [image1Ref.current]);
            animateParallaxImage(sectionRef.current, -100, image2Ref.current);
            animateParallaxImage(sectionRef.current, -500, image3Ref.current);
            animateTextUp(textTriggerRef.current, 0, textRefs.current);
            animateButtonScale(textTriggerRef.current, 0.5, buttonRef.current);
        }
    }, [isPageLoaded])
    

    const sectionRef = useRef();
    const image1Ref = useRef();
    const imageTriggerRef = useRef();
    const image2Ref = useRef();
    const image3Ref = useRef();
    const textTriggerRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };
    const buttonRef = useRef();

    return (
        <section ref={sectionRef} className="home-about position-relative d-flex flex-column flex-md-row align-items-start pt-1 pb-5 pt-md-3 pt-xl-5">

            <div className="home-about-image1__wrapper position-relative">

                <div className="home-about-image1__inner">

                    <div ref={imageTriggerRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                        <div ref={image1Ref} className="parallax should-animate">

                            <figure className="fig__wrapper">

                                <Image src={image1} layout="fill" objectFit="cover" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

            <div ref={textTriggerRef} className="home-about-text__wrapper col-md position-relative pb-md-2 pb-xl-0">

                <div className="home-about-header__wrapper">

                    <h3 ref={addToTextRefs} className="home-about-header position-relative ls-1 ps-2 pe-1 ps-md-0 pe-md-0 d-none d-md-flex flex-column mb-0 should-animate">

                        <div className="lines f-serif">
                            <span>Lorem ipsum dolor sit amet,</span>
                        </div>

                        <div className="lines f-serif">
                            <span>et dolore magna aliqua.</span>
                        </div>

                    </h3>

                    <h3 ref={addToTextRefs} className="home-about-header position-relative ls-1 ps-2 pe-1 ps-md-0 pe-md-0 d-md-none d-flex mb-0 should-animate">

                        <div className="lines f-serif">
                            <span>Lorem ipsum dolor sit amet, et dolore magna aliqua.</span>
                        </div>

                    </h3>

                </div>

                <div className="home-about-text__wrapper overflow-hidden">

                    <div ref={addToTextRefs} className="home-about-description small f-sans should-animate ms-md-3 mt-2 mt-lg-2 ps-2 pe-2 ps-md-0 pe-xl-1 should-animate">

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <p>Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Blandit aliquam etiam erat velit scelerisque in dictum non.</p>

                    </div>

                    <div ref={buttonRef} className="home-about-link d-flex justify-content-center d-md-inline-block ms-md-3 mt-3 should-animate">

                        <Link href="/about">

                            <a className="uppercase f-gt">
                                READ MORE
                            </a>

                        </Link>

                    </div>

                </div>

                <div className="home-about-iamges__wrapper d-flex d-md-block">

                    <div className="home-about-image2__wrapper">

                        <div ref={image2Ref} style={{ top: "100px" }} className="parallax should-animate">

                            <div className="home-about-image2__inner overflow-hidden">

                                <figure className="fig__wrapper">

                                    <Image src={image2} layout="fill" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="home-about-image3__wrapper">

                        <div ref={image3Ref} style={{ top: "500px" }} className="parallax should-animate">

                            <div className="home-about-image3__inner overflow-hidden">

                                <figure className="fig__wrapper">

                                    <Image src={image3} layout="fill" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HomeAbout;