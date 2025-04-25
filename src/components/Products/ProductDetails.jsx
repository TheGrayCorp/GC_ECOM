import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Grid } from "@mui/material";
import useSWR from "swr";
import ProductOverview from "./ProductDetail/ProductOverview";
import ProductFeatures from "./ProductDetail/ProductFeatures";
import ProductDescription from "./ProductDetail/ProductDescription";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetails() {
  const { id } = useParams();
  const { data, error } = useSWR(`/data/products.json`, fetcher);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate(`/products/edit/${id}`);
  };

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
        <div className="w-[75%]">
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            <ProductOverview
              product={product}
              handleEditClick={handleEditClick}
            />

            {/* Stats and Specs */}
            <ProductFeatures product={product} infoGroups={infoGroups} />
          </Grid>
        </div>
        <ProductDescription product={product} />
      </div>
    </Box>
  );
}
