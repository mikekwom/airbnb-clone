import React from "react";
import PhotoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <section className="top-mid">
      <img src={PhotoGrid} className="photo-grid"></img>
      <h1 className="title">Online Experiences</h1>
      <p className="desc">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
