import { AiFillMessage } from "react-icons/ai";

import { FaCartShopping, FaUserShield } from "react-icons/fa6";
import { FaTags, FaMoneyCheckAlt, FaBoxes, FaChartLine } from "react-icons/fa";
import { IoMdCube, IoMdSettings } from "react-icons/io";
import {
  MdContactSupport,
  MdEditDocument,
  MdSpaceDashboard,
} from "react-icons/md";

export const TOP_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <MdSpaceDashboard />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <IoMdCube />,
  },
  {
    key: "brand",
    label: "Brand",
    path: "/brand",
    icon: <FaTags />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <FaCartShopping />,
  },
  {
    key: "purchase",
    label: "Purchase",
    path: "/purchase",
    icon: <FaMoneyCheckAlt />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <FaUserShield />,
  },
  {
    key: "transaction",
    label: "Transaction",
    path: "/transaction",
    icon: <MdEditDocument />,
  },
  {
    key: "message",
    label: "Message",
    path: "/message",
    icon: <AiFillMessage />,
  },
  {
    key: "stock",
    label: "Stock",
    path: "/stock",
    icon: <FaBoxes />,
  },
  {
    key: "report",
    label: "Report",
    path: "/report",
    icon: <FaChartLine />,
  },
];

export const BOTTOM_SIDEBAR_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <IoMdSettings />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <MdContactSupport />,
  },
];
