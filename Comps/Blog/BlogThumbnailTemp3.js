import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
//Components
import { animateParallaxImage, animateParallaxInsideImage } from "../PageLayouts/animation";
const BlogThumbnailTemp3 = ({ slug, image1, image2, title, thumbnailText, category, date, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxImage(sectionRef.current, -200, smallImgRef.current);
            animateParallaxInsideImage(largeImgWrapperRef.current, largeImgRef.current)
        }
    }, [isPageLoaded]);

    const sectionRef = useRef();
    const smallImgRef = useRef();
    const largeImgWrapperRef = useRef();
    const largeImgRef = useRef();

    return (
        <div ref={sectionRef} className="blog-thumbnail-temp3 d-flex flex-column flex-column-reverse flex-md-row pb-3 pt-1 py-md-4">

            <div className="blog-thumbnail-temp3-text__wrapper col-md-6 d-flex flex-column flex-center py-2 py-xl-4 position-relative">

                <h5 className="uppercase tiny mt-1 mb-1 mt-0 mb-2 f-sans">
                    {category}
                </h5>

                <div className="blog-thumbnail-temp3-image1__wrapper col-md-5 d-none d-md-block mb-md-2">

                    <div className="parallax__wrapper">

                        <div style={{top: "140px"}} ref={smallImgRef} className="parallax">

                            <div className="blog-thumbnail-temp3-image1 position-relative">

                                <figure className="fig__wrapper">

                                    <Image src={image1} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="blog-thumbnail-temp3-text text-center medium px-3 px-md-0 mb-2 mb-md-3 f-sans">

                    {thumbnailText}

                </div>

                <div className="read-more">

                    <Link href={`/blog/${slug}`}>

                        <a className="f-gt text-o">

                            Read More

                            <svg xmlns="http://www.w3.org/2000/svg" fill="#de312f" viewBox="0 0 31.49 31.49" class="arrow-icon ms-1 transition"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                        </a>

                    </Link>

                </div>

                <div className="blog-thumbnail-temp3-date__wrapper tiny position-absolute f-sans p-md-0 pe-1">

                    {date}

                </div>

            </div>

            <div ref={largeImgWrapperRef} className="blog-thumbnail-temp3-image__wrapper col-md-6 overflow-hidden position-relative">

                <h2 style={{ zIndex: "10", top: "50%", left: "50%", transform: "translate(-50%)" }} className="h1 text-w position-absolute f-serif w-100 px-3 px-md-5 text-center">
                    {title}
                </h2>

                <div>

                    <div className="parallax__wrapper position-absolute t-0 l-0">

                        <div ref={largeImgRef} className="parallax">

                            <figure className="fig__wrapper">

                                <Image src={image2} layout="fill" objectFit="cover" />

                            </figure>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogThumbnailTemp3;