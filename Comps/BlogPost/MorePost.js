import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import { animateGallery, animateTextUp } from "../PageLayouts/animation";
//Lib
import ScrollTrigger from "gsap/ScrollTrigger";

const MorePost = ({ posts, isPageLoaded }) => {

    useEffect(() => {
        if (isPageLoaded) {
            ScrollTrigger.saveStyles([
                imageRefs.current
            ])
            ScrollTrigger.matchMedia({
                "(min-width: 768px)": () => {
                    animateGallery(galleryWrapperRef.current, imageRefs.current);
                },
                "all": () => {
                    animateTextUp(sectionRef.current, 0, textRef.current);
                }
            })
        }
    }, [isPageLoaded]);

    const sectionRef = useRef();
    const textRef = useRef();
    const galleryWrapperRef = useRef();
    const imageRefs = useRef([]);
    const addToImageRefs = (_el) => {
        if (_el && !imageRefs.current.includes(_el)) {
            imageRefs.current.push(_el)
        } else {
            imageRefs.current = [];
        }
    };

    return (
        <div ref={sectionRef} className="more-posts d-flex flex-column pt-md-3 pb-md-5 px-md-3 overflow-hidden">

            <div className="d-flex flex-center text-center py-2 mb-md-2">

                <h2 ref={textRef} className="h1 col-md-5 col-xl-3 px-3 px-md-0 f-serif">
                    more-stories
                </h2>

            </div>

            <div ref={galleryWrapperRef} className="more-posts-posts__wrapper d-flex flex-md-row flex-column">

                <div ref={addToImageRefs} className="col-md-4">

                    <Link href={`/blog/${posts[0].slug}`}>

                        <a>

                            <div className="more-posts-post px-sm-1 px-xl-3">

                                <div className="more-posts-post-image overflow-hidden position-relative">

                                    <div className="parallax__wrapper position-absolute t-0 l-0">

                                        <div className="parallax">

                                            <figure className="fig__wrapper">

                                                <Image src={posts[0].image} layout="fill" objectFit="cover" />

                                            </figure>

                                        </div>

                                    </div>

                                </div>

                                <div className="pe-xl-3 mt-1 mb-2 mb-md-0 px-1 px-md-0">

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2 f-serif">
                                        {posts[0].title}
                                    </h3>

                                    <h6 className="small uppercase f-sans">
                                        {posts[0].category}
                                    </h6>

                                </div>

                            </div>

                        </a>

                    </Link>

                </div>

                <div ref={addToImageRefs} className="col-md-4">

                    <Link href={`/blog/${posts[1].slug}`}>

                        <a>

                            <div className="more-posts-post px-sm-1 px-xl-3">

                                <div className="more-posts-post-image overflow-hidden position-relative">

                                    <div className="parallax__wrapper position-absolute t-0 l-0">

                                        <div className="parallax">

                                            <figure className="fig__wrapper">

                                                <Image src={posts[1].image} layout="fill" objectFit="cover" />

                                            </figure>

                                        </div>

                                    </div>

                                </div>

                                <div className="pe-xl-3 mt-1 mb-2 mb-md-0 px-1 px-md-0">

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2 f-serif">
                                        {posts[1].title}
                                    </h3>

                                    <h6 className="small uppercase f-sans">
                                        {posts[1].category}
                                    </h6>

                                </div>

                            </div>

                        </a>

                    </Link>
                </div>

                <div ref={addToImageRefs} className="col-md-4">

                    <Link href={`/blog/${posts[2].slug}`}>

                        <a>

                            <div className="more-posts-post px-sm-1 px-xl-3">

                                <div className="more-posts-post-image overflow-hidden position-relative">

                                    <div className="parallax__wrapper position-absolute t-0 l-0">

                                        <div className="parallax">

                                            <figure className="fig__wrapper">

                                                <Image src={posts[2].image} layout="fill" objectFit="cover" />

                                            </figure>

                                        </div>

                                    </div>

                                </div>

                                <div className="pe-xl-3 mt-1 mb-2 mb-md-0 px-1 px-md-0">

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2 f-serif">
                                        {posts[2].title}
                                    </h3>

                                    <h6 className="small uppercase f-sans">
                                        {posts[2].category}
                                    </h6>

                                </div>

                            </div>

                        </a>

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default MorePost;