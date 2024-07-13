import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero imageUrl={"/assets/hero.png"} />
      <Biography imageUrl={"/assets/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
