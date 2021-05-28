import React from "react";

const Blogpost = ({ title, text, date }) => {
  return (
    <div className="my-5 card">
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p className="card-text preview-text font-weight-light">{text}</p>
        <a href="" className="btn btn-primary">
          Read More →
        </a>
      </div>
      <div className="card-footer text-muted">
        Posted on {date} by Emil Persson
      </div>
    </div>
  );
};

export default Blogpost;
