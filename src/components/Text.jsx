import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setQr } from '../qrcodeSlice'
import '../css/text.css'

const Text = () => {
    const [value, setValue] = useState();
    const format = useSelector(state=> state.qr.imageType);
    const dispatch = useDispatch();
    useEffect(()=>{
        fetch(
            `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}?${value}:"Hello World!"&format=${format}`
          ).then((res) => dispatch(setQr(res.url)));
    },[value, format]);

  return (
    <div className='text_container'>
      <input type="text" onChange={(e)=>setValue(e.target.value)} placeholder='Enter Text'/>
      <p>(Your QR Code will be generated automatically)</p>
    </div>
  )
}

export default Text
