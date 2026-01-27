import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza_background.jpg";
import "../styles/Home.css"

function Home() {
  return(
    <div className="home">
      <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})`}}>
        <div className="headerContainer">
          <h1>
            Pizza House
          </h1>
          <p>Taste the Finest Pizza</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home