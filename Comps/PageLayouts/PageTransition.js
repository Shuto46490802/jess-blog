import React, { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router";
import { gsap } from "gsap";

const PageTransition = ({ setIsTransitioning }) => {

    const router = useRouter();
    const [isEntered, setIsEntered] = useState(false);

    useEffect(() => {
        router.events.on("routeChangeStart", () => {
            onEnter();
            setIsTransitioning(true);
            document.body.classList.remove("is-done")
        })
    }, [])

    useEffect(() => {
        if (isEntered) {
            onExit();
        }
    }, [isEntered])

    const sectionRef = useRef();
    const bgRef = useRef();
    const logoRef = useRef();

    const onEnter = () => {

        gsap.timeline({ paused: false, defaults: { overwrite: true } })
            .set(sectionRef.current,
                {
                    visibility: "visible"
                })
            .fromTo(bgRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.8
                })
            .fromTo(logoRef.current,
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    duration: 0.6,
                    onComplete: () => {
                        setIsEntered(true);
                    }
                })

    }

    const onExit = () => {

        gsap.timeline({ paused: false, defaults: { overwrite: true }, delay: 1 })
            .fromTo(logoRef.current,
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    duration: 0.6,
                    onComplete: () => {
                        setIsTransitioning(false);
                    }
                })
            .fromTo(bgRef.current,
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    duration: 0.8
                })
            .set(sectionRef.current,
                {
                    visibility: "hidden",
                    onComplete: () => {
                        setIsEntered(false);
                        setTimeout(() => {
                            document.body.classList.add("is-done")
                        }, 1000)
                    }
                })

    }

    return (
        <div ref={sectionRef} className="page-transition text-g vh-100 vw-100 position-fixed t-0 l-0">

            <div className="page-transition__inner h-100 w-100 position-relative d-flex flex-center">

                <div ref={bgRef} className="page-transition-bg bg-w position-absolute h-100 w-100 t-0 l-0" />

                <div ref={logoRef} className="page-transition-logo__wrapper position-absolute ">

                    <h1>JessBlog</h1>

                </div>

            </div>

        </div>
    );
}

export default PageTransition;