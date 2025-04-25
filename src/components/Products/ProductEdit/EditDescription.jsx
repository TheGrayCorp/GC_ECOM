import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

const EditDescription = ({ formData, handleChange }) => {
  const labelStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    mb: 0.2,
  };

  const inputStyle = {
    fontFamily: "Inter, sans-serif",
    fontWeight: 300,
    fontSize: "0.85rem",
  };

  const fields = [
    { label: "Overview", name: "descriptionOverview", rows: 3 },
    { label: "Key Features", name: "keyFeatures", rows: 3 },
    {
      label: "Technical Specification",
      name: "technicalSpecification",
      rows: 3,
    },
    { label: "Usage & Setup", name: "usageAndSetup", rows: 3 },
    { label: "Care Instructions", name: "careInstructions", rows: 3 },
    { label: "Warranty", name: "warranty", rows: 2 },
    { label: "Return & Support", name: "returnAndSupport", rows: 2 },
  ];

  return (
    <div style={{ width: "100%", flex: "0 0 30%" }}>
      <Paper sx={{ p: 3, height: "100%" }}>
        <Typography
          variant="h6"
          mb={2}
          sx={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          Description
        </Typography>

        {fields.map((field) => (
          <Box key={field.name} mb={1}>
            <Typography sx={labelStyle}>{field.label}</Typography>
            <TextField
              fullWidth
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              multiline
              rows={field.rows}
              variant="outlined"
              InputProps={{ sx: inputStyle }}
            />
          </Box>
        ))}

        {/* Extra Description Section */}
        <Box mt={2}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              mb: 2,
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "0.85rem",
            }}
          >
            + Add more Description
          </Button>
          <Paper elevation={2} sx={{ p: 2 }}>
            <Box mb={1.5}>
              <Typography sx={labelStyle}>Heading</Typography>
              <TextField
                fullWidth
                name="extraHeading"
                value={formData.extraHeading}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ sx: inputStyle }}
              />
            </Box>
            <Box mb={1.5}>
              <Typography sx={labelStyle}>Subject</Typography>
              <TextField
                fullWidth
                name="extraContent"
                value={formData.extraContent}
                onChange={handleChange}
                multiline
                rows={3}
                variant="outlined"
                InputProps={{ sx: inputStyle }}
              />
            </Box>
          </Paper>
        </Box>
      </Paper>
    </div>
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
