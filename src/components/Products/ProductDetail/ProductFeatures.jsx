import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ReplayIcon from "@mui/icons-material/Replay";
import PropTypes from "prop-types";

const ProductFeatures = ({ product, infoGroups }) => {
  return (
    <>
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
                      <div className="font-inter font-light">{item.label}</div>
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
    </>
  );
};

ProductFeatures.propTypes = {
  product: PropTypes.shape({
    stats: PropTypes.shape({
      views: PropTypes.number,
      viewsPercent: PropTypes.number,
      addToCart: PropTypes.number,
      addToCartRate: PropTypes.number,
      sold: PropTypes.number,
      sellingRate: PropTypes.number,
      returned: PropTypes.number,
      returnRate: PropTypes.number,
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  infoGroups: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    )
  ).isRequired,
};

export default ProductFeatures;
