import React, { Component } from "react";
import "./Header.css";
import Button from "@material-ui/core/Button";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Modal from "react-modal";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import PropTypes from "prop-types";
import FormHelperText from "@material-ui/core/FormHelperText";

const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const headerInputStyle = {
  color: "white",
  underline: "white",
  height: "auto",
};

const TabContainer = (props) => {
  return (
    <Typography component="div" className="tab-container">
      {props.children}
    </Typography>
  );
};

TabContainer.prototypes = {
  children: PropTypes.node.isRequired,
};

class Header extends Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false,
      value: 0,
      contactNumber: "",
      contactNoRequired: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      firstName: "",
      firstNameRequired: "dispNone",
      lastName: "",
      email: "",
      emailRequired: "dispNone",
      signupPassword: "",
      signupPasswordRequired: "dispNone",
      signupcontactNo: "",
      signupcontactNoRequired: "dispNone"
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
    this.setState({contactNumber: ""})
    this.setState({contactNoRequired: "dispNone"})
    this.setState({password: ""})
    this.setState({passwordRequired: "dispNone"})
    this.setState({firstName: ""})
    this.setState({firstNameRequired: "dispNone"})
    this.setState({lastName: ""})
    this.setState({email: ""})
    this.setState({emailRequired: "dispNone"})
    this.setState({signupPassword: ""})
    this.setState({signupPasswordRequired: "dispNone"})
    this.setState({signupcontactNo: ""})
    this.setState({signupcontactNoRequired: "dispNone"})
  };

  tabChangeHandler = (e, value) => {
    this.setState({ value });
  };

  contactNumberChangeHandler = (e) => {
    this.setState({ contactNumber: e.target.value });
  };

  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  loginClickHandler = (e) => {
    this.state.contactNumber === ""
      ? this.setState({ contactNoRequired: "dispBlock" })
      : this.setState({ contactNoRequired: "dispNone" });
    this.state.password === ""
      ? this.setState({ passwordRequired: "dispBlock" })
      : this.setState({ passwordRequired: "dispNone" });
  };

  firstNameChangeHandler = (e) => {
    this.setState({ firstName: e.target.value });
  };

  lastNameChangeHandler = (e) => {
    this.setState({ lastName: e.target.value });
  };

  emailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  signupPasswordChangeHandler = (e) => {
    this.setState({ signupPassword: e.target.value });
  };

  signupcontactNoChangeHandler = (e) => {
    this.setState({ signupcontactNo: e.target.value });
  };

  signupClickHandler = (e) => {
    this.state.firstName === ""
      ? this.setState({ firstNameRequired: "dispBlock" })
      : this.setState({ firstNameRequired: "dispNone" });
    this.state.email === ""
      ? this.setState({ emailRequired: "dispBlock" })
      : this.setState({ emailRequired: "dispNone" });
    this.state.signupPassword === ""
      ? this.setState({ signupPasswordRequired: "dispBlock" })
      : this.setState({ signupPasswordRequired: "dispNone" });
    this.state.signupcontactNo === ""
      ? this.setState({ signupcontactNoRequired: "dispBlock" })
      : this.setState({ signupcontactNoRequired: "dispNone" });      
  };

  render() {
    return (
      <div>
        <header>
          <div className="header">
            <div className="logo">
              <FastfoodIcon fontSize="large" />
            </div>
            <div className="search-bar">
              <Input
                fullWidth
                placeholder="Search by Restaurant Name"
                style={headerInputStyle}
                inputProps={{
                  underline: "white",
                }}
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
                onClick={this.openModalHandler}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </header>
        <Modal
          ariaHideApp={false}
          isOpen={this.state.modalIsOpen}
          contentLabel="Login"
          onRequestClose={this.closeModalHandler}
          style={customModalStyle}
        >
          <Tabs
            className="tabs"
            value={this.state.value}
            onChange={this.tabChangeHandler}
          >
            <Tab label="LOGIN" />
            <Tab label="SIGNUP" />
          </Tabs>
          {this.state.value === 0 && (
            <TabContainer>
              <FormControl required>
                <InputLabel>Contact No.</InputLabel>
                <Input
                  id="contactNo"
                  type="text"
                  value={this.state.contactNumber}
                  onChange={this.contactNumberChangeHandler}
                />
                <FormHelperText className={this.state.contactNoRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.passwordChangeHandler}
                />
                <FormHelperText className={this.state.passwordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.loginClickHandler}
              >
                LOGIN
              </Button>
            </TabContainer>
          )}
          {this.state.value === 1 && (
            <TabContainer>
            <FormControl required>
              <InputLabel>First Name</InputLabel>
              <Input
                id="contactNo"
                type="text"
                value={this.state.firstName}
                onChange={this.firstNameChangeHandler}
              />
              <FormHelperText className={this.state.firstNameRequired}>
                <span className="red">required</span>
              </FormHelperText>
            </FormControl>
            <br />
            <br />
              <FormControl>
                <InputLabel>Last Name</InputLabel>
                <Input
                  id="lastName"
                  type="text"
                  value={this.state.lastName}
                  onChange={this.lastNameChangeHandler}
                />
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel>Email</InputLabel>
                <Input
                  id="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.emailChangeHandler}
                />
                <FormHelperText className={this.state.emailRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  type="password"
                  value={this.state.signupPassword}
                  onChange={this.signupPasswordChangeHandler}
                />
                <FormHelperText className={this.state.signupPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel>Contact No.</InputLabel>
                <Input
                  id="contactNo"
                  type="text"
                  value={this.state.signupcontactNo}
                  onChange={this.signupcontactNoChangeHandler}
                />
                <FormHelperText className={this.state.signupcontactNoRequired}>
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={this.signupClickHandler}
              >
                SIGNUP
              </Button>
            </TabContainer>
          )}
        </Modal>
      </div>
    );
  }
}

export default Header;