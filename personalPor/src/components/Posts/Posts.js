import React from "react";
import FetchPosts from "./FetchPosts";
import "./Posts.css";

const RecentPosts = [
  {
    heading: "Making a design system from scratch",
    date: "20 Feb 2022",
    foydalagan: " Design, Pattern",
    malumot:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    heading: "Creating pixel perfect icons in Figma",
    date: "15 Feb 2022",
    foydalagan: "Figma, Icon Design",
    malumot:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duisenim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  
];

const Posts = () => {

  
  return (
    <section className="posts">
    <div className="container">
        <div className="row">
            <div className="recentview col-lg-12 col-12">
                <h5>Recent posts</h5>
                <a href="#">View all</a>
            </div>
           <FetchPosts RecentPosts={RecentPosts}/>
        </div>
    </div>
</section>
  );
};
export default Posts;
