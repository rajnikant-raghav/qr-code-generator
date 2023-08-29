import React from "react";
import { saveAs } from "file-saver";
import { setImageFormat, setBgColor, setColor } from "../qrcodeSlice";
import { useDispatch, useSelector } from "react-redux";

const Displayqr = () => {
  const qr = useSelector((state) => state.qr.myQr);
  const format = useSelector((state) => state.qr.imageType);
  const dispatch = useDispatch();
  const handleDownload = () => {
    fetch(qr)
      .then((response) => response.blob())
      .then((blob) => {
        // Use the file-saver library to trigger the download
        saveAs(blob, `qrcode.${format}`);
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <div className="displayqr_container">
      {qr ? <img src={qr} alt="QrCode" /> : <p></p>}
      <br />
      <div className="btn_container">
        <button onClick={() => dispatch(setImageFormat("png"))}>.PNG</button>
        <button onClick={() => dispatch(setImageFormat("svg"))}>.SVG</button>
        <button onClick={() => dispatch(setImageFormat("jpg"))}>.JPG</button>
        <button onClick={() => dispatch(setImageFormat("gif"))}>.GIF</button>
      </div>
     
      <div className="bownload_btn">
        <button onClick={handleDownload}>Download Code</button>
      </div>
    </div>
  );
};

export default Displayqr;
