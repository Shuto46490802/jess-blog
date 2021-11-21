import React, { useEffect, useRef } from "react";
import Head from 'next/head';
//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import { contentfulClient } from "../Lib/ContentfulClient";
import Footer from "../Comps/PageLayouts/Footer";
import PrivacyPolicyIntro from "../Comps/PrivacyPolicy/PrivacyPolicyIntro";

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

const PrivacyPolicy = ({privacyPolicyIntroImage, footerImage }) => {

    useEffect(() => {
        getScrollProxy(scrollerRef.current);
    }, [])

    const scrollerRef = useRef()

    return (
        <div ref={scrollerRef} className="page__wrapper">

            <div className="components-wrapper">

                <PrivacyPolicyIntro image={privacyPolicyIntroImage} />

            </div>

            <Footer image={footerImage} />

        </div>
    );
}

export default PrivacyPolicy;