import React, { useEffect, useState } from 'react';
import { useAuth } from '../Utils/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export const LoginPage = () => {
  const { user,handleUserLogin} = useAuth();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCredentials({...credentials,[name]: value})

  };

  return (
    <div className="auth--container">
      <div className="form--wrapper">
        <form onSubmit={(e) => {handleUserLogin(e,credentials)}}>
          <div className="field--wrapper">
            <center ><img src="LOGO.png" alt="" width={"500 vw"}/></center>
            <label>Email:</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email..."
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="field--wrapper">
            <label>Password:</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter password..."
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="field--wrapper">
            <input className="btn btn--lg btn--main" type="submit" value="Login" />
          </div>
        </form>
        <p>Don't have an account? Register <Link to="/register">here</Link></p>
      </div>
    </div>
  );
};
