import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
//Components
import Layout from "../Comps/PageLayouts/Layout";
import ScrollTrigger from "gsap/ScrollTrigger";
//CSS
import '../styles/index.scss';
import '../styles/app.scss';
import '../node_modules/swiper/swiper.scss';
//Lib
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [router.asPath]);

  useEffect(() => {
    window.addEventListener('load', () => {
      setIsFirstLoaded(true);
    });
    if (router.asPath !== "/") {
      setIsFirstIntroDone(true);
    }

  }, [])

  const [isFirstLoaded, setIsFirstLoaded] = useState(false);
  const [isFirstIntroDone, setIsFirstIntroDone] = useState(false);
  const [isTransitionning, setIsTransitioning] = useState(false);

  return (
    <Layout isTransitionning={isTransitionning} isFirstLoaded={isFirstLoaded} setIsTransitioning={setIsTransitioning} isFirstIntroDone={isFirstIntroDone}>

      <AnimatePresence
        exitBeforeEnter
      >

        <Component key={router.asPath} isFirstLoaded={isFirstLoaded} setIsFirstLoaded={setIsFirstLoaded} isFirstIntroDone={isFirstIntroDone} setIsFirstIntroDone={setIsFirstIntroDone} isTransitionning={isTransitionning} {...pageProps} />

      </AnimatePresence>

    </Layout>
  )
}

export default MyApp
