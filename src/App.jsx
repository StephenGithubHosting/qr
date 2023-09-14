import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QRCode from 'react-qr-code';
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';

function App() {
  const [count, setCount] = useState(0)
  const [scanResult, setScanResult] = useState(null);
  useEffect(()=>{
    const qrscanner = new Html5QrcodeScanner('reader',{
      qrbox:{
        width:250,
        height:250
      },
      fps:5
    })
    qrscanner.render(success, error);
    function success(res) {
      qrscanner.clear();
      setScanResult(res)
      console.log(res);
      window.location.href = res;
    }
    function error(err) {
      console.error(err);
    }

  },[]);
  return (
    <>
      <div id="reader">

      </div>
      <QRCode value="https://stepwebdev.netlify.app"></QRCode>
    </>
  )
}

export default App
