import React from "react";

import StarPNG from "../images/star.png";

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={props.item.img}></img>
      <div className="card-stats">
        <img className="card-star" src={StarPNG}></img>
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p className="card-title">{props.item.title}</p>
      <p className="card-price">
        <b>From ${props.item.price} / person</b>
      </p>
    </div>
  );
}
