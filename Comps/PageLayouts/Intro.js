import React, { useEffect, useRef } from "react";
import Image from "next/image"

const Intro = () => {

    useEffect(() => {

        const images = document.getElementsByTagName('img');

        console.log(images[0].attributes.src)

        let count = 0;
        let current = 0;
        let intervalCount = 0;

        const onLoadImage = setInterval(() => {
            const img = new Image();

            img.onload(() => {
                count++;
                current = Math.floor(count / images.length * 100);
                percentRef.current = current;
            });

            img.onerror(() => {
                count += 1;
            })

            // img.src = images[intervalCount].attributes.src;

            intervalCount++;
            if (intervalCount >= images.length) {
                clearInterval(onLoadImage);
            }
        }, 100);

    }, [])

    

    const percentRef = useRef();
    console.log(percentRef.current)

    return (
        <div className="intro position-fixed vh-100 l-0 t-0 vw-100">

            <div className="intro-fader position-absolute vh-100 vh-100 l-0 t-0 vw-100" />

            <div className="intro-logo__wrapper position-absolute w-100 h-100 d-flex flex-center flex-column">

                <div className="intro-logo">

                    <h1>JessBlog</h1>

                    <p className="intro-logo-counter d-flex f-gt">

                        <span ref={percentRef} className="counter">
                            0
                        </span>
                        %
                    </p>

                </div>

            </div>

            <ul className="intro-images__wrapper d-flex flex-center h-100 position-relative w-100">

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

                <li className="intro-image">

                    <div className="intro-image__inner">

                        <figure className="fig__wrapper">

                            <Image src={"/ceramic.jpg"} layout="fill" objectFit="cover" />

                        </figure>

                    </div>

                </li>

            </ul>

        </div>
    );
}

export default Intro;