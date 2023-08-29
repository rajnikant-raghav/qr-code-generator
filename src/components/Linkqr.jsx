import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQr } from "../qrcodeSlice";
import "../css/linkqr.css";

const Linkqr = () => {
  const [value, setValue] = useState("https://goqr.me/api/doc/create-qr-code/");
  const dispatch = useDispatch();
  const format = useSelector((state) => state.qr.imageType);
  const fetchQrCode = () => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value?value:'https://goqr.me/api/doc/create-qr-code/'}&format=${format}`
    ).then((res) => dispatch(setQr(res.url)));
  };
  useEffect(() => {
    fetchQrCode();
  }, [value, format]);
  return (
    <div className="linkqr_container">
      <input
        type="text"
        placeholder="Enter Website Link..."
        onChange={(e) => setValue(e.target.value)}
      />
      <p>(Your QR Code will be generated automatically)</p>
    </div>
  );
};

export default Linkqr;
