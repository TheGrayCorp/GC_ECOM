import React from 'react'
import DashboardTopGrid from '../components/Dashboard/DashboardTopGrid'
import TransactionChart from '../components/Dashboard/TransactionChart'
import BuyerProfileChart from '../components/Dashboard/BuyerProfileChart'
import RecentOrders from '../components/Dashboard/RecentOrders'

const DashboardMain = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardTopGrid />
      <div className='flex lg:flex-row flex-col gap-4 w-full justify-center items-center'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='flex lg:flex-row flex-col gap-4 w-full'>
        <RecentOrders />
      </div>
    </div>
  )
}

export default DashboardMain
