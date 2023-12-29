import React from 'react'
import { FcMindMap } from 'react-icons/fc'
import topSideBarLinks from '../constant/NavigationTop'
import bottomSideBarLinks from '../constant/NavigationBottom'
import SidebarLink from './SidebarLink'
import { IoLogOut } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-indigo-950 w-60 p-3 h-screen text-white font-popins'>
      <div className='flex flex-row items-center gap-2 py-2'>
        <FcMindMap size={28} />
        <span className='text-3xl font-crimson font-bold text-neutral-300'>
          NeuraReads
        </span>
      </div>
      <div className='flex-1 flex flex-col py-6 gap-1'>
        {topSideBarLinks.map((item, index) => (
          <SidebarLink key={item} item={item} />
        ))}
      </div>
      <div className='flex flex-col pt-5 gap-1 border-t border-neutral-400'>
        {bottomSideBarLinks.map((item, index) => (
          <SidebarLink key={item} item={item} />
        ))}
      </div>
      <button className='flex flex-row items-center gap-2 px-3 py-3 text-base rounded-sm hover:bg-indigo-500 active:bg-indigo-500 text-neutral-400 hover:text-white'>
        <span>
          <IoLogOut />
        </span>
        <h3>Logout</h3>
      </button>
    </div>
  )
}

export default Sidebar
