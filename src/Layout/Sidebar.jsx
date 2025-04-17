import React from 'react'
import { FcMindMap } from 'react-icons/fc'
import { IoLogOut } from 'react-icons/io5'
import SidebarLink from './SidebarLink'
import { BOTTOM_SIDEBAR_LINKS, TOP_SIDEBAR_LINKS } from './SidebarContents'

const Sidebar = () => {
  return (
    <div className='lg:flex hidden flex-col bg-indigo-950 w-60 p-3 
    h-screen text-white font-popins'>
      <div className='flex flex-row items-center gap-2 py-2'>
        <FcMindMap size={28} />
        <span className='text-3xl font-crimson font-bold text-neutral-300'>
          NeuraReads
        </span>
      </div>
      <div className='flex-1 flex flex-col py-6 gap-1'>
        {TOP_SIDEBAR_LINKS.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </div>
      <div className='flex flex-col pt-5 gap-1 border-t border-neutral-400'>
        {BOTTOM_SIDEBAR_LINKS.map((item, index) => (
          <SidebarLink key={index} item={item} />
        ))}
      </div>
      <button className='flex flex-row items-center gap-2 px-3 py-3 text-base rounded-sm hover:bg-indigo-50 active:bg-indigo-100 '>
        <span>
          <IoLogOut />
        </span>
        <h3>Logout</h3>
      </button>
    </div>
  )
}

export default Sidebar
