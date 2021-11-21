import React from "react";
import Link from "next/link";
import Image from "next/image";


const Footer = ({ image }) => {
    return (
        <div className="footer position-relative overflow-hidden">

            <div className="footer-image__wrapper mx-2 d-flex flex-column justify-content-between overflow-hidden position-relative">

                <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                    <div className="parallax">

                        <figure className="fig__wrapper">

                            <Image src={image} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </div>

                <div className="footer-image-text__wrapper position-relative w-100 h-100 d-flex flex-column flex-center">

                    <h2 className="footer-image-text-heading h1 uppercase d-flex flex-column flex-center">

                        <div className="lines">Become part of</div>
                        <div className="lines">my journey</div>

                    </h2>

                    <div className="footer-image-input__wrapper mt-3">

                        <form action="input" className="footer-image-input-form d-flex align-items-center px-1 justify-centent-between">

                            <input className="footer-image-input py-6" type="email" placeholder="YOUR EMAIL" />

                            <button type="submit">▼</button>

                        </form>

                    </div>

                </div>

            </div>

            <div className="footer-links__wrapper">

                <ul className="footer-links d-flex justify-content-around flex-wrap p-0 m-0">

                    <li className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-7">
                            site
                        </span>

                        <Link href="/">

                            <a className="footer-link small">
                                Home
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                About
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Contact
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Blog
                            </a>

                        </Link>

                    </li>

                    <li className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-7">
                            posts
                        </span>

                        <Link href="/">

                            <a className="footer-link small">
                                Skincare
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Mental Health
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Fashion
                            </a>

                        </Link>

                    </li>

                    <li className="footer-link d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-7">
                            socials
                        </span>

                        <Link href="/">

                            <a className="footer-link small">
                                Instagram
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Facebook
                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">
                                Poshmark
                            </a>

                        </Link>

                    </li>

                    <li className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-7">
                            help
                        </span>

                        <Link href="/privacy-policy">

                            <a className="footer-link small">
                                Privacy Policy
                            </a>

                        </Link>

                        <Link href="/contact">

                            <a className="footer-link small">
                                Contact
                            </a>

                        </Link>

                    </li>

                </ul>

                <div className="footer-logo__wrapper d-flex justify-content-center mt-4">

                    <h1 className="footer-logo">
                        @JESSBLOG
                    </h1>

                </div>

                <div className="footer-copywrite__wrapper d-flex justify-content-end me-2 mt-4">

                    <p className="small">© 2021 JessBlog - ALL RIGHT RESERVED</p>

                </div>

            </div>

        </div>
    );
}

export default Footer;