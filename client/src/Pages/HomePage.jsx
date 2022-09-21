import React from 'react'
import { Link } from 'react-router-dom'
import Pic from "../assets/homepics.png";
const HomePage = () => {
    return (
      <div>
        <div className="Home__container">
          <div className="Home__container__left">
            <h1>
              LET'S <br /> EXPLORE UNIQUE <br /> <span>CLOTHE</span>
            </h1>
            <p>Live for Influential and Innovative fashion!</p>
            <Link to="/shopping">
              {" "}
              <button className="btn btn-primary">Shopping Now</button>
            </Link>
          </div>
          <div className="Home__container__right">
            <img src={Pic} alt="homepic" />
          </div>
        </div>
      </div>
    );
}

export default HomePage;