import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogThumbnailTemp1 = () => {
    
    return (
        <div className="blog-thumbnail-temp1 d-md-flex pb-3 pt-1 py-md-4">

            <div className="col-md d-none d-lg-block" />

            <div className="blog-thumbnail-temp1-images__wrapper col-md-5 position-relative">

                <div className="blog-thumbnail-temp1-image1__wrapper col-md-5 d-none d-lg-block mb-md-2">

                    <div className="parallax__wrapper">

                        <div className="parallax">

                            <div className="blog-thumbnail-temp1-image1 position-relative">

                                <figure className="fig__wrapper">

                                    <Image src="/test.jpg" layout="fill" objectFit="cover" />

                                </figure>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="blog-thumbnail-temp1-image2__wrapper overflow-hidden h-100 w-100">

                    <div className="position-relative h-100 w-100">

                        <div className="parallax__wrapper">

                            <div className="parallax">

                                <div className="blog-thumbnail-temp1-image2 position-relative">

                                    <figure className="fig__wrapper">

                                        <Image src="/test.jpg" layout="fill" objectFit="cover" />

                                    </figure>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="blog-thumbnail-temp1-text__wrapper col-md px-1 px-md-0">

                <div className="blog-thumbnail-temp1-text__inner d-flex flex-column justify-content-center h-100 ps-md-2 pe-md-2 pe-xlg-5">

                    <h6 className="uppercase tiny mt-1 mb-1 mt-md-0 mb-md-2">Skincare</h6>

                    <h2 className="mb-1 mb-md-2 pe-3 pe-md-0">Who I am</h2>

                    <div className="mb-1 mb-md-2 medium pe-2 pe-md-0">Aliquam sem fringilla ut morbi tincidunt augue interdum velit</div>

                    <div className="">

                        <Link href="/">

                            <a className="h4">

                                Read More

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.49 31.49" class="arrow-icon ms-1 transition"><path d="M21.205 5.007a1.112 1.112 0 00-1.587 0 1.12 1.12 0 000 1.571l8.047 8.047H1.111A1.106 1.106 0 000 15.737c0 .619.492 1.127 1.111 1.127h26.554l-8.047 8.032c-.429.444-.429 1.159 0 1.587a1.112 1.112 0 001.587 0l9.952-9.952a1.093 1.093 0 000-1.571l-9.952-9.953z"></path></svg>

                            </a>

                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogThumbnailTemp1;