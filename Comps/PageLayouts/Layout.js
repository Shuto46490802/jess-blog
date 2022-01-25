import React, { useState } from "react";

//Conponents
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import Header from "./Header";
import Popup from "./Popup";

const Layout = ({ children }) => {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    console.log(isSearchOpen)

    return (
        <div className="layout">

            <div className="app__wrapper">

                <Preloader />

                <Cursor />

                <Header setIsSearchOpen={setIsSearchOpen} />

                <Popup isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

                <div className="page">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default Layout;