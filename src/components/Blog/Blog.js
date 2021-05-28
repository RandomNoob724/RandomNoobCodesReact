import React from "react";
import SearchForm from "./SearchForm";
import Blogpost from "./Blogpost";

const Blog = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 align-items-md-center">
          <h1 className="my-4 text-center">Blog Posts</h1>
          <SearchForm />
        </div>
      </div>
      <Blogpost
        title="Test"
        text="oiasjdoifjpoasjdfpojaospdjfoasopfdjoisjdf"
        date="Hello there"
      />
      <Blogpost
        title="Test"
        text="oiasjdoifjpoasjdfpojaospdjfoasopfdjoisjdf"
        date="Hello there"
      />
    </div>
  );
};

export default Blog;
