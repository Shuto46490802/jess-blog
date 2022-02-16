import React, { useEffect, useRef } from "react";
import Link from "next/link";
//Lib
import { gsap } from "gsap";

const Menu = ({ isMenuOpen, toggleSearch, toggleMenu }) => {

    useEffect(() => {
        if (sectionRef) {
            if (isMenuOpen) {
                gsap.timeline({
                    paused: false,
                    ease: "Power2.easeOut"
                })
                    .set(sectionRef.current,
                        {
                            zIndex: 8999,
                            visibility: "visible"
                        })
                    .fromTo(sectionRef.current,
                        {
                            opacity: 0
                        },
                        {
                            opacity: 1,
                            duration: 0.75
                        })
            } else {
                gsap.timeline({
                    paused: false,
                    ease: "Power2.easeOut"
                })
                    .fromTo(sectionRef.current,
                        {
                            opacity: 1
                        },
                        {
                            opacity: 0,
                            duration: 0.75
                        })
                    .set(sectionRef.current,
                        {
                            zIndex: -1,
                            visibility: "hidden"
                        })
            }
        }
    }, [isMenuOpen])

    const sectionRef = useRef();

    return (
        <div ref={sectionRef} className="menu position-fixed t-0 l-0 h-100 vw-100 d-flex flex-column">

            <div className="menu-links__wrapper pt-5 w-100">

                <div className="px-1">

                    <div className="position-relative">

                        <div>

                            <div className="menu-link mb-2">

                                <Link href={{ pathname: "/blog/all", query: { page: 1 } }}>

                                    <a
                                        onClick={() => {
                                            setTimeout(() => {
                                                toggleMenu();
                                            }, 800)
                                        }}
                                    >

                                        Blog

                                    </a>

                                </Link>

                            </div>

                            <div className="menu-link mb-2">

                                <Link href="/about">

                                    <a
                                        onClick={() => {
                                            setTimeout(() => {
                                                toggleMenu();
                                            }, 800)
                                        }}
                                    >

                                        About

                                    </a>

                                </Link>

                            </div>

                            <div className="menu-link mb-2">

                                <Link href="/contact">

                                    <a
                                        onClick={() => {
                                            setTimeout(() => {
                                                toggleMenu();
                                            }, 800)
                                        }}
                                    >

                                        Contact

                                    </a>

                                </Link>

                            </div>

                            <button
                                className="menu-link mb-2 text-g"
                                onClick={() => {
                                    toggleSearch();
                                }}
                            >

                                Search

                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <div className="menu-sublinks__wrapper d-flex justify-content-around px-1 pt-2">

                <ul className="col-6">

                    <li className="position-relative my-1 mx-1">

                        <Link href="/">

                            <a className="menu-sublink ">

                                <span>
                                    Privacy Policy
                                </span>

                            </a>

                        </Link>

                    </li>

                    <li className="position-relative my-1 mx-1">

                        <Link href="/">

                            <a className="menu-sublink ">

                                <span>
                                    Instagram
                                </span>

                            </a>

                        </Link>

                    </li>

                </ul>

                <ul className="col-6">

                    <li className="position-relative my-1 mx-1">

                        <Link href="/">

                            <a className="menu-sublink ">

                                <span>
                                    Facebook
                                </span>

                            </a>

                        </Link>

                    </li>

                    <li className="position-relative my-1 mx-1">

                        <Link href="/">

                            <a className="menu-sublink ">

                                <span>
                                    Poshmark
                                </span>

                            </a>

                        </Link>

                    </li>

                </ul>

            </div>

        </div>
    );
}

export default Menu;