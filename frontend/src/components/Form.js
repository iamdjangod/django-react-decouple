import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    email: "",
    age: 0
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, age } = this.state;
    const entry = { name, email, age };
    const conf = {
      method: "post",
      body: JSON.stringify(entry),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
  };
  render() {
    const { name, email, age } = this.state;
    return (
      <div className="column">
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Age</label>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                name="age"
                onChange={this.handleChange}
                value={age}
                required
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-info">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Form;