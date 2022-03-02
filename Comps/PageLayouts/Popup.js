import React, { useEffect, useRef } from "react"
//Components
import Humburger from "./Humburger";
import Search from "./Search";
//Lib
import { gsap } from "gsap";

const Popup = ({ isSearchOpen, toggleSearch }) => {

    useEffect(() => {
        if (sectionRef) {
            if (isSearchOpen) {
                gsap.timeline({
                    paused: false,
                    ease: "Power2.easeOut"
                })
                    .set(sectionRef.current,
                        {
                            zIndex: 10000,
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
    }, [isSearchOpen])

    const sectionRef = useRef();

    return (
        <div ref={sectionRef} className="popup">

            <div className="popup__inner h-100 w-100 d-flex flex-center">

                <Search toggleSearch={toggleSearch} />

                <div className="close-button d-flex flex-center position-absolute">

                    <Humburger isSearchOpen={isSearchOpen} handleClick={toggleSearch} />

                </div>

            </div>

        </div>
    );
}

export default Popup;