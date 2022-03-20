import React from "react";

export default function FeatchBlog({Bloginfo}) {
  return Bloginfo.map((item, indx) => (
    <div className="skills border-bottom" key={indx}>
      <h2>{item.heading}</h2>
      <h4>
        {item.date} <span>|</span>
        <span className="sp">{item.sp}</span>
      </h4>
      <p>
       {item.infowork}
      </p>
    </div>
  ));
}
