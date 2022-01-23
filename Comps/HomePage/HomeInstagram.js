import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import { animateGallery, animateTextUp } from "../PageLayouts/animation";
//Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const HomeInstagram = ({ instaPosts, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateGallery(galleryTriggerRef.current, imageRefs.current);
            animateTextUp(sectionRef.current, 0, textRefs.current)
        }
    }, [isPageLoaded])

    const galleryTriggerRef = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    };
    const sectionRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };

    return (
        <div ref={sectionRef} className="home-instagram position-relative d-flex flex-column pt-1 pb-3 pt-md-3 pt-xl-5 pb-xl-5">

            <div className="home-instagram-title__wrapper align-self-center text-center  mb-2">

                <h6 ref={addToTextRefs} className="home-instagram-title small mb-2 should-animate">
                    INSTAGRAM
                </h6>

                <h3 ref={addToTextRefs} className="home-instagram-lnk h3 mb-3 should-animate">
                    Become part of my journey
                </h3>

            </div>

            <div ref={galleryTriggerRef} className="home-instagram-gallery__wrapper overflow-hidden mb-4">

                <div className="home-instagram-gallery position-relative h-100 w-100 ps-2">

                    <Swiper
                        direction={"horizontal"}
                        loop={false}
                        observer={true}
                        draggable={true}
                        breakpoints={{
                            200: {
                                slidesPerView: 2.5,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3.1,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 4.1,
                                spaceBetween: 30
                            }
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                    >

                        {
                            instaPosts.map((post, index) => (
                                <SwiperSlide key={index}>

                                    <div ref={addToImageRefs} className="should-animate">

                                        <div className="home-instagram-gallery-image position-relative ">

                                            <div className="home-instagram-gallery-image__inner">

                                                <figure className="fig__wrapper">

                                                    <Image src={post.mediaUrl} layout="fill" objectFit={"cover"} />

                                                </figure>

                                            </div>

                                        </div>

                                        <div className="home-instagram-gallery-caption__wrapper">

                                            <p className="home-instagram-gallery-category mb-6 small">
                                                {post.time}
                                            </p>

                                            <p className="home-instagram-gallery-description m-0 small">
                                                {post.caption}
                                            </p>

                                            <Link href={post.link}>

                                                <a>
                                                    <span className="line-link small">View On Instagram</span>
                                                </a>

                                            </Link>

                                        </div>

                                    </div>

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </div>
    );
}

export default HomeInstagram;
