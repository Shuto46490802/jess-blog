import React, { useEffect, useRef } from "react"
//Components
import Humburger from "./Humburger";
import Search from "./Search";
//Lib
import { gsap } from "gsap";

const Popup = ({ isSearchOpen, setIsSearchOpen }) => {

    useEffect(() => {
        if (sectionRef) {
            if (isSearchOpen) {
                gsap.timeline({
                    paused: false,
                    ease: "Power2.easeOut"
                })
                    .set(sectionRef.current,
                        {
                            zIndex: 10000
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
    }, [isSearchOpen])

    const sectionRef = useRef();

    return (
        <div ref={sectionRef} className="popup">

            <div className="popup__inner h-100 w-100 d-flex flex-center">

                <Search />

                <div className="close-button d-flex flex-center position-absolute">

                    <Humburger isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />

                </div>

            </div>

        </div>
    );
}

export default Popup;