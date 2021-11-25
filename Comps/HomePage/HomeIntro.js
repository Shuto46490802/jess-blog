import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateIntroImage } from "../PageLayouts/animation";

const HomeIntro = ({ isPageLoaded, image }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateIntroImage(triggerRef.current, imageRef.current)
        }
    }, [isPageLoaded])

    const imageRef = useRef();
    const triggerRef = useRef();

    return (
        <section ref={triggerRef} className="home-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative
        vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imageRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={image} layout="fill" objectFit="cover" />

                    </figure>

                </div>

            </div>

            <h1 className="home-intro-heading text-center should-animate" >

                <span className="h1__wrapper">

                    <div className="h1__inner should-animate">
                        Lorem ipsum dolor sit amet
                    </div>

                </span>

                <span className="h1__wrapper">

                    <div className="h1__inner should-animate">
                        consectetur adipiscing elit sed
                    </div>

                </span>

            </h1>

            <div className="home-intro-subheading d-flex justify-content-center should-animate">
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