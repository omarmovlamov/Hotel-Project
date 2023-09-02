import { Route, Routes } from "react-router-dom";
import CheckInOut from "./components/CheckInOut";
import Header from "./components/Header";
import HotelMain from "./components/HotelMain";

import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import RoomList from "./components/RoomList";
import "./styles/app.css";
import { useState } from "react";
function App() {
  const [navbarValue, setNavbarValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Tr");

  const navbarCheck = (navbar) => {
    setNavbarValue(navbar);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const stateNavbarCheck = navbarValue ? "lang-select-down" : "lang-select-up";
  return (
    <>
      <Header navbarCheck={navbarCheck} selectedOption={selectedOption} />
      <div className={stateNavbarCheck}>
        <div className="control has-icons-left">
          <div className="select is-small">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="Tr">Tr</option>
              <option value="En">En</option>
            </select>
          </div>
          <span className="icon is-small is-left">
            <i className="fas fa-globe"></i>
          </span>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={<HotelMain selectedOption={selectedOption} />}
        />
        <Route
          path="/reservation"
          element={<CheckInOut selectedOption={selectedOption} />}
        />
        <Route
          path="/aboutus"
          element={<AboutPage selectedOption={selectedOption} />}
        />
        <Route
          path="/rooms"
          element={<RoomList selectedOption={selectedOption} />}
        />
      </Routes>
      <Footer selectedOption={selectedOption} />
    </>
  );
}

export default App;
