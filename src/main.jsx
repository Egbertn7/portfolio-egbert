import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import 'animate.css';

import './dist/css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// file main itu buat global digunakan untuk merekut/mengabungkan semua file supaya bisa jalan 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
