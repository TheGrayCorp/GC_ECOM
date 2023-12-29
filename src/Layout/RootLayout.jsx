import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
  return (
    <div className='flex felx-row h-screen w-screen overflow-hidden'>
      <div>
        <Sidebar />
      </div>
      <div className='p-4'>
        <div>Header</div>
        <Outlet />
        <div>Footer</div>
      </div>
    </div>
  )
}

export default RootLayout
