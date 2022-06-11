import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const AddUser = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });
  const { name, email, contact, address } = state;
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            type="text"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            value={email}
            type="email"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Contact"
            variant="standard"
            value={contact}
            type="number"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Address"
            variant="standard"
            value={address}
            type="text"
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
