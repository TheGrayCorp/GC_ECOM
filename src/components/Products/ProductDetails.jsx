import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import {
  CircularProgress,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  Paper,
  Divider,
} from "@mui/material";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useSWR("/data/products.json", fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEdit = () => {
    navigate(`/admin/products/edit/${id}`);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      console.log("Deleting product:", id);
      navigate("/admin/products");
    }
  };

  if (error)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error" variant="h6">
          Failed to load product
        </Typography>
      </Box>
    );

  if (!data)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );

  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  const galleryImages = product.gallery || [];
  const displayGallery = galleryImages.slice(0, 4);

  while (displayGallery.length < 4) {
    displayGallery.push(product.image);
  }

  const leftDetails = [
    { label: "Description", value: product.description },
    { label: "Max Discount", value: product.maxDiscount },
    { label: "Volume", value: product.volume },
    { label: "Height", value: product.height },
    { label: "Width", value: product.width },
    { label: "Length", value: product.length },
  ];

  const rightDetails = [
    { label: "Product ID", value: product.id },
    { label: "Quantity", value: product.quantity },
    { label: "Extra Code", value: product.extraCode },
    { label: "Category", value: product.category },
    { label: "Sub Category", value: product.subCategory },
    { label: "Varity", value: product.varity },
    { label: "Weight", value: product.weight },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Purchased Price", value: product.purchasedPrice },
    { label: "Selling Price", value: product.sellingPrice },
  ];

  return (
    <Box sx={{ width: "100%", margin: "0 auto", p: 3 }}>
      {/* Title Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="h5">{product.name}</Typography>

        <Box>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={handleDelete}
            sx={{ mr: 1 }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={handleEdit}
          >
            Edit
          </Button>
        </Box>
      </Box>

      {/* Divider */}
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={6} md={8} sx={{ width: "50%" }}>
          <Box>
            <Card elevation={1} sx={{ mb: 2 }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: "contain", bgcolor: "#f9f9f9", height: 190 }}
              />
            </Card>

            <Box
              display="flex"
              flexWrap="wrap"
              gap={1}
              mb={2}
              sx={{ justifyContent: "space-between" }}
            >
              {displayGallery.map((img, idx) => (
                <Card
                  key={idx}
                  sx={{
                    width: "calc(25% - 8px)",
                    height: 70,
                    p: 0.5,
                    bgcolor: "#f9f9f9",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={img}
                    alt={`Gallery ${idx + 1}`}
                    sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                  />
                </Card>
              ))}
            </Box>
            {leftDetails.map((field, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  display: "flex",
                  bgcolor: "#f7f7f7",
                  p: 1.5,
                  mb: 1,
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "40%" }}
                >
                  {field.label}:
                </Typography>
                <Typography variant="body2" sx={{ width: "60%" }}>
                  {field.value || "-"}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>

        <Grid item xs={6} md={4} sx={{ width: "45%" }}>
          <Box>
            {rightDetails.map((field, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  display: "flex",
                  bgcolor: "#f7f7f7",
                  p: 1.5,
                  mb: 1,
                  borderRadius: 1,
                  width: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ width: "40%", flexShrink: 0 }}
                >
                  {field.label}:
                </Typography>
                <Typography variant="body2" sx={{ width: "60%" }}>
                  {field.value || "-"}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
