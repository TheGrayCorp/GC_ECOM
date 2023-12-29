import React from 'react'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
import { IoPieChart } from 'react-icons/io5'
import { ImUsers } from 'react-icons/im'

const DashboardTopGrid = () => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cold-1 gap-3 w-full font-popins pt-4'>
      <div className='bg-white rounded-sm px-4 flex-1 flex items-center justify-start'>
        <div className='bg-blue-500 p-3 rounded-full flex justify-center items-center'>
          <FaShoppingBag size={20} color='white' />
        </div>
        <dir className='flex flex-col pl-4'>
          <h2 className=' text-neutral-400 text-lg'>Total Sales</h2>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl font-semibold'>$54232</span>
            <span className='text-base text-green-600'>+343</span>
          </div>
        </dir>
      </div>
      <div className='bg-white rounded-sm p-4 flex-1 flex items-center justify-start'>
        <div className='bg-orange-500 p-3 rounded-full flex justify-center items-center'>
          <IoPieChart size={20} color='white' />
        </div>
        <dir className='flex flex-col pl-4'>
          <h2 className=' text-neutral-400 text-lg'>Total Expenses</h2>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl font-semibold'>$3423</span>
            <span className='text-base text-red-600'>343</span>
          </div>
        </dir>
      </div>
      <div className='bg-white rounded-sm p-4 flex-1 flex items-center justify-start'>
        <div className=' bg-amber-400 p-3 rounded-full flex justify-center items-center'>
          <ImUsers size={20} color='white' />
        </div>
        <dir className='flex flex-col pl-4'>
          <h2 className=' text-neutral-400 text-lg'>Total Customers</h2>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl font-semibold'>12313</span>
            <span className='text-base text-green-600'>+30</span>
          </div>
        </dir>
      </div>
      <div className='bg-white rounded-sm p-4 flex-1 flex items-center justify-start'>
        <div className='bg-blue-500 p-3 rounded-full flex justify-center items-center'>
          <FaShoppingBag size={20} color='white' />
        </div>
        <dir className='flex flex-col pl-4'>
          <h2 className=' text-neutral-400 text-lg'>Total Orders</h2>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl font-semibold'>16432</span>
            <span className='text-base text-red-600'>-43</span>
          </div>
        </dir>
      </div>
    </div>
  )
}

export default DashboardTopGrid
