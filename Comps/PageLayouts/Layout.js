import React from "react";

//Conponents
import Preloader from "./Preloader";
import Cursor from "./Cursor";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="layout">

            <div className="app__wrapper">

                <Preloader />

                <Cursor />

                <Header />

                <div className="page">

                    {children}

                </div>

            </div>

        </div>
    );
}

export default Layout;