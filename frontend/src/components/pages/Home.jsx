import React from 'react';
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
     <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="vite" alt="vitality" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like feeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src="vite" alt="vitality" />
        </div>
      </div>
  )
}

export default Home
