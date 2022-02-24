import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import { animateTextUp, animateButtonScale, animateGallery } from "../PageLayouts/animation";
//Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const HomeNewPosts = ({ posts, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateButtonScale(textTriggerRef.current, 0, headingRef.current);
            animateTextUp(textTriggerRef.current, 0.5, subHeadingRef.current);
            animateGallery(galleryTriggerRef.current, imageRefs.current)
        }
    }, [isPageLoaded])

    const textTriggerRef = useRef();
    const headingRef = useRef();
    const subHeadingRef = useRef();
    const galleryTriggerRef = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    };
    
    return (
        <div className="home-new-posts bg-p text-w overflow-hidden position-relative pt-1 pb-3 pt-md-3 pb-xl-5">

            <div ref={textTriggerRef} className="home-new-posts-heading__wrapper d-flex justify-content-center pe-md-0 pt-3 pt-md-1 text-center overflow-sm-down-hidden">

                <div className="home-new-posts-heading__inner col-md-6 ps-2 pe-2 ps-md-0 pe-md-0">

                    <div className="home-new-posts-heading ">

                        <h3 ref={headingRef} className="home-new-posts-heading-text ls-2 text-center mb-1 should-animate f-serif">

                            Explore New Posts

                        </h3>

                    </div>

                    <p ref={subHeadingRef} className="home-new-posts-subheading-text text-center f-sans should-animate">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus.
                    </p>

                </div>

            </div>

            <div ref={galleryTriggerRef} className="home-new-posts-gallery__wrapper overflow-hidden">

                <Link href="/">

                    <a className="home-new-posts-check-all text-w position-relative ps-2 d-block d-md-none">

                        <span className="home-new-posts-check-all-text f-serif h2 ls-1">

                            Check All
                            <br />
                            New Posts

                        </span>

                    </a>

                </Link>

                <div className="home-new-posts-gallery position-relative h-100 w-100 ps-2 ps-md-0">

                    <Swiper
                        direction={"horizontal"}
                        loop={false}
                        observer={true}
                        draggable={true}
                        breakpoints={{
                            200: {
                                slidesPerView: 1.8,
                                spaceBetween: 30
                            },
                            768: {
                                slidesPerView: 3.8,
                                spaceBetween: 30
                            },
                            1200: {
                                slidesPerView: 4.3,
                                spaceBetween: 30
                            }
                        }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev"
                        }}
                    >

                        <SwiperSlide className="home-new-posts-check-all d-md-block flex-center position-relative mt-4 d-none">

                            <Link href="/">

                                <a ref={addToImageRefs} className="h-100 w-100 text-w d-md-flex flex-center should-animate">

                                    <span style={{ transform: "rotate(-90deg)" }} className="home-new-posts-check-all-text f-sans h2 ls-1">

                                        Check All
                                        <br />
                                        New Posts

                                    </span>

                                </a>

                            </Link>

                        </SwiperSlide>

                        {
                            posts.map((post, index) => (
                                <SwiperSlide key={index} className="home-new-posts-gallery-image__wrapper mt-3 mt-md-4">

                                    <Link href={`/blog/${post.slug}`}>

                                        <a ref={addToImageRefs} className="h-100 text-w w-100 d-flex flex-column should-animate">

                                            <div className="home-new-posts-gallery-image position-relative ">

                                                <div className="home-new-posts-gallery-image__inner">

                                                    <figure className="fig__wrapper">

                                                        <Image src={post.image1} layout="fill" objectFit="cover" />

                                                    </figure>

                                                </div>

                                            </div>

                                            <div className="home-new-posts-gallery-caption__wrapper">

                                                <p className="home-new-posts-gallery-category mb-6 uppercase f-sans">
                                                    {post.category}
                                                </p>

                                                <h3 className="home-new-posts-gallery-title f-serif">
                                                    {post.title}
                                                </h3>

                                                <p className="home-new-posts-gallery-description m-0 small f-sans">
                                                    {post.thumbnailText}
                                                </p>

                                            </div>

                                        </a>

                                    </Link>

                                </SwiperSlide>
                            ))
                        }

                    </Swiper>

                </div>

            </div>

        </div>
    );
}

export default HomeNewPosts;