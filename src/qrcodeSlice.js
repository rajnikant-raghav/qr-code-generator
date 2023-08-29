import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myQr: "",
  imageType: "png",
  color: "black",
  bg_color: "white",
};

export const qrcodeSlice = createSlice({
  name: "qrcode",
  initialState,
  reducers: {
    setQr: (state, action) => {
      state.myQr = action.payload;
    },
    setImageFormat: (state, action) => {
      state.imageType = action.payload;
    },
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setBgColor: (state, action) => {
      state.bg_color = action.payload;
    },
  },
});

export const { setQr, setImageFormat, setColor, setBgColor } =
  qrcodeSlice.actions;
export default qrcodeSlice.reducer;
