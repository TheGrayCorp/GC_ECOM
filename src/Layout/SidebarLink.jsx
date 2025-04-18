/* eslint-disable react/prop-types */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={`flex flex-row items-center gap-2 px-3 py-3 text-base rounded-sm hover:bg-secondaryLight active:bg-secondaryLight 
      ${
        pathname === item.path
          ? "text-colorText bg-secondaryLight"
          : "text-lightText"
      }`}
    >
      <span>{item.icon}</span>
      <h3>{item.label}</h3>
    </Link>
  );
};

export default SidebarLink;
