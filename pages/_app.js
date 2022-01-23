import React, { useEffect } from "react";
import { useRouter } from "next/router";
//Components
import Layout from "../Comps/PageLayouts/Layout";
import ScrollTrigger from "gsap/ScrollTrigger";

//CSS
import '../styles/index.scss';
import '../styles/app.scss';
import '../node_modules/swiper/swiper.scss';

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    return () => {
      console.log(ScrollTrigger.getAll())
      ScrollTrigger.getAll().forEach((t) => t.kill())
      console.log(ScrollTrigger.getAll())
    }
  }, [router.asPath])

  return (
    <Layout>

      <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
