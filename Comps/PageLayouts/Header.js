import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="header__wrapper w-100 position-fixed">

            <div className="header w-100 d-flex align-items-center justify-content-between">

                <Link href="/">

                    <a className="logo__wrapper col-md">

                        <h2 className="logo">
                            JessBlog
                        </h2>

                    </a>

                </Link>

                <div className="links__wrapper d-none d-md-flex">

                    <Link href="/">

                        <a className="header-link small">

                            <span className="line-link">
                                Blog
                            </span>

                        </a>

                    </Link>

                    <Link href="/about">

                        <a className="header-link small">

                            <span className="line-link">
                                About
                            </span>

                        </a>

                    </Link>

                    <Link href="/contact">

                        <a className="header-link small">

                            <span className="line-link">
                                Contact
                            </span>

                        </a>

                    </Link>

                </div>

                <div className="hamburger__wrapper d-flex col-md justify-content-end">

                    <button type="button" className="hamburger">

                        <div className="hamburger__inner">

                            <span className="line line-1" />

                            <span className="line line-2" />

                        </div>

                    </button>

                </div>

            </div>

        </div>
    );
}

export default Header;