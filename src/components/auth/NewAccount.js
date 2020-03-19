import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    repeat: ""
  });

  const { name, email, password, repeat } = user;

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();

    // validar que no haya campos vacios

    //pasarlo al action (?)
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name..."
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email..."
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Your Password..."
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="repeat">Repeat Password</label>
            <input
              type="password"
              id="repeat"
              name="repeat"
              placeholder="Your Password..."
              value={repeat}
              onChange={handleChange}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
