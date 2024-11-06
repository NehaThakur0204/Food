
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to FOODii, your ultimate destination for culinary inspiration and delicious experiences! We believe that food is not just sustenance; it’s a celebration of culture, creativity, and community. Our mission is to connect food lovers with a diverse array of recipes, restaurant recommendations, and meal planning tools tailored to fit every lifestyle. Whether you're a seasoned chef or a beginner in the kitchen, we provide easy-to-follow recipes, insightful tips, and the latest food trends to enhance your culinary journey. Join us in exploring flavors from around the world, discovering local eateries, and sharing your love for food with fellow enthusiasts. Together, let’s create memorable meals that bring joy to the table!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
