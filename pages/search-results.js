import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
//Components
import Footer from "../Comps/PageLayouts/Footer";
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import { contentfulClient } from "../Lib/ContentfulClient";
import "../Comps/PageLayouts/EdgeEasingPlugin";
//Lib
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';

export const getServerSideProps = async (context) => {

    const searchResults = await contentfulClient.getEntries({
        content_type: "blogPost",
        query: context.keyword
    })

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    })

    return {
        props: {
            searchResults: searchResults.items.map((item) => ({
                title: item.fields.title,
                slug: item.fields.slug,
                category: item.fields.category,
                thumbnailText: item.fields.thumbnailText,
                date: item.fields.date,
                images: item.fields.featureImages.map((image) => {
                    return "https:" + image.fields.file.url
                })
            })),
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const SearchResults = ({ searchResults, footerImage, headerRef }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current, headerRef.current);
        setIsPageLoaded(true);
        console.log(searchResults)
    }, [])

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const scrollerRef = useRef();

    return (
        <motion.div
            ref={scrollerRef}
            className="page__wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >

            <div className="components-wrapper">

                <div className="search-results pt-3">

                    <div className="search-results__inner px-md-1 px-xl-5 py-3 pb-xl-5 w-100">

                        <div className="search-results-title__wrapper text-b">

                            <p className="m-0 small f-sans ">
                                search results for:
                            </p>

                            <h3 className="f-serif">
                                A
                            </h3>

                        </div>

                        <div className="search-results-contents__wrapper">

                            <div className="search-results-contents__inner d-flex flex-wrap">

                                {
                                    searchResults.map((result) => (
                                        <div className="search-results-content col-md-4 col-12">

                                            <Link href="">

                                                <a className="">

                                                    <div className="search-results-content__inner position-relative">

                                                        <Swiper>

                                                            <SwiperSlide>
                                                                
                                                            </SwiperSlide>

                                                        </Swiper>

                                                    </div>

                                                </a>

                                            </Link>

                                        </div>
                                    ))
                                }



                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </motion.div>
    );
}

export default SearchResults;