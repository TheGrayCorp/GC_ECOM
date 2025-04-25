import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import {
  Plus,
  Trash2,
  MapPin as Location,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EditImage = ({ product, scrollRef, scroll }) => {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Product Images
          </Typography>

          <Box sx={{ position: "relative", width: "100%" }}>
            {/* Viewport box with fixed width for 3 images */}
            <Box
              sx={{
                overflow: "hidden",
                width: `calc(140px * 3 + 16px * 2)`, // 3 image widths + 2 gaps (gap=16px)
                mx: "auto", // center horizontally
              }}
            >
              <Box
                ref={scrollRef}
                sx={{
                  display: "flex",
                  overflowX: "auto",
                  gap: 2,
                  scrollSnapType: "x mandatory",
                  scrollBehavior: "smooth",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {product.images?.map((img, index) => (
                  <Box
                    key={index}
                    sx={{
                      flex: "0 0 auto",
                      width: 140,
                      border: "1px solid #ccc",
                      borderRadius: "10px",
                      backgroundColor: "#f9f9f9",
                      textAlign: "center",
                      scrollSnapAlign: "start",
                      p: 1,
                    }}
                  >
                    <img
                      src={img}
                      alt={`Product ${index}`}
                      style={{
                        width: "100%",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                    <IconButton sx={{ mt: 1, color: "#1976d2" }} size="small">
                      <Trash2 size={18} />
                    </IconButton>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Scroll Arrows */}
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                top: "50%",
                left: -10,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: 1,
                zIndex: 1,
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                top: "50%",
                right: -10,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: 1,
                zIndex: 1,
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          {/* Add Image box */}
          <Box
            sx={{
              mt: 2,
              width: 140,
              height: 150,
              border: "2px dashed #ccc",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              backgroundColor: "#fafafa",
            }}
          >
            <Plus size={30} color="#666" />
            <Typography variant="body2" color="text.secondary" mt={1}>
              Add Image
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

EditImage.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  scrollRef: PropTypes.oneOfType([
    // Accept both `ref` object or callback
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  scroll: PropTypes.func.isRequired,
};

export default EditImage;
