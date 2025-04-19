import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import ClientsMain from "./Outlets/ClientsMain";
import DashboardMain from "./Outlets/DashboardMain";
import ProductsMain from "./Outlets/ProductsMain";
import ProductDetails from "./components/Products/ProductDetails";
import Message from "./components/Message";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Support from "./components/Support";
import Transaction from "./components/Transaction";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DashboardMain />} />
          <Route path="products" element={<ProductsMain />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="customers" element={<ClientsMain />} />
          <Route path="message" element={<Message />} />
          <Route path="settings" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
