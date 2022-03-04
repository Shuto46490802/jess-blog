import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
//Components
import Footer from "../Comps/PageLayouts/Footer";
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import { contentfulClient } from "../Lib/ContentfulClient";
import "../Comps/PageLayouts/EdgeEasingPlugin";
//Lib
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Autoplay } from 'swiper';
import 'swiper/css/effect-fade';
import { convertDate } from "../Comps/PageLayouts/util";
import Pagination from "../Comps/SearchResults/Pagination";
import ScrollTrigger from "gsap/ScrollTrigger";
SwiperCore.use([EffectFade, Autoplay]);

export const getServerSideProps = async (context) => {

    const searchResults = await contentfulClient.getEntries({
        content_type: "blogPost",
        query: context.query.keyword
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

    const router = useRouter();

    useEffect(() => {
        setIsPageLoaded(true);
        document.body.classList.add("is-search-results");
        const _numOfPage = Math.ceil(searchResults.length / 6);
        setNumOfPage(_numOfPage);
        return () => {
            document.body.classList.remove("is-search-results");
        }
    }, [])

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const scrollerRef = useRef();
    const swiperRefs = useRef([]);
    const addToSwiperRefs = (_el) => {
        if (_el && !swiperRefs.current.includes(_el)) {
            swiperRefs.current.push(_el)
        } else {
            swiperRefs.current = [];
        }
    };

    useEffect(() => {
        if (isPageLoaded) {
            if (swiperRefs.current) {
                swiperRefs.current.map((swiperRef) => {
                    swiperRef.children[0].swiper.params.autoplay.delay = 500
                    swiperRef.children[0].swiper.params.autoplay.enabled = true
                    swiperRef.children[0].swiper.params.autoplay.disableOnInteraction = false
                }
                )
            }
        }
    }, [isPageLoaded])

    const [currentPage, setCurrentPage] = useState(1);
    const [numOfPage, setNumOfPage] = useState(9);
    const [currentResults, setCurrentResults] = useState([]);

    useEffect(() => {
        getScrollProxy(scrollerRef.current, headerRef.current);
        const lastIndex = currentPage * 6
        const results = searchResults.concat(searchResults).concat(searchResults)
        setCurrentResults(results.slice(lastIndex - 6, lastIndex));
    }, [currentPage])

    const paginate = (_num, _currentPage) => {
        if (_num !== _currentPage) {
            setCurrentPage(_num);
            scrollerRef.current.scrollTo(0, 0)
            ScrollTrigger.refresh(true)
        }
    }

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

                        <div className="search-results-title__wrapper text-b mb-md-4 mb-2">

                            <p className="m-0 small f-sans ">
                                search results for:
                            </p>

                            <h3 className="f-serif">
                                {router.query.keyword}
                            </h3>

                        </div>

                        <div className="search-results-contents__wrapper">

                            <div className="search-results-contents__inner d-flex flex-wrap">

                                {
                                    currentResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="search-results-content col-md-4 col-12 text-g"
                                        >

                                            <Link href={`/blog/${result.slug}`}>

                                                <a className="d-block">

                                                    <div
                                                        ref={addToSwiperRefs}
                                                        className="search-results-content__inner position-relative"
                                                        onMouseOver={() => {
                                                            swiperRefs.current[index].children[0].swiper.autoplay.start()
                                                        }}
                                                        onMouseLeave={() => {
                                                            swiperRefs.current[index].children[0].swiper.autoplay.stop()
                                                        }}
                                                    >

                                                        <Swiper
                                                            loop={true}
                                                            effect={"fade"}
                                                            speed={100}
                                                            allowTouchMove={false}
                                                            grabCursor={false}
                                                            fadeEffect={{
                                                                crossFade: true
                                                            }}
                                                            className="w-100 h-100 position-absolute t-0 l-0"
                                                        >

                                                            {
                                                                result.images.map((image, index) => (
                                                                    <SwiperSlide key={index}>

                                                                        <figure className="fig__wrapper">

                                                                            <Image src={image} layout="fill" objectFit="cover" priority />

                                                                        </figure>

                                                                    </SwiperSlide>
                                                                ))
                                                            }

                                                        </Swiper>

                                                    </div>

                                                    <div className="search-results-content-title__wrapper d-flex flex-column mt-6 position-relative">

                                                        <p className="mb-6 text-g small uppercase f-sans">
                                                            {result.category}
                                                        </p>

                                                        <h3 className="f-serif text-g">
                                                            {result.title}
                                                        </h3>

                                                        <div className="search-results-date tiny position-absolute">

                                                            <span>
                                                                {convertDate(result.date)}
                                                            </span>

                                                        </div>

                                                    </div>

                                                </a>

                                            </Link>

                                        </div>
                                    ))
                                }

                            </div>

                        </div>

                    </div>

                    <Pagination paginate={paginate} currentPage={currentPage} />

                </div>

            </div>

            <Footer paginate={paginate} isPageLoaded={isPageLoaded} image={footerImage} />

        </motion.div>
    );
}

export default SearchResults;