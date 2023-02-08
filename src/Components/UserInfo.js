import React, { Component } from "react";
import "../CSS/UserInfo.css";

class UserInfo extends Component {
  state = {
    name: "",
    dob: "",
    contactNumber: "",
    email: "",
    aboutSelf: "",
    error: {
      nameError: "",
      dobError: "",
      emailError: "",
      contactNumberError: "",
      aboutError: "",
    },
    formValid: false,
  };

  handleChange = (e) => {
    //event object
    //console.log(e);
    //console.log(e.target.id);
    //console.log(e.target.value);

    // this is referring to UserInfo
    if (e.target.id == "name") {
      this.validateName(e.target.value);
    } else if (e.target.id == "dob") {
      this.validateDob(e.target.value);
    } else if (e.target.id == "contactNumber") {
      this.validateContactNumber(e.target.value);
    } else if (e.target.id == "email") {
      this.validateEmail(e.target.value);
    }
    else if (e.target.id == "aboutSelf") {
      this.validateAbout(e.target.value);
    }
    // this.setState({
    //   [e.target.id]: e.target.value,
    // });
  };

  validateName = (name) => {
    let nameError = this.state.error.nameError;
    let formValid = this.state.formValid;
    let pattern = /^[A-Za-z\s]*$/;

    if (name.trim() == "") {
      nameError = "Name field is required";
      formValid = false;
    } else if (name.trim().length < 3 || !pattern.test(name)) {
      nameError = "This is invalid Name";
      formValid = false;
    } else {
      nameError = "";
      formValid = true;
    }

    //spread operator (...)
    this.setState({
      name,
      formValid,
      error: { ...this.state.error, nameError },
    });

    return formValid;
  };

  validateDob = (dob) => {
    let dobError = this.state.error.dobError;
    let formValid = this.state.formValid;
    let pattern = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

    if (dob.trim() == "") {
      dobError = "Date of Birth is required";
      formValid = false;
    } else if (!pattern.test(dob)) {
      dobError = "Invalid Date";
      formValid = false;
    } else {
      dobError = "";
      formValid = true;
    }

    this.setState({
      dob,
      formValid,
      error: { ...this.state.error, dobError },
    });

    return formValid;
  };

  validateContactNumber = (contactNumber) => {
    let contactNumberError = this.state.error.contactNumberError;
    let formValid = this.state.formValid;
    let pattern = /^[0-9]*$/;

    if (contactNumber.trim() == "") {
      contactNumberError = "This is required";
      formValid = false;
    } else if (!pattern.test(contactNumber)) {
      contactNumberError = "This is invalid";
      formValid = false;
    } else {
      contactNumberError = "";
      formValid = true;
    }

    this.setState({
      contactNumber,
      formValid,
      error: { ...this.state.error, contactNumberError },
    });

    return formValid;
  };

  validateEmail = (email) => {
    let emailError = this.state.error.emailError;
    let formValid = this.state.formValid;

    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //regex
    if (!pattern.test(email)) {
      emailError = "Please enter valid email";
      formValid = false;
    } else {
      emailError = "";
      formValid = true;
    }

    this.setState({
      email,
      formValid,
      error: { ...this.state.error, emailError },
    });

    return formValid;
  };


  validateAbout = (aboutSelf) => {
    let aboutError = this.state.error.aboutError;
    let formValid = this.state.formValid;
    

    if (aboutSelf.trim() == "") {
      aboutError = "Tell me about  yourself field is required";
      formValid = false;
    }  else {
      aboutError = "";
      formValid = true;
    }

    //spread operator (...)
    this.setState({
      aboutSelf,
      formValid,
      error: { ...this.state.error, aboutError },
    });

    return formValid;
  };




  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.validateName(this.state.name) &&
      this.validateContactNumber(this.state.contactNumber) &&
      this.validateEmail(this.state.email)
    ) {
      alert("Form is submitted");

      this.props.userInfo(this.state);

        this.setState({
        name: "",
        dob : "",
        email: "",
        contactNumber: "",
        aboutSelf: ""
      }); 
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Please enter name"
          id="name"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <p style={{ color: "red", fontSize: "16px" }}>
          {this.state.error.nameError}
        </p>

        <label>Date Of Birth : </label>
        <input
          type="date"
          placeholder="Please enter your date of birth"
          id="dob"
          onChange={this.handleChange}
          value={this.state.dob}
          max={new Date().toISOString().split("T")[0]}
        />
        <p className="error-message">{this.state.error.dobError}</p>

        <label>Email Address : </label>
        <input
          type="email"
          placeholder="Please enter email"
          id="email"
          onChange={this.handleChange}
          value={this.state.email}
        />
        <p id="error">{this.state.error.emailError}</p>

        <label>Contact Number : </label>
        <input
          type="number"
          placeholder="Please enter contact Number"
          id="contactNumber"
          onChange={this.handleChange}
          value={this.state.contactNumber}
        />
        <p className="error-message">{this.state.error.contactNumberError}</p>

        <label>Tell me about yourself : </label>
        <textarea
          type="text"
          placeholder="Enter About yourself"
          id="aboutSelf"
          onChange={this.handleChange}
          value={this.state.aboutSelf}
        />

        <p className="error-message">{this.state.error.aboutError}</p>


        <button>Submit</button>
      </form>
    );
  }
}

export default UserInfo;
