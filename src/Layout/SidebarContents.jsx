import { AiFillMessage } from "react-icons/ai"
import { FaCartShopping, FaUserShield } from "react-icons/fa6"
import { IoMdCube, IoMdSettings } from "react-icons/io"
import { MdContactSupport, MdEditDocument, MdSpaceDashboard } from "react-icons/md"

export const TOP_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    path: '/',
    icon: <MdSpaceDashboard />,
  },
  {
    key: 'products',
    label: 'Products',
    path: '/products',
    icon: <IoMdCube />,
  },
  {
    key: 'orders',
    label: 'Orders',
    path: '/orders',
    icon: <FaCartShopping />,
  },
  {
    key: 'customers',
    label: 'Customers',
    path: '/customers',
    icon: <FaUserShield />,
  },
  {
    key: 'transaction',
    label: 'Transaction',
    path: '/transaction',
    icon: <MdEditDocument />,
  },
  {
    key: 'message',
    label: 'Message',
    path: '/message',
    icon: <AiFillMessage />,
  },
]

export const BOTTOM_SIDEBAR_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <IoMdSettings />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <MdContactSupport />,
  },
]