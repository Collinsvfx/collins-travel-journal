import Image1 from "../images/Image1.png";
import Location from "../images/location.png";

export default function Main() {
  return (
    <div className="bg-purpose">
      <div className="main-cont">
        <div className="travel-card">
          <img alt="" src={Image1} />

          <div className="card-others">
            <div className="location">
              <img alt="" src={Location} />
              <span className="country">japan</span>
              <span className="view">View on Google Maps</span>
            </div>

            <div className="location-name">
              <h1>Mount Fuji</h1>
            </div>
            <div className="travel-date">
              <span>12 Jan, 2021 - 24 Jan, 2021</span>
            </div>
            <div className="travel-desc">
              <p>
                Mount Fuji is the tallest mountain in Japan, standing at 3,776
                meters (12,380 feet). Mount Fuji is the single most popular
                tourist site in Japan, for both Japanese and foreign tourists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
