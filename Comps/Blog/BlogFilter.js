import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const BlogFilter = () => {

    const router = useRouter();

    return (
        <div className="blog-content-filter__wrapper mt-2 pb-2 ps-md-0 ps-1">

            <div className="blog-content-filter__inner w-100 ps-md-2 pe-md-2">

                <div className="blog-content-filter">

                    <div className="blog-content-filter-list__wrapper">

                        <div className="blog-content-filter-list__inner d-flex align-items-center justify-content-start">

                            <ul className="blog-content-filter-list d-inline-flex">

                                <li className="blog-content-filter-list-item">

                                    <Link href={{pathname: "/blog/all", query: { page: 1 }}}>

                                        <a className="">

                                            <span className={`line-link-pagination ${router.pathname.includes("all") ? "active" : null}`}>
                                                View All
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href={{pathname: "/blog/skincare", query: { page: 1 }}}>

                                        <a className="">

                                            <span className={`line-link-pagination ${router.pathname.includes("skincare") ? "active" : null}`}>
                                                Skincare
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href={{pathname: "/blog/mental-health", query: { page: 1 }}}>

                                        <a className="">

                                            <span className={`line-link-pagination ${router.pathname.includes("mental-health") ? "active" : null}`}>
                                                Mental Health
                                            </span>

                                        </a>

                                    </Link>

                                </li>

                                <li className="blog-content-filter-list-item">

                                    <Link href={{pathname: "/blog/fashion", query: { page: 1 }}}>

                                        <a className="">

                                            <span className={`line-link-pagination ${router.pathname.includes("fashion") ? "active" : null}`}>
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