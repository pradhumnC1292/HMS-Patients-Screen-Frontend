import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="Who We Are" />
        </div>
        <div className="banner">
          <h2>Biography</h2>
          <h3>
            Who We Are <span className="span-text">?</span>
          </h3>
          <p>
            Welcome to <span className="span-text">Chikitsalay</span>, where we
            are dedicated to providing compassionate and comprehensive
            healthcare services. Our hospital is equipped with advanced medical
            technology and staffed by a team of highly skilled healthcare
            professionals committed to the health and well-being of our
            patients.
          </p>
          <p>We are all in 2024!</p>
          <p>
            We are at the forefront of medical research and clinical care in the
            fields of cardiology, oncology, pediatrics, and more.
          </p>
          <p>
            Since our establishment, we have been pioneers in patient care,
            offering tailored treatments that meet the unique needs of each
            patient. Our focus on research and continuous learning ensures that
            we remain at the cutting edge of medical advancements.
          </p>
          <p>
            Our mission is to heal, to teach, to discover, and to advance the
            health of the communities we serve.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
