import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import { animateParallaxInsideImage, animateTextUp } from "../PageLayouts/animation";
//Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

const HomeCategory = ({ images, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxInsideImage(imgTriggerRefs.current[0], imgRefs.current[0]);
            animateParallaxInsideImage(imgTriggerRefs.current[1], imgRefs.current[1]);
            animateParallaxInsideImage(imgTriggerRefs.current[2], imgRefs.current[2]);
            animateTextUp(sectionRef.current, 0, headingRef.current);
        }
    }, [isPageLoaded])

    const imgRefs = useRef([]);
    const addToImgRefs = (_el) => {
        if (_el && !imgRefs.current.includes(_el)) {
            imgRefs.current.push(_el)
        } else {
            imgRefs.current = [];
        }
    };
    const imgTriggerRefs = useRef([]);
    const addToImgTriggerRefs = (_el) => {
        if (_el && !imgTriggerRefs.current.includes(_el)) {
            imgTriggerRefs.current.push(_el)
        } else {
            imgTriggerRefs.current = [];
        }
    };
    const sectionRef = useRef();
    const headingRef = useRef();

    return (
        <div ref={sectionRef} className="home-category position-relative d-flex flex-column flex-center mx-md-2 pt-1 pb-3 pt-md-3 pt-xl-5 pb-xl-5">

            <h2 ref={headingRef} className="home-category-title h1 text-center">

                <span>
                    Dignissim convallis aenean et tortor
                </span>

            </h2>

            <div className="home-category-gallery__wrapper position-relative h-100 w-100 mt-3 mt-md-4">

                <Swiper
                    loop={false}
                    observer={true}
                    breakpoints={{
                        0: {
                            direction: "vertical",
                            spaceBetween: 0
                        },
                        768: {
                            direction: "horizontal",
                            spaceBetween: 40,
                            slidesPerView: 3
                        }
                    }}
                >

                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index} className="home-category-gallery-image__wrapper">

                                <Link href="/">

                                    <a className="h-100 w-100">

                                        <div className="home-category-gallery-image__inner">

                                            <div ref={addToImgTriggerRefs} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                                                <div ref={addToImgRefs} className="parallax should-animate">

                                                    <figure className="fig__wrapper">

                                                        <Image src={image} layout="fill" objectFit="cover" />

                                                    </figure>

                                                </div>

                                            </div>

                                            <div className="home-category-gallery-image-text__wrapper w-100 h-100 position-absolute t-0 l-0 d-flex flex-column flex-center">

                                                <p className="home-category-gallery-image-subheading small">
                                                    Lorem ipsum dolor sit amet
                                                </p>

                                                <h2 className="home-category-gallery-image-heading ">
                                                    Skin Care
                                                </h2>

                                                <p className="home-category-gallery-image-discover position-absolute h4">
                                                    Discover
                                                </p>

                                            </div>

                                        </div>

                                    </a>

                                </Link>

                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>

        </div>
    );
}

export default HomeCategory;