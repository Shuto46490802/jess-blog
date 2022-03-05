import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//Components
import { animateParallaxInsideImage, animateTextHidden } from "../PageLayouts/animation";

const Footer = ({ image, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateParallaxInsideImage(imgTriggerRef.current, imgRef.current);
            animateTextHidden(linkWrapperRef1.current, 0.75, linkRefs1.current);
            animateTextHidden(linkWrapperRef2.current, 0.75, linkRefs2.current);
            animateTextHidden(linkWrapperRef3.current, 0.75, linkRefs3.current);
            animateTextHidden(linkWrapperRef4.current, 0.75, linkRefs4.current);
            animateTextHidden(logoWrapperRef.current, 1.5, logoRef.current);
        }
    }, [isPageLoaded])

    const router = useRouter();

    const imgTriggerRef = useRef();
    const imgRef = useRef();
    const linkWrapperRef1 = useRef();
    const linkWrapperRef2 = useRef();
    const linkWrapperRef3 = useRef();
    const linkWrapperRef4 = useRef();
    const linkRefs1 = useRef([]);
    const addToLinkRefs1 = (_el) => {
        if (_el && !linkRefs1.current.includes(_el)) {
            linkRefs1.current.push(_el)
        } else {
            linkRefs1.current = [];
        }
    };
    const linkRefs2 = useRef([]);
    const addToLinkRefs2 = (_el) => {
        if (_el && !linkRefs2.current.includes(_el)) {
            linkRefs2.current.push(_el)
        } else {
            linkRefs2.current = [];
        }
    };
    const linkRefs3 = useRef([]);
    const addToLinkRefs3 = (_el) => {
        if (_el && !linkRefs3.current.includes(_el)) {
            linkRefs3.current.push(_el)
        } else {
            linkRefs3.current = [];
        }
    };
    const linkRefs4 = useRef([]);
    const addToLinkRefs4 = (_el) => {
        if (_el && !linkRefs4.current.includes(_el)) {
            linkRefs4.current.push(_el)
        } else {
            linkRefs4.current = [];
        }
    };
    const logoWrapperRef = useRef();
    const logoRef = useRef();

    const [email, setEmail] = useState("");

    const handleSubmit = (e, _email) => {
        e.preventDefault();

        if (_email !== "") {
            router.push({ pathname: "/contact", query: { email: _email } }, "/contact")
        }
    }


    return (
        <div className="footer position-relative overflow-hidden">

            <div className="footer-image__wrapper mx-2 my-3 d-flex flex-column justify-content-between overflow-hidden position-relative">

                <div ref={imgTriggerRef} className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                    <div ref={imgRef} className="parallax should-animate">

                        <figure className="fig__wrapper">

                            <Image src={image} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </div>

                <div className="footer-image-text__wrapper position-relative w-100 h-100 d-flex flex-column flex-center">

                    <h2 className="footer-image-text-heading h1 uppercase d-flex flex-column flex-center f-serif">

                        <div className="lines">Become part of</div>
                        <div className="lines">my journey</div>

                    </h2>

                    <div className="footer-image-input__wrapper mt-3">

                        <form action="input" className="footer-image-input-form d-flex align-items-center px-1 justify-centent-between">

                            <input
                                className="footer-image-input py-6 f-gt text-w"
                                type="email"
                                placeholder="YOUR EMAIL"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />

                            <button
                                onClick={(e) => {
                                    handleSubmit(e, email)
                                }}
                                className="text-w"
                                type="submit">▼</button>

                        </form>

                    </div>

                </div>

            </div>

            <div className="footer-links__wrapper pt-2">

                <ul className="footer-links f-gt d-flex justify-content-around flex-wrap p-0 m-0">

                    <li ref={linkWrapperRef1} className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-6">
                            site
                        </span>

                        <Link href="/">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs1}>
                                    Home
                                </div>
                            </a>

                        </Link>

                        <Link href="/about">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs1}>
                                    About
                                </div>

                            </a>

                        </Link>

                        <Link href="/contact">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs1}>
                                    Contact
                                </div>

                            </a>

                        </Link>

                        <Link href={{ pathname: "/blog/all", query: { page: 1 } }}>

                            <a className="footer-link small">

                                <div ref={addToLinkRefs1}>
                                    Blog
                                </div>

                            </a>

                        </Link>

                    </li>

                    <li ref={linkWrapperRef2} className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-6">
                            posts
                        </span>

                        <Link href={{ pathname: "/blog/skincare", query: { page: 1 } }}>

                            <a className="footer-link small">

                                <div ref={addToLinkRefs2}>
                                    Skincare
                                </div>

                            </a>

                        </Link>

                        <Link href={{ pathname: "/blog/mental-health", query: { page: 1 } }}>

                            <a className="footer-link small">

                                <div ref={addToLinkRefs2}>
                                    Mental Health
                                </div>

                            </a>

                        </Link>

                        <Link href={{ pathname: "/blog/fashion", query: { page: 1 } }}>

                            <a className="footer-link small">

                                <div ref={addToLinkRefs2}>
                                    Fashion
                                </div>

                            </a>

                        </Link>

                    </li>

                    <li ref={linkWrapperRef3} className="footer-link d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-6">
                            socials
                        </span>

                        <Link href="/">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs3}>
                                    Instagram
                                </div>

                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs3}>
                                    Facebook
                                </div>

                            </a>

                        </Link>

                        <Link href="/">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs3}>
                                    Poshmark
                                </div>

                            </a>

                        </Link>

                    </li>

                    <li ref={linkWrapperRef4} className="footer-link__wrapper d-flex flex-column col-md-3 col-6 py-md-1 py-2 px-2">

                        <span className="footer-link-title uppercase pb-6">
                            help
                        </span>

                        <Link href="/privacy-policy">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs4}>
                                    Privacy Policy
                                </div>

                            </a>

                        </Link>

                        <Link href="/contact">

                            <a className="footer-link small">

                                <div ref={addToLinkRefs4}>
                                    Contact
                                </div>

                            </a>

                        </Link>

                    </li>

                </ul>

                <div className="footer-logo__wrapper d-flex justify-content-center mt-4">

                    <h1 ref={logoWrapperRef} className="footer-logo overflow-hidden f-serif">

                        <div ref={logoRef} className="should-animate">
                            JESSBLOG
                        </div>

                    </h1>

                </div>

                <div className="footer-copywrite__wrapper d-flex justify-content-end me-2 mt-4">

                    <p className="small f-sans">© 2021 JessBlog - ALL RIGHT RESERVED</p>

                </div>

            </div>

        </div>
    );
}

export default Footer;