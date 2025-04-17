import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import useSWR from 'swr';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'NAME', width: 275 },
  { field: 'brand', headerName: 'BRAND', width: 125 },
  { field: 'color', headerName: 'COLOR', width: 150, },
  { field: 'price', headerName: 'PRICE', width: 125, },
  { field: 'description', headerName: 'DESCRIPTION', width: 200, },
];


const paginationModel = { page: 0, pageSize: 10 };

export default function ProductsTable() {

  const api = "https://www.freetestapi.com/api/v1/products";

  const fetchProducts = async(api)=>{
     const products = await axios.get(api);
     return products.data;
  }

  const {data,error} = useSWR(api,fetchProducts);
  
console.log(data);
  return (
    <Paper sx={{ height: 590, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
