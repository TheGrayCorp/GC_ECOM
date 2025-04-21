import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div className="fixed h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden lg:pl-60">
        <div className="flex-1 overflow-y-auto bg-primary p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
