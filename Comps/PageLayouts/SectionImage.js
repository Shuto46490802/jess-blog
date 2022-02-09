import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Component
import { animateParallaxImage, animateParallaxInsideImage } from "./animation";

const SectionImage = ({ isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(largeImgWrapperRef.current, largeImgRef.current);
            animateParallaxImage(sectionRef.current, -200, smallImg1Ref.current);
            animateParallaxImage(sectionRef.current, -200, smallImg2Ref.current);
        }
    }, [isPageLoaded]);

    const largeImgRef = useRef();
    const largeImgWrapperRef = useRef();
    const sectionRef = useRef();
    const smallImg1Ref = useRef();
    const smallImg2Ref = useRef();

    return (
        <div ref={sectionRef} className="section-image overflow-hidden position-relative w-100">

            <div ref={largeImgWrapperRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={largeImgRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                    </figure>

                </div>

            </div>

            <div className="section-image-small-image1__wrapper">

                <div ref={smallImg1Ref} style={{ top: "100px" }} className="parallax should-animate">

                    <div className="section-image-small-image__inner overflow-hidden">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </div>

            </div>

            <div className="section-image-small-image2__wrapper">

                <div ref={smallImg2Ref} style={{ top: "100px" }} className="parallax should-animate">

                    <div className="section-image-small-image__inner overflow-hidden">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default SectionImage;