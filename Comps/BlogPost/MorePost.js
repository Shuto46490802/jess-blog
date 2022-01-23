import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
//Components
import { animateGallery, animateTextUp } from "../PageLayouts/animation";

const MorePost = ({ posts, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateGallery(galleryWrapperRef.current, imageRefs.current);
            animateTextUp(sectionRef.current, 0, textRef.current)
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
        <div ref={sectionRef} className="more-posts d-flex flex-column pt-md-3 pb-md-5 px-md-3">

            <div className="d-flex flex-center text-center py-2 mb-md-2">

                <h2 ref={textRef} className="h1 col-md-5 col-xl-3 px-3 px-md-0">
                    more-stories
                </h2>

            </div>

            <div ref={galleryWrapperRef} className="more-posts-posts__wrapper d-flex flex-wrap">

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

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2">
                                        {posts[0].title}
                                    </h3>

                                    <h6 className="small uppercase">
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

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2">
                                        {posts[1].title}
                                    </h3>

                                    <h6 className="small uppercase">
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

                                    <h3 className="text-left uppercase lh-14 mb-1 mb-md-2">
                                        {posts[2].title}
                                    </h3>

                                    <h6 className="small uppercase">
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