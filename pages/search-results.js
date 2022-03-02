import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
SwiperCore.use([EffectFade, Autoplay]);

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
        
    }, [])

  

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const scrollerRef = useRef();
    const swiperRef = useRef();

    useEffect(() => {
        if(isPageLoaded){
            swiperRef.current.swiper.params.autoplay.delay = 500
            swiperRef.current.swiper.params.autoplay.enabled = true
            swiperRef.current.swiper.params.autoplay.disableOnInteraction = false
            swiperRef.current.swiper.autoplay.start()
            console.log(swiperRef.current.swiper.params.autoplay)
        }
    }, [isPageLoaded])

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
                                    searchResults.map((result, index) => (
                                        <div
                                            key={index}
                                            className="search-results-content col-md-4 col-12"
                                        >

                                            <Link href="/">

                                                <a className="d-block">

                                                    <div className="search-results-content__inner position-relative">

                                                        <Swiper
                                                            ref={swiperRef}
                                                            loop={true}
                                                            effect={"fade"}
                                                            // autoplay={{
                                                            //     delay: 500,
                                                            //     reverseDirection: true
                                                            // }}
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

                                                    <div className="search-results-content-title__wrapper">

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