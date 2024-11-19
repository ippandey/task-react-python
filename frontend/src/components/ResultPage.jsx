import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, age, file } = location.state || {};

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
        gap: 2,
      }}
    >
      <Typography variant="h5">Submitted Information</Typography>
      <Typography>Name: {name}</Typography>
      <Typography>Age: {age}</Typography>
      {file && (
        <Box
          sx={{
            width: "200px",
            height: "200px",
            border: "1px solid #ccc",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      )}
      <Button variant="contained" onClick={() => navigate("/")}>
        Back to Form
      </Button>
    </Box>
  );
};

export default ResultPage;
