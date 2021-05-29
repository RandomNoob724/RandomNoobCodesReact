import React from "react";
import PortfolioPost from "./PortfolioPost";

const Portfolio = ({ name, description, link }) => {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
        <PortfolioPost />
      </div>
    </div>
  );
};

export default Portfolio;
