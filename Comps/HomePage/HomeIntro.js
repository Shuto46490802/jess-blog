import React, { useEffect, useRef } from "react";
import Image from "next/image";
//Components
import { animateIntroImage, animateIntroHeading, animateIntroImageScale } from "../PageLayouts/animation";
//Lib
import { gsap } from "gsap";

const HomeIntro = ({ isPageLoaded, image }) => {

    useEffect(() => {
        if (isPageLoaded) {
            animateIntroImage(sectionRef.current, imgRef.current);
            animateIntroHeading(textRefs.current);
            animateSubheading(text2Refs.current);
            animateIntroImageScale(imgRef.current);
        }
    }, [isPageLoaded])

    const imgRef = useRef();
    const sectionRef = useRef();
    const textRefs = useRef([]);
    const addToTextRefs = (_el) => {
        if (_el && !textRefs.current.includes(_el)) {
            textRefs.current.push(_el)
        } else {
            textRefs.current = [];
        }
    };
    const text2Refs = useRef([]);
    const addToTextRefs2 = (_el) => {
        if (_el && !text2Refs.current.includes(_el)) {
            text2Refs.current.push(_el)
        } else {
            text2Refs.current = [];
        }
    };

    const animateSubheading = (..._text) => {

        if([..._text]){

            const firstArr = [..._text][0].slice(0, [..._text][0].length / 2);
            const secondArr = [..._text][0].slice([..._text][0].length / 2);

            gsap.fromTo(firstArr,
                {
                    x: (index) => (index - firstArr.length) * 20,
                    opacity: 0
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power4",
                })
            
                gsap.fromTo(secondArr,
                    {
                        x: (index) => (index + 1) * 20,
                        opacity: 0
                    },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power4",
                    })
        }

    }

    return (
        <section ref={sectionRef} className="home-intro d-flex flex-column flex-center p-1 p-md-0 overflow-hidden position-relative
        vh-100">

            <div className="parallax__wrapper t-0 l-0 overflow-hidden position-absolute">

                <div ref={imgRef} className="parallax should-animate">

                    <figure className="fig__wrapper">

                        <Image src={image} layout="fill" objectFit="cover" priority />

                    </figure>

                </div>

            </div>

            <div className="home-intro-heading__wrapper text-center should-animate" >

                <h1 className="home-intro-heading f-serif overflow-hidden">

                    <span ref={addToTextRefs}>Lorem</span>
                    <span ref={addToTextRefs} className="ms-6">ipsum</span>
                    <span ref={addToTextRefs} className="ms-6">dolor</span>

                </h1>

                <h1 className="home-intro-heading f-serif overflow-hidden">
                    <span ref={addToTextRefs}>consectetur</span>
                    <span ref={addToTextRefs} className="ms-6">adipiscing</span>
                </h1>

            </div>

            <div className="home-intro-subheading d-flex justify-content-center should-animate f-sans">
                <div ref={addToTextRefs2}>I</div>
                <div ref={addToTextRefs2}>T</div>
                <div ref={addToTextRefs2}>'</div>
                <div ref={addToTextRefs2}>S</div>
                <div ref={addToTextRefs2}>&nbsp;</div>
                <div ref={addToTextRefs2}>J</div>
                <div ref={addToTextRefs2}>E</div>
                <div ref={addToTextRefs2}>S</div>
                <div ref={addToTextRefs2}>S</div>
                <div ref={addToTextRefs2}>&nbsp;</div>
                <div ref={addToTextRefs2}>P</div>
                <div ref={addToTextRefs2}>H</div>
                <div ref={addToTextRefs2}>A</div>
                <div ref={addToTextRefs2}>M</div>
            </div>

        </section>
    );
}

export default HomeIntro;