
import './App.css';
import React from 'react';
import HomePage from './Pages/HomePage';
import VendorLogsPage from './Pages/VendorLogsPage';
import AdminPage from "./Pages/admin/AdminPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "./Components/NavBarComponent/NavBarComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import RegisterComponent from "./Components/RegisterComponent";
import LoginComponent from "./Components/LoginComponent";
import ViewUsersComponent from "./Components/ViewUsersComponent";
import ManageShops from "./Components/ManageShops";

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
          <Route path="/register" element={<RegisterComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/admin_page" element={<AdminPage />} />
          <Route path="/view_users" element={<ViewUsersComponent />} />
          <Route path="/manage_shops" element={<ManageShops />} />

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
