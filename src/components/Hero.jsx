import React from "react";

const Hero = ({ imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>
            <>
              Welcome to <h1 className="hero-title">Chikitsalay</h1>
              Medical Institute | Your Trusted Healthcare Provider
            </>
          </h1>
          <p>
            Welcome to Chikitsalay , where we are dedicated to providing
            compassionate and comprehensive healthcare services. Our hospital is
            equipped with advanced medical technology and staffed by a team of
            highly skilled healthcare professionals committed to the health and
            well-being of our patients.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="Hero" className="animated-image" />
          <span>
            <img src="/assets/Vector.png" alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
