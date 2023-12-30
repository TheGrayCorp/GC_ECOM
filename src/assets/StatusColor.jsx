export function getOrderStatus(status) {
  switch (status) {
    case 'Processing':
      return (
        <span className='px-2 py-1 rounded-sm text-sm text-sky-500 bg-sky-100'>
          {status}
        </span>
      )
    case 'Shipped':
      return (
        <span className='px-2 py-1 rounded-sm text-sm text-orange-500 bg-orange-100'>
          {status}
        </span>
      )
    case 'Delivered':
      return (
        <span className='px-2 py-1 rounded-sm text-sm text-green-500 bg-green-100'>
          {status}
        </span>
      )
    default:
      return (
        <span className='px-2 py-1 rounded-sm text-sm text-gray-500 bg-gray-400'>
          {status}
        </span>
      )
  }
}
