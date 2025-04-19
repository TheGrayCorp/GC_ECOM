import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSWR from "swr";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  Box,
  Grid,
  Chip,
  Fade,
  Zoom,
  IconButton,
  Tooltip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

// Fetcher function for SWR
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useSWR("/data/products.json", fetcher);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle edit product
  const handleEdit = () => {
    navigate(`/admin/products/edit/${id}`);
  };

  // Handle delete product with confirmation
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Add your delete logic here
      console.log("Deleting product:", id);
      // After successful deletion, navigate back
      navigate("/admin/products");
    }
  };

  if (error)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          Failed to load product
        </Typography>
      </Box>
    );

  if (!data)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );

  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          padding: "20px",
          maxWidth: "1000px",
          margin: "20px auto",
          boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
          borderRadius: "16px",
          overflow: "hidden",
          backgroundColor: "#fafafa",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Button
            variant="contained"
            startIcon={<ArrowBackIcon />}
            onClick={() => navigate(-1)}
            sx={{
              borderRadius: "25px",
              padding: "10px 20px",
              backgroundColor: "#3f51b5",
              boxShadow: "0 4px 20px rgba(63, 81, 181, 0.4)",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#303f9f",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 25px rgba(63, 81, 181, 0.6)",
              },
            }}
          >
            Back to Products
          </Button>

          <Box>
            <Tooltip title="Edit Product">
              <IconButton
                onClick={handleEdit}
                sx={{
                  color: "#4caf50",
                  backgroundColor: "rgba(76, 175, 80, 0.1)",
                  marginRight: "10px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(76, 175, 80, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Delete Product">
              <IconButton
                onClick={handleDelete}
                sx={{
                  color: "#f44336",
                  backgroundColor: "rgba(244, 67, 54, 0.1)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(244, 67, 54, 0.2)",
                    transform: "scale(1.1)",
                  },
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Zoom in={true} timeout={1000}>
          <Card
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "none",
            }}
          >
            <CardContent
              sx={{
                flex: "1 0 50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
              }}
            >
              <div>
                <Chip
                  label={product.category}
                  size="small"
                  sx={{
                    backgroundColor: "#e3f2fd",
                    color: "#1976d2",
                    marginBottom: "16px",
                  }}
                />

                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: "700",
                    marginBottom: "16px",
                    color: "#212121",
                  }}
                >
                  {product.name}
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: "24px" }}>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Brand
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "500" }}>
                      {product.brand}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Color
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "500" }}>
                      {product.color}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography
                  variant="body1"
                  sx={{
                    color: "#424242",
                    lineHeight: "1.8",
                    marginBottom: "24px",
                  }}
                >
                  {product.description}
                </Typography>
              </div>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#f0f7ff",
                    borderRadius: "8px",
                    padding: "8px 16px",
                  }}
                >
                  <LocalOfferIcon
                    sx={{ color: "#2196f3", marginRight: "8px" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "700", color: "#2196f3" }}
                  >
                    ${product.price}
                  </Typography>
                </Box>
              </Box>
            </CardContent>

            <Box
              sx={{
                flex: "1 0 50%",
                position: "relative",
                minHeight: { xs: "300px", md: "auto" },
                overflow: "hidden",
                borderRadius: { xs: "0", md: "0 12px 12px 0" },
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.7s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  position: { md: "absolute" },
                }}
              />
            </Box>
          </Card>
        </Zoom>
      </Box>
    </Fade>
  );
}
