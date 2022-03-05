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
//Lib
import { motion } from "framer-motion";

export const getServerSideProps = async (ctx) => {

    const contactRes = await contentfulClient.getEntries({
        content_type: "contact"
    })

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    })

    const email = ctx.query.email !== undefined ? ctx.query.email : ""

    return {
        props: {
            contactIntroImage: "https:" + contactRes.items[0].fields.contactIntroImage.fields.file.url,
            contactContentImage1: "https:" + contactRes.items[0].fields.contactContentImage1.fields.file.url,
            contactInfoImage: "https:" + contactRes.items[0].fields.contactContentImage2.fields.file.url,
            contactInfoSmallImages: contactRes.items[0].fields.contactContentSmallImages.map((image) => "https:" + image.fields.file.url),
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
            email: email
        }
    }

}

const Contact = ({ isTransitionning, contactIntroImage, contactContentImage1, contactInfoImage, contactInfoSmallImages, footerImage, headerRef, email }) => {

    const scrollerRef = useRef();

    useEffect(() => {
        getScrollProxy(scrollerRef.current, headerRef.current);
        setIsPageLoaded(true);
        if (email !== "") {
            setFooterEmail(email)
        }
    }, []);

    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [footerEmail, setFooterEmail] = useState("")

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

                <ContactIntro isTransitionning={isTransitionning} isPageLoaded={isPageLoaded} image={contactIntroImage} />

                <ContactContent isPageLoaded={isPageLoaded} image1={contactContentImage1} footerEmail={footerEmail} />

                <ContactInfo isPageLoaded={isPageLoaded} image={contactInfoImage} smallImages={contactInfoSmallImages} />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </motion.div>
    );
}

export default Contact;