import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "../../../ReduxToolkit/AuthSlice";

const SignupForm = ({ togglePanel }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errorText = "";
    if (name === "fullName") {
      errorText = value === "" ? "Full Name is required" : "";
    } else if (name === "email") {
      errorText =
        value === ""
          ? "Email is required"
          : !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email address"
          : "";
    } else if (name === "password") {
      errorText =
        value === ""
          ? "Password is required"
          : value.length < 6
          ? "Password must be at least 6 characters"
          : "";
    }

    setErrors({ ...errors, [name]: errorText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    console.log("Form Submitted", formData);
  };

  return (
    <div className="">
      <h1 className="text-lg font-bold text-center pb-8 textStyle">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextField
          fullWidth
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          error={!!errors.fullName}
          helperText={errors.fullName}
          placeholder="Enter your full name"
          sx={{
            input: {
              color: "black", // Text color inside the textbox
            },
            "& .MuiInputLabel-root": {
              color: "black", // Label color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black", // Border color
              },
              "&:hover fieldset": {
                borderColor: "black", // Border color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "black", // Border color when focused
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          placeholder="Enter your email"
          sx={{
            input: {
              color: "black",
            },
            "& .MuiInputLabel-root": {
              color: "black",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
        />

        <FormControl fullWidth>
          <InputLabel htmlFor="role" sx={{ color: "black" }}>
            Role
          </InputLabel>
          <Select
            label="Role"
            name="role"
            id="role"
            value={formData.role}
            onChange={handleChange}
            error={!!errors.role}
            sx={{
              color: "black", // Text color inside dropdown
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "black", // Border color for the dropdown
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
              },
            }}
          >
            <MenuItem value="ROLE_CUSTOMER">USER</MenuItem>
            <MenuItem value="ROLE_ADMIN">ADMIN</MenuItem>
          </Select>
          {errors.role && <div style={{ color: "red" }}>{errors.role}</div>}
        </FormControl>

        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          placeholder="Enter your password"
          sx={{
            input: {
              color: "black",
            },
            "& .MuiInputLabel-root": {
              color: "black",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "black",
              },
            },
          }}
        />

        <div>
          <Button
            sx={{ padding: ".7rem 0rem" }}
            className="customeButton"
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Register
          </Button>
        </div>
      </form>

      <div className="textStyle flex items-center gap-2 mt-9 justify-center">
        <span>have account ?</span>
        <Button className="btn" onClick={togglePanel} color="primary">
          signin
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
