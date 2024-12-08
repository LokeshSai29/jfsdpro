import React, { useState } from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { login } from "../../../ReduxToolkit/AuthSlice";
import { FaEnvelope, FaLock } from "react-icons/fa"; // Import icons

const LoginForm = ({ togglePanel }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    let errorText = "";
    if (name === "email") {
      errorText =
        value === ""
          ? "Email is required"
          : !/\S+@\S+\.\S+/.test(value)
          ? "Please enter a valid email address"
          : "";
    } else if (name === "password") {
      errorText = value === "" ? "Password is required" : "";
    }

    setErrors({ ...errors, [name]: errorText });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("Login Form Submitted ", formData);
  };

  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8 textStyle">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaEnvelope style={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <FaLock style={{ color: "black" }} />
              </InputAdornment>
            ),
          }}
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
            Login
          </Button>
        </div>
      </form>

      <div className="textStyle mt-5 flex items-center gap-2 py-5 justify-center">
        <span>Don't have an account?</span>
        <Button className="" onClick={togglePanel} color="primary">
          Signup
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
