import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse neque
          ratione deleniti et ullam porro veniam, at, mollitia, assumenda eaque
          blanditiis obcaecati voluptas! Laborum odit possimus, recusandae
          libero inventore rem!
        </p>
        <Link to="/signup">
        <Button
          style={{
            background: "red",
            width: "22%",
            height: "50px",
            margin: "20px",
            borderRadius: "6px",
            color: "white",
          }}
        >
          Get Started
        </Button>
      </Link>
      <Link to="/contacts">
        <Button
          style={{
            background: "white",
            width: "22%",
            height: "50px",
            margin: "20px",
            borderRadius: "6px",
            color: "blue",
          }}
        >
          Contact Us
        </Button>
      </Link>
      </div>
    );
  }
}

export default Home;
