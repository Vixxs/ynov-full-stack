import axios from 'axios';
import React, { useState } from 'react';
const api = "http://localhost:8000/api/.user/user";
const [isAuthenticated, setIsAuthenticated] = useState(false);
const useAuth = () => {
  const token = window.localStorage.getItem('token');
  let role;

  axios.get(api, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    role = res.data.role;
    setIsAuthenticated(true);
  }).catch(err => {
    setIsAuthenticated(false);
  })

  return {
    isAuthenticated: isAuthenticated,
    role: role
  }
}
export default useAuth;