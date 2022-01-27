import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import "../Main_styles.css";

const Login = () => {
  return (
    <>
      <div>
        <div className="App">
          <h1>Login</h1>
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
              login
            </Button>
            <p>New Here?</p>
            <Link to="/signup">
              <p>Signup</p>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
