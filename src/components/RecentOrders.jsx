import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../assets/StatusColor'

const RecentOrders = () => {
  const recentOrders = [
    {
      productID: 'P001',
      productName: 'Laptop',
      customerName: 'John Doe',
      orderDate: '2023-01-15',
      orderTotal: 1200.0,
      shippingAddress: '123 Main Street, Cityville, Country',
      orderStatus: 'Processing',
    },
    {
      productID: 'P002',
      productName: 'Smartphone',
      customerName: 'Jane Smith',
      orderDate: '2023-01-18',
      orderTotal: 699.99,
      shippingAddress: '456 Oak Avenue, Townsville, Country',
      orderStatus: 'Shipped',
    },
    {
      productID: 'P003',
      productName: 'Camera',
      customerName: 'Bob Johnson',
      orderDate: '2023-01-20',
      orderTotal: 499.5,
      shippingAddress: '789 Pine Road, Villagetown, Country',
      orderStatus: 'Delivered',
    },
    {
      productID: 'P004',
      productName: 'Headphones',
      customerName: 'Alice Brown',
      orderDate: '2023-02-05',
      orderTotal: 89.95,
      shippingAddress: '101 Maple Lane, Hamletville, Country',
      orderStatus: 'Shipped',
    },
    {
      productID: 'P005',
      productName: 'Tablet',
      customerName: 'Charlie Davis',
      orderDate: '2023-02-10',
      orderTotal: 349.0,
      shippingAddress: '202 Cedar Street, Villagetown, Country',
      orderStatus: 'Processing',
    },
    {
      productID: 'P006',
      productName: 'Printer',
      customerName: 'Eva White',
      orderDate: '2023-02-18',
      orderTotal: 199.99,
      shippingAddress: '303 Elm Avenue, Cityville, Country',
      orderStatus: 'Delivered',
    },
    {
      productID: 'P007',
      productName: 'Gaming Console',
      customerName: 'Sam Robinson',
      orderDate: '2023-03-02',
      orderTotal: 499.0,
      shippingAddress: '404 Birch Road, Hamletville, Country',
      orderStatus: 'Processing',
    },
    {
      productID: 'P008',
      productName: 'Smartwatch',
      customerName: 'Mia Miller',
      orderDate: '2023-03-12',
      orderTotal: 129.5,
      shippingAddress: '505 Oak Avenue, Townsville, Country',
      orderStatus: 'Shipped',
    },
    {
      productID: 'P009',
      productName: 'Wireless Earbuds',
      customerName: 'Noah Wilson',
      orderDate: '2023-03-20',
      orderTotal: 79.99,
      shippingAddress: '606 Pine Road, Villagetown, Country',
      orderStatus: 'Delivered',
    },
    {
      productID: 'P010',
      productName: 'External Hard Drive',
      customerName: 'Olivia Lee',
      orderDate: '2023-04-05',
      orderTotal: 149.0,
      shippingAddress: '707 Maple Lane, Cityville, Country',
      orderStatus: 'Processing',
    },
  ]

  return (
    <div className=' bg-white rounded-sm px-4 py-3 flex-1 p-5 font-popins'>
      <strong className=' text-neutral-700 text-xl'>RecentOrders</strong>
      <div className='mt-3'>
        <table className='w-full text-gray-600 table-auto'>
          <thead>
            <tr>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Product ID
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Product Name
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Customer Name
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Order Date
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Order Total
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Shipping Address
              </td>
              <td className='py-4 px-5 border-b shadow-sm bg-gray-100 border-gray-200'>
                Order Status
              </td>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((orders) => (
              <tr key={orders.productID}>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm text-sky-500 hover:underline'>
                  <Link to={`/products/${orders.productID}`}>
                    {orders.productID}
                  </Link>
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm text-sky-500 hover:underline'>
                  <Link to={`/products/${orders.productName}`}>
                    {orders.productName}
                  </Link>
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm text-sky-500 hover:underline'>
                  <Link to={`/customers/${orders.customerName}`}>
                    {orders.customerName}
                  </Link>
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm'>
                  {new Date(orders.orderDate).toLocaleDateString()}
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm'>
                  {orders.orderTotal}
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm'>
                  S{orders.shippingAddress}
                </td>
                <td className='py-3 px-5 border-b shadow-sm bg-white text-sm'>
                  {getOrderStatus(orders.orderStatus)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentOrders
