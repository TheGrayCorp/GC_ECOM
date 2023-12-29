import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import Dashboard from './pages/Dashboard'
import Products from './components/Products'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import Orders from './components/Orders'
import Transaction from './components/Transaction'
import Customers from './components/Customers'
import Message from './components/Message'
import Settings from './components/Settings'
import Support from './components/Support'
import Profile from './components/Profile'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
            <Route path='transaction' element={<Transaction />} />
            <Route path='customers' element={<Customers />} />
            <Route path='message' element={<Message />} />
            <Route path='settings' element={<Settings />} />
            <Route path='support' element={<Support />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='login' element={<LoginScreen />} />
          <Route path='register' element={<RegisterScreen />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
