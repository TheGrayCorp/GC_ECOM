import React from "react";
import { Box, Typography, Grid, IconButton, Paper } from "@mui/material";
import {
  Edit,
  Trash2,
  MoreVertical,
  Mail,
  Phone,
  MapPin as Location,
  AlertTriangle,
} from "lucide-react";
import PropTypes from "prop-types";

const ProductOverview = ({ product, handleEditClick }) => {
  const { email, phone, location } = product.contact || {};
  return (
    <>
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
              width="40%"
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
                  const isLast = index === 2 && product.images?.length > 4;
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
                <IconButton color="primary" onClick={handleEditClick}>
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
                display="grid"
                gridTemplateColumns="2fr 1fr"
                gap={2}
                ml="50px"
              >
                <Box display="flex" flexDirection="column">
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 300 }}>
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
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 300 }}>
                    Product Status
                  </Typography>
                  <Typography
                    sx={{ fontFamily: "Inter", fontWeight: 500 }}
                    className="text-darkText"
                  >
                    {product.status || "N/A"}
                  </Typography>
                </Box>

                <Box display="flex" flexDirection="column">
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 300 }}>
                    Category | Sub Category
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
                  <Typography sx={{ fontFamily: "Inter", fontWeight: 300 }}>
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

              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                gap={1}
                mt={2}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <Location size={18} />
                  <Typography variant="body2">{location || "N/A"}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Phone size={18} />
                  <Typography variant="body2">{phone || "N/A"}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <Mail size={18} />
                  <Typography variant="body2">{email || "N/A"}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

ProductOverview.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    category: PropTypes.shape({
      main: PropTypes.string,
      sub: PropTypes.string,
    }),
    status: PropTypes.string,
    stock: PropTypes.shape({
      quantity: PropTypes.number,
    }),
    contact: PropTypes.shape({
      email: PropTypes.string,
      phone: PropTypes.string,
      location: PropTypes.string,
    }),
  }).isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default ProductOverview;
