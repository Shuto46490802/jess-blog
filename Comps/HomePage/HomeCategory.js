import React from "react";
import Link from "next/link";
import Image from "next/image";

//Lib
import { Swiper, SwiperSlide } from 'swiper/react';

const HomeCategory = ({ images }) => {
    return (
        <div className="home-category position-relative d-flex flex-column flex-center mt-4 mx-2">

            <h2 className="home-category-title h1 text-center">

                <span>
                    Dignissim convallis aenean et tortor
                </span>

            </h2>

            <div className="home-category-gallery__wrapper position-relative h-100 w-100 mt-3 mt-md-4">

                <Swiper
                    direction={"horizontal"}
                    loop={false}
                    observer={true}
                    slidesPerView={3}
                    spaceBetween={40}
                >

                    {
                        images.map((image, index) => (
                            <SwiperSlide key={index} className="home-category-gallery-image__wrapper">

                                <Link href="/">

                                    <a className="h-100 w-100">

                                        <div className="home-category-gallery-image__inner">

                                            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                                                <div className="parallax should-animate">

                                                    <figure className="fig__wrapper">

                                                        <Image src={image} layout="fill" />

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