import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <div>
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default Layout;
