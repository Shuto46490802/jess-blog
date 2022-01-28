import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animateParallaxInsideImage } from "./animation";

const SectionImage = ({ isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxInsideImage(largeImgWrapperRef.current, largeImgRef.current)
        }
    }, [isPageLoaded]);

    const largeImgRef = useRef();
    const largeImgWrapperRef = useRef();

    return (
        <div className="section-image overflow-hidden position-relative w-100">

            <div ref={largeImgWrapperRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={largeImgRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                    </figure>

                </div>

            </div>


        </div>
    );
}

export default SectionImage;