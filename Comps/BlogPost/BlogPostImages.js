import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { animateParallaxImage, animateParallaxInsideImage } from "../PageLayouts/animation";

const BlogPostImages = ({ smallImage, largeImage, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxInsideImage(largeImgWrapperRef.current, largeImgRef.current);
            animateParallaxImage(sectionRef.current, -100, smallImgRef.current);
            animateParallaxImage(sectionRef.current, -100, smallImgMobileRef.current)
        }
    }, [isPageLoaded]);

    const largeImgWrapperRef = useRef();
    const largeImgRef = useRef();
    const sectionRef = useRef();
    const smallImgRef = useRef();
    const smallImgMobileRef = useRef();

    return (
        <div ref={sectionRef} className="blog-post-images d-flex flex-md-row flex-column flex-column-reverse">

            <div className="col-md-6 bg-p text-w ps-md-3 d-flex flex-column align-items-start justify-content-center pt-md-4 pb-md-3">

                <div className="col-md-8 col-xl-6 px-1 px-md-0 pb-1 pt-md-0 pb-md-0 d-flex flex-column align-items-end justify-content-end">

                    <div style={{ transform: "translateY(-20%)", zIndex: "1" }} className="d-flex d-md-none col-5">

                        <div className="parallax__wrapper">

                            <div style={{top: "50px"}} ref={smallImgRef} className="parallax should-animate">

                                <div className="blog-post-small-image-mobile position-relative">

                                    <figure className="fig__wrapper">

                                        <Image src={smallImage} layout="fill" objectFit="cover" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="medium lh-16 mb-md-2 f-sans">

                        <p>
                            Facilisis gravida neque convallis a cras semper auctor neque. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Tellus at urna condimentum mattis pellentesque id nibh tortor. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu.
                        </p>

                        <p>
                            Quisque id diam vel quam elementum pulvinar etiam non. Nisi scelerisque eu ultrices vitae auctor eu augue ut lectus. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Mauris vitae ultricies leo integer malesuada nunc. Lectus nulla at volutpat diam ut venenatis tellus in metus. Augue ut lectus arcu bibendum at varius vel pharetra. Quisque id diam vel quam elementum pulvinar etiam non.
                        </p>

                    </div>

                    <div className="parallax__wrapper d-none d-md-block">

                        <div style={{top: "50px"}} ref={smallImgMobileRef} className="parallax should-animate">

                            <div className="blog-post-small-image-not-mobile position-relative">

                                <figure className="fig__wrapper">

                                    <Image src={smallImage} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                            <div className="d-flex tiny align-items-center justify-content-end f-sans">

                                <span>Vestibulum lectus mauris ultrices</span>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="blog-post-large-image__wrapper col col-md-6 d-flex d-md-block flex-column flex-column-reverse position-relative">

                <div className="overflow-hidden">

                    <div ref={largeImgWrapperRef} className="parallax__wrapper overflow-hidden position-absolute t-0 l-0">

                        <div ref={largeImgRef} className="parallax should-animate">

                            <div className="blog-post-large-image h-100">

                                <figure className="fig__wrapper">

                                    <Image src={largeImage} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogPostImages;