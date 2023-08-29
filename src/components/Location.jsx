import React, { useEffect, useState } from "react";
import { setQr } from "../qrcodeSlice";
import { useDispatch, useSelector } from "react-redux";
import "../css/location.css";

const Location = () => {
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();
  const format = useSelector((state) => state.qr.imageType);
  const fetchCurrLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (err) => {
          alert("Error gatting location:", err);
        }
      );
    } else {
      alert("Geolocation is not support this browser.");
    }
  };
  console.log(location);
  useEffect(() => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
        location
          ? `geo:${location.latitude},${location.longitude}`
          : "https://goqr.me/api/doc/create-qr-code/"
      }&format=${format}`
    ).then((res) => dispatch(setQr(res.url)));
  }, [location, format]);
  return (
    <div className="location_container">
      <button onClick={fetchCurrLocation}>Fetch Current Location</button>
    </div>
  );
};

export default Location;
