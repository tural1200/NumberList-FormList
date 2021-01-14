import React, { Component } from "react";
import "./css/style.css";

class FormList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      gender: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      gender: "",
      about: "",
      birthday: "",
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="box">
          <label htmlFor="firstname">Firstname:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="firstname"
            id="firstname"
            value={this.state.firstname}
          />
        </div>
        <div className="box">
          <label htmlFor="lastname">Lastname:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="lastname"
            id="lastname"
            value={this.state.lastname}
          />
        </div>
        <div className="box">
          <label htmlFor="username">Username:</label>
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            id="username"
            value={this.state.username}
          />
        </div>
        <div className="box">
          <label htmlFor="password">Password:</label>
          <input
            onChange={this.handleChange}
            type="password"
            name="password"
            id="password"
            value={this.state.password}
          />
        </div>
        <div className="box">
          <label htmlFor="username">Email:</label>
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            id="email"
            value={this.state.email}
          />
        </div>
        <div className="box">
          <label htmlFor="username">Gender:</label>
          <select name="gender" id="gender" onChange={this.handleChange}>
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="box">
          <label htmlFor="date">Your birthday:</label>
          <input
            onChange={this.handleChange}
            type="date"
            id="birthday"
            name="birthday"
            value={this.state.birthday}
          />
        </div>
        <div className="box">
          <label htmlFor="about">About you</label>
          <textarea
            onChange={this.handleChange}
            name="about"
            id="about"
            value={this.state.about}
          />
        </div>
        <div className='box'>
            <label>I have read and agreed with <a href='#'>the terms and conditions</a>.</label>
            <input
            type='checkbox'
            required /> 
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default FormList;
