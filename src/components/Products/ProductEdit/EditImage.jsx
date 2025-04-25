import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { Plus, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

const EditImage = ({ product, scrollRef, scroll }) => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Product Images
        </Typography>

        {/* Flex row: scrollable images + Add Image */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start", // Align top of cards
            justifyContent: "center", // Center the whole row
            gap: 2, // Space between scroll area and add image
          }}
        >
          {/* Scrollable images box */}
          <Box
            sx={{
              overflow: "hidden",
              width: `calc(140px * 3 + 16px * 2)`, // Width for 3 items with 2 gaps
              position: "relative",
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
                px: 1,
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

            {/* Scroll buttons */}
            <IconButton
              onClick={() => scroll("left")}
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: 1,
                zIndex: 1,
                p: 0.5,
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={() => scroll("right")}
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                transform: "translateY(-50%)",
                backgroundColor: "#fff",
                boxShadow: 1,
                zIndex: 1,
                p: 0.5,
              }}
            >
              <ChevronRight />
            </IconButton>
          </Box>

          {/* Add Image box */}
          <Box
            sx={{
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
              flexShrink: 0, // prevent shrinking in flex row
            }}
          >
            <Plus size={30} color="#666" />
            <Typography variant="body2" color="text.secondary" mt={1}>
              Add Image
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

EditImage.propTypes = {
  product: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  scrollRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  scroll: PropTypes.func.isRequired,
};

export default EditImage;
