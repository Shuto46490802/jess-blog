import React from "react";
import Image from "next/image";

const AboutContent1 = ({ smallImage, largeImage, secondaryImages }) => {
    return (
        <div className="about-content1">

            <div className="about-content-two-column d-flex flex-wrap">

                <div className="about-content-column col-md-6 d-flex flex-center order-1 order-md-0 pt-2 pb-2">

                    <div className="about-content-column__inner col-xl-6 px-1">

                        <div className="about-content-column-small-image__wrapper overflow-hidden col-md-6 offset-md-3 col-xl-12 offset-xl-0">

                            <div className="about-content-column-small-image position-relative col-8 offset-2 col-md-12 offset-md-0 should-animate">

                                <figure className="fig__wrapper">

                                    <Image src={smallImage} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <div className="about-content-column-small-image-text__wrapper col-md-10 offset-md-1 col-xl-12 offset-xl-0">

                            <div className="about-content-column-small-image-text__inner small mt-1 mt-lg-2">

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="about-content-column col-md-6 col">

                    <div className="about-content-large-image__wrapper position-relative h-100 overflow-hidden">

                        <div className="about-content-large-image__inner position-relative">

                            <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                                <div className="parallax">

                                    <figure className="fig__wrapper">

                                        <Image src={largeImage} layout="fill" objectFit="cover" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                        <div className="about-content-large-image-text__wrapper w-100 h-100 d-flex flex-center position-absolute t-0 l-0">

                            <h3 className="about-content-large-image-text h1 text-white text-center uppercase">
                                SKINCARE
                            </h3>

                        </div>

                    </div>

                </div>

            </div>

            <div className="about-content1-secondary-content d-flex flex-wrap">

                <div className="about-content1-secondary-content-left order-md-0 order-1 col-md-6 col-xl-7 d-flex align-items-center ps-xl-5 order-1 order-md-0 ps-1 pe-1 pe-md-0">

                    <div>

                        <div className="about-content1-secondary-content-left-image__wrapper position-relative overflow-hidden col-10 offset-1 offset-md-0 col-md-5 mb-2 order-2 order-md-0 d-md-none d-xl-block">

                            <div className="about-content1-secondary-content-left-image ">

                                <figure className="fig__wrapper">

                                    <Image src={secondaryImages[0]} layout="fill" />

                                </figure>

                            </div>

                        </div>

                        <h2 className="about-content1-secondary-content-left-heading mb-1 mb-md-2 uppercase col-md-7 col-lg-6">
                            Lorem ipsum dolor sit amet consectetur
                        </h2>

                        <div className="about-content1-secondary-content-left-description two-cols-xl pe-md-3 me-md-1 mb-2 mb-md-0 small">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="about-content1-secondary-content-right order-md-1 order-0 position-relative col col-md-6 col-xl-4 ps-1 pe-1 ps-md-4 pe-md-1 mb-3 mb-md-0">

                    <div className="about-content1-secondary-content-right-large-image__wrapper position-relative col-10 offset-2 offset-md-0 col-md-12 overflow-hidden">

                        <div className="about-content1-secondary-content-right-large-image">

                            <figure className="fig__wrapper">

                                <Image src={secondaryImages[2]} layout="fill" />

                            </figure>

                        </div>

                    </div>

                    <div className="about-content1-secondary-content-right-small-image__wrapper col-6 col-md-5 pl-xl-2">

                        <div className="parallax__wrapper  t-0 l-0 overflow-hidden">

                            <div className="parallax">

                                <div className="about-content1-secondary-content-right-small-image">

                                    <figure className="fig__wrapper">

                                        <Image src={secondaryImages[1]} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutContent1;