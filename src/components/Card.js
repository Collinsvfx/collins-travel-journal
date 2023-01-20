import React from "react";
// import Image1 from "../images/Image1.png";
import Location from "../images/location.png";

export default function Card(props) {
  // console.log(props.Location);
  return (
    <div className="travel-card">
      <img alt="" src={props.imageUrl} />

      <div className="card-others">
        <div className="location">
          <img alt="" src={Location} />
          <span className="country">{props.location}</span>
          <a href={props.googleMapsUrl} className="view">
            View on Google Maps
          </a>
        </div>

        <div className="location-name">
          <h1>{props.title}</h1>
        </div>
        <div className="travel-date">
          <span>
            {props.startDate} - {props.endDate}
          </span>
        </div>
        <div className="travel-desc">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
