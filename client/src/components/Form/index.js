import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    country: "",
    currency: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    // const { name, value } = event.target;
    const name = event.target.name;
    const value = event.target.value;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`You are in ${this.state.country} ${this.state.currency}`);
    this.setState({
      country: "",
      currency: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          You are in {this.state.country} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.country}
            name="country"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Country"
          />
          <article>${this.state.currency}</article>
          <input
            value={this.state.currency}
            name="currency"
            onChange={this.handleInputChange}
            min="1.00"
            step="0.01"
            max="2500"
            type="number"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
