import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

//Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const HomeNewPosts = ({ images }) => {

    return (
        <div className="home-new-posts position-relative">

            <div className="home-new-posts-heading__wrapper d-flex justify-content-center pe-md-0 pt-3 pt-md-1 text-center overflow-sm-down-hidden">

                <div className="home-new-posts-heading__inner col-md-4 ps-2 pe-2 ps-md-0 pe-md-0">

                    <div className="home-new-posts-heading ">

                        <h3 className="home-new-posts-heading-text h2 ls-2 text-center mb-1">

                            Explore New Posts

                        </h3>

                    </div>

                    <p className="home-new-posts-subheading-text text-center should-animate">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dis parturient montes nascetur ridiculus.
                    </p>

                </div>

            </div>

            <div className="home-new-posts-gallery__wrapper overflow-hidden">

                <Link href="/">

                    <a className="home-new-posts-check-all position-relative ps-2 d-block d-md-none">

                        <span className="home-new-posts-check-all-text h2 ls-1">

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

                                <a className="h-100 w-100 d-md-flex flex-center">

                                    <span style={{ transform: "rotate(-90deg)" }} className="home-new-posts-check-all-text h2 ls-1">

                                        Check All
                                        <br />
                                        New Posts

                                    </span>

                                </a>

                            </Link>

                        </SwiperSlide>

                        {
                            images.map((image, index) => (
                                <SwiperSlide key={index} className="home-new-posts-gallery-image__wrapper mt-3 mt-md-4">

                                    <Link href="/">

                                        <a className="h-100 w-100 d-flex flex-column">

                                            <div className="home-new-posts-gallery-image position-relative ">

                                                <div className="home-new-posts-gallery-image__inner">

                                                    <figure className="fig__wrapper">

                                                        <Image src={image} layout="fill" />

                                                    </figure>

                                                </div>

                                            </div>

                                            <div className="home-new-posts-gallery-caption__wrapper">

                                                <p className="home-new-posts-gallery-category mb-6">
                                                    Skincare
                                                </p>

                                                <h4 className="home-new-posts-gallery-title">
                                                    Aveno
                                                </h4>

                                                <p className="home-new-posts-gallery-description m-0 small">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
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