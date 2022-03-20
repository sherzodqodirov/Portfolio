import React from "react";
import "./Blog.css";
import FeatchBlog from "./FeatchBlog";

const Bloginfo=[
    {
     heading:"UI Interactions of the week",
     date:" 20 Feb 2022",
     sp:"Express, Handlebars",
     infowork:
     " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet." ,
    },
    {
     heading:"UI Interactions of the week",
     date:" 21 Feb 2022",
     sp:"Express, Handlebars",
     infowork:
     " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet." ,
    },
    { heading:"UI Interactions of the week",
     date:" 22 Feb 2022",
     sp:"Express, Handlebars",
     infowork:
     " Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit. Exercitationveniam consequat sunt nostrud amet." ,
    },
]
export default function Blog() {
  return (
    <section className="about">
      <div className="container">
        <h1>Blog</h1>
       <FeatchBlog Bloginfo={Bloginfo} />
      </div>
    </section>
  );
}
