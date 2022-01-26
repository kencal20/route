

import { Form } from "react-bootstrap";
import '../Main_styles.css'



const Login = () => {
    return (
        
            
      <>
      <div>
        <div className="App">
            <h1>Login</h1>
          <Form >

            <div className="Username">
              <label>Username</label>
              <input
                type="text"
                placeholder="username"
                required
             
              />
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
          </Form>
        </div>
        </div>
        </>
    );
}

export default Login;

