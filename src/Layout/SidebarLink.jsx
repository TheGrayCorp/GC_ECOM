/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const SidebarLink = ({ item }) => {
  const { pathname } = useLocation()
  return (
    <Link to={item.path}
      className={`flex flex-row items-center gap-2 px-3 py-3 text-base rounded-sm hover:bg-indigo-100 active:bg-indigo-100  
      ${ pathname === item.path ? 'text-indigo-800 bg-indigo-100' : 'text-neutral-400' }`}
    >
      <span>{item.icon}</span>
      <h3>{item.label}</h3>
    </Link>
  )
}

export default SidebarLink
