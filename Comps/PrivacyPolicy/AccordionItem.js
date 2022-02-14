import React, { useEffect, useRef, useState } from "react";
//Lib
import { gsap } from "gsap";

const AccordionItem = ({ title, content }) => {

    const [isActive, setIsActive] = useState(false);
    const contentWrapperRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        if (isActive) {


            gsap.timeline({ paused: false })
                .fromTo(contentWrapperRef.current,
                    {
                        height: 0,
                        visibility: "hidden"
                    },
                    {
                        height: "auto",
                        visibility: "visible",
                        duration: 0.4,
                        ease: "power4"
                    })
                .fromTo(contentRef.current,
                    {
                        opacity: 0
                    },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power4"
                    })
        } else {
            gsap.timeline({ paused: false })
                .fromTo(contentRef.current,
                    {
                        opacity: 1
                    },
                    {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power3"
                    })
                .fromTo(contentWrapperRef.current,
                    {
                        height: contentWrapperRef.current.clientHeight,
                        visibility: "visible"
                    },
                    {
                        height: 0,
                        visibility: "hidden",
                        duration: 0.4,
                        ease: "power3"
                    })

        }
    }, [isActive])

    const getContent = (_content) => {

        return _content.map((content) => (
            <p>{content}</p>
        ))

    };

    return (
        <div className="accordion__wrapper mb-1">

            <div
                onClick={() => {
                    setIsActive(!isActive);
                }}
                className={`accordion-title__wrapper d-flex justify-content-between align-items-start align-items-md-center ${isActive ? "is-active" : ""}`}>

                <div className="accordion-title h5">{title}</div>

                <div className="ml-6">

                    <div className={`plus__wrapper`}>

                        <span className="minus" />

                        <span className="vertical-line" />

                    </div>

                </div>

            </div>

            <div ref={contentWrapperRef} className="accordion-content__wrapper pe-md-4">

                <div ref={contentRef} className="pt-1 pb-1">

                    {getContent(content)}

                </div>

            </div>

        </div>
    );
}

export default AccordionItem;