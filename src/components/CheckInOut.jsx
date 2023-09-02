import "../styles/checkInOut.css";

import React, { useState, useEffect } from "react";

function CheckInOut({ selectedOption }) {
  if (selectedOption === "Tr") {
    const today = new Date();
    const formattedToday = today.toISOString().substring(0, 10);

    const [checkinDate, setCheckinDate] = useState(formattedToday);
    const [checkoutDate, setCheckoutDate] = useState(formattedToday);
    const [reservationMessage, setReservationMessage] = useState("");
    const [persons, setPersons] = useState(0);
    const [roomName, setRoomName] = useState("");
    const [showContent, setShowContent] = useState(false);

    const handleCheckinChange = (e) => {
      setCheckinDate(e.target.value);
    };

    const handleCheckoutChange = (e) => {
      setCheckoutDate(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setReservationMessage("Rezervasyon yapılıyor...");
      setTimeout(() => {
        setReservationMessage("Rezervasyon yapıldı!");
      }, 4000);
    };

    const increase = () => {
      if (persons === 4) {
        setPersons(4);
      } else {
        setPersons(persons + 1);
      }
    };
    const decrease = () => {
      if (persons === 0) {
        setPersons(0);
      } else {
        setPersons(persons - 1);
      }
    };
    useEffect(() => {
      if (persons === 1) {
        setRoomName("Standart Tek Kişilik Oda");
      } else if (persons === 2) {
        setRoomName("Standart Çift Kişilik Oda");
      } else if (persons === 3) {
        setRoomName("Deluxe Üç Kişilik Oda");
      } else if (persons === 4) {
        setRoomName("Deluxe Dört Kişilik Oda");
      } else {
        setRoomName("");
      }
    }, [persons]);
    useEffect(() => {
      setTimeout(() => {
        setShowContent(true);
      }, 200);
    }, []);
    return (
      <>
        <div className="background-checkinout"></div>
        <div
          className={`CheckInOut transition-effect ${
            showContent ? "show" : ""
          }`}
        >
          <h5>Check-in & Check-out</h5>
          <form onSubmit={handleSubmit}>
            <label>
              Check-in Tarihi:
              <input
                type="date"
                value={checkinDate}
                onChange={handleCheckinChange}
              />
            </label>
            <br />
            <label>
              Check-out Tarihi:
              <input
                type="date"
                value={checkoutDate}
                onChange={handleCheckoutChange}
              />
            </label>
            <div className="info">
              <div className="persons-info">
                <label>Kişiler</label>
                <div>
                  <button type="button" onClick={decrease}>
                    -
                  </button>
                  <p>{persons}</p>
                  <button type="button" onClick={increase}>
                    +
                  </button>
                </div>
              </div>
              <div className="rooms-info">
                <label>Odalar</label>
                <input type="text" value={roomName} readOnly />
              </div>
            </div>
            <br />
            <button type="submit">Rezervasyon Yap</button>
          </form>
          {reservationMessage && (
            <div className="reservation-message">{reservationMessage}</div>
          )}
        </div>
      </>
    );
  } else {
    const today = new Date();
    const formattedToday = today.toISOString().substring(0, 10);

    const [checkinDate, setCheckinDate] = useState(formattedToday);
    const [checkoutDate, setCheckoutDate] = useState(formattedToday);
    const [reservationMessage, setReservationMessage] = useState("");
    const [persons, setPersons] = useState(0);
    const [roomName, setRoomName] = useState("");
    const [showContent, setShowContent] = useState(false);

    const handleCheckinChange = (e) => {
      setCheckinDate(e.target.value);
    };

    const handleCheckoutChange = (e) => {
      setCheckoutDate(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setReservationMessage("Making a reservation...");
      setTimeout(() => {
        setReservationMessage("Reservation completed!");
      }, 4000);
    };

    const increase = () => {
      if (persons === 4) {
        setPersons(4);
      } else {
        setPersons(persons + 1);
      }
    };
    const decrease = () => {
      if (persons === 0) {
        setPersons(0);
      } else {
        setPersons(persons - 1);
      }
    };
    useEffect(() => {
      if (persons === 1) {
        setRoomName("Standard Single Room");
      } else if (persons === 2) {
        setRoomName("Standard Double Room");
      } else if (persons === 3) {
        setRoomName("Deluxe Triple Room");
      } else if (persons === 4) {
        setRoomName("Deluxe Quadruple Room");
      } else {
        setRoomName("");
      }
    }, [persons]);
    useEffect(() => {
      setTimeout(() => {
        setShowContent(true);
      }, 200);
    }, []);
    return (
      <>
        <div className="background-checkinout"></div>
        <div
          className={`CheckInOut transition-effect ${
            showContent ? "show" : ""
          }`}
        >
          <h5>Check-in & Check-out</h5>
          <form onSubmit={handleSubmit}>
            <label>
              Check-in Date:
              <input
                type="date"
                value={checkinDate}
                onChange={handleCheckinChange}
              />
            </label>
            <br />
            <label>
              Check-out Date:
              <input
                type="date"
                value={checkoutDate}
                onChange={handleCheckoutChange}
              />
            </label>
            <div className="info">
              <div className="persons-info">
                <label>Persons</label>
                <div>
                  <button type="button" onClick={decrease}>
                    -
                  </button>
                  <p>{persons}</p>
                  <button type="button" onClick={increase}>
                    +
                  </button>
                </div>
              </div>
              <div className="rooms-info">
                <label>Rooms</label>
                <input type="text" value={roomName} readOnly />
              </div>
            </div>
            <br />
            <button type="submit">Make a Reservation</button>
          </form>
          {reservationMessage && (
            <div className="reservation-message">{reservationMessage}</div>
          )}
        </div>
      </>
    );
  }
}

export default CheckInOut;
