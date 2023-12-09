import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css'
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert('Please enter an email address');
      return;
    }
    axios.post('https://65746764f941bda3f2afb4de.mockapi.io/userinfo/usersData', { email, password })
      .then(response => {
        console.log('Login Success:', response.data);
        navigate('/home'); 
      })
      .catch(error => console.error('Login error:', error));
  };
  
    return (
      <div className='login-container'>
      <img src="./src/assets/01newlogo-react.png" alt="Logo" className="login-logo" />
     
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='login-button'>Login</button>
      </form>
      </div>
    );
  }
  
  export default Login;