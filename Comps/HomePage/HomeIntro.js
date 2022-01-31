import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateIntroImage } from "../PageLayouts/animation";

const HomeIntro = ({ isPageLoaded, image }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateIntroImage(sectionRef.current, imgRef.current)
        }
    }, [isPageLoaded])

    const imgRef = useRef();
    const sectionRef = useRef();

    return (
        <section ref={sectionRef} className="home-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative
        vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={image} layout="fill" objectFit="cover" />

                    </figure>

                </div>

            </div>

            <div className="home-intro-heading__wrapper text-center should-animate" >

                <h1 className="home-intro-heading f-serif">

                    <span>Lorem</span>
                    <span className="ms-6">ipsum</span>
                    <span className="ms-6">dolor</span>
                    <span className="ms-6">sitamet</span>

                </h1>

                <h1 className="home-intro-heading f-serif">
                    <span>consectetur</span>
                    <span className="ms-6">adipiscing</span>
                    <span className="ms-6">elitsed</span>
                </h1>

            </div>

            <div className="home-intro-subheading d-flex justify-content-center should-animate f-sans">
                <div>I</div>
                <div>T</div>
                <div>'</div>
                <div>S</div>
                <div>&nbsp;</div>
                <div>J</div>
                <div>E</div>
                <div>S</div>
                <div>S</div>
                <div>&nbsp;</div>
                <div>P</div>
                <div>H</div>
                <div>A</div>
                <div>M</div>
            </div>

        </section>
    );
}

export default HomeIntro;