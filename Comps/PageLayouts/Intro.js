import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Lib
import { gsap } from "gsap";
const Intro = ({ isFirstLoaded, isFirstIntroDone }) => {
    
    useEffect(() => {

        if (isFirstLoaded) {

            if (!isFirstIntroDone) {

                gsap.timeline({ paused: false })
                    .fromTo(imgWrapperRefs.current,
                        {
                            clipPath: "circle(0%)"
                        },
                        {
                            clipPath: "circle(50%)",
                            duration: 2,
                            ease: "power4",
                            stagger: 0.3
                        })
                    .fromTo(imgRefs.current,
                        {
                            scale: 1.8
                        },
                        {
                            scale: 1,
                            duration: 2,
                            ease: "power4",
                            stagger: 0.3
                        }, 0)
                // .fromTo(imagesWrapperRef.current,
                //     {
                //         yPercent: 0
                //     },
                //     {
                //         yPercent: -50,
                //         duration: 1.2,
                //         ease: "Expo.easeInOut"
                //     })
                // .fromTo(faderRef.current,
                //     {
                //         opacity: 0,
                //     },
                //     {
                //         opacity: 1,
                //         duration: 1.2,
                //         ease: "Expo.easeInOut"
                //     }, 3.8)
                // .set(sectionRef.current,
                //     {
                //         visibility: "hidden",
                //     })

            }

        }

    }, [isFirstLoaded])

    const sectionRef = useRef();
    const imgWrapperRefs = useRef([]);
    const addToImgWrapperRefs = (_el) => {
        if (_el && !imgWrapperRefs.current.includes(_el)) {
            imgWrapperRefs.current.push(_el)
        } else {
            imgWrapperRefs.current = [];
        }
    };

    const imgRefs = useRef([]);
    const addToImgRefs = (_el) => {
        if (_el && !imgRefs.current.includes(_el)) {
            imgRefs.current.push(_el)
        } else {
            imgRefs.current = [];
        }
    };
    const imagesWrapperRef = useRef();
    const faderRef = useRef();

    return (
        <div ref={sectionRef} className="intro position-fixed vh-100 l-0 t-0 vw-100 bg-w">

            <div ref={faderRef} className="intro-fader position-absolute vh-100 vh-100 l-0 t-0 vw-100" />

            {/* <div className="intro-logo__wrapper position-absolute w-100 h-100 d-flex flex-center flex-column">

                <div className="intro-logo">

                    <h1>JessBlog</h1>

                    <p className="intro-logo-counter d-flex f-gt">

                        <span className="counter">
                            0
                        </span>
                        %
                    </p>

                </div>

            </div> */}

            <ul ref={imagesWrapperRef} className="intro-images__wrapper d-flex flex-center h-100 position-relative w-100">

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}


                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}


                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}


                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}


                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}

                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}

                </li>

                <li ref={addToImgWrapperRefs} className="intro-image">

                    {/* <div ref={addToImgRefs} className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" priority />

                        </figure>

                    </div> */}
                    

                </li>

            </ul>

        </div>
    );
}

export default Intro;