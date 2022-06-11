import { Box, TextField } from "@mui/material";
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
          <TextField id="standard-basic" label="standard" variant="standard" />
          <TextField id="standard-basic" label="standard" variant="standard" />
          <TextField id="standard-basic" label="standard" variant="standard" />
          <TextField id="standard-basic" label="standard" variant="standard" />
        </div>
      </Box>
    </div>
  );
};

export default AddUser;
