import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';

//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../Lib/ContentfulClient";
import Footer from "../Comps/PageLayouts/Footer";
import ContactIntro from "../Comps/Contact/ContactIntro";
import ContactContent from "../Comps/Contact/ContactContent";
import ContactInfo from "../Comps/Contact/ContactInfo";

export const getStaticProps = async () => {

    const contactRes = await contentfulClient.getEntries({
        content_type: "contact"
    })

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    })

    return {
        props: {
            contactIntroImage: "https:" + contactRes.items[0].fields.contactIntroImage.fields.file.url,
            contactContentImage1: "https:" + contactRes.items[0].fields.contactContentImage1.fields.file.url,
            contactInfoImage: "https:" + contactRes.items[0].fields.contactContentImage2.fields.file.url,
            contactInfoSmallImages: contactRes.items[0].fields.contactContentSmallImages.map((image) => "https:" + image.fields.file.url),
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }

}

const Contact = ({ contactIntroImage, contactContentImage1, contactInfoImage, contactInfoSmallImages, footerImage }) => {

    const scrollerRef = useRef();

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
        setIsPageLoaded(true);
    }, []);

    const [isPageLoaded, setIsPageLoaded] = useState(false);

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <ContactIntro isPageLoaded={isPageLoaded} image={contactIntroImage} />

                <ContactContent isPageLoaded={isPageLoaded} image1={contactContentImage1} />

                <ContactInfo isPageLoaded={isPageLoaded} image={contactInfoImage} smallImages={contactInfoSmallImages} />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </div>
    );
}

export default Contact;