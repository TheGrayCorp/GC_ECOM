import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import useSWR from "swr";

const columnsBase = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "NAME", width: 200 },
  { field: "brand", headerName: "BRAND", width: 125 },
  { field: "color", headerName: "COLOR", width: 150 },
  { field: "price", headerName: "PRICE", width: 125 },
  { field: "description", headerName: "DESCRIPTION", width: 200 },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function ProductsTable() {
  const api = "https://www.freetestapi.com/api/v1/products";

  const fetchProducts = async (api) => {
    const products = await axios.get(api);
    return products.data;
  };

  const { data, error } = useSWR(api, fetchProducts);
  const [searchText, setSearchText] = useState("");
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setEditDialogOpen(true);
  };

  const handleDelete = (product) => {
    console.log("Deleting:", product);
  };

  const handleCloseDialog = () => {
    setEditDialogOpen(false);
  };

  const handleSaveEdit = () => {
    console.log("Saving:", selectedProduct);
    setEditDialogOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchText("");
  };

  const handleAddNew = () => {
    console.log("Add New Product");
  };

  if (error)
    return (
      <Box sx={{ display: "flex" }}>
        <div>Failed to load products</div>
      </Box>
    );
  if (!data)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
        <CircularProgress />
      </Box>
    );

  const filteredRows = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns = [
    ...columnsBase,
    {
      field: "actions",
      headerName: "ACTIONS",
      width: 200,

      renderCell: (params) => (
        <div className="flex justify-center items-center gap-4 w-full">
          <Button
            size="small"
            color="primary"
            onClick={() => handleEdit(params.row)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => handleDelete(params.row)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Box className="p-3">
      <Paper sx={{ width: "100%" }}>
        {/* Header Toolbar inside Table Head style */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            p: 2,
            borderBottom: "1px solid #ddd",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
            sx={{ flex: "1 1 auto", maxWidth: 0 }}
          />
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClearSearch}
            >
              Clear
            </Button>
            <Button variant="contained" color="primary" onClick={handleAddNew}>
              Add New
            </Button>
          </Box>
        </Box>

        <Box sx={{ height: 590, width: "100%" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[10]}
            checkboxSelection
            sx={{ border: 0 }}
          />
        </Box>
      </Paper>

      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={selectedProduct.name || ""}
            onChange={(e) =>
              setSelectedProduct({ ...selectedProduct, name: e.target.value })
            }
          />
          <TextField
            label="Brand"
            fullWidth
            margin="normal"
            value={selectedProduct.brand || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                brand: e.target.value,
              })
            }
          />
          <TextField
            label="Color"
            fullWidth
            margin="normal"
            value={selectedProduct.color || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                color: e.target.value,
              })
            }
          />
          <TextField
            label="Price"
            fullWidth
            margin="normal"
            value={selectedProduct.price || ""}
            onChange={(e) =>
              setSelectedProduct({
                ...selectedProduct,
                price: e.target.value,
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveEdit} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
