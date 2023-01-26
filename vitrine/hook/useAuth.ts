import axios from 'axios';
import { useState } from 'react';
const apiUser = "http://localhost:8000/api/.user/user";

type User = {
  id: number;
  email: string;
  "roles": [];
}
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState<User>(null);
  let token = null;

  if (typeof window !== "undefined") {
    token = localStorage.getItem('token');
  }

   axios.get(apiUser, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(res => {
    setUser(res.data);
    if (user){
      setIsAuthenticated(true);
      setIsAdmin(user.roles.includes('ROLE_ADMIN'));
    }
  })

  return {
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin,
    user: user,
  }
}
export default useAuth;