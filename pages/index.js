import React, { useEffect, useRef } from "react";
import Head from 'next/head';
//Components
import { getScrollProxy } from "../Comps/PageLayouts/Scrollbar";
import "../Comps/PageLayouts/EdgeEasingPlugin";
import HomeIntro from "../Comps/HomePage/HomeIntro";
import { contentfulClient } from "../Lib/ContentfulClient";
import HomeAbout from "../Comps/HomePage/HomeAbout";
import HomeNewPosts from "../Comps/HomePage/HomeNewPosts";
import HomeCategory from "../Comps/HomePage/HomeCategory";
import HomeInstagram from "../Comps/HomePage/HomeInstagram";
import Footer from "../Comps/PageLayouts/Footer";
import { convertDate } from "../Comps/PageLayouts/util";


export const getStaticProps = async () => {

  const homePageRes = await contentfulClient.getEntries({
    content_type: "homePage"
  })

  const blogPostRes = await contentfulClient.getEntries({
    content_type: "blogPost"
  })

  const footerRes = await contentfulClient.getEntries({
    content_type: "footer"
  })

  const instaUrl = `https://graph.facebook.com/v12.0/${process.env.INSTAGRAM_ACCOUNT_ID}?fields=media.limit(8){caption,media_url,permalink,timestamp,username}&access_token=${process.env.INSTAGRAM_ACCESS_KEY}`;

  const instaRes = await fetch(instaUrl)
    .then(async (res) => {
      return await res.json();
    })

  return {
    props: {
      homeIntroImage: "https:" + homePageRes.items[0].fields.homeIntroImage.fields.file.url,
      homeAboutImage: "https:" + homePageRes.items[0].fields.homeAboutImage.fields.file.url,
      homeAboutImage2: "https:" + homePageRes.items[0].fields.homeAboutImage2.fields.file.url,
      homeAboutImage3: "https:" + homePageRes.items[0].fields.homeAboutImage3.fields.file.url,
      homeNewPosts: blogPostRes.items.map((post) => ({
        title: post.fields.title,
        image1: "https:" + post.fields.featureImages[0].fields.file.url,
        image2: "https:" + post.fields.featureImages[1].fields.file.url,
        thumbnailText: post.fields.thumbnailText,
        slug: post.fields.slug,
        dateForSort: post.fields.date.slice(0, 10).split("-").join(""),
        date: post.fields.date,
        category: post.fields.category
      })),
      homeCategoriesImages: homePageRes.items[0].fields.homeCategories.map((category) => "https:" + category.fields.file.url),
      instaPosts: instaRes.media.data.map((data) => ({
        caption: data.caption,
        mediaUrl: data.media_url,
        link: data.permalink,
        time: convertDate(data.timestamp)
      })),
      footerImage: "https:" + footerRes.items[0].fields.footerImage.fields.file.url,
    }
  }
}

const HomePage = ({ homeIntroImage, homeAboutImage, homeAboutImage2, homeAboutImage3, homeNewPosts, homeCategoriesImages, instaPosts, footerImage }) => {

  useEffect(() => {
    getScrollProxy(scrollerRef.current);
    sortNewPosts(homeNewPosts)
  }, [])

  const scrollerRef = useRef();

  const sortNewPosts = (_posts) => {

    const result = _posts.sort((a, b) => Number.parseInt(b.dateForSort) - Number.parseInt(a.dateForSort));

    return result
  }

  return (
    <div ref={scrollerRef} className="page__wrapper">

      <div className="components-wrapper">

        <HomeIntro image={homeIntroImage} />

        <HomeAbout image1={homeAboutImage} image2={homeAboutImage2} image3={homeAboutImage3} />

        <HomeNewPosts posts={homeNewPosts} />

        <HomeCategory images={homeCategoriesImages} />

        <HomeInstagram instaPosts={instaPosts} />

      </div>

      <Footer image={footerImage} />

    </div>
  )
}

export default HomePage;
