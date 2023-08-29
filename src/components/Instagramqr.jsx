import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQr } from "../qrcodeSlice";
import '../css/instagram.css'

const Instagramqr = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const format = useSelector((state) => state.qr.imageType);
  const fetchQrCode = () => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value?`https://www.instagram.com/${value}`:'https://www.instagram.com/'}&format=${format}`
    ).then((res) => dispatch(setQr(res.url)));
  };
  useEffect(() => {
    fetchQrCode();
  }, [value, format])
  return (
    <div className="instagram_container">
      <input
        type="text"
        placeholder="Enter Instagram Username"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>(Your QR Code will be generated automatically)</p>
    </div>
  );
};

export default Instagramqr;
