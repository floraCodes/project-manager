import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

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

    // password min 3 char

    // password === repeat

    //pasarlo al action (?)
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
