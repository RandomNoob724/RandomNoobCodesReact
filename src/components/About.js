import React from "react";

const About = () => {
  return (
    <main className="container jumbotron mt-5">
      <div className="row my-5">
        <div className="col-md-4">
          <img
            src="profilepicture.png"
            alt="Person sitting down in profile"
            className="rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <p className="font-weight-light">
            Hello my name is Emil Persson, also called RandomNoobCodes. I
            currently study software enginnering at Jönköping university. I am a
            motivated student that loves to learn new things. I work mostly with
            web development using JavaScript, HTML, CSS and SQL. I also know how
            to program in Java, C and C++.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
