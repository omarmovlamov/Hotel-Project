import "../styles/roomList.css";
import room1 from "../imgs/room1.jpg";
import room2 from "../imgs/room2.jpg";
import room3 from "../imgs/room4.jpg";
import room4 from "../imgs/room5.jpg";
import { Link } from "react-router-dom";

const roomsTr = [
  {
    id: 1,
    name: "Standart Tek Kişilik Oda",
    price: "$100",
    image: room1,
  },
  {
    id: 2,
    name: "Standart Çift Kişilik Oda",
    price: "$150",
    image: room2,
  },
  {
    id: 3,
    name: "Deluxe Üç Kişilik Oda",
    price: "$200",
    image: room3,
  },
  {
    id: 4,
    name: "Deluxe Dört Kişilik Oda",
    price: "$250",
    image: room4,
  },
];
const roomsEn = [
  {
    id: 1,
    name: "Standard Single Room",
    price: "$100",
    image: room1,
  },
  {
    id: 2,
    name: "Standard Double Room",
    price: "$150",
    image: room2,
  },
  {
    id: 3,
    name: "Deluxe Triple Room",
    price: "$200",
    image: room3,
  },
  {
    id: 4,
    name: "Deluxe Quadruple Room",
    price: "$250",
    image: room4,
  },
];
function RoomList({ selectedOption }) {
  if (selectedOption === "Tr") {
    return (
      <div className="room-list">
        {roomsTr.map((room) => (
          <div
            className="room-card animate__animated animate__fadeInUpBig"
            key={room.id}
          >
            <p>Dexsvoa Hotel</p>
            <img src={room.image} alt={room.name} className="room-image" />
            <h2 className="room-name">{room.name}</h2>
            <p className="room-price">{room.price} / Gece</p>
            <Link to="/reservation">
              <button className="reserve-button">Rezervasyon Yap</button>
            </Link>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="room-list">
        {roomsEn.map((room) => (
          <div
            className="room-card animate__animated animate__fadeInUpBig"
            key={room.id}
          >
            <p>Dexsvoa Hotel</p>
            <img src={room.image} alt={room.name} className="room-image" />
            <h2 className="room-name">{room.name}</h2>
            <p className="room-price">{room.price} / Night</p>
            <Link to="/reservation">
              <button className="reserve-button">Make a reservation</button>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default RoomList;
