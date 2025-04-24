import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Grid, IconButton, Paper, Chip } from "@mui/material";
import {
  Edit,
  Trash2,
  MoreVertical,
  Mail,
  Phone,
  MapPin as Location,
  AlertTriangle,
  Plus,
} from "lucide-react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReplayIcon from "@mui/icons-material/Replay";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error } = useSWR(`/data/products.json`, fetcher);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (data) {
      const productData = data.products.find((p) => p.id === id);
      setProduct(productData);
    }
  }, [data, id]);

  if (error) return <div>Failed to load product details</div>;
  if (!product)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  const { email, phone, location } = product.contact || {};

  const infoGroups = [
    [
      {
        label: "Selling Price",
        value: `LKR ${product.price?.selling?.toLocaleString() ?? "N/A"}`,
      },
      {
        label: "Cost Price",
        value: `LKR ${product.price?.cost?.toLocaleString() ?? "N/A"}`,
      },
      { label: "Discount", value: `${product.price?.discount ?? "N/A"}%` },
      {
        label: "Tax",
        value: `LKR ${product.price?.tax?.toLocaleString() ?? "N/A"}`,
      },
    ],
    [
      {
        label: "Weight",
        value: `${product.specifications?.weight ?? "N/A"} g`,
      },
      {
        label: "Height",
        value: `${product.specifications?.dimensions?.height ?? "N/A"} cm`,
      },
      {
        label: "Width",
        value: `${product.specifications?.dimensions?.width ?? "N/A"} cm`,
      },
      {
        label: "Length",
        value: `${product.specifications?.dimensions?.length ?? "N/A"} cm`,
      },
    ],
    [
      { label: "Shipping Class", value: product.shippingClass || "N/A" },
      { label: "Size", value: product.size || "N/A" },
      {
        label: "Color",
        value: Array.isArray(product.color) ? product.color.join(" , ") : "N/A",
      },
      { label: "Material", value: product.material || "N/A" },
    ],
    [
      { label: "Attributes", value: product.attributes ?? "N/A" },
      {
        label: "Featured Product",
        value: product.featuredProduct
          ? `${product.featuredProduct} cm`
          : "N/A",
      },
      { label: "Visibility", value: product.visibility ?? "N/A" },
      { label: "", value: "" },
    ],
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" mb={2}>
        {product.category?.sub || "Product"}
      </Typography>

      <div className="flex w-full gap-3">
        <div className="w-[65%]">
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ flexGrow: 1, borderRadius: "20px" }}
              className="bg-primaryLight "
            >
              <Paper sx={{ p: 2, position: "relative", flexGrow: 1 }}>
                <Box display="flex" gap={3}>
                  <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    sx={{ flexGrow: 1 }}
                  >
                    <img
                      src={product.images?.[0] || ""}
                      alt={product.name}
                      style={{
                        width: "320px",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: 10,
                      }}
                    />

                    <Box display="flex" mt={2} gap={1}>
                      {product.images?.slice(1, 4).map((img, index) => {
                        const isLast =
                          index === 2 && product.images?.length > 4;
                        return (
                          <Box
                            key={index}
                            sx={{
                              position: "relative",
                              width: 100,
                              height: 100,
                              borderRadius: 2,
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={img}
                              alt={`sub-img-${index}`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: 10,
                              }}
                            />
                            {isLast && (
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                  width: "100%",
                                  height: "100%",
                                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  borderRadius: 2,
                                  zIndex: 1,
                                }}
                              >
                                <Typography
                                  color="#fff"
                                  fontWeight="bold"
                                  fontSize="20px"
                                >
                                  +{product.images.length - 4}
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>

                  <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    gap={2}
                    justifyContent="flex-start"
                    mt={5}
                    sx={{ flexGrow: 1 }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        display: "flex",
                        gap: 1,
                        mr: 1,
                        mt: 2,
                      }}
                    >
                      <IconButton color="primary">
                        <Edit size={18} />
                      </IconButton>
                      <IconButton color="error">
                        <Trash2 size={18} />
                      </IconButton>
                      <IconButton>
                        <MoreVertical size={18} />
                      </IconButton>
                    </Box>

                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-start"
                      width="100%"
                    >
                      <Box display="flex" alignItems="center" gap={2}>
                        <Typography
                          variant="subtitle1"
                          sx={{ fontFamily: "Inter", fontWeight: 500 }}
                          className="text-darkText"
                        >
                          {product.brand || "N/A"}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "Inter", fontWeight: 500 }}
                          className="text-darkText"
                        >
                          {product.category?.sub || "N/A"}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      className="darkText"
                      sx={{ fontFamily: "Inter", fontWeight: 400 }}
                    >
                      {product.id}
                    </Typography>

                    {product.stock?.quantity < 500 && (
                      <Paper
                        elevation={1}
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 1,
                          mt: 0,
                          px: 1,
                          py: 0.5,
                          backgroundColor: "#fff8e1",
                          borderRadius: 2,
                          width: "140px",
                        }}
                      >
                        <AlertTriangle color="#ff9800" size={18} />
                        <Typography
                          sx={{ fontFamily: "Inter", fontWeight: 500 }}
                          className="text-darkText"
                        >
                          Low Stock
                        </Typography>
                      </Paper>
                    )}

                    <Box
                      display="flex"
                      flexDirection="column"
                      gap={2}
                      sx={{ ml: 8 }}
                    >
                      <Box display="flex" gap={4}>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 300 }}
                          >
                            Brand Name
                          </Typography>
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 500 }}
                            className="text-darkText"
                          >
                            {product.brand || "N/A"}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="column">
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 300 }}
                          >
                            Product Status
                          </Typography>
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 500 }}
                            className="text-darkText"
                          >
                            {product.status || "N/A"}
                          </Typography>
                        </Box>
                      </Box>

                      <Box display="flex" gap={4}>
                        <Box display="flex" flexDirection="column">
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 300 }}
                          >
                            Category| Sub Category
                          </Typography>
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 500 }}
                            className="text-darkText"
                          >
                            {product.category?.main || "N/A"} /{" "}
                            {product.category?.sub || "N/A"}
                          </Typography>
                        </Box>

                        <Box display="flex" flexDirection="column">
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 300 }}
                          >
                            Stock Quantity
                          </Typography>
                          <Typography
                            sx={{ fontFamily: "Inter", fontWeight: 500 }}
                            className="text-darkText"
                          >
                            {product.stock?.quantity ?? "N/A"}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                      gap={1}
                      mt={2}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        <Location size={18} />
                        <Typography variant="body2">
                          {location || "N/A"}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Phone size={18} />
                        <Typography variant="body2">
                          {phone || "N/A"}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Mail size={18} />
                        <Typography variant="body2">
                          {email || "N/A"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Stats and Specs */}
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ flexGrow: 1, borderRadius: "20px" }}
              className="bg-primaryLight "
            >
              <Paper sx={{ p: 2 }}>
                <Box display="flex" flexWrap="wrap" gap={2} mt={1}>
                  {[
                    {
                      label: "Views",
                      icon: <VisibilityIcon sx={{ color: "black" }} />,
                      value: product.stats?.views ?? 0,
                      percentage: product.stats?.viewsPercent ?? 0,
                      background: "#e8e8e8",
                    },
                    {
                      label: "Add to Cart",
                      icon: <AddShoppingCartIcon sx={{ color: "black" }} />,
                      value: product.stats?.addToCart ?? 0,
                      percentage: product.stats?.addToCartRate ?? 0,
                      background: "#e5f2ff",
                    },
                    {
                      label: "Selling Rate",
                      icon: <TrendingUpIcon sx={{ color: "black" }} />,
                      value: product.stats?.sold ?? 0,
                      percentage: product.stats?.sellingRate ?? 0,
                      background: "#fcebf2",
                    },
                    {
                      label: "Return Rate",
                      icon: <ReplayIcon sx={{ color: "black" }} />,
                      value: product.stats?.returned ?? 0,
                      percentage: product.stats?.returnRate ?? 0,
                      background: "#e5f2ff",
                    },
                  ].map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        borderRadius: 2,
                        p: 1.5,
                        minWidth: 160,
                        height: 100,
                        backgroundColor: item.background,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box display="flex" alignItems="center" gap={1}>
                        {item.icon}
                        <Box>
                          <Typography variant="body2" fontWeight={600}>
                            {item.label}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {item.percentage}%
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="caption"
                        color="text.primary"
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          right: 8,
                          fontWeight: 600,
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Grid container spacing={2} mt={1}>
                  {infoGroups.map((group, rowIndex) => (
                    <Grid item xs={12} key={rowIndex} width="100%">
                      <Box display="flex" gap={2}>
                        {group.map((item, colIndex) => (
                          <Box key={colIndex} flex={1} textAlign="center" p={1}>
                            <div className="font-inter font-light">
                              {item.label}
                            </div>
                            <div className="font-inter font-medium mt-1 text-darkText">
                              {item.value}
                            </div>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  ))}

                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      p={1}
                    >
                      <div className="font-inter font-light">Tags:</div>
                      <div className="font-inter font-medium text-darkText">
                        {Array.isArray(product.tags)
                          ? product.tags.join(" , ")
                          : "N/A"}
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>

        <div className="w-[35%] bg-primaryLight  rounded-20px">
          <Paper
            sx={{
              p: 2,
              height: "100%",
              minHeight: "600px",
              maxHeight: "1000px",
              overflowY: "hidden",
            }}
            className="bg-primaryLight "
          >
            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mb={1}
            >
              Description
            </Typography>

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Overview
            </Typography>
            <Typography
              variant="body2"
              className="font-inter font-light"
              mb={2}
            >
              {product.description?.overview || "N/A"}
            </Typography>

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Key Features
            </Typography>
            {product.description?.keyFeatures?.length > 0 ? (
              product.description.keyFeatures.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  className="font-inter font-light"
                >
                  {item}
                </Typography>
              ))
            ) : (
              <Typography
                variant="body2"
                className="font-inter font-light"
                mb={2}
              >
                N/A
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Technical Specification
            </Typography>
            {product.description?.technicalSpecification?.length > 0 ? (
              product.description.technicalSpecification.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  className="font-inter font-light"
                >
                  {item}
                </Typography>
              ))
            ) : (
              <Typography
                variant="body2"
                className="font-inter font-light"
                mb={2}
              >
                N/A
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Usage & Setup
            </Typography>
            {product.description?.usageAndSetup?.length > 0 ? (
              product.description.usageAndSetup.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  className="font-inter font-light"
                >
                  {item}
                </Typography>
              ))
            ) : (
              <Typography
                variant="body2"
                className="font-inter font-light"
                mb={2}
              >
                N/A
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Care Instructions
            </Typography>
            {product.description?.careInstructions?.length > 0 ? (
              product.description.careInstructions.map((item, i) => (
                <Typography
                  key={i}
                  variant="body2"
                  className="font-inter font-light"
                >
                  {item}
                </Typography>
              ))
            ) : (
              <Typography
                variant="body2"
                className="font-inter font-light"
                mb={2}
              >
                N/A
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Warranty
            </Typography>
            <Typography
              variant="body2"
              className="font-inter font-light"
              mb={2}
            >
              {product.description?.warranty || "N/A"}
            </Typography>

            <Typography
              variant="subtitle1"
              className="font-inter font-medium text-darkText"
              mt={2}
            >
              Return & Support
            </Typography>
            <Typography
              variant="body2"
              className="font-inter font-light"
              mb={2}
            >
              {product.description?.returnAndSupport || "N/A"}
            </Typography>
          </Paper>
        </div>
      </div>
    </Box>
  );
}
