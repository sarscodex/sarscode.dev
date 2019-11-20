import React, { Component } from "react";
import Input from "../components/Input";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleInputChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <form method="POST" data-netlify="true" className="content">
        <Input
          name="name"
          placeholder="Your Name"
          isRequired={true}
          value={name}
          onChange={this.handleInputChange.bind(this)}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email Address"
          isRequired={true}
          value={email}
          onChange={this.handleInputChange.bind(this)}
        />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="5"
          placeholder="Your message"
          value={message}
          onChange={this.handleInputChange.bind(this)}
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default ContactForm;
