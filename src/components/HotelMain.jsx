import "../styles/hotelMain.css";
import AboutUs from "./AboutUs";
import wallpaper from "../imgs/w.jpg";

function HotelMain({ selectedOption }) {
  return (
    <>
      <div className="hotel-main">
        <img src={wallpaper} alt="wallpaper" />
        <h1>Dexsvoa Hotel</h1>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <div>
            <p>Azerbaijan</p>
            <p>Baki AZ9999</p>
          </div>
        </div>
      </div>
      <AboutUs selectedOption={selectedOption} />
    </>
  );
}

export default HotelMain;
