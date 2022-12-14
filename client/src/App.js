
import './App.css';
import React from 'react';
import VendorLogsPage from './Pages/VendorLogsPage';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import FooterComponent from "./Components/Footer/FooterComponent";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
          <Route path="/" element={<HomePage />}>
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="about" element={<About />} /> */}
          </Route>
          {/* <Route path="/build-cv" element={<BuildCvPage />} /> */}

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
