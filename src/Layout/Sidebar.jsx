import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import SidebarLink from "./SidebarLink";
import { TOP_SIDEBAR_LINKS } from "./SidebarContents";
import { Typography, Avatar } from "@mui/material";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="lg:flex hidden flex-col bg-primaryLight w-60 p-3 
    h-screen text-white font-popins"
    >
      <div className="flex flex-col items-center gap-1 py-2">
        <Avatar
          src={logo}
          alt="Gray Corp Logo"
          sx={{
            width: 42,
            height: 60,
            backgroundColor: "transparent",
          }}
          variant="square"
        />
        <Typography
          variant="subtitle1"
          fontWeight="600"
          color="text.primary"
          sx={{ lineHeight: 0.6 }}
        >
          Gray Corp
        </Typography>
        <Typography
          variant="caption"
          color="text.primary"
          sx={{ fontSize: "0.9rem" }}
        >
          E-commerce dashboard
        </Typography>
        <div className="w-full border-b border-lightText pt-1"></div>
      </div>

      <div className="flex-1 flex flex-col py-2 gap-1">
        {TOP_SIDEBAR_LINKS.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </div>

      <div className="flex flex-col items-center pt-2 gap-1 border-t border-lightText">
        <Avatar
          src={profile}
          alt="User Profile"
          sx={{
            width: 60,
            height: 60,
            backgroundColor: "transparent",
          }}
        />

        <Typography variant="subtitle1" fontWeight="600" color="text.primary">
          Pearlinee Baskaran
        </Typography>

        <div className="flex items-center gap-1">
          <FaUserCircle size={20} />
          <Typography
            variant="caption"
            color="text.primary"
            sx={{ fontSize: "0.8rem" }}
          >
            Admin Manager
          </Typography>
        </div>

        <div className="flex w-full justify-around pt-1 gap-1">
          <Link
            to="/settings"
            className="flex items-center gap-1 px-2 py-2 text-sm text-colorText"
          >
            <IoMdSettings size={18} />
            <span>Settings</span>
          </Link>

          <Link
            to="/logout"
            className="flex items-center gap-1 px-1 py-2 text-sm text-colorText"
          >
            <IoLogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </div>

      <div className="w-full border-b border-lightText my-2"></div>

      <Typography
        variant="subtitle2"
        fontWeight="600"
        color="text.primary"
        sx={{ fontSize: "1rem", marginTop: "4px" }}
        align="left"
      >
        Support
      </Typography>
      <Typography
        variant="caption"
        color="text.primary"
        sx={{ fontSize: "0.8rem" }}
        align="left"
      >
        All Copyrights Reserved
      </Typography>
    </div>
  );
};

export default Sidebar;
