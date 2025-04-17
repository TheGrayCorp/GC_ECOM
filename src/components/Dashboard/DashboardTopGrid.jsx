import React from 'react'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
import { IoPieChart } from 'react-icons/io5'
import { ImUsers } from 'react-icons/im'
import { Container } from '@mui/material';

const DashboardTopGridItems = [
  {id:1,title: "Total Sales", value: "$54232", difference:"+343",iconColor:"bg-blue-500",differenceBy:"+"},
  {id:2,title: "Total Expenses", value: "$3423", difference:"+473",iconColor:"bg-orange-500",differenceBy:"+"},
  {id:3,title: "Total Customers", value: "7232", difference:"-23",iconColor:"bg-amber-400",differenceBy:"-"},
  {id:4,title: "Total Orders", value: "16432", difference:"+103",iconColor:"bg-green-500",differenceBy:"-"},
];

const DashboardTopGrid = () => {
  return (
    <Container className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3 w-full font-popins py-3'>
    {DashboardTopGridItems.map((item,id)=>(
      <div key={id} className='bg-white rounded-sm px-4 flex-1 flex items-center justify-start'>
        <div className={`${item.iconColor} p-3 rounded-full flex justify-center items-center`}>
          <FaShoppingBag size={20} color='white'/>
        </div>
        <dir className='flex flex-col pl-4'>
          <h2 className=' text-neutral-400 lg:text-lg'>{item.title}</h2>
          <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl font-semibold'>{item.value}</span>
            <span className={`text-base ${item.differenceBy === "+" ? 'text-green-600' : 'text-red-600'}`}>{item.difference}</span>
          </div>
        </dir>
      </div>
    ))} 
     
    </Container>
  )
}

export default DashboardTopGrid
