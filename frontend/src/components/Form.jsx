import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, TextField, MenuItem } from "@mui/material";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", age: "", file: null });
  const navigate = useNavigate();

  const ageOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("file", formData.file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/submit", data);
      alert("Data submitted successfully!");
      navigate("/result", { state: { ...formData } });
    } catch (error) {
      console.error(error);
      alert("Error submitting data.");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "400px",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        boxShadow: 3,
        borderRadius: 2,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        select
        label="Age"
        name="age"
        value={formData.age}
        onChange={handleInputChange}
        required
      >
        {ageOptions.map((age) => (
          <MenuItem key={age} value={age}>
            {age}
          </MenuItem>
        ))}
      </TextField>
      <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden onChange={handleFileChange} />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
};

export default Form;
