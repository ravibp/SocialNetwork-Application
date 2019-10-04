import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';

const Register = props => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleOnSubmit = async () => {
    if (password !== password2) {
      console.log("pass dont match")
    }
    else {
      const newUser = {
        name: '',
        email: '',
        password: '',
      }
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        }
        const body = JSON.stringify(newUser)
        const res = await axios.post('/api/users', body, config)
      } catch (err) {
        console.log("error occured", err.response.data);
      }
    }

  }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            required
            onChange={e => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            required
            onChange={e => handleOnChange(e)} />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
                      Gravatar email
            </small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            required
            value={password}
            onChange={e => handleOnChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            required
            value={password2}
            onChange={e => handleOnChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  )
}

Register.propTypes = {

}

export default Register;
