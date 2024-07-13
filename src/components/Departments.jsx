import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Departments = () => {
  const departmentArray = [
    {
      name: "Cardiology",
      imageUrl: "/assets/cardiologist.png",
    },
    {
      name: "Dermatology",
      imageUrl: "/assets/dermatologist.png",
    },
    {
      name: "Pediatrics",
      imageUrl: "/assets/pediatrician.png",
    },
    {
      name: "Orthopedics",
      imageUrl: "/assets/orthopedic.png",
    },
    {
      name: "Neurology",
      imageUrl: "/assets/neurologist.png",
    },
    {
      name: "Cardiology",
      imageUrl: "/assets/cardiologist.png",
    },
    {
      name: "Oncology",
      imageUrl: "/assets/oncologist.png",
    },
    {
      name: "ENT",
      imageUrl: "/assets/ent.png",
    },
    {
      name: "Physical Therapy",
      imageUrl: "/assets/physiotherapist.png",
    },
  ];

  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 2,
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 2,
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 2,
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 2,
    },
  };
  return (
    <>
      <div className="container departments">
        <h2>Departments</h2>
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["medium", "small"]}
        >
          {departmentArray.map((ele, idx) => {
            return (
              <div className="card" key={idx}>
                <div className="depart-name">{ele.name}</div>
                <img src={ele.imageUrl} alt="" className="card-images" />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Departments;
