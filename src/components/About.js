import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="container jumbotron mt-5">
      <div className="row my-5">
        <div className="col-md-4">
          <img
            src="http://localhost:3000/images/profile.jpg"
            alt="Person sitting down in profile"
            className="rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <p className="font-weight-light">
            Hello my name is Emil Persson, also called RandomNoob724. I
            currently study software enginnering at Jönköping university. I am a
            motivated student that loves to learn new things. I work mostly with
            web development using JavaScript, HTML, CSS and different frameworks
            such as React.js. I also work a bit with mobile development using
            Kotlin, Swift and Flutter.
          </p>
          <p className="font-weight-light">
            I have previously worked with different types of projects which you
            can view under the <Link to="/portfolio">Portfolio</Link> part of
            the website
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
