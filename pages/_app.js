import React from "react";

//Components
import Layout from "../Comps/PageLayouts/Layout";

//CSS
import '../styles/index.scss';
import '../styles/app.scss';
import '../node_modules/swiper/swiper.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>

      <Component {...pageProps} />

    </Layout>
  )
}

export default MyApp
