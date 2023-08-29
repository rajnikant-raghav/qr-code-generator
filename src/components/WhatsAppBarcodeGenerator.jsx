import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setQr } from "../qrcodeSlice";
import { useSelector } from "react-redux";
function WhatsAppBarcodeGenerator() {
  const [number, setNumber] = useState();
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const color = useSelector((state) => state.qr.color);
  const format = useSelector((state) => state.qr.imageType);
  console.log(format);
  const generateQrCode = () => {
    if (number) {
      setValue(`https://wa.me/${number}`);
    }
    return "";
  };

  const fetchQrCode = () => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}&format=${format}`
    ).then((res) => dispatch(setQr(res.url)));
  };

  useEffect(() => {
    fetchQrCode();
  }, [value, format]);

  return (
    <div className="whts_container">
      <input
        type="text"
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter What'sApp Number"
      />
      <br />
      <button onClick={generateQrCode}>
        <i class="fa-solid fa-spinner fa-spin"></i> GENERATE QR CODE
      </button>
      <br />
      <br />
    </div>
  );
}
export default WhatsAppBarcodeGenerator;
