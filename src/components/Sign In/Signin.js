import React, { useState } from 'react'
import "./Signup.css";
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
const Signin = () => {
  const api = "aacd-197-61-63-116.ngrok-free.app";
    const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const login = ()=>{
    fetch(`http://${api}/auth/jwt/create/` , {
      method:"POST",
      mode:"no-cors",
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':`https://${api}`
      },
      body:JSON.stringify({
      username:values.username , 
      password:values.password
    })

    }).then(res =>console.log(res)).catch(error => console.log(error))
  }
   const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*)[a-zA-Z0-{5,20}$`,
      required: true,
    },
    
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    login()
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Horous</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className='signup_btn'>Submit</button>
      <div className='have_account'>
        <p>Create an Account ? </p>
        <Link to="/signup">Sign up</Link>
      </div>
      </form>

    </div>
  )
}

export default Signin