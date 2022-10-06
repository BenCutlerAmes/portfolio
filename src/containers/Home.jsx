import React, { useState } from "react";
import construction from '../images/construction_background.jpeg';

const Home = () => {

  return (
    <>
      <div className="home-page">
        <h1> BEN CUTLER-AMES</h1>
        <h3>Software Developer</h3>
        <p> This site is currently under construction. </p>
        <img id="construction-image" src={construction} alt="construction site"/>
      </div>
    </>
  );
};

export default Home;
