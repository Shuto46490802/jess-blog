import React from "react";
import Link from "next/link";
//Components
import Humburger from "./Humburger";

const Header = ({ toggleMenu, toggleSearch, isMenuOpen }) => {
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

                    <Link href={{ pathname: "/blog/all", query: { page: 1 } }}>

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

                    <button
                        className="header-link"
                        onClick={() => {
                            toggleSearch();
                        }}
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" className="search-icon">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M-2.925-2.925h27.1v27.1h-27.1z" />
                                <path fill="#fff" fill-rule="nonzero" d="M14.577 12.884h-.892l-.316-.305a7.307 7.307 0 001.773-4.777 7.34 7.34 0 10-7.34 7.34c1.818 0 3.49-.666 4.777-1.773l.305.316v.892l5.646 5.635 1.682-1.682-5.635-5.646zm-6.775 0a5.075 5.075 0 01-5.081-5.082 5.075 5.075 0 015.081-5.081 5.075 5.075 0 015.082 5.081 5.075 5.075 0 01-5.082 5.082z" class="path" />
                            </g>
                        </svg>

                    </button>

                </div>

                <div className="hamburger__wrapper d-md-none d-flex col-md justify-content-end">

                    <Humburger handleClick={toggleMenu} isMenuOpen={isMenuOpen} />

                </div>

            </div>

        </div>
    );
}

export default Header;