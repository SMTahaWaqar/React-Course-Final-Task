import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
const Login = () => {
    const [formValue, SetFormValue] = useState({
      email : "",
      password: ""
    })

    const [loginSuccess, setLoginSuccess] = useState();

    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
      const {name, value} = e.target;
      SetFormValue({...formValue, [name]:value});
      // console.log(formValue);
    }

    const handleSubmit =async (e) => {
      e.preventDefault();
      console.log(formValue);
      axios.post("http://localhost:8080/login", formValue)
      .then(res => {
        console.log(res.data.success)
        setLoginSuccess(res.data.success)
      })
      .catch(err => console.error(err));
      if (loginSuccess){
        setShowForm(false);
      }
      else {
        alert("Incorrect Credentials")
        setShowForm(true);
      }
    }

  if (showForm) {
  return (
    <Container fluid className="my-4">
      <h1 className="text-center">Login Account</h1>
       <form onSubmit={handleSubmit} className="d-flex justify-content-center align-items-center my-5" style={{flexDirection: "column", border: '2px solid black'}}>
         <label htmlFor="email" className="my-4">
           <h4>Email</h4>
           <input
            style={{display: 'block'}}
            type="email"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password" className="my-4">
          <h4>Password</h4>
          <input
           style={{display: 'block'}}
            type="password"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </Container>


    // <div>
    //   <h1>Login Account</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="email">
    //       Email
    //       <input
    //         type="email"
    //         name="email"
    //         value={formValue.email}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label htmlFor="password">
    //       Password
    //       <input
    //         type="password"
    //         name="password"
    //         value={formValue.password}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
  }
  {
    return(
      <Container>
        <h1 className="text-center">Login Successful!</h1>
      </Container>
    )
  }
};
export default Login;