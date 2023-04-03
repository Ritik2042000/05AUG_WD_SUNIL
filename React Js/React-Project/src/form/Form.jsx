import React, { useState } from "react";
import './Form.css'
import { Link, useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
// import Hooks from "..CustomHooks/CustomHooks"
import Slidenav from '../Admin/Slidenav';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Form() {
  const [form, setForm] = useState({});
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const validation = () => {
    fetch(`https://justjayapi.000webhostapp.com/login? username=${form.username} & 
      password=${form.password}`).then((res) => res.json()).then((response) => {
      console.log(response.Data)
      if (response.Code == 1) {
        alert('sucess')
        setCookies('userid', response.Data[0].id)
        setCookies('username', response.Data[0].username)
        if (response.Data[0].role_id == 1) {
          navigate('/Admin')
        } else {
          navigate('/')
        }
      } else {
        alert('invalid username or password')
      }
    })}


    
  return (
    <div className="main">
      <p className="sign" >
        Sign in
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Username" onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }} name='username' />
        <input className="password" type="password" placeholder="Password" onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }} name='password' />
        <Link className="submit anchor" onClick={validation} >
          Sign in
        </Link>
        <p className="forgot" >
          <Link to='/Register'>Create New Account</Link>
          {JSON.stringify(form)}
          {/* {cookies} */}
        </p>
      </form>
     
    </div >
  );
}

export default Form;