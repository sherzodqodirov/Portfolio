import React from 'react';
import {posts} from "../data";
import {useLocation} from "react-router-dom";

const Post = () => {
   const location=useLocation();
   const path=location.pathname.split("/")[2];
    const post=posts.find((p)=>p.id.toString()===path);
    console.log(location)
    return (
        <>
        <div className="postimg">
            <img className="postw" src={post.img} alt="image"/>
        </div>
            <div className="container text-center">
                <h1>{post.title}</h1>
                <h4>{post.desc}</h4>
                <p>{post.longDesc}</p>
            </div>
        </>
    );
};

export default Post;
