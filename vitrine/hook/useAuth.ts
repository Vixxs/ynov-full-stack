import axios from 'axios';
import React, { useState } from 'react';
const api = "http://localhost:8000/api/.user/user";
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  if (typeof window === "undefined") return null;
  const token = localStorage.getItem('token');
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