import React from "react";
import Image from "next/image";

const AboutContent2 = ({ largeImages, secondaryImages }) => {
    return (
        <div className="about-content2">

            <div className="about-content-two-column d-flex flex-wrap">

                <div className="about-content-column col-md-6 col overflow-hidden position-relative">

                    <div className="about-content-column-image__wrapper position-relative">

                        <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                            <div className="parallax">

                                <figure className="fig__wrapper">

                                    <Image src={largeImages[0]} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="about-content-large-image-text__wrapper w-100 h-100 d-flex flex-center position-absolute t-0 l-0">

                        <h3 className="about-content-large-image-text h1 text-white text-center uppercase">
                            MENTAL HEALTH
                        </h3>

                    </div>

                </div>

                <div className="about-content-column col-md-6 position-relative">

                    <div className="pt-3 pt-md-2 pb-2 pt-xl-3 pt-xlg-5 ps-1 pe-1 ps-md-2 pe-md-2 pe-xl-0 col-xl-9 ps-xl-4 pb-xl-5">

                        <h3 className="h2 mb-2 uppercase">
                            Lorem ipsum dolor
                            <br />
                            sit amet
                        </h3>

                        <div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="about-content-two-column d-flex flex-wrap">

                <div className="about-content-column order-md-0 order-1 col-md-6 position-relative">

                    <div className="pt-3 pt-md-2 pb-2 pt-xl-3 pt-xlg-5 ps-1 pe-1 ps-md-2 pe-md-2 pe-xl-0 col-xl-9 ps-xl-4 pb-xl-5">

                        <h3 className="h2 mb-2 uppercase">
                            Lorem ipsum dolor
                            <br />
                            sit amet
                        </h3>

                        <div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

                <div className="about-content-column order-md-1 order-0 col-md-6 col overflow-hidden position-relative">

                    <div className="about-content-column-image__wrapper position-relative">

                        <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                            <div className="parallax">

                                <figure className="fig__wrapper">

                                    <Image src={largeImages[1]} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                    <div className="about-content-large-image-text__wrapper w-100 h-100 d-flex flex-center position-absolute t-0 l-0">

                        <h3 className="about-content-large-image-text h1 text-white text-center uppercase">
                            FASHION
                        </h3>

                    </div>

                </div>

            </div>

            <div className="about-content2-secondary-content d-flex flex-wrap">

                <div className="about-content2-secondary-content-left col col-md-6 pt-4 pt-md-5 d-flex justify-content-end justify-content-md-center justify-content-xl-end ">

                    <div className="col col-md-6 col-xl-5 position-relative me-md-4 ps-1 pe-1 ps-md-0 pe-md-0">

                        <div className="about-content2-secondary-content-left-image1 col-8 col-md-10 col-xl-12">

                            <div className="parallax__wrapper position-absolute t-0 l-0">

                                <div className="parallax">

                                    <figure className="fig__wrapper">

                                        <Image src={secondaryImages[0]} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                        <div className="about-content2-secondary-content-left-image2 col-7 offset-5 offset-xl-0 col-md-12 ">

                            <div className="parallax__wrapper position-absolute t-0 l-0">

                                <div className="parallax">

                                    <figure className="fig__wrapper">

                                        <Image src={secondaryImages[1]} layout="fill" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="about-content2-secondary-content-right col-md-6 pt-2 pt-md-3 pb-md-3 pt-xl-5 pb-xl-5 ps-1 pe-1 ps-xl-0 pe-xl-0">

                    <div className="col-xl-8 offset-xl-2">

                        <h3 className="h2 mb-2 uppercase pe-4 pe-md-0">
                            Ut enim ad minim veniam, quis nostrud
                        </h3>

                        <div>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <p>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AboutContent2;