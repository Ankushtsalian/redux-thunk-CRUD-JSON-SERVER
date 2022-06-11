import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnUser } from "../redux/actions";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;

  const dispatch = useDispatch();
  const [error, setError] = useState();

  const Navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    console.log(state);
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !address) {
      setError("input field");
    } else {
      dispatch(addAnUser(state));
      Navigate("/");
      setError("");
    }
  };

  return (
    <div>
      <Button
        style={{ marginTop: "20px" }}
        color="secondary"
        variant="contained"
        onClick={() => Navigate("/")}
      >
        Go Back
      </Button>
      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      <h2>Add User</h2>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          marginTop: "100px",
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="name"
            label="Name"
            name="name"
            variant="standard"
            value={name}
            type="text"
            onChange={handleInput}
          />
          <br />
          <TextField
            id="Email"
            label="Email"
            variant="standard"
            value={email}
            type="email"
            name="email"
            onChange={handleInput}
          />
          <br />
          <TextField
            id="Contact"
            label="Contact"
            variant="standard"
            value={contact}
            name="contact"
            type="number"
            onChange={handleInput}
          />
          <br />
          <TextField
            id="Address"
            label="Address"
            variant="standard"
            value={address}
            name="address"
            type="text"
            onChange={handleInput}
          />
          <br />
          <Button
            style={{ width: "100px" }}
            type="submit"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddUser;
