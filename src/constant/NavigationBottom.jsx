import { IoMdSettings } from 'react-icons/io'
import { MdContactSupport } from 'react-icons/md'

const BOTTOM_SIDEBAR_LINKS = [
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

export default BOTTOM_SIDEBAR_LINKS