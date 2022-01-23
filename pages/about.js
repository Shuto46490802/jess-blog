import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';
//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../Lib/ContentfulClient";
import Footer from "../Comps/PageLayouts/Footer";
import AboutIntro from "../Comps/About/AboutIntro";
import AboutMe from "../Comps/About/AboutMe";
import AboutContent1 from "../Comps/About/AboutContent1";
import AboutContent2 from "../Comps/About/AboutContent2";

export const getStaticProps = async () => {

    const aboutRes = await contentfulClient.getEntries({
        content_type: "about"
    });

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    });

    return {
        props: {
            aboutIntroImage: "https:" + aboutRes.items[0].fields.aboutIntroImage.fields.file.url,
            aboutMeImage: "https:" + aboutRes.items[0].fields.aboutMeImage.fields.file.url,
            aboutMeSmallImages: aboutRes.items[0].fields.aboutMeSmallImages.map((image) => "https:" + image.fields.file.url),
            aboutContent1SmallImage: "https:" + aboutRes.items[0].fields.aboutContent1SmallImage.fields.file.url,
            aboutContent1LargeImage: "https:" + aboutRes.items[0].fields.aboutContent1LargeImage.fields.file.url,
            aboutContent1SecondaryImages: aboutRes.items[0].fields.aboutContent1SecondaryImages.map((image) => "https:" + image.fields.file.url),
            aboutContent2LargeImages: aboutRes.items[0].fields.aboutContent2LargeImages.map((image) => "https:" + image.fields.file.url),
            aboutContent2SecondaryImages: aboutRes.items[0].fields.aboutContent2SecondaryImages.map((image) => "https:" + image.fields.file.url),
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const About = ({ aboutIntroImage, aboutMeImage, aboutMeSmallImages, aboutContent1SmallImage, aboutContent1LargeImage, aboutContent1SecondaryImages, aboutContent2LargeImages, aboutContent2SecondaryImages, footerImage }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
        setIsPageLoaded(true);
    }, [])

    const scrollerRef = useRef();
    const [isPageLoaded, setIsPageLoaded] = useState(false);

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <AboutIntro isPageLoaded={isPageLoaded} image={aboutIntroImage} />

                <AboutMe isPageLoaded={isPageLoaded} image={aboutMeImage} smallImages={aboutMeSmallImages} />

                <AboutContent1 isPageLoaded={isPageLoaded} smallImage={aboutContent1SmallImage} largeImage={aboutContent1LargeImage} secondaryImages={aboutContent1SecondaryImages} />

                <AboutContent2 isPageLoaded={isPageLoaded} largeImages={aboutContent2LargeImages} secondaryImages={aboutContent2SecondaryImages} />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </div>
    );
}

export default About;