import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";

const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Chikitsalay Medical Institute"}
        imageUrl={"/assets/services.png"}
      />
      <Biography imageUrl={"/assets/whoweare.png"} />
    </>
  );
};

export default AboutUs;
