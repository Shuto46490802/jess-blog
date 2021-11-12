import React from "react";
import Link from "next/link";

const BlogFilter = () => {
    return (
        <div className="blog-content-filter__wrapper mt-2">

            <div className="blog-content-filter__inner w-100 ps-md-2 pe-md-2">

                <div className="blog-content-filter">

                    <div className="blog-content-filter-list__wrapper">

                        <div className="blog-content-filter-list__inner d-flex align-items-center justify-content-start">

                            <ul className="blog-content-filter-list d-inline-flex">

                                <li className="blog-content-filter-list-item">

                                    <Link href="/">

                                        <a className="">

                                            <span className="line-link">
                                                View All
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href="/">

                                        <a className="">

                                            <span className="line-link">
                                                Skincare
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href="/">

                                        <a className="">

                                            <span className="line-link">
                                                Mental Health
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href="/">

                                        <a className="">

                                            <span className="line-link">
                                                Fashion
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BlogFilter;