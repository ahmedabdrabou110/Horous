import React, { useEffect, useState } from 'react'
import "./Signup.css";
import { inputs } from '../UI/Utilits/constants';
import FormInput from './FormInput';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {
    const api = "http://aacd-197-61-63-116.ngrok-free.app";
    const [values, setValues] = useState({
    username: "",
    name:"",
    email: "",
    password: "",
    password_confirmation: "",
  });
  
  const fetchData = async () =>{
    // await fetch(`http://${api}/users/register/`, {
    //     method:"POST",
    //     mode: 'no-cors',
    //     headers: {},

    //     body:JSON.stringify({
    //         name:values.name ,
    //         username:values.username,
    //         email:values.name ,
    //         password:values.password ,
    //         password_confirmation:values.password_confirmation
    //     })
    // });
    await fetch(`${api}/users/register/`, {
            method: 'POST',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': api
            },
            body: JSON.stringify({
                email: values.email,
                name: values.name,
                password: values.password,
                username: values.username,
                password_confirmation: values.password_confirmation
            }),
        }).then((value)=>{
            console.log(value)
        }).catch(error => console.log(error))

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
      name: "name",
      type: "text",
      placeholder: "name",
      errorMessage:
        "name should be 3-16 characters and shouldn't include any special character!",
      label: "Enter a Name",
      pattern: "^[A-Za-z]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*)[a-zA-Z0-{5,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "password_confirmation",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    
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
            <p>Already Have an Account ? </p>
        <Link to="/signin">Login</Link>
        </div>
      </form>
    </div>
   );
}

export default Signup