import React from "react";
import { Link } from "react-router-dom";
import { getOrderStatus } from "../../assets/StatusColor";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const RecentOrders = () => {
  const rows = [
    {
      id: 1,
      productID: "P001",
      productName: "Laptop",
      customerName: "John Doe",
      orderDate: "2023-01-15",
      orderTotal: 1200.0,
      shippingAddress: "123 Main Street, Cityville, Country",
      orderStatus: "Processing",
    },
    {
      id: 2,
      productID: "P002",
      productName: "Smartphone",
      customerName: "Jane Smith",
      orderDate: "2023-01-18",
      orderTotal: 699.99,
      shippingAddress: "456 Oak Avenue, Townsville, Country",
      orderStatus: "Shipped",
    },
    {
      id: 3,
      productID: "P003",
      productName: "Camera",
      customerName: "Bob Johnson",
      orderDate: "2023-01-20",
      orderTotal: 499.5,
      shippingAddress: "789 Pine Road, Villagetown, Country",
      orderStatus: "Delivered",
    },
    {
      id: 4,
      productID: "P004",
      productName: "Headphones",
      customerName: "Alice Brown",
      orderDate: "2023-02-05",
      orderTotal: 89.95,
      shippingAddress: "101 Maple Lane, Hamletville, Country",
      orderStatus: "Shipped",
    },
    {
      id: 5,
      productID: "P005",
      productName: "Tablet",
      customerName: "Charlie Davis",
      orderDate: "2023-02-10",
      orderTotal: 349.0,
      shippingAddress: "202 Cedar Street, Villagetown, Country",
      orderStatus: "Processing",
    },
    {
      id: 6,
      productID: "P006",
      productName: "Printer",
      customerName: "Eva White",
      orderDate: "2023-02-18",
      orderTotal: 199.99,
      shippingAddress: "303 Elm Avenue, Cityville, Country",
      orderStatus: "Delivered",
    },
    {
      id: 7,
      productID: "P007",
      productName: "Gaming Console",
      customerName: "Sam Robinson",
      orderDate: "2023-03-02",
      orderTotal: 499.0,
      shippingAddress: "404 Birch Road, Hamletville, Country",
      orderStatus: "Processing",
    },
    {
      id: 8,
      productID: "P008",
      productName: "Smartwatch",
      customerName: "Mia Miller",
      orderDate: "2023-03-12",
      orderTotal: 129.5,
      shippingAddress: "505 Oak Avenue, Townsville, Country",
      orderStatus: "Shipped",
    },
    {
      id: 9,
      productID: "P009",
      productName: "Wireless Earbuds",
      customerName: "Noah Wilson",
      orderDate: "2023-03-20",
      orderTotal: 79.99,
      shippingAddress: "606 Pine Road, Villagetown, Country",
      orderStatus: "Delivered",
    },
    {
      id: 10,
      productID: "P010",
      productName: "External Hard Drive",
      customerName: "Olivia Lee",
      orderDate: "2023-04-05",
      orderTotal: 149.0,
      shippingAddress: "707 Maple Lane, Cityville, Country",
      orderStatus: "Processing",
    },
  ];

  const columns = [
    { field: "productID", headerName: "Product ID", width: 100 },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "customerName", headerName: "Customer Name", width: 250 },
    { field: "orderDate", headerName: "Order Date", width: 150 },
    { field: "orderTotal", headerName: "Order Total", width: 150 },
    { field: "shippingAddress", headerName: "hipping Address", width: 150 },
    { field: "orderStatus", headerName: "Order Status", width: 150 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className=" rounded-sm px-4 py-3 flex-1 p-5 font-popins">
      <strong className=" text-darkText text-xl">RecentOrders</strong>
      <div className="h-3"></div>
      <div className="mt-3">
        <table className="w-full text-darkText table-auto">
          <thead>
            <tr>
              {columns.map((column, id) => (
                <td
                  key={id}
                  className="py-4 text-sm font-medium px-5 border-b shadow-sm bg-gray-100 border-primary"
                >
                  {column.headerName}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((orders, id) => (
              <tr key={id}>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-sky-500 hover:underline">
                  <Link to={`/products/${orders.productID}`}>
                    {orders.productID}
                  </Link>
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-opacity-30 hover:underline">
                  <Link to={`/products/${orders.productName}`}>
                    {orders.productName}
                  </Link>
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-opacity-30 hover:underline">
                  <Link to={`/customers/${orders.customerName}`}>
                    {orders.customerName}
                  </Link>
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-opacity-30">
                  {orders.orderDate}
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-opacity-30">
                  {orders.orderTotal}
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm text-opacity-30">
                  S{orders.shippingAddress}
                </td>
                <td className="py-3 px-5 border-b shadow-sm bg-primaryLight text-sm">
                  {getOrderStatus(orders.orderStatus)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;

/*



*/
