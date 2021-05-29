import React from "react";

const PortfolioPost = ({ title, text, date }) => {
  return (
    <div className="col">
      <div className="mb-5 card">
        <img
          src="https://images.unsplash.com/photo-1621570361070-896021ba01cc?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
          alt=""
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. Thi content is a little bit longer
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPost;
