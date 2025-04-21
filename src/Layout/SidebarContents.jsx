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
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <FaUserShield />,
  },
];
