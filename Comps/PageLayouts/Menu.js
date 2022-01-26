import React, { useEffect, useRef } from "react";
import Link from "next/link";
//Lib
import { gsap } from "gsap";

const Menu = ({ isMenuOpen, toggleSearch }) => {

    useEffect(() => {
        if (sectionRef) {
            if (isMenuOpen) {
                gsap.timeline({
                    paused: false,
                    ease: "Power2.easeOut"
                })
                    .set(sectionRef.current,
                        {
                            zIndex: 9000
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
                            zIndex: -1
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

                                <Link href="/">

                                    <a>

                                        Blog

                                    </a>

                                </Link>

                            </div>

                            <div className="menu-link mb-2">

                                <Link href="/">

                                    <a>

                                        About

                                    </a>

                                </Link>

                            </div>

                            <div className="menu-link mb-2">

                                <Link href="/">

                                    <a>

                                        Contact

                                    </a>

                                </Link>

                            </div>

                            <button
                                className="menu-link mb-2"
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