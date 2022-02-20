import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../Main_styles.css";

const Signup = () => {
  return (
    <>
      <div className="App">
        <h1>Signup</h1>
        <Form>
          <div className="Username">
            <label>Username</label>
            <input type="text" placeholder="username" required />
          </div>
          <div className="Password">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              name="Password"
              required
            />
          </div>
          <Button
            type="submit"
            style={{
              background: "dodgerblue",
              width: "10%",
              height: "30px",
              margin: "20px",
              border: ["1px", "dodgerblue", "solid"],
              borderRadius: "6px",
              color: "white",
            }}
          >
            Signup
          </Button>
          <p>Already a member here?</p>
          <Link to="/login">
            <p>Login</p>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Signup;
