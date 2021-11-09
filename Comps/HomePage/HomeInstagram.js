import React from "react";
import Link from "next/link";
import Image from "next/image";

//Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const HomeInstagram = ({ instaPosts }) => {
    return (
        <div className="home-instagram position-relative d-flex flex-column">

            <div className="home-instagram-title__wrapper ps-2 mb-2">

                <p className="home-instagram-title small mb-2">
                    INSTAGRAM
                </p>

                <h2 className="home-instagram-follow mb-6">
                    Folow me
                    <br />
                    @jessblog
                </h2>

                <p className="home-instagram-lnk small">
                    Become part of my journey
                </p>

                <Link href="/">
                    <a>
                        <span className="line-link lh-1 small">
                            Follow Me
                        </span>
                    </a>
                </Link>

            </div>

            <div className="home-instagram-gallery__wrapper overflow-hidden">

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

                                    <div className="home-instagram-gallery-image position-relative ">

                                        <div className="home-instagram-gallery-image__inner">

                                            <figure className="fig__wrapper">

                                                <Image src={post.mediaUrl} layout="fill" objectFit={"cover"} />

                                            </figure>

                                        </div>

                                    </div>

                                    <div className="home-instagram-gallery-caption__wrapper">

                                        <p className="home-instagram-gallery-category mb-6">
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
