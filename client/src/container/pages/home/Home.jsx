import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home"
      style={{backgroundImage:`url(https://www.wallpaperup.com/uploads/wallpapers/2016/06/10/981045/a799ed4210f6d0d229e36ff5bb6d4efd-1000.jpg)`}}>
      
      
      <div className="home__wrap">
        <div className="home__title">MUC IS MY ESCAPE</div>
        <div className="home__title__content">Share & Promote Your Mucsic Online</div>
        <Link to="/my-music"><button className="home__button">LET START NOW</button></Link>
      </div>
    </div>
  )
}

export default Home;
