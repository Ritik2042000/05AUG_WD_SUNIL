import React, { useState } from "react";
import './Form.css'
import { Link } from 'react-router-dom'
/* eslint-disable jsx-a11y/anchor-is-valid */

function Form() {
  const [form, setForm] = useState({})

  const validation = () => {
    fetch(`https://justjayapi.000webhostapp.com/login? username=${form.username} & password=${form.password}`).then((res) => res.json()).
    then((response) => { console.log(response); })
  }
  return (
    <div className="main">
      <p className="sign" >
        Sign in
      </p>
      <form className="form1">
        <input className="username"  type="text" placeholder="Username" onChange={(e) => {setForm({...form,[e.target.name]:e.target.value})}} name='username'/>
        <input className="password" type="password" placeholder="Password" onChange={(e) => {setForm({...form,[e.target.name]:e.target.value})}} name='password'/>
        <Link className="submit anchor" onClick={validation()} >
          Sign in
        </Link>
        <p className="forgot" >
          <Link to='/Register'>Create New Account</Link>
          { JSON.stringify(form)}
        </p>
      </form>
    </div >

  );
}

export default Form;