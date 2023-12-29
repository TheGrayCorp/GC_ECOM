import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const RootLayout = () => {
  return (
    <div className='flex felx-row h-screen w-screen overflow-hidden'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Header />
        <Outlet/>
        <div>Footer</div>
      </div>
    </div>
  )
}

export default RootLayout
