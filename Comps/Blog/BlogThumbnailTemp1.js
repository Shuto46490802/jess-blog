import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
//Components
import { animateParallaxImage, animateParallaxInsideImage } from "../PageLayouts/animation";
const BlogThumbnailTemp1 = ({ slug, image1, image2, title, thumbnailText, category, date, isPageLoaded }) => {

    useEffect(() => {
        if(isPageLoaded){
            animateParallaxImage(sectionRef.current, -200, smallImgeRef.current);
            animateParallaxInsideImage(largeImgWrapperRef.current, largeImgRef.current)
        }
    }, [isPageLoaded])

    const sectionRef = useRef();
    const smallImgeRef = useRef();
    const largeImgWrapperRef = useRef();
    const largeImgRef = useRef();
    
    return (
        <div ref={sectionRef} className="blog-thumbnail-temp1 d-md-flex pb-3 pt-1 py-md-4">

            <div className="col-md d-none d-lg-block" />

            <div className="blog-thumbnail-temp1-images__wrapper col-md-5 position-relative">

                <div className="blog-thumbnail-temp1-image1__wrapper col-md-5 d-none d-lg-block mb-md-2">

                    <div className="parallax__wrapper">

                        <div style={{top: "140px"}} ref={smallImgeRef} className="parallax">

                            <div className="blog-thumbnail-temp1-image1 position-relative">

                                <figure className="fig__wrapper">

                                    <Image src={image1} layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

                <div ref={largeImgWrapperRef} className="blog-thumbnail-temp1-image2__wrapper overflow-hidden h-100 w-100">

                    <div className="position-relative h-100 w-100">

                        <div className="parallax__wrapper">

                            <div ref={largeImgRef} className="parallax">

                                <div className="blog-thumbnail-temp1-image2 position-relative h-100">

                                    <figure className="fig__wrapper">

                                        <Image src={image2} layout="fill" objectFit="cover" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="blog-thumbnail-temp1-text__wrapper col-md px-1 px-md-0">

                <div className="blog-thumbnail-temp1-text__inner d-flex flex-column justify-content-center h-100 ps-md-2 pe-md-2 pe-xlg-5 position-relative">

                    <h6 className="uppercase tiny mt-1 mb-1 mt-md-0 mb-md-2 f-sans">{category}</h6>

                    <h2 className="mb-1 mb-md-2 pe-3 pe-md-0 f-serif">{title}</h2>

                    <div className="mb-1 mb-md-2 medium pe-2 pe-md-0 f-sans">{thumbnailText}</div>

                    <div className="">

                        <Link href={`/blog/${slug}`}>

                            <a className="h4 f-gt text-o">

                                Read More

                                <svg xmlns="http://www.w3.org/2000/svg" fill="#de312f" viewBox="0 0 31.49 31.49" class="arrow-icon ms-1 transition"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                            </a>

                        </Link>

                    </div>

                    <div className="blog-thumbnail-temp1-date__wrapper large position-absolute f-sans">

                        {date}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogThumbnailTemp1;