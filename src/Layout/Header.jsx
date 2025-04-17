import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { IoChatboxEllipses, IoNotifications } from 'react-icons/io5'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import pirathaImage from "../assets/Piratha.jpg";
const Header = () => {
  return (
    <div className='flex justify-between items-center h-12 px-6 font-popins bg-white shadow-sm'>
      <div className='relative md:flex hidden'>
        <IoMdSearch
          size={22}
          className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'
        />
        <input
          type='text'
          placeholder='Search...'
          className='focus:outline-none active:outline-none h-8 
          w-80 border border-gray-300 pl-11 text-sm rounded-md '
        />
      </div>
      <div className='flex flex-row items-center gap-1'>
        <button className='btn btn-ghost btn-circle'>
          <IoChatboxEllipses
            size={22}
            className='text-indigo-500 cursor-pointer'
          />
        </button>
        <button className='btn btn-ghost btn-circle'>
          <IoNotifications
            size={22}
            className='text-indigo-500 cursor-pointer'
          />
        </button>

        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'
          >
            <div className='w-9 rounded-full'>
            <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={pirathaImage} />
            </Stack>
            </div>
            
          </div>
          <ul
            tabIndex={0}
            className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
          >
            <li>
              <a href='/profile' className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </a>
            </li>
            <li>
              <a href='/settings'>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
