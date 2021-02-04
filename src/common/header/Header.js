import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "white",
  },
};

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <div className="header">
            <div className="logo">
              <FastfoodIcon fontSize="large" />
            </div>
            <div className="searchBar">
              <Input
                fullWidth
                color="default"
                placeholder="Search by Restaurant Name"
                style={styles.input}
                startAdornment={
                  <InputAdornment>
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </div>
            <div className="userButton">
              <Button
                variant="contained"
                color="default"
                startIcon={<AccountCircle />}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
