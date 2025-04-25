import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Save, ArrowLeft, MapPin as Location } from "lucide-react";
import useSWR from "swr";
import { useRef } from "react";
import EditImage from "./ProductEdit/EditImage";
import EditDescription from "./ProductEdit/EditDescription";
import EditOverview from "./ProductEdit/EditOverview";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, error } = useSWR(`/data/products.json`, fetcher);
  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (data) {
      const productData = data.products.find((p) => p.id === id);
      setProduct(productData);

      // Helper function to safely convert to number
      const toNumber = (value) => {
        const num = Number(value);
        return isNaN(num) ? 0 : num;
      };

      setFormData({
        ...productData,
        // Flatten nested objects for easier form handling
        brand: productData.brand || "",
        categoryMain: productData.category?.main || "",
        categorySub: productData.category?.sub || "",
        status: productData.status || "",
        stockQuantity: toNumber(productData.stock?.quantity),
        sellingPrice: toNumber(productData.price?.selling),
        costPrice: toNumber(productData.price?.cost),
        discount: toNumber(productData.price?.discount),
        tax: toNumber(productData.price?.tax),
        weight: productData.specifications?.weight || "",
        height: productData.specifications?.dimensions?.height || "",
        width: productData.specifications?.dimensions?.width || "",
        length: productData.specifications?.dimensions?.length || "",
        email: productData.contact?.email || "",
        phone: productData.contact?.phone || "",
        location: productData.contact?.location || "",
        shippingClass: productData.shippingClass || "",
        size: productData.size || "",
        color: Array.isArray(productData.color)
          ? productData.color.join(", ")
          : "",
        material: productData.material || "",
        attributes: productData.attributes || {},
        featuredProduct: productData.featuredProduct || "",
        visibility: productData.visibility || "public",
        tags: Array.isArray(productData.tags)
          ? productData.tags.join(", ")
          : "",
        descriptionOverview: productData.description?.overview || "",
        keyFeatures: Array.isArray(productData.description?.keyFeatures)
          ? productData.description.keyFeatures.join("\n")
          : "",
        technicalSpecification: Array.isArray(
          productData.description?.technicalSpecification
        )
          ? productData.description.technicalSpecification.join("\n")
          : "",
        usageAndSetup: Array.isArray(productData.description?.usageAndSetup)
          ? productData.description.usageAndSetup.join("\n")
          : "",
        careInstructions: Array.isArray(
          productData.description?.careInstructions
        )
          ? productData.description.careInstructions.join("\n")
          : "",
        warranty: productData.description?.warranty || "",
        returnAndSupport: productData.description?.returnAndSupport || "",
      });
    }
  }, [data, id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the updated data to your backend
    console.log("Form submitted with data:", formData);

    // Navigate back to product details after saving
    navigate(`/product/${id}`);
  };

  const handleCancel = () => {
    navigate(`/products/${id}`);
  };
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 100 * 3; // Scroll by 3 images
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  if (error) return <div>Failed to load product data</div>;
  if (!product || !formData)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Typography>Loading...</Typography>
      </Box>
    );

  return (
    <Box sx={{ padding: 3 }}>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <IconButton onClick={handleCancel}>
          <ArrowLeft />
        </IconButton>
        <Typography variant="h5">Edit Product</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {/* Left Side - 70% */}
          <div style={{ width: "100%", flex: "0 0 70%", paddingRight: "16px" }}>
            {/* Basic Information Section */}
            <EditOverview formData={formData} handleChange={handleChange} />

            {/* Images Section */}
            <EditImage
              product={product}
              scrollRef={scrollRef}
              scroll={scroll}
            />
          </div>

          {/* Right Side - 30% */}
          <EditDescription formData={formData} handleChange={handleChange} />
        </div>

        {/* Submit Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={2} mt={3}>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" startIcon={<Save />}>
            Save Changes
          </Button>
        </Box>
      </form>
    </Box>
  );
}
