import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  IconButton,
  Pagination,
  Paper,
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
} from "@mui/material";
import useSWR from "swr";
import { Download, Trash2, Move, Plus, Eye, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductTable() {
  const { data, error } = useSWR("/data/products.json", fetcher);
  const [searchText, setSearchText] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleClearSearch = () => setSearchText("");

  const handleDeleteSelected = () => {
    if (window.confirm("Are you sure you want to delete selected items?")) {
      const updated = data.products.filter(
        (p) => !selectedProducts.includes(p.id)
      );
      console.log("Updated after delete", updated);
      setSnackbar("Products deleted successfully");
      setSelectedProducts([]);
    }
  };

  const handleMoveSelected = () => {
    // functionality placeholder
    alert("Move functionality not implemented in this snippet.");
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

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );

  const filteredProducts = data.products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Pagination
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
                <TableCell align="center">{product.category.sub}</TableCell>
                <TableCell align="center">{product.brand}</TableCell>
                <TableCell align="center">
                  {product.specifications.color.join(", ")}
                </TableCell>
                <TableCell align="center">
                  {product.price.currency} {product.price.selling.toFixed(2)}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => navigate(`/products/${product.id}`)}
                  >
                    <Eye size={18} />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => navigate(`/products/edit/${product.id}`)}
                  >
                    <Pencil size={18} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
          <IconButton color="secondary" onClick={handleExport}>
            <Download size={20} />
          </IconButton>
        </div>
        <Pagination
          count={Math.ceil(filteredProducts.length / itemsPerPage)}
          page={page}
          onChange={(e, value) => setPage(value)}
          color="primary"
        />
      </div>
    </div>
  );
}
