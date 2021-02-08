import "./Header.css";
import React, { Component } from "react";
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
import validator from "validator";

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
  height: 35,
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
      invalidContactNo: "dispNone",
      password: "",
      passwordRequired: "dispNone",
      unregisteredContactNo: "dispNone",
      invalidCredentials: "dispNone",
      firstName: "",
      firstNameRequired: "dispNone",
      lastName: "",
      email: "",
      emailRequired: "dispNone",
      inValidEmail: "dispNone",
      signupPassword: "",
      signupPasswordRequired: "dispNone",
      weakPassword: "dispNone",
      signupcontactNo: "",
      signupcontactNoRequired: "dispNone",
      inValidsignupcontactNo: "dispNone",
      registeredContactNo: "dispNone"
    };
  }

  openModalHandler = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModalHandler = () => {
    this.setState({ modalIsOpen: false });
    this.setState({ contactNumber: "" });
    this.setState({ contactNoRequired: "dispNone" });
    this.setState({ invalidContactNo: "dispNone" });
    this.setState({ password: "" });
    this.setState({ passwordRequired: "dispNone" });
    this.setState({unregisteredContactNo: "dispNone"});
    this.setState({invalidCredentials: "dispNone"});
    this.setState({ firstName: "" });
    this.setState({ firstNameRequired: "dispNone" });
    this.setState({ lastName: "" });
    this.setState({ email: "" });
    this.setState({ emailRequired: "dispNone" });
    this.setState({ inValidEmail: "dispNone" });
    this.setState({ signupPassword: "" });
    this.setState({ signupPasswordRequired: "dispNone" });
    this.setState({ weakPassword: "dispNone" });
    this.setState({ signupcontactNo: "" });
    this.setState({ signupcontactNoRequired: "dispNone" });
    this.setState({ inValidsignupcontactNo: "dispNone" });
    this.setState({registeredContactNo: "dispNone"});
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
    //contact nmumber validation
    if (this.state.contactNumber.length > 0) {
      validator.isNumeric(this.state.contactNumber) &&
      this.state.contactNumber.length === 10
        ? this.setState({ invalidContactNo: "dispNone" })
        : this.setState({ invalidContactNo: "dispBlock" });
    }
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
    //input validation
    this.state.firstName.trim() === ""
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
    //email validation
    if (this.state.email.length > 0) {
      validator.isEmail(this.state.email)
        ? this.setState({ inValidEmail: "dispNone" })
        : this.setState({ inValidEmail: "dispBlock" });
    }
    //password validation
    if (this.state.signupPassword.length > 0) {
      let weakPassword = false;
      //check for length of atleast 8
      if (this.state.signupPassword.length < 8) weakPassword = true;
      //check for a lowercase character
      else if (!/[a-z]/.test(this.state.signupPassword)) weakPassword = true;
      //check for an uppercase character
      else if (!/[A-Z]/.test(this.state.signupPassword)) weakPassword = true;
      //check for a special character
      else if (!/[#@$%&*!^]/.test(this.state.signupPassword))
        weakPassword = true;
      //check for a numeric character
      else if (!/\d/.test(this.state.signupPassword)) weakPassword = true;

      weakPassword
        ? this.setState({ weakPassword: "dispBlock" })
        : this.setState({ weakPassword: "dispNone" });
    }
    //contact nmumber validation
    if (this.state.signupcontactNo.length > 0) {
      validator.isNumeric(this.state.signupcontactNo) &&
      this.state.signupcontactNo.length === 10
        ? this.setState({ inValidsignupcontactNo: "dispNone" })
        : this.setState({ inValidsignupcontactNo: "dispBlock" });
    }
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
                <FormHelperText className={this.state.invalidContactNo}>
                  <span className="red">Invalid Contact</span>
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
                <br />
                <FormHelperText className={this.state.unregisteredContactNo}>
                  <span className="red">This contact number has not been registered!</span>
                </FormHelperText>
                <FormHelperText className={this.state.invalidCredentials}>
                  <span className="red">Invalid Credentials</span>
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
                <FormHelperText className={this.state.inValidEmail}>
                  <span className="red">Invalid Email</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="signupPassword">Password</InputLabel>
                <Input
                  id="signupPassword"
                  type="password"
                  value={this.state.signupPassword}
                  onChange={this.signupPasswordChangeHandler}
                />
                <FormHelperText className={this.state.signupPasswordRequired}>
                  <span className="red">required</span>
                </FormHelperText>
                <FormHelperText className={this.state.weakPassword}>
                  <span className="red">
                    Password must contain at least one capital letter, one small
                    letter, one number, and one special character
                  </span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel>Contact No.</InputLabel>
                <Input
                  id="signupcontact"
                  type="text"
                  value={this.state.signupcontactNo}
                  onChange={this.signupcontactNoChangeHandler}
                />
                <FormHelperText className={this.state.signupcontactNoRequired}>
                  <span className="red">required</span>
                </FormHelperText>
                <FormHelperText className={this.state.inValidsignupcontactNo}>
                  <span className="red">
                    Contact No. must contain only numbers and must be 10 digits
                    long
                  </span>
                </FormHelperText>
                <br />
                <FormHelperText className={this.state.registeredContactNo}>
                  <span className="red">This contact number is already registered! Try other contact number.</span>
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
