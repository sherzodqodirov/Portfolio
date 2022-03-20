import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addnewblog } from "../store/Blog/blog-action";

const AddBlogs = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.blog.isLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBlog = {
      title: event.target.title.value,
      image: event.target.imgURL.value,
      description: event.target.description.value,
    };
    dispatch(addnewblog(newBlog))
    event.target.reset();
  };

  return (
    <div className="container mt-5 ">
      <form onSubmit={handleSubmit} className="row g-3 col-6 offset-3">
        <h2>Add new Blog</h2>
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input required type="text" className="form-control" id="title" />
        </div>
        <div className="col-12">
          <label htmlFor="imgURL" className="form-label">
            Image URL
          </label>
          <input required type="url" className="form-control" id="imgURL" />
        </div>
        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            required
            type="text"
            className="form-control"
            id="description"
          />
        </div>
        <div className="col-12">
          <button disabled={isLoading} type="submit" className="btn btn-primary">
          {isLoading && (
                    <span className="spinner-border spinner-border-sm text-light" />
                  )} 
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlogs;
