import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  {
    name: 'Jan',
    expense: 3000,
    income: 4000,
  },
  {
    name: 'Feb',
    expense: 2000,
    income: 5000,
  },
  {
    name: 'Mar',
    expense: 5600,
    income: 4300,
  },
  {
    name: 'Apr',
    expense: 2000,
    income: 9000,
  },
  {
    name: 'May',
    expense: 5000,
    income: 4000,
  },
  {
    name: 'Jun',
    expense: 2000,
    income: 1500,
  },
  {
    name: 'Jul',
    expense: 12000,
    income: 7500,
  },
  {
    name: 'Aug',
    expense: 7000,
    income: 9000,
  },
  {
    name: 'Sep',
    expense: 5000,
    income: 7500,
  },
  {
    name: 'Oct',
    expense: 4000,
    income: 3500,
  },
  {
    name: 'Nov',
    expense: 3000,
    income: 8500,
  },
  {
    name: 'Dec',
    expense: 6000,
    income: 4500,
  },
]
const TransactionChart = () => {
  return (
    <div className=' h-[400px] bg-white rounded-sm flex flex-col flex-1'>
      <div className='w-full mt-3 text-base flex-1'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3 0 0' vertical={false} />`
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='expense' fill='#8884d8' />
            <Bar dataKey='income' fill='#82ca9d' />`
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TransactionChart
