import React from "react";

import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div class="container">
    <nav >
      <h2 >Management</h2>
      <p>chuwa</p>
      
      <TextField
        className ="standard-bare"
        defaultValue="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <h4>Sign In</h4>

    </nav>
    </div>
    </div>
  );
};

export default Header;
