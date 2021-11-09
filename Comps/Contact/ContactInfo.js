import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = ({ image, smallImages }) => {
    return (
        <div className="contact-info d-flex flex-wrap pt-3 pb-3 pt-xl-4 pb-xl-4">

            <div className="contact-info-small-images__wrapper col-md-3 ps-2 pe-2 ps-md-4 pe-md-3 pt-md-1 d-md-none d-xl-block">

                <div className="contact-info-small-imgae1 position-relative col-8 col-md-12">

                    <div className="parallax__wrapper position-absolute t-0 l-0">

                        <div className="parallax">

                            <figure className="fig__wrapper">

                                <Image src={smallImages[0]} layout="fill" />

                            </figure>

                        </div>

                    </div>

                </div>

                <div className="contact-info-small-imgae2 position-relative col-6 offset-6 col-md-9 offset-md-3">

                    <div className="parallax__wrapper position-absolute t-0 l-0">

                        <div className="parallax">

                            <figure className="fig__wrapper">

                                <Image src={smallImages[1]} layout="fill" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

            <div className="contact-info-text__wrapper col-md-6 col-xl-4 ps-md-5 pt-md-1 mt-2 mt-md-0 ps-1 pe-1 pe-md-0">

                <div className="contact-info-text__inner mt-md-3">

                    <div className="contact-info-text">

                        <h5 className="contact-info-heading mb-1">
                            Email:
                        </h5>

                        <Link href="mailto:jessblog@gmail.com">

                            <a>

                                <span className="line-link small">
                                    jessblog@gmail.com
                                </span>

                            </a>

                        </Link>

                    </div>

                    <div className="contact-info-text">

                        <h5 className="contact-info-heading mb-1">
                            Phone:
                        </h5>

                        <Link href="tel:(647) 807-7695">

                            <a>

                                <span className="line-link small">
                                    (647) 807-7695
                                </span>

                            </a>

                        </Link>

                    </div>

                    <div className="contact-info-text">

                        <h5 className="contact-info-heading mb-1">
                            Address:
                        </h5>

                        <span className="small">
                            25 Saint Mary Street, Toronto
                            <br />
                            Ontario, Canada M4Y 1R2
                        </span>

                    </div>

                </div>

            </div>

            <div className="contact-info-large-image__wrapper overflow-hidden col-md-6 col-xl-5 d-flex flex-column justify-content-center ps-1 pe-1 ps-md-0 pe-xl-4 mt-1 mt-md-0 position-relative">

                <div className="contact-info-large-image position-relative">

                    <div className="parallax__wrapper position-absolute t-0 l-0 overflow-hidden">

                        <div className="parallax">

                            <figure className="fig__wrapper">

                                <Image src={image} layout="fill" objectFit="cover" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ContactInfo;