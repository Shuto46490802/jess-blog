import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomeAbout = ({ image1, image2, image3 }) => {
    return (
        <section className="home-about position-relative d-flex flex-column flex-md-row align-items-start">

            <div className="home-about-image1__wrapper position-relative">

                <div className="home-about-image1__inner">

                    <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                        <div className="parallax should-animate">

                            <figure className="fig__wrapper">

                                <Image src={image1} layout="fill" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

            <div className="home-about-text__wrapper col-md position-relative pb-md-2 pb-xl-0">

                <div className="home-about-header__wrapper">

                    <h3 className="home-about-header position-relative ls-1 ps-2 pe-1 ps-md-0 pe-md-0 d-none d-md-flex flex-column mb-0">

                        <div className="lines">
                            <span>Lorem ipsum dolor sit amet,</span>
                        </div>

                        <div className="lines">
                            <span>et dolore magna aliqua.</span>
                        </div>

                    </h3>

                    <h3 className="home-about-header position-relative ls-1 ps-2 pe-1 ps-md-0 pe-md-0 d-md-none d-flex mb-0">

                        <div className="lines">
                            <span>Lorem ipsum dolor sit amet, et dolore magna aliqua.</span>
                        </div>

                    </h3>

                </div>

                <div className="home-about-text__wrapper ">

                    <div className="home-about-description small should-animate ms-md-3 mt-2 mt-lg-2 ps-2 pe-2 ps-md-0 pe-xl-1">

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <p>Eu scelerisque felis imperdiet proin fermentum leo vel orci porta. Blandit aliquam etiam erat velit scelerisque in dictum non.</p>

                    </div>

                    <div className="home-about-link d-flex jsutify-content-center d-md-block ms-md-3 mt-3">

                        <Link href="/">

                            <a>
                                Read More 
                            </a>

                        </Link>

                    </div>

                </div>

                <div className="home-about-iamges__wrapper d-flex d-md-block">

                    <div className="home-about-image2__wrapper">

                        <div className="home-about-image2__inner overflow-hidden">

                            <figure className="fig__wrapper">

                                <Image src={image2} layout="fill" />

                            </figure>

                        </div>

                    </div>

                    <div className="home-about-image3__wrapper">

                        <div className="home-about-image3__inner overflow-hidden">

                            <figure className="fig__wrapper">

                                <Image src={image3} layout="fill" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HomeAbout;