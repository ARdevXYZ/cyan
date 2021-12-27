import React from "react";
import ReactDOM from "react-dom";
import { ReactSketchCanvas } from 'react-sketch-canvas';
import "./index.css";
import SplashScreen from "./utils/SplashScreen";
import Nav from "./components/Nav";
import Grid from "./components/Grid";
import Services from "./components/Services";
import ContactGrid from "./components/ContactGrid";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2zA_8Om1Onspmv9ZxN3oI95Qkd3_ZnFQ",
  authDomain: "cyan1999.firebaseapp.com",
  projectId: "cyan1999",
  storageBucket: "cyan1999.appspot.com",
  messagingSenderId: "633289812225",
  appId: "1:633289812225:web:4e882fa1dd74e40ba1d300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let browserHeight = window.innerHeight;
let browserWidth = window.innerWidth;

const styles = {
  border: '0px',
  borderRadius: '0.25rem',

};

function App() {

  return (
    <div className="App">
      <ReactSketchCanvas
        style={styles}
        className="canvas-class"
        width={browserWidth}
        height={browserHeight}
        strokeWidth={1}
        strokeColor="#00FF00"
      />
      <SplashScreen />
      <Nav />
      <Grid />
      <Services />
      <Marquee />
      <ContactGrid />
      <Footer />
 



    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
