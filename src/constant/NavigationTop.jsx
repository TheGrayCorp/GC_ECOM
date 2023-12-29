import { MdSpaceDashboard } from 'react-icons/md'
import { IoMdCube } from 'react-icons/io'
import { FaCartShopping } from 'react-icons/fa6'
import { FaUserShield } from 'react-icons/fa'
import { MdEditDocument } from 'react-icons/md'
import { AiFillMessage } from 'react-icons/ai'

const TOP_SIDEBAR_LINKS = [
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

export default TOP_SIDEBAR_LINKS