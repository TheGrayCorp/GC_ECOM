import React from 'react'
import DashboardTopGrid from '../components/DashboardTopGrid'
import TransactionChart from '../components/TransactionChart'
import BuyerProfileChart from '../components/BuyerProfileChart'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardTopGrid />
      <div className='flex lg:flex-row flex-col gap-4 w-full'>
        <TransactionChart />
        <BuyerProfileChart />
      </div>
    </div>
  )
}

export default Dashboard
