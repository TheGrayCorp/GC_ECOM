import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardMedia,
  IconButton,
  Divider,
  Grid,
  Container,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useSWR("/data/products.json", fetcher);

  const [product, setProduct] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    if (data) {
      const found = data.find((item) => item.id.toString() === id);
      if (found) {
        setProduct(found);
        setGalleryImages(found.gallery || []);
      }
    }
  }, [data, id]);

  const handleImageDelete = (index) => {
    const updatedGallery = [...galleryImages];
    updatedGallery.splice(index, 1);
    setGalleryImages(updatedGallery);
  };

  const handleAddImage = () => {
    setGalleryImages([...galleryImages, product.image]);
  };

  const handleInputChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  const handleUpdate = () => {
    console.log("Updated Product:", { ...product, gallery: galleryImages });
    navigate(`/products/${id}`);
  };

  const handleCancel = () => {
    navigate(`/products/${id}`);
  };

  if (error)
    return <Typography color="error">Failed to load product</Typography>;

  if (!product) return <Typography>Loading product...</Typography>;

  const detailsLeft = [
    { field: "name", label: "Product Name" },
    { field: "category", label: "Category" },
    { field: "subCategory", label: "Sub Category" },
    { field: "varity", label: "Varity" },
    { field: "weight", label: "Weight" },
    { field: "type", label: "Type" },
    { field: "brand", label: "Brand" },
    { field: "maxDiscount", label: "MAX Discount" },
  ];

  const detailsRight = [
    { field: "volume", label: "Volume" },
    { field: "height", label: "Height" },
    { field: "width", label: "Width" },
    { field: "length", label: "Length" },
    { field: "productID", label: "Product ID" },
    { field: "quantity", label: "Quantity" },
    { field: "extraCode", label: "Extra Code" },
    { field: "purchasedPrice", label: "Purchased Price" },
    { field: "sellingPrice", label: "Selling Price" },
  ];

  return (
    <Box sx={{ width: "100%", p: 3 }}>
      <Typography variant="h5" mb={2}>
        {product.name}
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Image Row */}
      <Box display="flex" gap={2} flexWrap="wrap" mb={4} width="100%">
        {/* Main Image */}
        <Card sx={{ width: 120, bgcolor: "white", p: 1, textAlign: "center" }}>
          <CardMedia
            component="img"
            image={product.image}
            alt="Main"
            sx={{ width: "100%", height: 100, objectFit: "contain", mb: 1 }}
          />
        </Card>

        {/* Gallery Images */}
        {galleryImages.map((img, idx) => (
          <Card
            key={idx}
            sx={{ width: 120, bgcolor: "white", p: 1, textAlign: "center" }}
          >
            <CardMedia
              component="img"
              image={img}
              alt={`Gallery ${idx + 1}`}
              sx={{ width: "100%", height: 100, objectFit: "contain", mb: 1 }}
            />
            <IconButton size="small" onClick={() => handleImageDelete(idx)}>
              <Delete fontSize="small" />
            </IconButton>
          </Card>
        ))}

        {/* Add Image */}
        <Card
          sx={{
            width: 120,
            height: 140,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "white",
            border: "1px dashed #ccc",
          }}
        >
          <IconButton color="primary" onClick={handleAddImage}>
            <Add />
          </IconButton>
          <Typography variant="caption">Add Image</Typography>
        </Card>
      </Box>

      {/* Product Details */}
      <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
        {/* Left column */}
        <Grid item xs={12} md={6} sx={{ paddingLeft: "0 !important" }}>
          {detailsLeft.map(({ field, label }) => (
            <Box
              key={field}
              display="flex"
              alignItems="center"
              border="1px solid #ccc"
              borderRadius="4px"
              p={1}
              mb={1}
              width="100%"
            >
              <Typography
                sx={{ minWidth: "140px", fontWeight: 500, flexShrink: 0 }}
              >
                {label} :
              </Typography>
              <TextField
                variant="standard"
                value={product[field] || ""}
                onChange={(e) => handleInputChange(field, e.target.value)}
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </Box>
          ))}
        </Grid>

        {/* Right column */}
        <Grid item xs={12} md={6}>
          {detailsRight.map(({ field, label }) => (
            <Box
              key={field}
              display="flex"
              alignItems="center"
              border="1px solid #ccc"
              borderRadius="4px"
              p={1}
              mb={1}
              width="100%"
            >
              <Typography
                sx={{ minWidth: "140px", fontWeight: 500, flexShrink: 0 }}
              >
                {label} :
              </Typography>
              <TextField
                variant="standard"
                value={product[field] || ""}
                onChange={(e) => handleInputChange(field, e.target.value)}
                fullWidth
                InputProps={{ disableUnderline: true }}
              />
            </Box>
          ))}
        </Grid>
      </Grid>

      {/* Action Buttons */}
      <Box display="flex" gap={2} mt={4}>
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleCancel}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
