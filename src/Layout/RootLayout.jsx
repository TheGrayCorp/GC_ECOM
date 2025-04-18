import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-60">
        <Header />
        <div className="flex-1 overflow-y-auto bg-primary p-4 ">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
