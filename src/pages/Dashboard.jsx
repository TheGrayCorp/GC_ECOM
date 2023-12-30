import React from 'react'
import DashboardTopGrid from '../components/DashboardTopGrid'
import TransactionChart from '../components/TransactionChart'
import BuyerProfileChart from '../components/BuyerProfileChart'
import RecentOrders from '../components/RecentOrders'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardTopGrid />
      <div className='flex lg:flex-row flex-col gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
      <div className='flex lg:flex-row flex-col gap-4 w-full'>
        <RecentOrders />
      </div>
    </div>
  )
}

export default Dashboard
