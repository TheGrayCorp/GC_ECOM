import React from 'react'
import DashboardTopGrid from '../components/DashboardTopGrid'
import TransactionChart from '../components/TransactionChart'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-4'>
      <DashboardTopGrid />
      <TransactionChart />
    </div>
  )
}

export default Dashboard
