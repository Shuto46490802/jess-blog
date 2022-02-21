import React, { useEffect, useState, useRef } from "react";
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
      setTimeout(() => {
        headerRef.current.classList.remove("shrinked", "pull-up")
        ScrollTrigger.getAll().forEach((t) => t.kill())
      }, 500)
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
  const headerRef = useRef();

  useEffect(() => {
    if(isFirstIntroDone){
      document.body.classList.add("is-done")
    }
  }, [isFirstIntroDone])

  return (
    <Layout headerRef={headerRef} isTransitionning={isTransitionning} isFirstLoaded={isFirstLoaded} setIsTransitioning={setIsTransitioning} isFirstIntroDone={isFirstIntroDone}>

      <AnimatePresence
        exitBeforeEnter
      >

        <Component key={router.asPath} headerRef={headerRef} isFirstLoaded={isFirstLoaded} setIsFirstLoaded={setIsFirstLoaded} isFirstIntroDone={isFirstIntroDone} setIsFirstIntroDone={setIsFirstIntroDone} isTransitionning={isTransitionning} {...pageProps} />

      </AnimatePresence>

    </Layout>
  )
}

export default MyApp
