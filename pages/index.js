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

const convertDate = (_timestamp) => {

  const date = _timestamp.slice(0, 10);
  let year = date.slice(0, 4);
  let month = date.slice(5, 7);
  let day = date.slice(8, 10);

  if (day[0] === "0") {
    day = day.slice(1);
  }

  if (month[0] === "0") {
    month = month.slice(1);
  }

  switch (month) {
    case "1":
      month = "January"
      break;
    case "2":
      month = "February"
      break;
    case "3":
      month = "March"
      break;
    case "4":
      month = "April"
      break;
    case "5":
      month = "May"
      break;
    case "6":
      month = "June"
      break;
    case "7":
      month = "July"
      break;
    case "8":
      month = "August"
      break;
    case "9":
      month = "September"
      break;
    case "10":
      month = "October"
      break;
    case "11":
      month = "November"
      break;
    case "12":
      month = "December"
      break;
    default:
  }

  const result = `${month} ${day}, ${year}`;

  return result;
}

export const getStaticProps = async () => {

  const homePageRes = await contentfulClient.getEntries({
    content_type: "homePage"
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
      homeNewPostsImages: homePageRes.items[0].fields.homeNewPosts.map((post) => "https:" + post.fields.file.url),
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

const HomePage = ({ homeIntroImage, homeAboutImage, homeAboutImage2, homeAboutImage3, homeNewPostsImages, homeCategoriesImages, instaPosts, footerImage }) => {

  useEffect(() => {
    getScrollProxy(scrollerRef.current);
  }, [])

  const scrollerRef = useRef();

  return (
    <div ref={scrollerRef} className="page__wrapper">

      <div className="components-wrapper">

        <HomeIntro image={homeIntroImage} />

        <HomeAbout image1={homeAboutImage} image2={homeAboutImage2} image3={homeAboutImage3} />

        <HomeNewPosts images={homeNewPostsImages} />

        <HomeCategory images={homeCategoriesImages} />

        <HomeInstagram instaPosts={instaPosts} />

      </div>

      <Footer image={footerImage} />

    </div>
  )
}

export default HomePage;
