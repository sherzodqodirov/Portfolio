import React, { Fragment } from "react";
import HeaderContent from "../header-content/HeaderContent";
import Posts from "../Posts/Posts";
import FeaturedWorks from "../FeaturedWorks/FeaturedWorks";

export default function Home() {
  return (
    <Fragment>
    <HeaderContent/>
    <Posts/>
    <FeaturedWorks/>
   </Fragment>
  )
}
