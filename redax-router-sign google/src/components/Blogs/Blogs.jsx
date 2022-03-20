import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../store/Blog/blog-action";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.blog.isLoading);
  const blogs = useSelector((state) => state.blog.blogs);

  const fetchData=()=>{
    return blogs.map((item,index)=>(
      <div className="col-4"key={index}>
      <div className="card bg-dark mb-2">
        <div className="card-body">
          <img className="w-100" src={item.blog.image} alt={item.blog.title} />
          <h3 className="text-white">{item.blog.title}</h3>
          <p className="text-white">{item.blog.description}</p>
        </div>
      </div>
    </div>
    ))
  }

  return (
    <div className="container-fluid  my-2">
      <div className="row">
        <h1>Blogs</h1>
        {isLoading && (
                    <span className="spinner-border  text-dark" />
                  )} 
        {!isLoading && fetchData()}
      </div>
    </div>
  );
};

export default Blogs;
