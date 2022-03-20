import React from "react";
import workimg from "../image/workImg.png";
import workimg2 from "../image/workimg2.png";
import workimg3 from "../image/workimg3.png";
import FeatchWorks from "./FeatchWorks";
import "../FeaturedWorks/FeaturedWorks.css";
import "./WorksPage.css"

const featured = [
  {
    workimg,
    infowork: "Designing Dashboards",
    date: 2022,
    malumot:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
  },
   {
    workimg:workimg2,
    infowork: "Designing Dashboards",
    date: 2022,
    malumot:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
  },
   {
    workimg:workimg3,
    infowork: "Designing Dashboards",
    date: 2022,
    malumot:
      " Amet minim mollit non deserunt ullamco est sit aliqua dolor doamet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="featured">
      <div className="container ">
        <h1>Work</h1>
        <FeatchWorks featured={featured}/>
      </div>
    </section>
  );
}
