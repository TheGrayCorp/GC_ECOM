import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const EditDescription = ({ formData, handleChange }) => {
  return (
    <>
      <div style={{ width: "100%", flex: "0 0 30%" }}>
        {/* Description Section */}
        <Paper sx={{ p: 3, height: "100%" }}>
          <Typography variant="h6" mb={2} className="font-inter font-medium">
            Description
          </Typography>

          <TextField
            fullWidth
            label="Overview"
            name="descriptionOverview"
            value={formData.descriptionOverview}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Key Features (one per line)"
            name="keyFeatures"
            value={formData.keyFeatures}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Technical Specification (one per line)"
            name="technicalSpecification"
            value={formData.technicalSpecification}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Usage & Setup (one per line)"
            name="usageAndSetup"
            value={formData.usageAndSetup}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Care Instructions (one per line)"
            name="careInstructions"
            value={formData.careInstructions}
            onChange={handleChange}
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Warranty"
            name="warranty"
            value={formData.warranty}
            onChange={handleChange}
            multiline
            rows={2}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          <TextField
            fullWidth
            label="Return & Support"
            name="returnAndSupport"
            value={formData.returnAndSupport}
            onChange={handleChange}
            multiline
            rows={2}
            variant="outlined"
            margin="normal"
            InputLabelProps={{ className: "font-inter font-medium" }}
            InputProps={{ className: "font-inter font-light" }}
          />

          {/* Add More Description Section */}
          <Box mt={2}>
            <Button
              variant="outlined"
              fullWidth
              className="font-inter font-medium"
              sx={{ mb: 2 }}
            >
              + Add more Description
            </Button>
            <Paper elevation={2} sx={{ p: 2 }}>
              <TextField
                fullWidth
                label="Heading"
                name="extraHeading"
                value={formData.extraHeading}
                onChange={handleChange}
                variant="outlined"
                margin="normal"
                InputLabelProps={{ className: "font-inter font-medium" }}
                InputProps={{ className: "font-inter font-light" }}
              />
              <TextField
                fullWidth
                label="Subject"
                name="extraContent"
                value={formData.extraContent}
                onChange={handleChange}
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                InputLabelProps={{ className: "font-inter font-medium" }}
                InputProps={{ className: "font-inter font-light" }}
              />
            </Paper>
          </Box>
        </Paper>
      </div>
    </>
  );
};

EditDescription.propTypes = {
  formData: PropTypes.shape({
    descriptionOverview: PropTypes.string,
    keyFeatures: PropTypes.string,
    technicalSpecification: PropTypes.string,
    usageAndSetup: PropTypes.string,
    careInstructions: PropTypes.string,
    warranty: PropTypes.string,
    returnAndSupport: PropTypes.string,
    extraHeading: PropTypes.string,
    extraContent: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default EditDescription;
