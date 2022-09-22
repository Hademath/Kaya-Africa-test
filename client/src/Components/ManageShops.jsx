import React from 'react'
import { NavLink, Link, Routes, Route } from 'react-router-dom';
import AdminComponent from '../Components/AdminComponent';

const ManageShops = () => {
    return (
      <>
        <div className="container__fluid">
          <AdminComponent />
          <div className="container__right">This is Mange Shopps</div>
        </div>
      </>
    );
}

export default ManageShops