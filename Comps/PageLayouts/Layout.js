import React, { useEffect, useState } from "react";
//Conponents
import Cursor from "./Cursor";
import Header from "./Header";
import Popup from "./Popup";
import Menu from "./Menu";
import Intro from "./Intro";
import PageTransition from "./PageTransition";

const Layout = ({ children, isFirstLoaded, setIsTransitioning }) => {

    useEffect(() => {
        window.addEventListener('load', () => {
            setIsPageLoaded(true);
        })
    }, [])

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearch = () => {
        if (isSearchOpen) {
            setIsSearchOpen(false)
        } else {
            setIsSearchOpen(true)
        }
    }

    const toggleMenu = () => {

        if (isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }

    }

    return (
        <div className="layout">

            <div className="app__wrapper">

                <Intro isFirstLoaded={isFirstLoaded} />

                <PageTransition setIsTransitioning={setIsTransitioning} />

                <Cursor />

                <Header toggleMenu={toggleMenu} toggleSearch={toggleSearch} isMenuOpen={isMenuOpen} />

                {
                    isPageLoaded
                        ?
                        <>
                            <Popup isSearchOpen={isSearchOpen} toggleSearch={toggleSearch} />
                            <Menu isMenuOpen={isMenuOpen} toggleSearch={toggleSearch} />
                        </>
                        : null
                }

                <div className="page">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default Layout;