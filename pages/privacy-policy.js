import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head';
//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../Lib/ContentfulClient";
import Footer from "../Comps/PageLayouts/Footer";
import PrivacyPolicyIntro from "../Comps/PrivacyPolicy/PrivacyPolicyIntro";
import PrivacyPolicyContent from "../Comps/PrivacyPolicy/ProvacyPolicyContent";
//Lib
import { motion } from "framer-motion";

export const getStaticProps = async () => {

    const privacyPolicyRes = await contentfulClient.getEntries({
        content_type: "privacyPolicy"
    });

    const footerRes = await contentfulClient.getEntries({
        content_type: "footer"
    });

    return {
        props: {
            privacyPolicyIntroImage: "https:" + privacyPolicyRes.items[0].fields.privacyPolicyIntroImage.fields.file.url,
            footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
        }
    }
}

const PrivacyPolicy = ({ privacyPolicyIntroImage, footerImage, headerRef, isTransitionning }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current, headerRef.current);
        setIsPageLoaded(true);
    }, [])

    const scrollerRef = useRef();
    const [isPageLoaded, setIsPageLoaded] = useState(false);

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

                <PrivacyPolicyIntro image={privacyPolicyIntroImage} isPageLoaded={isPageLoaded} isTransitionning={isTransitionning} />

                <PrivacyPolicyContent />

            </div>

            <Footer isPageLoaded={isPageLoaded} image={footerImage} />

        </motion.div>
    );
}

export default PrivacyPolicy;