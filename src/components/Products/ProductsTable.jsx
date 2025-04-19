import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  IconButton,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import useSWR, { mutate } from "swr";
import { Download, Trash2, Move, Plus, Eye, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductTable() {
  const { data, error } = useSWR("/data/products.json", fetcher);
  const [searchText, setSearchText] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [moveCategory, setMoveCategory] = useState("");
  const [snackbar, setSnackbar] = useState("");
  const [page, setPage] = useState(1); // for pagination
  const navigate = useNavigate();

  const handleClearSearch = () => setSearchText("");

  const handleDeleteSelected = () => {
    if (window.confirm("Are you sure you want to delete selected items?")) {
      const updated = data.filter((p) => !selectedProducts.includes(p.id));
      console.log("Updated after delete", updated);
      setSnackbar("Products deleted successfully");
      setSelectedProducts([]);
    }
  };

  const handleMoveSelected = () => {
    if (!moveCategory) {
      alert("Select a category to move to");
      return;
    }
    const updated = data.map((p) =>
      selectedProducts.includes(p.id) ? { ...p, category: moveCategory } : p
    );
    console.log("Updated after move", updated);
    setSnackbar("Products moved successfully");
    setSelectedProducts([]);
  };

  const handleExport = () => {
    window.print();
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allIds = filteredProducts.map((product) => product.id);
      setSelectedProducts(allIds);
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleEditSave = () => {
    const updated = data.map((p) =>
      p.id === editProduct.id ? editProduct : p
    );
    console.log("Updated after edit", updated);
    setSnackbar("Product updated successfully");
    setEditProduct(null);
  };

  const handleAddProduct = () => {
    const newId = Math.max(...data.map((p) => p.id)) + 1;
    const newProduct = { id: newId, ...editProduct };
    const updated = [...data, newProduct];
    console.log("Updated after add", updated);
    setSnackbar("Product added successfully");
    setAddDialogOpen(false);
  };

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 10;
  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="p-3">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell colSpan={8} align="center">
                <div className="flex items-center justify-evenly px-5">
                  <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-9/12"
                  />
                  <Button color="primary" onClick={handleClearSearch}>
                    Clear
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Plus size={18} />}
                    onClick={() => {
                      setEditProduct({
                        name: "",
                        category: "",
                        brand: "",
                        color: "",
                        price: "",
                      });
                      setAddDialogOpen(true);
                    }}
                  >
                    Add
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Checkbox
                  color="secondary"
                  checked={
                    selectedProducts.length === currentProducts.length &&
                    currentProducts.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell align="center">No</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Category</TableCell>
              <TableCell align="center">Brand</TableCell>
              <TableCell align="center">Color</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentProducts.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell align="center">
                  <Checkbox
                    color="secondary"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => handleSelectOne(product.id)}
                  />
                </TableCell>
                <TableCell align="center">{startIndex + index + 1}</TableCell>
                <TableCell align="center">{product.name}</TableCell>
                <TableCell align="center">{product.category}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">{product.color}</TableCell>
                <TableCell align="center">${product.price}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <Eye size={18} />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => setEditProduct(product)}
                  >
                    <Pencil size={18} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between items-center p-3">
          <div className="flex gap-2">
            <IconButton
              color="primary"
              onClick={handleMoveSelected}
              disabled={selectedProducts.length === 0}
            >
              <Move size={20} />
            </IconButton>
            <IconButton
              color="error"
              onClick={handleDeleteSelected}
              disabled={selectedProducts.length === 0}
            >
              <Trash2 size={20} />
            </IconButton>
            <IconButton color="primary" onClick={handleExport}>
              <Download size={20} />
            </IconButton>
          </div>

          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(filteredProducts.length / itemsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              shape="rounded"
            />
          </Stack>
        </div>
      </TableContainer>

      {/* Edit Dialog */}
      {editProduct && (
        <Dialog open onClose={() => setEditProduct(null)}>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            {Object.keys(editProduct).map((key) =>
              key !== "id" ? (
                <TextField
                  key={key}
                  margin="dense"
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  fullWidth
                  variant="standard"
                  value={editProduct[key]}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, [key]: e.target.value })
                  }
                />
              ) : null
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setEditProduct(null)}>Cancel</Button>
            <Button onClick={handleEditSave}>Update</Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Add Dialog */}
      {addDialogOpen && (
        <Dialog open onClose={() => setAddDialogOpen(false)}>
          <DialogTitle>Add New Product</DialogTitle>
          <DialogContent>
            {Object.keys(editProduct).map((key) => (
              <TextField
                key={key}
                margin="dense"
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                fullWidth
                variant="standard"
                value={editProduct[key]}
                onChange={(e) =>
                  setEditProduct({ ...editProduct, [key]: e.target.value })
                }
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleAddProduct}>Add</Button>
          </DialogActions>
        </Dialog>
      )}

      <Snackbar
        open={!!snackbar}
        autoHideDuration={3000}
        message={snackbar}
        onClose={() => setSnackbar("")}
      />
    </div>
  );
}
