import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='flex felx-row h-screen w-screen overflow-hidden'>
      <div>
        <Sidebar />
      </div>
      <div className='flex-1'>
        <Header />
        <div className='bg-gray-200 max-h-screen p-4'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default RootLayout
