import React from "react";
import { Typography, Paper } from "@mui/material";
import PropTypes from "prop-types";

const ProductDescription = ({ product }) => {
  return (
    <>
      <div className="w-[25%] bg-primaryLight  rounded-20px">
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
          <Typography variant="body2" className="font-inter font-light" mb={2}>
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
          <Typography variant="body2" className="font-inter font-light" mb={2}>
            {product.description?.warranty || "N/A"}
          </Typography>

          <Typography
            variant="subtitle1"
            className="font-inter font-medium text-darkText"
            mt={2}
          >
            Return & Support
          </Typography>
          <Typography variant="body2" className="font-inter font-light" mb={2}>
            {product.description?.returnAndSupport || "N/A"}
          </Typography>
        </Paper>
      </div>
    </>
  );
};

ProductDescription.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.shape({
      overview: PropTypes.string,
      keyFeatures: PropTypes.arrayOf(PropTypes.string),
      technicalSpecification: PropTypes.arrayOf(PropTypes.string),
      usageAndSetup: PropTypes.arrayOf(PropTypes.string),
      careInstructions: PropTypes.arrayOf(PropTypes.string),
      warranty: PropTypes.string,
      returnAndSupport: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDescription;
