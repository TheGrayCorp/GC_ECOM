import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

const EditOverview = ({ formData, handleChange }) => {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 3, mb: 3 }}>
          {/* Row 1: Product Name, Product ID, Category|Subcategory, Brand Name */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Product Name
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="productName"
                  value={formData.productName || ""}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Product ID
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="id"
                  value={formData.id}
                  disabled
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Category | Subcategory
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <TextField
                    sx={{ flex: 1 }}
                    name="categoryMain"
                    value={formData.categoryMain}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      sx: {
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                  <Typography sx={{ mx: 1 }}>|</Typography>
                  <TextField
                    sx={{ flex: 1 }}
                    name="categorySub"
                    value={formData.categorySub}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                    InputProps={{
                      sx: {
                        fontFamily: "Inter",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                      },
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Brand Name
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Row 2: Stock Quantity, Address, Contact No, Email */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Stock Quantity
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  type="number"
                  name="stockQuantity"
                  value={formData.stockQuantity}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Address
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Contact No
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Email
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Row 3: Selling Price, Cost Price, Discount, Tax */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Selling Price (LKR)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  type="number"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Cost Price (LKR)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  type="number"
                  name="costPrice"
                  value={formData.costPrice}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Discount (%)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Tax (LKR)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  type="number"
                  name="tax"
                  value={formData.tax}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Row 4: Weight, Height, Size, Width */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Weight (g)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Height (cm)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Length (cm)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Width (cm)
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Row 5: Shipping Class, Size, Color, Material */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Shipping Class
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="shippingClass"
                  value={formData.shippingClass}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Size
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Color
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  placeholder="Comma separated colors"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Material
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Row 6: Attributes, Featured Product, Visibility, Product Status */}
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Attributes
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="attributes"
                  value={formData.attributes}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Featured Product
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <FormControl fullWidth size="small">
                  <Select
                    name="featured"
                    value={formData.featured || false}
                    onChange={handleChange}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Visibility
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <FormControl fullWidth size="small">
                  <Select
                    name="visibility"
                    value={formData.visibility}
                    onChange={handleChange}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}
                  >
                    <MenuItem value="public">Public</MenuItem>
                    <MenuItem value="private">Private</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Product Status
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <FormControl fullWidth size="small">
                  <Select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    sx={{
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    }}
                  >
                    <MenuItem value="active">Active</MenuItem>
                    <MenuItem value="draft">Draft</MenuItem>
                    <MenuItem value="outOfStock">Out of Stock</MenuItem>
                    <MenuItem value="discontinued">Discontinued</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          {/* Row 7: Tags (full width) */}
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: 300,
                    fontSize: "0.85rem",
                  }}
                >
                  Tags
                </Typography>
                <Divider sx={{ my: 0.5 }} />
                <TextField
                  fullWidth
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  placeholder="Comma separated tags"
                  InputProps={{
                    sx: {
                      fontFamily: "Inter",
                      fontWeight: 500,
                      fontSize: "0.9rem",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

EditOverview.propTypes = {
  formData: PropTypes.shape({
    id: PropTypes.string,
    productName: PropTypes.string,
    categoryMain: PropTypes.string,
    categorySub: PropTypes.string,
    brand: PropTypes.string,
    stockQuantity: PropTypes.number,
    location: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    sellingPrice: PropTypes.number,
    costPrice: PropTypes.number,
    discount: PropTypes.number,
    tax: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    length: PropTypes.number,
    width: PropTypes.number,
    shippingClass: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    material: PropTypes.string,
    attributes: PropTypes.object,
    featured: PropTypes.bool,
    visibility: PropTypes.string,
    status: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditOverview;
